import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../public/css/reset.css'
import '../public/iconfont/iconfont.css'
import '../public/iconfont/iconfont.js'

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

// 以下三个是点击图片变大
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'

axios.defaults.baseURL = 'http://39.96.45.31:8081'
Vue.use(VueDirectiveImagePreviewer)
Vue.use(ElementUI)
Vue.prototype.$https = axios
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')