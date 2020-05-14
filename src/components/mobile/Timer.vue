<template>
    <div class="timer">
        <div :class="nav_click" @click="openNav">
        </div>
        <ul :class="nav_obj" class="homem-nav">
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
            <router-link to="/about">
                <li>About</li>
            </router-link>
            <li class="homem-input">
                <el-input
                        @keyup.enter.native="searchIn"
                        placeholder="请输入内容"
                        prefix-icon="el-icon-search"
                        v-model="homeInput"
                ></el-input>
            </li>
            <li @click="closeNav"><i class="el-icon-circle-close"></i></li>
        </ul>
        <div class="timer-content">
            <div class='time-line'>
                <div :key="item.id" class='time-line-div' v-for='item in testList'>
                    <p>
                        <span>2020-05-10</span>
                        <span>{{item.text}}</span>
                    </p>
                    <p ref='circular'></p>
                </div>
                <div class='img-dotted'></div>
            </div>
        </div>
        <div class="homem-footer">
            <div class="homem-footer-top">
                <div>
                    <h2>最新博文</h2>
                    <span>这是最新博客</span>
                </div>
                <div>
                    <h2>联系我</h2>
                    <span>Email:1099421282@qq.com</span>
                </div>
            </div>
            <div class="homem-footer-bot">本站已运营0天</div>
        </div>
        <el-backtop></el-backtop>
    </div>
</template>

<script>
    export default {
        name: "Timer",
        data() {
            return {
                nav_obj: {
                    init_nav: true,
                    nav_in: false,
                    nav_out: false
                },
                nav_click: {
                    init_click: true,
                    nav_click_out: false,
                },
                homeInput:'',
                nowTime: '',
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
            openNav() {
                this.nav_obj = {
                    init_nav: false,
                    nav_in: true,
                    nav_out: false
                }
                this.nav_click = {
                    init_click: false,
                    nav_click_out: true
                }
            },
            closeNav() {
                this.nav_obj = {
                    init_nav: false,
                    nav_in: false,
                    nav_out: true
                }
                this.nav_click = {
                    init_click: true,
                    nav_click_out: false
                }
            },
            searchIn() {
                alert(this.homeInput)
                this.homeInput = ''
            },
            getTime () {
                var _this = this;
                let yy = new Date().getFullYear();
                let mm = new Date().getMonth() + 1;
                let dd = new Date().getDate();
                let hh = new Date().getHours();
                let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
                // let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
                // var d = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
                // var time = new Date(d)
                let timer = yy+'-'+mm+'-'+dd+' '+hh+':'+mf
                _this.nowTime = timer
                // _this.nowTime =String(time).substring(0,15) // 转换成日期字符串
            },
        },
        mounted() {
            this.getTime()
        }
    };
</script>

<style scoped="scoped" src="../../../public/css/moblie/timer.css">
</style>