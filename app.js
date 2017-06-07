var app = new Vue({

    el: "#app",

    data: {

        title: "Contas a Pagar",

        bills: [
            {date_due: '20/08/2017', name: 'Conta de Luz', value: '78,99', done: 1},
            {date_due: '21/08/2017', name: 'Conta de Água', value: '123,99', done: 0},
            {date_due: '22/08/2017', name: 'Conta de Telefone', value: '124,99', done: 0},
            {date_due: '23/08/2017', name: 'Supermercado', value: '600,99', done: 0},
            {date_due: '24/08/2017', name: 'Cartão de Crédito', value: '1599,99', done: 0},
            {date_due: '25/08/2017', name: 'Empréstimo', value: '2500,99', done: 0},
            {date_due: '26/08/2017', name: 'Gasolina', value: '345,00', done: 0}
        ],
    },

    computed: {

        status: function () {

            var count = 0;

            for (var i in this.bills) {
                if (!this.bills[i].done) {
                    count++;
                }
            }

            return !count ? "Nenhuma conta a pagar" : "Existem  " + count + " a serem pagas."
        }
    }

});