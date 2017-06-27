Vue.config.devtools = true


Vue.filter('doneLabel', function (value) {

    if (value == 0) {
        return "Não Paga";
    } else {
        return "Paga";
    }

});


Vue.filter('statusGeneral', function (value) {

    if (value === false) {

        return 'Nenhuma conta cadastrada';
    }

    if (!value) {

        return 'Nenhuma conta a pagar';

    } else {

        return 'Existem ' + value + ' contas a serem pagas';
    }
});


//---------------------------------------------------------------------------- MENU COMPONENT

var menuComponent = Vue.extend({

    template: `
    
<nav>
    <ul>
        <li v-for=" o in menus">
            <a href="#" v-on:click.prevent="showView(o.id)"> {{ o.name }} </a>

        </li>
    </ul>
</nav>

    `,

    data: function () {

        return {

            menus: [
                {id: 0, name: 'Contas a Pagar'},
                {id: 1, name: 'Criar Conta'},
            ],
        }
    },

    methods: {

        showView: function (id) {

            this.$parent.activatedView = id;
            if (id == 1) {
                this.$parent.formType = 'insert';
            }
        },
    },
});

//---------------------------------------------------------------------------- BILL LIST COMPONENT

var billListComponent = Vue.extend({

    template: `


<style>

        .pago{

            color: green;
        }

        .nao-pago{

            color: red;
        }

</style>


<table border="1" cellpadding="10">
    <thead>
    <tr>
        <th>#</th>
        <th>Data</th>
        <th>Nome</th>
        <th>Valor</th>
        <th>Pago</th>
        <th>Ação</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for=" (index,o) in bills">
        <td> {{ index + 1 }}</td>
        <td> {{ o.date_due }}</td>
        <td> {{ o.name }}</td>
        <td> {{ o.value | currency " R$ " }}</td>
        <td class="minha-classe" v-bind:class="{'pago':o.done,'nao-pago':!o.done}"> {{ o.done | doneLabel }}</td>
        <td>
            <a href="#" v-on:click.prevent="loadBill(o)">Editar</a> |
            <a href="#" v-on:click.prevent="deleteBill(o)">Excluir</a> |
        </td>
    </tr>
    </tbody>
</table>

    `,

    data: function () {

        return {

            bills: [

                {date_due: '20/07/2017', name: 'Conta de Luz', value: 97.65, done: true},
                {date_due: '21/07/2017', name: 'Conta de Água', value: 87.85, done: false},
                {date_due: '22/07/2017', name: 'Conta de Telefone', value: 79.95, done: false},
                {date_due: '23/07/2017', name: 'Supermercado', value: 458.65, done: false},
                {date_due: '24/07/2017', name: 'Cartão de Crédito', value: 234.15, done: false},
                {date_due: '25/07/2017', name: 'Empréstimo', value: 2300.85, done: false},
                {date_due: '26/07/2017', name: 'Gasolina', value: 350.15, done: false},

            ],
        }

    },

    methods: {

        loadBill: function (bill) {

            this.$parent.formType = 'update';
            this.$parent.bill = bill;
            this.$parent.activatedView = 1

        },

        deleteBill: function (bill) {

            if (confirm("Deseja excluir essa conta?")) {

                this.bills.$remove(bill);
            }
        }

    },

});


//---------------------------------------------------------------------------- BILL CREATE COMPONENT


var billCreateComponent = Vue.extend({

    template: `
    
<form name="form" v-on:submit.prevent="submit">

    <lable>Data</lable>
    <input type="text" v-model="bill.date_due">
    <br><br>
    <lable>Nome</lable>
    <select v-model="bill.name">
        <option v-for=" o in names" v-bind:value="o">{{ o }}</option>
    </select>
    <br><br>
    <lable>Valor</lable>
    <input type="text" v-model="bill.value">
    <br><br>
    <label>Pago</label>
    <input type="checkbox" v-model="bill.done">
    <br><br>
    <input type="submit" value="Enviar">
</form>
    
    `,

    props: ['bill', 'formType'],

    data: function () {

        return {

            names: [

                'Conta de Luz',
                'Conta de Água',
                'Conta de Telefone',
                'Supermercado',
                'Cartão de Crédito',
                'Empréstimo',
                'Gasolina',
            ],
        }
    },

    methods: {

        submit: function () {

            if (this.formType == 'insert') {
                this.$parent.$refs.billListComponent.bills.push(this.bill);
            }

            this.bill = {

                date_due: "",
                name: "",
                value: 0,
                done: false,
            },


                this.$parent.activatedView = 0;
        },
    }

});


//---------------------------------------------------------------------------- APP COMPONENT
var appComponent = Vue.extend({

    components:{

        'menu-component': menuComponent,
        'bill-list-component': billListComponent,
        'bill-create-component': billCreateComponent,
    },

    template: `

 <style>

        .red{

            color: red;
        }

        .green{

            color: green;
        }


        .gray {

            color: gray;
        }

        .minha-classe {

            background: burlywood;
        }

    </style>
    
        <h1> {{ title }} </h1>
<h3 v-bind:class="{'gray': status === false, 'green': status === 0, 'red': status > 0}"> {{ status | statusGeneral }} </h3>



<menu-component></menu-component>


<div v-show="activatedView == 0">
    <bill-list-component v-ref:bill-list-component></bill-list-component>
</div>

<div v-show="activatedView == 1">

    <bill-create-component v-bind:bill.sync="bill" v-bind:form-type="formType"></bill-create-component>
    
</div>
    `,

    data: function () {

        return {

            title: 'Contas a Pagar',

            activatedView: 1,

            bill: {

                date_due: "",
                name: "",
                value: 0,
                done: false,
            },

            formType: 'insert',
        }
    },

    computed: {

        status: function () {

            var billListComponent = this.$refs.billListComponent;
            if (!billListComponent.bills.length) {
                return false;
            }

            var count = 0;

            for (var i in billListComponent.bills) {

                if (!billListComponent.bills[i].done) {
                    count++;
                }
            }
            ;

            return count;
        }

    },

});

Vue.component('app-component', appComponent);

var app = new Vue({

    el: '#app',

});