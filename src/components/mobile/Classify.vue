<template>
    <div class="">
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
        <div class="classify-header">
            <img alt="" src="../../../public/imgs/classify/header.jpg">
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

            <div class="homem-article">
                <div class="homem-article-box" v-for="item in blog" :key="item.id">
                    <img v-image-preview :src="item.img">
                    <span>{{item.title}}</span>
                    <span>{{item.content}}</span>
                    <div class="homem-article-footer">
                        <img alt="" src="../../../public/imgs/home/tx.jpg">
                        <div>{{item.author}}</div>
                        <div>
                            <i class="iconfont icon-xuanzeriqi"></i>
                            {{item.date}}
                        </div>
                        <div>
                            <i class="iconfont icon-eyes"></i>
                            {{item.watched}}
                        </div>
                        <div>
                            <i class="iconfont icon-chat51"></i>
                            {{item.messages}}
                        </div>
                        <div>
                            {{item.code}}
                        </div>
                    </div>
                </div>
                <div class="homem-article-page">
                    <div class="homem-page-pre" v-if="currentPage!=1"><i class="el-icon-back"></i> Previous</div>
                    <span class="homem-page-enter">{{currentPage}}/{{pageCount}}</span>
                    <div class="homem-page-next" v-if="currentPage!=pageCount">Next <i class="el-icon-right"></i></div>
                </div>
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
            <div class="homem-footer-bot">{{nowTime}}</div>
        </div>
        <el-backtop></el-backtop>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Classify",
        data() {
            return{
                nav_obj: {
                    init_nav: true,
                    nav_in: false,
                    nav_out: false
                },
                nav_click: {
                    init_click: true,
                    nav_click_out: false,
                },
                homeInput: '',
                tag: [
                    {
                        title:"Java",
                        num: "999"
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
                blog: [],
                activeIndex: 0,
                currentPage: 1,
                pageCount: 2,
                nowTime: ''
            }
        },
        methods: {
            getData() {
                axios.get('/admin/blogs/listType').then((res) => {
                    this.blog = res.data.blog
                })
            },
            searchIn() {
                alert(this.homeInput)
                this.homeInput = ''
            },
            classify(val) {
                this.activeIndex = val
            },
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
            this.getTime();
            this.getData()
        }
    }
</script>

<style scoped="scoped" src="../../../public/css/mobile/classify.css">

</style>