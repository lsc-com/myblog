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
        <div class="home-header" :style="contentStyleObj">
            <div class="home-bg" :style="contentStyleObj"></div>
            <div class="home-logo">
                <img v-image-preview src="../../../public/imgs/home/tx.jpg"/>
            </div>
            <div class="home-name">
                <span>L S C</span>
            </div>
            <div class="home-mail">
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
                <router-link to="/pic">
                    <div class="jump">Picture</div>
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
                <div class="home-lable-photo-box" v-for="lable in homeLable" :key="lable.id" @click="jumpBlog(lable)">
                    <div class="home-lable-photo">
                        <!--                        图片一定要 宽高比 10 : 7-->
                        <img :src="lable.img">
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
                <div class="home-article-left" @click="jumpBlog(item)">
                    <h2>{{item.title}}</h2>
                    <span class="home-article-content" v-html="item.content"></span>
                    <div class="home-article-footer">
                        <img src="../../../public/imgs/home/dl.jpg">
                        <span>{{item.author}}LSC</span>
                        <span>
                            <i class="iconfont icon-xuanzeriqi"></i>
                            {{item.createTime}}
                        </span>
                        <span>
                            <i class="iconfont icon-eyes"></i>
                            {{item.views}}
                        </span>
                        <span>
                            <i class="iconfont icon-chat51"></i>
                            {{item.commentCount}}
                        </span>
                        <div class="home-article-btn">
                            <p>
                                Made In Lsc
                            </p>
                        </div>
                    </div>
                </div>
                <div class="home-article-right">
                    <img v-image-preview :src="item.firstPicture">
                </div>
            </div>
        </div>
        <div class="home-article-page">
            <div class="home-page-pre" v-if="currentPage!=1" @click="changePage('pre')"><i class="el-icon-back"></i> Previous</div>
            <span>{{currentPage}}/{{pageCount}}</span>
            <div class="home-page-next" v-if="currentPage!=pageCount" @click="changePage('next')">Next <i class="el-icon-right"></i></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
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
                blog: [{
                    content:''
                }],
                homeLable: [],
            }
        },
        methods: {
            getData() {
                this.$https.get('/admin/firstBlogPage?pageNo='+this.currentPage).then((res) => {
                    let data = res.data
                    this.pageCount = data.pages
                    let array = []
                    for (let i = 0 ; i < data.records.length; i ++) {
                        let arr_Obj = {}
                        let str = data.records[i].content
                        let imgReg = /<img.*?(?:>|\/>)/gi;
                        let arr = str.match(imgReg);
                        if (arr){
                            for (let j = 0 ; j < arr.length ; j ++ ){
                                str = str.replace(arr[j], '');
                            }
                        }
                        arr_Obj.content = str
                        array.push(arr_Obj)
                        console.log(arr)
                    }
                    for (let i = 0 ; i < data.records.length; i ++){
                        data.records[i].content = array[i].content
                    }
                    this.blog = data.records
                })
            },
            getHeight(){
                this.contentStyleObj.height=window.innerHeight+'px';
            },
            handleScroll() {
                let scroll =
                    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
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
            jumpBlog(val){
                this.$router.push('/blogmail/'+val.id)
            },
            changePage(val){
                if (val == 'pre'){
                    this.currentPage--
                }else {
                    this.currentPage++
                }
                this.$https.get('/admin/firstBlogPage?pageNo='+this.currentPage).then((res) => {
                    let data = res.data
                    this.pageCount = res.data.pages
                    let array = []
                    for (let i = 0 ; i < data.records.length; i ++) {
                        let arr_Obj = {}
                        let str = data.records[i].content
                        let imgReg = /<img.*?(?:>|\/>)/gi;
                        let arr = str.match(imgReg);
                        if (arr){
                            for (let j = 0 ; j < arr.length ; j ++ ){
                                str = str.replace(arr[j], '');
                            }
                        }
                        arr_Obj.content = str
                        array.push(arr_Obj)
                    }
                    for (let i = 0 ; i < data.records.length; i ++){
                        data.records[i].content = array[i].content
                    }
                    this.blog = data.records
                })
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
@import "../../../public/css/home.css";

</style>