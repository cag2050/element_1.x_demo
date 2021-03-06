import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/form_validate',
            component: () => import('./views/dateRangeFormValidate.vue')
        },
        {
            path: '/frontend_pagination',
            component: () => import('./views/FrontendPagination.vue')
        },
        {
            path: '/collapse_demo',
            component: () => import('./views/CollapseDemo.vue')
        },
        {
            path: '/dialog_demo',
            component: () => import('./views/DialogDemo.vue')
        },
        {
            path: '/checkbox_demo',
            component: () => import('./views/CheckboxDemo.vue')
        },
        {
            path: '/object_undefined',
            component: () => import('./views/ObjectUndefinedDemo.vue')
        },
        {
            path: '/message_box',
            component: () => import('./views/MessageBoxDemo.vue')
        }
    ]
})
