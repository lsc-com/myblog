import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../public/css/reset.css'
import '../public/iconfont/iconfont.css'
import '../public/iconfont/iconfont.js'

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')