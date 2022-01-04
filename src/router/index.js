import {createRouter, createWebHashHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: {
            name: 'Login'
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard'),
        beforeEnter: (to, from, next) => {
            const role = localStorage.getItem("role")
            if (role !== null) {
                next()
            } else {
                next(false)
            }
        }
    }, {
        path: '/bestellungen',
        name: 'Order',
        component: () => import('@/views/Order'),
        beforeEnter: (to, from, next) => {
            const role = localStorage.getItem("role")
            if (role === "Admin" || role === "Manager") {
                next()
            } else {
                next(false)
            }
        }
    }, {
        path: '/wetter',
        name: 'Weather',
        component: () => import('@/views/Weather'),
        beforeEnter: (to, from, next) => {
            const role = localStorage.getItem("role")
            if (role !== null) {
                next()
            } else {
                next(false)
            }
        }
    }, {
        path: '/bestand',
        name: 'Tires',
        component: () => import('@/views/Tires'),
        beforeEnter: (to, from, next) => {
            const role = localStorage.getItem("role")
            if (role === "Admin" || role === "Manager") {
                next()
            } else {
                next(false)
            }
        }
    }, {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login')
    }, {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/Profile.vue'),
        beforeEnter: (to, from, next) => {
            const role = localStorage.getItem("role")
            if (role !== null) {
                next()
            } else {
                next(false)
            }
        }
    }
    ,
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router