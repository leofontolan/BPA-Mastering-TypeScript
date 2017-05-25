Vue.filter('doneLabel', function (value) {

    if(value == 0){
        return "Não Paga";
    }else{
        return "Paga";
    }
});

Vue.filter('statusGeneral', function(value){

    if(value === false){
        return "Nenhuma conta cadastrada.";
    }

    if(!value){
        return "Nenhuma conta a pagar.";
    }else{
        return "Existem " + value + " contas a serem pagas.";
    }
});

var app = new Vue({

    el:"#app",

    data: {

        test : "",
        title: "CodeEducation | Contas a Pagar",

        menus: [
            { id: 0, name: "Listar Contas"},
            { id: 1, name: "Criar Conta"},
        ],

        activedView: 0,

        formType: 'insert',

        bill: {
            data_due: '',
            name: '',
            value: 0,
            done: false,
        },

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
            {date_due: '20/07/2017', name: 'Conta de Luz', value: 70.99, done: true},
            {date_due: '21/07/2017', name: 'Conta de Água', value: 55.98, done: false},
            {date_due: '22/07/2017', name: 'Conta de Telefone', value: 70.98, done: false},
            {date_due: '23/07/2017', name: 'Supermecado', value: 655.99, done: false},
            {date_due: '24/07/2017', name: 'Cartão de Crédito', value: 1500.99, done: false},
            {date_due: '25/07/2017', name: 'Empréstimo', value: 2030.98, done: false},
            {date_due: '26/07/2017', name: 'Gasolina', value: 390.98, done: false},
        ]
    },

    computed: {

        status: function () {

            if(!this.bills.length){
                return false;
            }

            var count = 0;
            for(var i in this.bills){

                if(!this.bills[i].done){
                    count++;
                }
            }

            return count;
        }
    },

    methods: {

        showView: function (id) {
            this.activedView = id;
            if( id == 1){
                this.formType = 'insert';
            }
        },

        submit: function () {

            if(this.formType == 'insert'){
                this.bills.push(this.bill);
            }

            this.bill =  {
                data_due: '',
                name: '',
                value: 0,
                false: 0,
            },
            this.activedView = 0;
        },

        loadBill: function (bill) {

          this.bill = bill;
          this.activedView = 1;
            this.formType = 'update';
        },

        deleteBill: function (index) {

            if(confirm('Deseja excluir esta conta?')){
                this.bills.splice(index, 1);
            }

        }

    }
});
