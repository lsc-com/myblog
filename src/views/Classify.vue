<template>
    <div class="classify">
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
        <div class="classify-header">
            <img alt="" src="../../public/imgs/classify/header.jpg">
            <span>Make a little progress every day</span>
        </div>
        <div class="classify-main">
            <div class="classify-main-top">
                <ul class="classify-main-tag">
                    <li :key="item.id" v-for="(item,index) in tag" @click="classify(index)" :class="activeIndex === index? 'tag-active':''">
                        <span :class="activeIndex === index? 'tag-active':''">{{item.title}}</span>
                        <p :class="activeIndex === index? 'tag-active':''" ref='circular'></p>
                        <span>{{item.num}}</span>
                    </li>
                </ul>
                <div style="clear: both"></div>
            </div>

            <div class="classify-main-content">
                <ul>
                    <li :key="item.id" v-for="item in 5">
                        <div class="classify-main-lable">
                            <div class="classify-main-lable-left">
                                <h2>Test</h2>
                                <span>test</span>
                                <div class="classify-main-lable-footer">
                                    <img alt="" src="../../public/imgs/home/tx.jpg">
                                    <span>LSC</span>
                                    <span>
                                        <i class="iconfont icon-xuanzeriqi"></i>
                                        2020-05-11
                                    </span>
                                    <span>
                                        <i class="iconfont icon-eyes"></i>
                                        99
                                    </span>
                                    <span>
                                        <i class="iconfont icon-chat51"></i>
                                        99
                                    </span>
                                    <div class="classify-main-lable-btn">
                                        <p>test</p>
                                    </div>
                                </div>
                            </div>
                            <div class="classify-main-lable-right">
                                <img src="../../public/imgs/blog/home.jpg" alt="">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="classify-lable-page">
                            <div class="classify-page-pre" v-if="currentPage!=1"><i class="el-icon-back"></i> Previous</div>
                            <span>{{currentPage}}/{{pageCount}}</span>
                            <div class="classify-page-next" v-if="currentPage!=pageCount">Next <i class="el-icon-right"></i></div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="home-main-footer">
                <div class="home-main-footer-top">
                    <div class="home-main-footer-content">
                        <img alt="" src="../../public/imgs/code/wcode.jpg">
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
                        <span>{{nowTime}}</span>
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
        name: "Classify",
        data() {
            return{
                homeInput: '',
                tag: [
                    {
                        title:"Java",
                        num: "999+"
                    },
                    {
                        title:"SpringBoot",
                        num: "16"
                    },
                    {
                        title:"Spring",
                        num: "16"
                    },
                    {
                        title:"Vue",
                        num: "16"
                    },
                ],
                activeIndex: 0,
                currentPage: 1,
                pageCount: 2,
                nowTime: ''
            }
        },
        methods: {
            searchIn() {
                alert(this.homeInput)
                this.homeInput = ''
            },
            classify(val) {
                this.activeIndex = val
            },
            getTime () {
                var _this = this;
                let yy = new Date().getFullYear();
                let mm = new Date().getMonth() + 1;
                let dd = new Date().getDate();
                let hh = new Date().getHours();
                let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
                let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
                var d = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
                var time = new Date(d)
                _this.nowTime =String(time).substring(0,15) // 转换成日期字符串
            },
        },
        mounted() {
            this.getTime()
        }
    }
</script>

<style scoped>
    @import '../../public/css/classify.css';
</style>