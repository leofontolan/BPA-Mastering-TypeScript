Vue.config.devtools = true;

var router = new VueRouter();

var mainComponent = Vue.extend({

    components: {
        'bill-component': billComponent
    },
    template: '<bill-component></bill-component>',

    data: function () {
        return {
            billsPay: [
                {date_due: '20/08/2017', name: 'Conta de Luz', value: '78,99', done: true},
                {date_due: '21/08/2017', name: 'Conta de Água', value: '123,99', done: false},
                {date_due: '22/08/2017', name: 'Conta de Telefone', value: '124,99', done: false},
                {date_due: '23/08/2017', name: 'Supermercado', value: '600,99', done: false},
                {date_due: '24/08/2017', name: 'Cartão de Crédito', value: '1599,99', done: false},
                {date_due: '25/08/2017', name: 'Empréstimo', value: '2500,99', done: false},
                {date_due: '26/08/2017', name: 'Gasolina', value: '345,00', done: false}
            ],
        };
    }

});

router.map({

    '/bill-pays': {
        component: billPayComponent,

        subRoutes: {

            '/': {
                name: 'bill-pay.list',
                component: billPayListComponent
            },

            '/create': {
                name: 'bill-pay.create',
                component: billPayCreateComponent
            },

            '/:index/update': {
                name: 'bill-pay.update',
                component: billPayCreateComponent
            },

        }
    },

    'bill-receives':{
        name: 'bill-receive',
        component: billReceiveComponent
    },


    '*': {
        component: billPayListComponent
    }


});

router.start({

    components: {
        'main-component': mainComponent
    }
}, '#app');


router.redirect({
    '*': '/bills-pays'
});
