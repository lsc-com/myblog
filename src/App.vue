<template>
    <div id="app">
        <transition name="fade">
            <router-view/>
        </transition>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return{
            }
        },
        watch: {
            // eslint-disable-next-line no-unused-vars
            '$route': function (to, from) {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }
        },

    }
</script>

<style scoped>
    @import '../public/css/home.css';
    #app {
        min-height: 100%;
    }

    /* 为对应的路由跳转时设置动画效果 */
    .fade-enter-active, .fade-leave-avtive {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to {
        opacity: 0
    }

</style>
