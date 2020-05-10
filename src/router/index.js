import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        title: 'OPEN'
    }
},
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/timer',
        name: 'Timer',
        component: () =>
            import ('../views/Timer.vue'),
        meta: {
            title: 'Timer'
        }
    },
    {
        path: '/music',
        name: 'Music',
        component: () =>
            import ('../views/Music.vue'),
        meta: {
            title: 'Music'
        }
    }
]

const router = new VueRouter({
    routes,
    // scrollBehavior (to, from, savedPosition) {
    //     return { x: 0, y: 0}
    //   }
})

export default router