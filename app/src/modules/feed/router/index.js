
export default [

    {
        path: '/feed',
        name: 'feed',
        component: () => import('../layouts/Feed.vue'),
        children: [
            {
                path: '',
                name: 'feed',
                component: () => import('../views/Feed.vue'),
            }
        ]
    },


]