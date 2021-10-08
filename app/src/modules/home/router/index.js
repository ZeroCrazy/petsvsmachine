
export default [

    {
        path: '/',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue')
    },
    {
        path: '/marketplace',
        name: 'marketplace',
        component: () => import('../views/Marketplace.vue')
    },
    {
        path: '/new-offering',
        name: 'newOffering',
        component: () => import('../views/NewOffering.vue')
    },
    {
        path: '/exchange',
        name: 'exchange',
        meta: { title: 'Exchange - PVM' },
        component: () => import('../views/Exchange.vue')
    },


]