'use strict';

window.billPayListComponent = Vue.extend({

    template: '\n\n        <style type="text/css">\n\n            .pago {\n                color: green;\n            }\n\n            .nao-pago {\n                color: red;\n            }\n\n        </style>\n\n\n\n\n        <table border="1" cellpadding="10">\n                <thead>\n                <tr>\n                    <td>#</td>\n                    <td>Vencimento</td>\n                    <td>Nome</td>\n                    <td>Valor</td>\n                    <td>Paga</td>\n                    <td>A\xE7\xF5es</td>\n                </tr>\n                </thead>\n                <tbody>\n                <tr v-for=" (index,o) in bills">\n                    <td>{{ index + 1 }}</td>\n                    <td>{{ o.date_due }}</td>\n                    <td>{{ o.name }}</td>\n                    <td>{{ o.value | currency \'R$ \'}}</td>\n                    <td class="minha-classe" :class="{\'pago\': o.done, \'nao-pago\': !o.done}">\n                        {{ o.done | doneLabel }}\n                    </td>\n                    <td>\n                        <a v-link="{name: \'bill-pay.update\', params: {index: index}}">Editar</a> |\n                        <a href="#" @click.prevent="deleteBill(o)">Excluir</a>\n                    </td>\n                </tr>\n                </tbody>\n        </table>\n    ',

    data: function data() {

        return {
            bills: this.$root.$children[0].billsPay

        };
    },

    methods: {

        deleteBill: function deleteBill(bill) {
            if (confirm('Desenja exluir esta conta?')) {
                this.$root.$children[0].billsPay.$remove(bill);
            }
        }
    }
});