<template>
    <div class="about">
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
        <div class="about-header">
            <img alt="" src="../../public/imgs/classify/header.jpg">
            <span>This is my page</span>
        </div>
        <div style="clear: both"></div>
        <div class="about-main">
            <div class="about-main-content">
                <img src="../../public/imgs/home/tx.jpg" alt="">
                <span class="about-content-title">LSC</span>
                <div class="about-mail">
                    <el-tooltip placement="bottom">
                        <div slot="content">
                            <img class="rqcode" src="../../public/imgs/code/wcode.jpg"/>
                        </div>
                        <span>
                        <i class="iconfont icon-wo-copy"></i>
                    </span>
                    </el-tooltip>
                    <el-tooltip placement="bottom">
                        <div slot="content">
                            <img class="rqcode" src="../../public/imgs/code/wcode.jpg"/>
                        </div>
                        <span>
                        <i class="iconfont icon-weixin"></i>
                    </span>
                    </el-tooltip>
                    <el-tooltip placement="bottom">
                        <div slot="content">
                            <img class="rqcode" src="../../public/imgs/code/wcode.jpg"/>
                        </div>
                        <span>
                        <i class="iconfont icon-qq"></i>
                    </span>
                    </el-tooltip>
                    <el-tooltip placement="bottom">
                        <div slot="content">
                            <img class="rqcode" src="../../public/imgs/code/wcode.jpg"/>
                        </div>
                        <span>
                        <i class="iconfont icon-Git-"></i>
                    </span>
                    </el-tooltip>
                    <el-tooltip placement="bottom">
                        <div slot="content">
                            <img class="rqcode" src="../../public/imgs/code/wcode.jpg"/>
                        </div>
                        <span>
                        <i class="iconfont icon-CSDN"></i>
                    </span>
                    </el-tooltip>
                    <el-tooltip placement="bottom">
                        <div slot="content">
                            <img class="rqcode" src="../../public/imgs/code/wcode.jpg"/>
                        </div>
                        <span>
                        <i class="iconfont icon-youxiang"></i>
                    </span>
                    </el-tooltip>
                </div>
                <div style="width:50%;height:.1rem;background:#acacac;margin:0 auto"></div>
                <div class="about-me">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>4</p>
                    <p>4</p>
                    <p>4</p>
                    <p>4</p>
                    <p>4</p>
                    <p>4</p>
                </div>
                <div style="width:90%;height:.1rem;background:#acacac;margin:0 auto"></div>
                <div class="about-like">
                    <h2>打赏本站</h2>
                    <span>每一次结束，其实是又一次新旅途的开始，我相信，我们一直在路上</span>
                    <img src="../../public/imgs/code/wcode.jpg" alt="">
                    <img src="../../public/imgs/code/zcode.jpg" alt="">
                </div>

            </div>
        </div>
        <div style="clear: both"></div>
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
</template>

<script>
    export default {
        data() {
            return {
                homeInput: '',
                nowTime: ''
            }
        },

        methods: {
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
                let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
                var d = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
                var time = new Date(d)
                _this.nowTime =String(time).substring(0,15) // 转换成日期字符串
            },
        },
        mounted() {
            this.getTime()
        },


    }
</script>

<style scoped>
@import '../../public/css/about.css';
</style>
