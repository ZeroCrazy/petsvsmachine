import isAuthenticatedGuard from '../guards';

export default [

    {
        path: '/feed',
        beforeEnter: [ isAuthenticatedGuard ],
        name: 'feed',
        redirect: { name: 'feedMain' },
        component: () => import('../layouts/Feed.vue'),
        children: [
            {
                path: 'farm',
                name: 'feedMain',
                component: () => import('../views/Farm.vue'),
            },
            {
                path: 'shop',
                name: 'feedShop',
                component: () => import('../views/Shop.vue'),
            },
            {
                path: 'inventory',
                name: 'feedInventory',
                component: () => import('../views/Inventory.vue'),
            },
            {
                path: 'lands',
                name: 'feedLands',
                component: () => import('../views/Lands.vue'),
            },
            {
                path: 'details/:id',
                name: 'feedDetails',
                component: () => import('../views/Details.vue'),
            }
        ]
    },


]