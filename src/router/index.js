import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from "../views/Classify";
import Music from "../views/Music";
import Message from "../views/Message";
import Timer from "../views/Timer";
import About from "../views/About";
import Blogmail from "../views/Blogmail";
import Pic from "../views/Pic";
import Test from "../components/pc/Test";
import Four from "../views/Four";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: '欢迎来访我的blog'
        },
    },
    {
        path: '/classify',
        name: 'Classify',
        component: Classify,
        meta: {
            title: '文章分类'
        },
    },
    {
        path: '/timer',
        name: 'Timer',
        component: Timer,
        meta: {
            title: '创作路程'
        },
    },
    {
        path: '/music',
        name: 'Music',
        component: Music,
        meta: {
            title: '我的私人歌单'
        },
    },
    {
        path: '/message',
        name: 'Message',
        component: Message,
        meta: {
            title: '留言'
        },
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: 'LSC'
        },
    },
    {
        path: '/blogmail/:id',
        name: 'Blogmail',
        component: Blogmail,
        meta: {
            title: '博客详情'
        },
    },
    {
        path: '/pic',
        name: 'Pic',
        component: Pic,
        meta: {
            title: '照片墙'
        },
    },
    {
        path: '/blogmail',
        name: 'Four',
        component: Four,
        meta: {
            title: '页面找不到了'
        },
    },
    {
        path: '/test',
        name: 'Test',
        component: Test,
        meta: {
            title: '页面找不到了'
        },
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