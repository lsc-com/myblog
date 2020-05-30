<template>
    <div>
        <ul class="home_nav">
            <router-link to="/">
                <li>OPEN</li>
            </router-link>
            <router-link to="/">
                <li>HomePage</li>
            </router-link>
            <router-link to="/classify">
                <li>Classify</li>
            </router-link>
            <router-link to="/timer">
                <li>Timer</li>
            </router-link>
            <router-link to="/music">
                <li>Music</li>
            </router-link>
            <router-link to="/message">
                <li>Message</li>
            </router-link>
            <router-link to="/pic">
                <li>Picture</li>
            </router-link>
            <router-link to="/about">
                <li>About</li>
            </router-link>
            <li class="home-input">
                <el-input
                        @keyup.enter.native="searchIn"
                        placeholder="请输入内容"
                        prefix-icon="el-icon-search"
                        v-model="homeInput"
                ></el-input>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                homeInput: '',
                routerPath: ''
            }
        },
        watch:{
            // eslint-disable-next-line no-unused-vars
            $route(to,from){
                console.log(to.path);
                this.routerPath = to.path
            }
        },
        methods:{
            searchIn() {
                if (this.routerPath !== '/searchMail'){
                    this.$router.push({path:'/searchMail',query:{homeInput: this.homeInput}})
                    this.homeInput = ''
                }
            }
        }
    }
</script>

<style scoped>

</style>