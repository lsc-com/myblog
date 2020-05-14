import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from "../views/Classify";
import Music from "../views/Music";
import Message from "../views/Message";
import Timer from "../views/Timer";
import About from "../views/About";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: '欢迎来访我的blog'
        },
        children: [
            {
                path: '/mobilehome',
                name: 'Homem',
                component: () =>
                    import ('../components/mobile/Home'),
                meta: {
                    title: '欢迎来访我的blog'
                },

            },
            {
                path: '/pchome',
                name: 'Homep',
                component: () =>
                    import ('../components/pc/Home'),
                meta: {
                    title: '欢迎来访我的blog'
                },

            }
        ]
    },
    {
        path: '/classify',
        name: 'Classify',
        component: Classify,
        meta: {
            title: '文章分类'
        },
        children: [
            {
                path: '/mobileclassify',
                name: 'Classifym',
                component: () =>
                    import ('../components/mobile/Classify'),
                meta: {
                    title: '文章分类'
                },

            },
            {
                path: '/pcclassify',
                name: 'Classifyp',
                component: () =>
                    import ('../components/pc/Classify'),
                meta: {
                    title: '文章分类'
                },

            }
        ]
    },
    {
        path: '/timer',
        name: 'Timer',
        component: Timer,
        meta: {
            title: '创作路程'
        },
        children: [
            {
                path: '/mobileTimer',
                name: 'Timerm',
                component: () =>
                    import ('../components/mobile/Timer'),
                meta: {
                    title: '创作路程'
                },

            },
            {
                path: '/pcTimer',
                name: 'Timerp',
                component: () =>
                    import ('../components/pc/Timer'),
                meta: {
                    title: '创作路程'
                },

            }
        ]
    },
    {
        path: '/music',
        name: 'Music',
        component: Music,
        meta: {
            title: '我的私人歌单'
        },
        children: [
            {
                path: '/mobileMusic',
                name: 'Musicm',
                component: () =>
                    import ('../components/mobile/Music'),
                meta: {
                    title: '我的私人歌单'
                },

            },
            {
                path: '/pcMusic',
                name: 'Musicp',
                component: () =>
                    import ('../components/pc/Music'),
                meta: {
                    title: '我的私人歌单'
                },

            }
        ]
    },
    {
        path: '/message',
        name: 'Message',
        component: Message,
        meta: {
            title: '留言'
        },
        children: [
            {
                path: '/mobileMessage',
                name: 'Messagem',
                component: () =>
                    import ('../components/mobile/Message'),
                meta: {
                    title: '留言'
                },

            },
            {
                path: '/pcMessage',
                name: 'Messagep',
                component: () =>
                    import ('../components/pc/Message'),
                meta: {
                    title: '留言'
                },

            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: 'LSC'
        },
        children: [
            {
                path: '/mobileAbout',
                name: 'Aboutm',
                component: () =>
                    import ('../components/mobile/About'),
                meta: {
                    title: 'LSC'
                },

            },
            {
                path: '/pcAbout',
                name: 'Aboutp',
                component: () =>
                    import ('../components/pc/About'),
                meta: {
                    title: 'LSC'
                },

            }
        ]
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