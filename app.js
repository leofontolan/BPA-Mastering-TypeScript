Vue.config.devtools = true


Vue.filter('doneLabel', function (value) {

    if(value == 0){
        return "Não Paga";
    }else{
        return "Paga";
    }

});


Vue.filter('statusGeneral', function (value) {

    if(value === false ){

        return 'Nenhuma conta cadastrada';
    }

    if(!value){

        return 'Nenhuma conta a pagar';

    }else{

        return 'Existem ' + value + ' contas a serem pagas';
    }
});

var app = new Vue({

    el: '#app',

    data: {
        title: 'Contas a Pagar',

        menus:[
            {id: 0, name: 'Contas a Pagar'},
            {id: 1, name: 'Criar Conta'},
        ],

        activatedView: 1,

        bill:{

            date_due: "",
            name: "",
            value: 0,
            done: false,
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

        bills: [

            { date_due: '20/07/2017', name: 'Conta de Luz', value: 97.65, done: true},
            { date_due: '21/07/2017', name: 'Conta de Água', value: 87.85, done: false},
            { date_due: '22/07/2017', name: 'Conta de Telefone', value: 79.95, done: false},
            { date_due: '23/07/2017', name: 'Supermercado', value: 458.65, done: false},
            { date_due: '24/07/2017', name: 'Cartão de Crédito', value: 234.15,done: false},
            { date_due: '25/07/2017', name: 'Empréstimo', value: 2300.85, done: false},
            { date_due: '26/07/2017', name: 'Gasolina', value: 350.15, done: false},

        ],
    },

    computed: {

        status: function () {

            if(!this.bills.length){
                return false;
            }

            var count = 0;

            for(var i in this.bills){

                if(!this.bills[i].done){
                    count ++;
                }
            };

            return count;
        }

    },

    methods:{

        showView: function (id) {

            this.activatedView = id;
            if(id == 1){
                this.formType = 'insert';
            }
        },
        
        submit: function () {

            if(this.formType == 'insert'){
                this.bills.push(this.bill);
            }

            this.bill = {

                date_due: "",
                name: "",
                value: 0,
                done: false,
            },


            this.activatedView = 0;
        },

        loadBill: function (bill) {

            this.formType = 'update';
            this.bill = bill;
            this.activatedView = 1

        },

        deleteBill: function (bill) {

            if(confirm("Deseja excluir essa conta?")){

                this.bills.$remove(bill);
            }
        }
    }

});