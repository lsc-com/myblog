<template>
    <div class="home">
        <ul :class="ulObj">
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
        <div class="home-header" :style="contentStyleObj">
            <div class="home-bg" :style="contentStyleObj"></div>
            <div class="home-logo">
                <img alt src="../../public/imgs/home/tx.jpg"/>
            </div>
            <div class="home-name">
                <span>L S C</span>
            </div>
            <div class="home-mail">
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
            <div class="home-title">
                <span>Welcome to my blog ! A website worth watching !</span>
            </div>
            <div style="clear:both"></div>
            <div style="width:30%;height:.1rem;background:#ffffff;margin:0 auto"></div>
            <div class="home-content">
                <span>This is my blog.</span>
                <br/>
                <span>It records my development life.</span>
                <br/>
                <span>I study here.</span>
                <br/>
                <span>It's very good</span>
                <br/>
            </div>
            <div class="home-footer">
                <router-link to="/">
                    <div class="jump">HomePage</div>
                </router-link>
                <router-link to="/classify">
                    <div class="jump">Classify</div>
                </router-link>
                <router-link to="/timer">
                    <div class="jump">Timer</div>
                </router-link>
                <router-link to="/music">
                    <div class="jump">Music</div>
                </router-link>
                <router-link to="/message">
                    <div class="jump">Message</div>
                </router-link>
                <router-link to="/about">
                    <div class="jump">About</div>
                </router-link>
            </div>
        </div>
        <div style="clear:both"></div>
        <div class="home-lable">
            <div class="home-lable-title">
                <span><i class="iconfont icon-biaoqian"></i></span>
                <span>New Page</span>
            </div>
            <div class="home-lable-photo-band">
                <div class="home-lable-photo-box" v-for="lable in homeLable" :key="lable.id">
                    <div class="home-lable-photo">
<!--                        图片一定要 宽高比 10 : 7-->
                        <img :src="lable.img" alt="">
                        <div class="home-lable-photo-title">
                            <span>{{lable.title}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-article-box">
            <div class="home-lable-title">
                <span><i class="iconfont icon-biaoqian"></i></span>
                <span>New Article</span>
            </div>
            <div :key="item.id" class="home-article" v-for="item in blog">
                <div class="home-article-left">
                    <h2>{{item.title}}</h2>
                    <span class="home-article-content">{{item.content}}</span>
                    <div class="home-article-footer">
                        <img alt="" src="../../public/imgs/home/dl.jpg">
                        <span>{{item.author}}</span>
                        <span>
                            <i class="iconfont icon-xuanzeriqi"></i>
                            {{item.date}}
                        </span>
                        <span>
                            <i class="iconfont icon-eyes"></i>
                            {{item.watched}}
                        </span>
                        <span>
                            <i class="iconfont icon-chat51"></i>
                            {{item.messages}}
                        </span>
                        <div class="home-article-btn">
                            <p>
                                Made In Lsc
                            </p>
                        </div>
                    </div>
                </div>
                <div class="home-article-right">
                    <img :src="item.img" alt="">
                </div>
            </div>
        </div>
        <div class="home-article-page">
            <div class="home-page-pre" v-if="currentPage!=1"><i class="el-icon-back"></i> Previous</div>
            <span>{{currentPage}}/{{pageCount}}</span>
            <div class="home-page-next" v-if="currentPage!=pageCount">Next <i class="el-icon-right"></i></div>
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
</template>


<script>
import axios from 'axios';
    export default {
        name: 'Home',
        data() {
            return {
                contentStyleObj:{
                    height:''  // 当前浏览器高度
                },
                ulObj: {
                    home_nav: false,
                    home_nav_out: true
                },
                homeInput: '',
                pageCount: 1,
                currentPage: 1,
                blog: [],
                homeLable: [],
                nowTime: ''
            }
        },
        methods: {
            getData() {
                axios.get('/js/home.json').then((res) => {
                    console.log(res)
                    this.blog = res.data.blog
                    this.homeLable = res.data.homeLable
                })
            },
            getHeight(){
                this.contentStyleObj.height=window.innerHeight+'px';
            },
            handleScroll() {
                var scroll =
                    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                // console.log(scrollTop)
                if (scroll > 680) {
                    this.ulObj = {
                        home_nav: true,
                        home_nav_out: false
                    }
                } else {
                    this.ulObj = {
                        home_nav: false,
                        home_nav_out: true
                    }
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
                let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
                var d = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
                var time = new Date(d)
                _this.nowTime =String(time).substring(0,15) // 转换成日期字符串
            },
        },
        // 监听页面滚动
        mounted() {
            this.getData();
            this.getTime();
            window.addEventListener('scroll', this.handleScroll);
        },

        created(){
            window.addEventListener('resize', this.getHeight);
            this.getHeight()
        },

        destroyed(){
            window.removeEventListener('resize', this.getHeight)
        }

    }
</script>

<style scoped>
    @import "../../public/css/home.css";

    .icon-youxiang, .icon-CSDN, .icon-Git-, .icon-weixin, .icon-qq, .icon-wo-copy {
        color: #ddd;
    }

</style>
