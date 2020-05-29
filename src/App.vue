<template>
    <div id="app">
        <Header v-show="$store.state.isHeaderShow" class="pc"/>
        <transition name="fade">
            <router-view/>
        </transition>
        <Footer v-show="$store.state.isFooterShow" class="pc"/>
    </div>
</template>

<script>
    import Header from "./components/public/Header";
    import Footer from "./components/public/Footer";
    export default {
        name: 'App',
        components:{
            Footer,
            Header
        },
        data() {
            return{
                bodyHeight:'',
            }
        },
        watch: {
            // eslint-disable-next-line no-unused-vars
            '$route': function (to, from) {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }
        },
        mounted() {
            // this.bodyHeight=document.documentElement.clientHeight
        }

    }
</script>

<style scoped>
    #app {
        min-height: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    /* 为对应的路由跳转时设置动画效果 */
    .fade-enter-active, .fade-leave-avtive {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to {
        opacity: 0
    }


    @media only screen and  (max-width: 768px){
        .pc{
            display: none !important;
        }
    }

</style>
