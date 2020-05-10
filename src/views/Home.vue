<template>
    <div class="home">
        <ul :class="ulObj">
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
        <div class="home-header">
            <div class="home-bg"></div>
            <div class="home-logo">
                <img alt src="../../public/imgs/tx.jpg"/>
            </div>
            <div class="home-name">
                <span>OPEN</span>
            </div>
            <div class="home-mail">
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcode" src="../../public/imgs/code/code.jpg"/>
                    </div>
                    <span>
                        <i class="iconfont icon-wo-copy"></i>
                    </span>
                </el-tooltip>
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcode" src="../../public/imgs/code/code.jpg"/>
                    </div>
                    <span>
                        <i class="iconfont icon-weixin"></i>
                    </span>
                </el-tooltip>
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcode" src="../../public/imgs/code/code.jpg"/>
                    </div>
                    <span>
                        <i class="iconfont icon-qq"></i>
                    </span>
                </el-tooltip>
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcode" src="../../public/imgs/code/code.jpg"/>
                    </div>
                    <span>
                        <i class="iconfont icon-Git-"></i>
                    </span>
                </el-tooltip>
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcode" src="../../public/imgs/code/code.jpg"/>
                    </div>
                    <span>
                        <i class="iconfont icon-CSDN"></i>
                    </span>
                </el-tooltip>
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcode" src="../../public/imgs/code/code.jpg"/>
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
                    <el-button round>HomePage</el-button>
                </router-link>
                <router-link to="/">
                    <el-button round>Classify</el-button>
                </router-link>
                <router-link to="/timer">
                    <el-button round>Timer</el-button>
                </router-link>
                <router-link to="/music">
                    <el-button round>Music</el-button>
                </router-link>
                <router-link to="/">
                    <el-button round>Message</el-button>
                </router-link>
                <router-link to="/">
                    <el-button round>About</el-button>
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
                <div class="home-lable-photo-box">
                    <div class="home-lable-photo">
                        <div class="home-lable-photo-title">
                            <span>Java学习路线</span>
                        </div>
                    </div>
                </div>
                <div class="home-lable-photo-box">
                    <div class="home-lable-photo">
                        <div class="home-lable-photo-title">
                            <span>Java学习路线</span>
                        </div>
                    </div>
                </div>
                <div class="home-lable-photo-box">
                    <div class="home-lable-photo">
                        <div class="home-lable-photo-title">
                            <span>Java学习路线</span>
                        </div>
                    </div>
                </div>
                <div class="home-lable-photo-box">
                    <div class="home-lable-photo">
                        <div class="home-lable-photo-title">
                            <span>Java学习路线</span>
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
                        <img alt="" src="../../public/imgs/dl.jpg">
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
                    <img alt="" :src="item.img">
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
                    <img alt="" src="../../public/imgs/code/code.jpg">
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
</template>


<script>

    export default {
        name: 'Home',
        data() {
            return {
                ulObj: {
                    home_nav: false,
                    home_nav_out: true
                },
                homeInput: '',
                photo: require('../../public/imgs/java.jpg'),
                pageCount: 1,
                currentPage: 1,
                blog: [
                    {
                        title: '开启我的博客之旅',
                        content: '今天有人找合作写博客网站，嗯！不错，让自己不要闲下来吧，开始！晚上把首页给敲完了',
                        author: 'LSC',
                        date: '2020-05-09',
                        watched: 13,
                        messages: 14,
                        img: require('../../public/imgs/home.jpg')
                    },
                    {
                        title: '关于时间轴的一些想法',
                        content: '要相信每天都很美好，你永远很棒！今天下午搞了一下时间轴，准备记录下开发博客的点点滴滴，但是动画' +
                            '有点麻烦，费脑子...下次，下次一定，哈哈哈哈哈哈哈...',
                        author: 'LSC',
                        date: '2020-05-10',
                        watched: 52,
                        messages: 99,
                        img: require('../../public/imgs/timer.jpg')
                    },
                    {
                        title: 'I am so tired',
                        content: '今天完善了一下主页，下午搞了一下音乐播放器，确实有点难搞，这一块还是html会更爽那么一点，这个总是会有各种各样' +
                            '莫名其妙的限制，简直了。但在最后关头终于，啊~',
                        author: 'LSC',
                        date: '2020-05-10',
                        watched: 99,
                        messages: 128,
                        img: require('../../public/imgs/music.jpg')
                    },
                ]
            }
        },
        methods: {
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
            }
        },
        // 监听页面滚动
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        }

    }
</script>

<style scoped>
    @import "../../public/css/home.css";

    .el-button {
        background: #ffffff6b;
        border: 1px solid #ffffff6b;
        color: #38362e;
    }
</style>
