
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
        path: '/feed',
        name: 'feed',
        component: () => import('../views/Feed.vue')
    },
    {
        path: '/new-offering',
        name: 'newOffering',
        component: () => import('../views/NewOffering.vue')
    },


]