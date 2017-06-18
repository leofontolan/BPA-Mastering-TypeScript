Vue.config.devtools = true


Vue.filter('doneLabel', function (value) {

    if (value == 0) {
        return "Não Paga"

    } else {
        return "Paga"
    }
});

var app = new Vue({

    el: '#app',

    data: {
        title: 'Contas a Pagar',

        activatedView: 1,

        menus: [

            {id: 0, name: 'Listar Contas'},
            {id: 1, name: 'Criar Conta'},
        ],

        bills: [

            {date_due: '21/08/2017', name: 'Conta de Luz', value: '79,80', done: 1},
            {date_due: '22/08/2017', name: 'Conta de Água', value: '99,80', done: 0},
            {date_due: '23/08/2017', name: 'Conta de Telefone', value: '59,80', done: 0},
            {date_due: '24/08/2017', name: 'Supermercado', value: '639,80', done: 0},
            {date_due: '25/08/2017', name: 'Cartão de Crédito', value: '1478,80', done: 0},
            {date_due: '26/08/2017', name: 'Empréstimo', value: '2000,00', done: 0},
            {date_due: '27/08/2017', name: 'Gasolina', value: '130,60', done: 0},
        ],

        bill: {

            date_due: '',
            name: '',
            value: '',
            done: 0,
        },

        formType: 'insert',

        names: [

            'Conta de Luz',
            'Conta de Água',
            'Conta de Telefone',
            'Supermercado',
            'Cartão de Crédito',
            'Empréstimo',
            'Gasolina',
        ],
    },

    computed: {

        status: function () {

            count = 0;

            for (var i in this.bills) {

                if (!this.bills[i].done) {

                    count++;
                }
            }
            return !count ? "Nenhuma conta a pagar" : "Existem " + count + " a serem pagas";
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
            this.bills.push(this.bill);
            this.activatedView = 0;
        },

        loadBill: function (bill) {

            this.bill = bill;
            this.activatedView = 1;
            this.formType = 'update';
        }
    }
});