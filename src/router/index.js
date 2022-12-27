import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/index.vue'),
    },
    {
        path: '/about1',
        name: 'About1',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/about1.vue'),
    },
    {
        path: '/about2',
        name: 'About2',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/about2.vue'),
    },
    {
        path: '/about3',
        name: 'About3',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/about3.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
