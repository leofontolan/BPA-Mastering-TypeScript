window.billPayMenuComponent = Vue.extend({

    template: `

     <nav>
            <ul>
                <li v-for=" o in menus">
                    <a v-link="{name: o.routeName}">{{ o.name }}</a>
                </li>
            </ul>
        </nav>

    `,

    data: function () {

        return {

            menus: [
                // {id: 0, name: "Listar Contar", url: '/bills'},
                // {id: 1, name: "Criar Conta", url: '/bill/create'}

                {id: 0, name: "Listar Conta", routeName: 'bill.list'},
                {id: 1, name: "Criar Conta", routeName: 'bill.create'}
            ],

        }
    },
});