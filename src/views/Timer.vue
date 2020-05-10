<template>
    <div class="timer">
        <ul class="home_nav">
            <router-link to="/">
                <li>OPEN</li>
            </router-link>
            <router-link to="/">
                <li>HomePage</li>
            </router-link>
            <router-link to="/">
                <li>Classify</li>
            </router-link>
            <router-link to="/timer">
                <li>Timer</li>
            </router-link>
            <router-link to="/music">
                <li>Music</li>
            </router-link>
            <router-link to="/">
                <li>Message</li>
            </router-link>
            <router-link to="/">
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
        <div class="timer-content">

            <!-- <div class="timer-left"></div>
            <div></div>
            <div class="timer-right"></div> -->
            <div class='time-line'>
                <div :key="item.id" class='time-line-div' v-for='item in testList'>
                    <p v-show="item.id%2">
                        <span>2020-05-10</span>
                        <span>{{item.text}}</span>
                    </p>
                    <p ref='circular'></p>
                    <p v-show="item.id%2 == 0">
                        <span>2020-05-10</span>
                        <span>{{item.text}}</span>
                    </p>
                </div>
                <div class='img-dotted'></div>
            </div>
            <div class="home-main-footer">
                <div class="home-main-footer-top">
                    <div class="home-main-footer-content">
                        <img alt="" src="../../public/imgs/code.jpg">
                    </div>
                    <div class="home-main-footer-content">
                        <h2>New Blog</h2>
                        <span>this is a new blog</span>
                    </div>
                    <div class="home-main-footer-content">
                        <h2>Contact Me</h2>
                        <span>Email: 1099421282@qq.com</span>
                    </div>
                    <div class="home-main-footer-content-last">
                        <h2>Today is</h2>
                        <span>2020-05-10</span>
                    </div>
                </div>
                <div style="width:100%;height:.05rem;background:#ffffff;margin:0 auto 2rem auto;float:left"></div>
                <span style="color:#409EFF">
            @ Made In Lsc
        </span>
            </div>
            <el-backtop></el-backtop>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Timer",
        data() {
            return {
                homeInput: "",
                testList: [
                    {id: '1', time: '2020-05-10', text: 'hello'},
                    {id: '2', time: '2020-05-10', text: 'hello'},
                    {id: '3', time: '2020-05-10', text: 'hello'},
                    {id: '4', time: '2020-05-10', text: 'hello'},
                    {id: '5', time: '2020-05-10', text: 'hello'},
                    {id: '6', time: '2020-05-10', text: 'hello'}
                ],
            };
        },
        methods: {
            searchIn() {
                alert(this.homeInput)
                this.homeInput = ''
            }
        },
    };
</script>

<style scoped>
    @import "../../public/css/timer.css";
</style>