<template>
    <div class="homem">
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
        <div :style="contentStyleObj" class="homem-header" @click.stop="closeNav">
            <div :style="contentStyleObj" class="homem-bg"></div>
            <div class="homem-logo">
                <img v-image-preview src="../../../public/imgs/home/tx.jpg"/>
            </div>
            <div class="homem-name">
                <span>L S C</span>
            </div>
            <div class="homem-mail">
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcodem" src="../../../public/imgs/code/wcode.jpg"/>
                    </div>
                    <span>
                        <i class="iconfont icon-wo-copy"></i>
                    </span>
                </el-tooltip>
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcodem" src="../../../public/imgs/code/wcode.jpg"/>
                    </div>
                    <span>
                        <i class="iconfont icon-weixin"></i>
                    </span>
                </el-tooltip>
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcodem" src="../../../public/imgs/code/wcode.jpg"/>
                    </div>
                    <span>
                        <i class="iconfont icon-qq"></i>
                    </span>
                </el-tooltip>
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcodem" src="../../../public/imgs/code/wcode.jpg"/>
                    </div>
                    <span>
                        <i class="iconfont icon-Git-"></i>
                    </span>
                </el-tooltip>
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcodem" src="../../../public/imgs/code/wcode.jpg"/>
                    </div>
                    <span>
                        <i class="iconfont icon-CSDN"></i>
                    </span>
                </el-tooltip>
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcodem" src="../../../public/imgs/code/wcode.jpg"/>
                    </div>
                    <span>
                        <i class="iconfont icon-youxiang"></i>
                    </span>
                </el-tooltip>
            </div>
            <div class="homem-title">
                <span>Welcome to my blog ! A website worth watching !</span>
            </div>
            <div style="clear:both"></div>
            <div style="width:30%;height:.01rem;background:#ffffff;margin:0 auto"></div>
            <div class="homem-content">
                <span>This is my blog</span>
                <br/>
                <span>It records my development life</span>
                <br/>
                <span>I study here</span>
                <br/>
                <span>It's very good</span>
                <br/>
            </div>
        </div>
        <div style="clear:both"></div>
        <div class="homem-lable"  @click.stop="closeNav">
            <div class="homem-lable-title">
                <span><i class="iconfont icon-biaoqian"></i></span>
                <span>New Page</span>
            </div>
            <div class="homem-lable-photo-band">
                <div :key="lable.id" class="homem-lable-photo-box" v-for="lable in homeLable">
                    <div class="homem-lable-photo">
                        <!--                        图片一定要 宽高比4:3-->
                        <img :src="lable.img" alt="">
                        <div class="homem-lable-photo-title">
                            <span>{{lable.title}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="homem-article" @click.stop="closeNav">
            <div class="homem-lable-title">
                <span><i class="iconfont icon-biaoqian"></i></span>
                <span>New Page</span>
            </div>
            <div class="homem-article-box" v-for="item in blog" :key="item.id">
                <img v-image-preview :src="item.img">
                <span @click="jumpBlog(item)">{{item.title}}</span>
                <div class="homem-blog-code">
                    {{item.code}}
                </div>
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
                </div>
            </div>
            <div class="homem-article-page">
                <div class="homem-page-pre" v-if="currentPage!=1"><i class="el-icon-back"></i> Previous</div>
                <span class="homem-page-enter">{{currentPage}}/{{pageCount}}</span>
                <div class="homem-page-next" v-if="currentPage!=pageCount">Next <i class="el-icon-right"></i></div>
            </div>
        </div>
        <div class="homem-footer" @click.stop="closeNav">
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
        name: "Home",
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
                contentStyleObj: {
                    height: ''  // 当前浏览器高度
                },
                homeInput: '',
                pageCount: 3,
                currentPage: 2,
                blog: [],
                homeLable: [],
                nowTime: ''
            }
        },
        methods: {
            getData() {
                this.$https.get('/admin/firstBlogPage?pageNo='+this.currentPage).then((res) => {
                    console.log(res.data.records)
                    this.pageCount = res.data.pages
                    this.blog = res.data.records
                    // this.homeLable = res.data.homeLable
                })
            },
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
            getHeight() {
                this.contentStyleObj.height = window.innerHeight + 'px';
            },
            jumpBlog(val){
                this.$router.push('/blogmail/'+val.id)
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
            this.getData();
            this.getTime();
        },

        created() {
            window.addEventListener('resize', this.getHeight);
            this.getHeight()
        },

        destroyed() {
            window.removeEventListener('resize', this.getHeight)
        }
    }
</script>

<style scoped>
@import "../../../public/css/mobile/home.css";

.homem-blog-code{
    float: right;
    height: .15rem;
    width: 10%;
    line-height: .15rem;
    margin-top: .18rem;
    font-size: .08rem;
    color: #F56C6C;
    border: 1px solid #F56C6C;
    border-radius: .05rem;
}
</style>