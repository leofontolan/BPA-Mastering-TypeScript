window.billPayComponent = Vue.extend({

    components: {

        'menu-component': billPayMenuComponent,

    },

    template: `

        <style type="text/css">

                .minha-classe {

                    background-color: burlywood;
                }

                .red {
                    color: red;
                }

                .green {
                    color: green;
                }

                .gray {
                    color: gray;
                }

        </style>

            <h1>{{ title }}</h1>

        <h3 :class="{'gray': status === false, 'green': status === 0 , 'red' :status > 0 }">{{ status | statusGeneral }}</h3>

            <menu-component></menu-component>
            
            <router-view></router-view>
    `,

    data: function () {

        return {

            title: "Contas a Pagar"
        }

    },

    computed: {

        status: function () {
            let bills = this.$root.$children[0].billsPay;
            if (!bills.length) {
                return false;
            }


            let count = 0;

            for (let i in bills) {
                if (!bills[i].done) {
                    count++;
                }
            }

            return count;
        }
    },

});