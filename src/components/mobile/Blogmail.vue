<template>
    <div class="blog">
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
        <div class="blog-header">
            <img alt="" src="../../../public/imgs/classify/header.jpg">
            <span class="blog-header-title">
                你好啊
            </span>
            <div class="blog-header-bot">
                <span>
                    <i class="iconfont icon-wo-copy"></i>
<!--                    {{blog_obj.author}}-->
                </span>
                <span>
                    <i class="iconfont icon-xuanzeriqi"></i>
<!--                    {{blog_obj.date}}-->
                </span>
                <span>
                    <i class="iconfont icon-sort"></i>
<!--                    {{blog_obj.classify}}-->
                </span>
                <span class="blog-code">
<!--                    {{blog_obj.code}}-->
                </span>
            </div>
        </div>
        <div class="blog-main">
            <div class="blog-main-article">
                <div class="blog-article" v-html="blog_obj.content">
<!--                    {{blog_obj.content}}-->
                </div>
                <el-divider>E N D</el-divider>
                <span class="blog-like-content">
                    如果您觉得这篇文章写得还行，请给个赞哟！
                </span>
                <div class="blog-content-footer">
                    <div :class="like_obj" :style="'color:'+favorite==true?'red':'' ">
                        <i @click="clickLike" class="iconfont icon-xihuan"></i>
<!--                        {{blog_obj.watched}}-->
                    </div>
                    <div>
                        <i class="iconfont icon-eyes"></i>
<!--                        {{blog_obj.watched}}-->
                    </div>
                    <div>
                        <i class="iconfont icon-chat51"></i>
<!--                        {{blog_obj.messages}}-->
                    </div>
                </div>
                <el-popover
                        placement="bottom"
                        title=""
                        width="200"
                        trigger="click">
                    <img class="rqcodep" src="../../../public/imgs/code/wcode.jpg" alt="微信">
                    <img class="rqcodep" src="../../../public/imgs/code/zcode.jpg" alt="支付宝">
                    <el-button plain slot="reference" type="warning" id="message-input">打赏</el-button>
                </el-popover>

            </div>
        </div>
        <div class="message-main">
            <div class="message-main-header">
<!--                <el-input-->
<!--                        :rows="3"-->
<!--                        :placeholder="textanswer"-->
<!--                        v-model="textarea">-->
<!--                </el-input>-->
                <textarea
                        class="blog-message-textarea"
                        rows="3"
                        :placeholder="textanswer"
                        v-model="textarea">
                </textarea>
                <input type="text"
                       @keyup.enter="addMessage"
                       class="message-username"
                       placeholder="请输入您的昵称"
                       v-model="inputName"
                >
                <div class="message-username-btn" @click="addMessage">发布留言</div>
            </div>
            <div class="message-main-content">
                <h2>评论</h2>
                <div style="width:100%;height:.01rem;background:#acacac;margin:.1rem auto"></div>
                <span v-show="messageForm.length==0">当前暂无评论,欢迎评论！</span>
                <div class="message-content" v-for="message in messageForm" :key="message.id">
                    <img src="../../../public/imgs/home/tx.jpg" alt="">
                    <div class="message-content-right">
                        <span>{{message.name}}</span>
                        <span>{{message.date}}</span>
                        <pre class="message-content-details">{{message.content}}</pre>
                        <span class="message-content-answer" @click="answerClick(message,0)">回复</span>
                    </div>
                    <div class="message-content-answer-bind" v-for="answers in message.sub" :key="answers.id">
                        <img src="../../../public/imgs/home/tx.jpg" alt="">
                        <span>{{answers.name}}{{answers.answername}}</span>
                        <span>{{answers.date}}</span>
                        <pre class="message-content-details">{{answers.content}}</pre>
                        <span class="message-content-answer" @click="answerClick(message,answers)">回复</span>
                    </div>
                    <div style="clear:both"></div>
                </div>
                <div style="clear:both"></div>
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
        name: "Blogmail",
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
                like_obj:{
                    init_like:true,
                    like_in:false,
                },
                favorite: false,
                homeInput:'',
                blogId: this.$route.params.id,
                blog_obj:{},
                textarea: '',  //留言内容
                textanswer:'请输入您的评论',
                inputName: '',   //  昵称
                messageForm: [],  //  留言信息
                anid:'',  //当前回复id
                nowTime:'',
            }
        },
        methods: {
            getData() {
                // axios.get('/admin/getBlogDetail?blogId='+this.blogId).then((res) =>{
                //     console.log(res)
                //     console.log(this.blogId)
                //     this.blog_obj = res.data
                //     console.log(this.blog_obj.title)
                    // for (let i = 0; i<res.data.blog.length;i++){
                    //     if (this.blogId == res.data.blog[i].id){
                    //         this.blog_obj = res.data.blog[i]
                    //     }
                    // }
                // })
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
            clickLike() {
                console.log(this.favorite)
                this.favorite = !this.favorite

                // if (this.favorite) {
                //     this.like_obj = {
                //         init_like: false,
                //         like_in: true
                //     }
                // } else {
                //     this.like_obj = {
                //         init_like: true,
                //         like_in: false
                //     }
                // }
                // this.favorite = !this.favorite
                // console.log(this.favorite)
            },
            answerClick(val1,val2) {
                document.querySelector("#message-input").scrollIntoView(true)
                // this.textanswer = '@'+val.name
                if(val2 == 0){
                    this.textanswer = '@' +val1.name
                    this.anid = val1.mid
                }else{
                    this.textanswer = '@' +val2.name
                    this.anid = val2.mid
                }

            },
            addMessage() {

            },
        },
        mounted() {
            this.getData()
        },

    }
</script>
<style scoped="scoped" src="../../../public/css/mobile/blogmail.css">

</style>