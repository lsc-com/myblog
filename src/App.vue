<template>
    <div id="app">
        <Header v-show="$store.state.isHeaderShow" class="pc"/>
        <MobileHeader class="mobile"/>
        <transition name="fade">
            <router-view/>
        </transition>
        <Footer v-show="$store.state.isFooterShow" class="pc"/>
        <MobileFooter class="mobile"/>
    </div>
</template>

<script>
    import Header from "./components/public/Header";
    import Footer from "./components/public/Footer";
    import MobileHeader from './components/mobile/public/Header';
    import MobileFooter from './components/mobile/public/Footer';
    export default {
        name: 'App',
        components:{
            Footer,
            Header,
            MobileHeader,
            MobileFooter
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
    @media only screen and (min-width: 769px){
        .mobile{
            display: none !important;
        }
    }

</style>
