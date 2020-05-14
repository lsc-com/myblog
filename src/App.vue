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
    #app {
        min-height: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    /* 为对应的路由跳转时设置动画效果 */
    .fade-enter-active, .fade-leave-avtive {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to {
        opacity: 0
    }

</style>
