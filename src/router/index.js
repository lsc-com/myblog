import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: '欢迎来访我的blog'
        }
    },
    {
        path: '/classify',
        name: 'Classify',
        component: () =>
            import ('../views/Classify.vue'),
        meta: {
            title: '文章分类'
        }
    },
    {
        path: '/timer',
        name: 'Timer',
        component: () =>
            import ('../views/Timer.vue'),
        meta: {
            title: '创作路程'
        }
    },
    {
        path: '/music',
        name: 'Music',
        component: () =>
            import ('../views/Music.vue'),
        meta: {
            title: '我的私人歌单'
        }
    },
    {
        path: '/message',
        name: 'Message',
        component: () =>
            import ('../views/Message.vue'),
        meta: {
            title: '留言'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue'),
        meta: {
            title: 'LSC'
        }
    },
]

const router = new VueRouter({
    routes,
    // scrollBehavior (to, from, savedPosition) {
    //     return { x: 0, y: 0}
    //   }
    // eslint-disable-next-line no-unused-vars
    srcollBehavior(to,from,savedPosition){
        if(to.hash){
            return {
                selector:to.hash
            }
        }
    }
})

export default router