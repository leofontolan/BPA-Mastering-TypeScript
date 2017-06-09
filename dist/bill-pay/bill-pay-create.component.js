'use strict';

window.billPayCreateComponent = Vue.extend({

    template: '\n    <form name="form" @submit.prevent="submit">\n        <label>Vencimento:</label>\n        <input type="text" v-model="bill.date_due">\n        <br><br>\n        <label>Nome:</label>\n        <select v-model="bill.name">\n            <option v-for=" o in name" :value=" o ">{{ o }}</option>\n        </select>\n        <br><br>\n        <label>Valor:</label>\n        <input type="text" v-model="bill.value">\n        <br><br>\n        <label>Pago:</label>\n        <input type="checkbox" v-model="bill.done">\n        <br><br>\n        <input type="submit" value="Enviar">\n    </form>\n\n    ',

    data: function data() {

        return {

            formType: 'insert',

            name: ['Conta de Luz', 'Conta de Água', 'Conta de Telefone', 'Supermecado', 'Cartão de Crédito', 'Empréstimo', 'Gasolina'],

            bill: {

                date_due: '',
                name: '',
                value: 0,
                done: false

            }

        };
    },

    created: function created() {
        if (this.$route.name == 'bill.update') {
            this.formType = 'update';
            this.getBill(this.$route.params.index);
            return;
        }
    },

    methods: {

        submit: function submit() {
            if (this.formType == 'insert') {
                this.$root.$children[0].billsPay.push(this.bill);
            }

            this.bill = {

                date_due: '',
                name: '',
                value: 0,
                done: false
            };
            this.$router.go({ name: 'bill-pay.list' });
        },

        getBill: function getBill(index) {
            var bills = this.$root.$children[0].billsPay;
            this.bill = bills[index];
        }

    }

});