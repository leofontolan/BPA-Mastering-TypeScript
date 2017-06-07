Vue.config.devtools = true;

Vue.filter('doneLabel', function (value) {

    if (value == 0) {
        return 'Não Paga';

    } else {
        return 'Paga';

    }

});

Vue.filter('statusGeneral', function (value) {

    if (value === false) {
        return 'Nenhuma Conta Cadastrada';
    }

    if (!value) {
        return 'Nenhuma Conta a Pagar';

    } else {
        return 'Existem ' + value + ' contas a serem pagas';
    }


});

var app = new Vue({

    el: "#app",

    data: {

        title: "Contas a Pagar",

        menus: [

            {id: 0, name: "Listar Contar"},
            {id: 1, name: "Criar Conta"}
        ],

        activatedView: 1,

        formType: 'insert',

        bill: {

            date_due: '',
            name: '',
            value: 0,
            done: false
        },

        name: [
            'Conta de Luz',
            'Conta de Água',
            'Conta de Telefone',
            'Supermecado',
            'Cartão de Crédito',
            'Empréstimo',
            'Gasolina',
        ],

        bills: [
            {date_due: '20/08/2017', name: 'Conta de Luz', value: '78,99', done: true},
            {date_due: '21/08/2017', name: 'Conta de Água', value: '123,99', done: false},
            {date_due: '22/08/2017', name: 'Conta de Telefone', value: '124,99', done: false},
            {date_due: '23/08/2017', name: 'Supermercado', value: '600,99', done: false},
            {date_due: '24/08/2017', name: 'Cartão de Crédito', value: '1599,99', done: false},
            {date_due: '25/08/2017', name: 'Empréstimo', value: '2500,99', done: false},
            {date_due: '26/08/2017', name: 'Gasolina', value: '345,00', done: false}
        ],
    },

    computed: {

        status: function () {

            if (!this.bills.length) {
                return false;
            }


            var count = 0;

            for (var i in this.bills) {
                if (!this.bills[i].done) {
                    count++;
                }
            }

            return count;
        }
    },

    methods: {

        showView: function (id) {
            this.activatedView = id;
            if (id == 1) {
                this.formType = 'insert';
            }
        },

        submit: function () {
            if (this.formType == 'insert') {
                this.bills.push(this.bill);

            }

            this.bill = {

                date_due: '',
                name: '',
                value: 0,
                done: false
            },

                this.activatedView = 0;

        },

        loadBill: function (bill) {
            this.bill = bill;
            this.activatedView = 1;
            this.formType = 'update';
        },

        deleteBill: function (bill) {
            if (confirm('Desenja exluir esta conta?')) {
                this.bills.$remove(bill);
            }
        }
    }

});
