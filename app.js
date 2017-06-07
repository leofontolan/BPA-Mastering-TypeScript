var app = new Vue({

    el: "#app",

    data: {

        title: "Contas a Pagar",

        bills: [
            {date_due: '20/08/2017', name: 'Conta de Luz', value: '78,99'},
            {date_due: '21/08/2017', name: 'Conta de Água', value: '123,99'},
            {date_due: '22/08/2017', name: 'Conta de Telefone', value: '124,99'},
            {date_due: '23/08/2017', name: 'Supermercado', value: '600,99'},
            {date_due: '24/08/2017', name: 'Cartão de Crédito', value: '1599,99'},
            {date_due: '25/08/2017', name: 'Empréstimo', value: '2500,99'},
            {date_due: '26/08/2017', name: 'Gasolina', value: '345,00'}
        ],
    },

});