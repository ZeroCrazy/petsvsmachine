
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
                meta:{
                    enterClass: "amimate__animated animate__fadeInLeft",
                    leaveClass: "amimate__animated animate__fadeOutRight",
                }
            },
            {
                path: 'shop',
                name: 'feedShop',
                component: () => import('../views/Shop.vue'),
                meta:{
                    enterClass: "amimate__animated animate__fadeInLeft",
                    leaveClass: "amimate__animated animate__fadeOutRight",
                }
            },
            {
                path: 'lands',
                name: 'feedLands',
                component: () => import('../views/Lands.vue'),
                meta:{
                    enterClass: "amimate__animated animate__fadeInLeft",
                    leaveClass: "amimate__animated animate__fadeOutRight",
                }
            }
        ]
    },


]