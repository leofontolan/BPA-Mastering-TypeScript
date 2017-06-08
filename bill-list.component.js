window.billListComponent = Vue.extend({

    template: `

        <style type="text/css">

            .pago {
                color: green;
            }

            .nao-pago {
                color: red;
            }

        </style>




        <table border="1" cellpadding="10">
                <thead>
                <tr>
                    <td>#</td>
                    <td>Vencimento</td>
                    <td>Nome</td>
                    <td>Valor</td>
                    <td>Paga</td>
                    <td>Ações</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for=" (index,o) in bills">
                    <td>{{ index + 1 }}</td>
                    <td>{{ o.date_due }}</td>
                    <td>{{ o.name }}</td>
                    <td>{{ o.value | currency 'R$ '}}</td>
                    <td class="minha-classe" :class="{'pago': o.done, 'nao-pago': !o.done}">
                        {{ o.done | doneLabel }}
                    </td>
                    <td>
                        <a href="#" @click.prevent="loadBill(o)">Editar</a> |
                        <a href="#" @click.prevent="deleteBill(o)">Excluir</a>
                    </td>
                </tr>
                </tbody>
        </table>
    `,

    data: function () {

        return {

            bills: [
                {date_due: '20/08/2017', name: 'Conta de Luz', value: '78,99', done: true},
                {date_due: '21/08/2017', name: 'Conta de Água', value: '123,99', done: false},
                {date_due: '22/08/2017', name: 'Conta de Telefone', value: '124,99', done: false},
                {date_due: '23/08/2017', name: 'Supermercado', value: '600,99', done: false},
                {date_due: '24/08/2017', name: 'Cartão de Crédito', value: '1599,99', done: false},
                {date_due: '25/08/2017', name: 'Empréstimo', value: '2500,99', done: false},
                {date_due: '26/08/2017', name: 'Gasolina', value: '345,00', done: false}
            ],
        }
    },

    methods: {

        loadBill: function (bill) {
            this.$dispatch('change-bill', bill);
            this.$dispatch('change-activatedview', 1);
            this.$dispatch('change-formtype', 'update');
        },

        deleteBill: function (bill) {
            if (confirm('Desenja exluir esta conta?')) {
                this.bills.$remove(bill);
            }
        }
    },

    events: {

        'new-bill': function (bill) {
            this.bills.push(bill);
        }
    }
});
