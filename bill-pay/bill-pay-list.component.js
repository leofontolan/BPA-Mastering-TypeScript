window.billPayListComponent = Vue.extend({

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
                        <a v-link="{name: 'bill-pay.update', params: {index: index}}">Editar</a> |
                        <a href="#" @click.prevent="deleteBill(o)">Excluir</a>
                    </td>
                </tr>
                </tbody>
        </table>
    `,

    data: function () {

        return {
            bills: this.$root.$children[0].billsPay

        }
    },

    methods: {


        deleteBill: function (bill) {
            if (confirm('Desenja exluir esta conta?')) {
                this.$root.$children[0].billsPay.$remove(bill);
            }
        }
    },
});
