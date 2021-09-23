
export default [

    {
        path: '/feed',
        name: 'feed',
        redirect: {name:'feedMain'},
        component: () => import('../layouts/FeedLayout.vue'),
        children: [
            {
                path: 'home',
                name: 'feedMain',
                component: () => import('../views/Feed.vue'),
            },
            {
                path: 'shop',
                name: 'feedShop',
                component: () => import('../views/Shop.vue'),
            }
        ]
    },


]