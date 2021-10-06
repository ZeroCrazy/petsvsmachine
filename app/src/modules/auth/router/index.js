
export default
    [

        {
            path: '/login',
            name: 'login',
            meta: { title: 'Login - PVM' },
            component: () => import('../views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            meta: { title: 'Register - PVM' },
            component: () => import('../views/Register.vue')
        },
    ]

