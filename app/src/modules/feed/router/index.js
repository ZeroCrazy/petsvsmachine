import isAuthenticatedGuard from '../guards';

export default [

    {
        path: '/feed',
        beforeEnter: [isAuthenticatedGuard],
        name: 'feed',
        redirect: { name: 'feedMain' },
        component: () => import('../layouts/Feed.vue'),
        children: [
            {
                path: 'farm',
                name: 'feedMain',
                meta: { title: 'Farm - PVM' },
                component: () => import('../views/Farm.vue'),
            },
            {
                path: 'shop',
                name: 'feedShop',
                meta: { title: 'Shop - PVM' },
                component: () => import('../views/Shop.vue'),
            },
            {
                path: 'inventory',
                name: 'feedInventory',
                meta: { title: 'Inventory - PVM' },
                component: () => import('../views/Inventory.vue'),
            },
            {
                path: 'lands',
                name: 'feedLands',
                meta: { title: 'Lands - PVM' },
                component: () => import('../views/Lands.vue'),
            },
            {
                path: 'details/:id',
                name: 'feedDetails',
                meta: { title: 'Details - PVM' },
                component: () => import('../views/Details.vue'),
            }
        ]
    },


]