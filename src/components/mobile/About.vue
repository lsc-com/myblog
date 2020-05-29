<template>
    <div class="about">
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
        <div class="about-header">
            <img alt="" src="../../../public/imgs/classify/header.jpg">
            <span>This is my page</span>
        </div>
        <div style="clear: both"></div>
        <div class="about-main">
            <div class="about-main-content">
                <img v-image-preview src="../../../public/imgs/home/tx.jpg">
                <span class="about-content-title">LSC</span>
                <div class="about-mail">
                    <el-tooltip placement="bottom">
                        <div slot="content">
                            <img class="rqcode" src="../../../public/imgs/code/wcode.jpg"/>
                        </div>
                        <span>
                        <i class="iconfont icon-wo-copy"></i>
                    </span>
                    </el-tooltip>
                    <el-tooltip placement="bottom">
                        <div slot="content">
                            <img class="rqcode" src="../../../public/imgs/code/wcode.jpg"/>
                        </div>
                        <span>
                        <i class="iconfont icon-weixin"></i>
                    </span>
                    </el-tooltip>
                    <el-tooltip placement="bottom">
                        <div slot="content">
                            <img class="rqcode" src="../../../public/imgs/code/wcode.jpg"/>
                        </div>
                        <span>
                        <i class="iconfont icon-qq"></i>
                    </span>
                    </el-tooltip>
                    <el-tooltip placement="bottom">
                        <div slot="content">
                            <img class="rqcode" src="../../../public/imgs/code/wcode.jpg"/>
                        </div>
                        <span>
                        <i class="iconfont icon-Git-"></i>
                    </span>
                    </el-tooltip>
                    <el-tooltip placement="bottom">
                        <div slot="content">
                            <img class="rqcode" src="../../../public/imgs/code/wcode.jpg"/>
                        </div>
                        <span>
                        <i class="iconfont icon-CSDN"></i>
                    </span>
                    </el-tooltip>
                    <el-tooltip placement="bottom">
                        <div slot="content">
                            <img class="rqcode" src="../../../public/imgs/code/wcode.jpg"/>
                        </div>
                        <span>
                        <i class="iconfont icon-youxiang"></i>
                    </span>
                    </el-tooltip>
                </div>
                <div style="width:80%;height:.01rem;background:#acacac;margin:.1rem auto"></div>
                <div class="about-me">
                    <p>这里是我的个人空间</p>
                    <p>感谢您的来访</p>
                    <p>人生道路坎坷</p>
                    <p>很多事情并不尽人如意</p>
                    <p>但我们还是要顽强的将生活进行下去</p>
                    <p>在这世界上</p>
                    <p>虽然会有很多很多更优秀的人和事</p>
                    <p>我觉得</p>
                    <p>不要自卑</p>
                    <p>化悲痛为力量</p>
                    <p>努力学习</p>
                    <p>永远不要止于当前</p>
                    <p>相信大家都有那么一个隔壁家的小孩</p>
                    <p>所以从小到大</p>
                    <p>我们真的不知道自己到底有多么优秀</p>
                    <p>......</p>
                    <p>不求尽遂人意</p>
                    <p>但求问心无愧</p>
                    <p>相信自己</p>
                    <p>我就是世界上独一无二的自己</p>
                    <p>无须让别人的观点说法改变我自己原有的生活</p>
                    <p>我们都有自己的生活圈</p>
                    <p>不需要太在意别人的看法</p>
                    <p>不影响他人</p>
                    <p>做好自己</p>
                    <p>我觉得</p>
                    <p>能做到这一点</p>
                    <p>已经远超常人了</p>
                    <p>反过来想</p>
                    <p>又有多少人做到了呢</p>
                    <p>这个世界有很多不如意</p>
                    <p>可是生活还是要继续</p>
                    <p>太阳每天依旧要升起</p>
                    <p>希望永远种在你心里</p>
                    <p>再次感谢您的来访</p>
                    <p>......</p>
                </div>
                <div style="width:80%;height:.01rem;background:#acacac;margin:.1rem auto"></div>
                <div class="about-like">
                    <h2>打赏本站</h2>
                    <span>每一次结束，其实是又一次新旅途的开始，我相信，我们一直在路上</span>
                    <img src="../../../public/imgs/code/wcode.jpg" alt="">
                    <img src="../../../public/imgs/code/zcode.jpg" alt="">
                </div>
                <audio :src="mus" class="media-audio" loop="loop" autoplay ref="MusicPlay"></audio>
            </div>
        </div>
        <div style="clear: both"></div>

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
                mus: require('../../../public/music/tfkz.mp3'),
                homeInput: '',
            }
        },

        methods: {
            searchIn() {
                alert(this.homeInput)
                this.homeInput = ''
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
            this.getTime()
        },


    }
</script>

<style scoped="scoped" src="../../../public/css/mobile/about.css">
</style>
