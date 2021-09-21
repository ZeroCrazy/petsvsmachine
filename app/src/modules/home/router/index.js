
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
    }


]