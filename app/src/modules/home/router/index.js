
export default {

    name: 'home',
    component: () => import('../layouts/Home.vue'),
    children: [
        {
            path: '',
            name: 'dashboard',
            component: () => import('../views/Dashboard.vue')
        },
        {
            path: 'marketplace',
            name: 'marketplace',
            component: () => import('../views/Marketplace.vue')
        },
    ]



}