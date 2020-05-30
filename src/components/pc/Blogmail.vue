<template>
    <div class="blog">
        <div class="blog-header">
            <img alt="" src="../../../public/imgs/classify/header.jpg">
            <span class="blog-header-title">{{blog_obj.title}}</span>
            <div class="blog-header-bot">
                <span>
                    <i class="iconfont icon-wo-copy"></i>
                    LSC
                </span>
                <span>
                    <i class="iconfont icon-xuanzeriqi"></i>
                    {{blog_obj.createTime}}
                </span>
                <span>
                    <i class="iconfont icon-eyes"></i>
                    {{blog_obj.views}}
                </span>
                <span>
                    <i class="iconfont icon-chat51"></i>
                    {{blog_obj.commentCount}}
                </span>
                <span>
                    <i class="iconfont icon-sort"></i>
                    {{blog_obj.type}}
                </span>
                <span class="blog-code" v-if="blog_obj.shareStatement">
                    原创
                </span>
                <span
                        class="blog-code"
                        style="background-color: #32a3a5; border-color: #32a3a5"
                        v-else>
                    转载
                </span>
            </div>
        </div>
        <div class="blog-main">
            <div class="blog-main-article">
                <el-button
                           icon="el-icon-arrow-left"
                           circle
                           size="small"
                           @click="$router.go(-1)"
                           style="float: left;"></el-button>
                <div class="blog-article"  v-html="blog_obj.content">
                </div>
                <el-divider>E N D</el-divider>
                <div class="blog-content-footer">
                    <div :class="like_obj">
                        <i @click="clickLike" class="iconfont icon-xihuan"></i>
                        {{blog_obj.likes}}
                    </div>
                    <div>
                        <i class="iconfont icon-eyes"></i>
                        {{blog_obj.views}}
                    </div>
                    <div>
                        <i class="iconfont icon-chat51"></i>
                        {{blog_obj.commentCount}}
                    </div>
                </div>
                <el-popover
                        style="text-align: center"
                        placement="bottom"
                        title=""
                        width="200"
                        trigger="click">
                    <img class="rqcodep" src="../../../public/imgs/code/wcode.jpg" alt="微信">
                    <img class="rqcodep" src="../../../public/imgs/code/zcode.jpg" alt="支付宝">
                    <el-button plain slot="reference" type="warning" id="message-input" v-show="blog_obj.appreciation">打赏</el-button>
                </el-popover>

            </div>
        </div>
        <div class="blog-message" v-show="blog_obj.commentabled">
            <div class="blog-main-header">
                <el-input
                        type="textarea"
                        :rows="2"
                        :placeholder="textanswer"
                        v-model="textarea">
                </el-input>
                <el-input
                        @keyup.enter.native="addMessage"
                        class="blog-username"
                        placeholder="请输入您的昵称"
                        v-model="inputName"
                        clearable>
                </el-input>
                <el-button type="primary" class="message-username-btn" @click="addMessage">留下评论</el-button>
            </div>
            <div class="blog-main-content">
                <h2>评论</h2>
                <div style="width:100%;height:.01rem;background:#acacac;margin:.1rem auto"></div>
<!--                <span v-show="messageForm.length==0">当前暂无留言,欢迎留言！</span>-->
                <div class="blog-content" v-for="message in messageForm" :key="message.id">
                    <img :src="message.avatar" alt="">
                    <div class="blog-content-right">
                        <span>{{message.nickname}}</span>
                        <span>{{message.createTime}}</span>
                        <pre class="blog-content-details">{{message.content}}</pre>
                        <span class="blog-content-answer" @click="answerClick(message,0)">回复</span>
                    </div>
                    <div class="blog-content-answer-bind" v-for="answers in message.replyComments" :key="answers.id">
                        <img :src="answers.avatar" alt="">
                        <span>{{answers.nickname}}@{{answers.parentNickname}}</span>
                        <span>{{answers.createTime}}</span>
                        <pre class="blog-content-details">{{answers.content}}</pre>
                        <span class="blog-content-answer" @click="answerClick(message,answers)">回复</span>
                    </div>
                    <div style="clear:both"></div>
                </div>
                <div style="clear:both"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Blogmail",
        data() {
            return{
                blogId: this.$route.params.id,
                blog_obj:{},
                textarea: '',  //留言内容
                textanswer:'请输入您的评论',
                inputName: '',   //  昵称
                messageForm: [],  //  留言信息
                anid:'',  //当前回复id
                nowTime:'',
                like_obj:{
                    init_like:true,
                    like_in:false,
                },
                favorite: false,
            }
        },
        methods: {
            getData() {
                this.$https.get('/admin/getBlogDetail?blogId='+this.blogId).then((res) =>{
                    let time1 = String(res.data.createTime).substring(0,10)
                    let time2 = String(res.data.createTime).substring(11,16)
                    let time = time1 + ' ' + time2
                    res.data.createTime = time
                    this.blog_obj = res.data
                    this.messageForm = res.data.comments
                })
                this.$https.get('/admin/blogs/listType').then(res =>{
                    for (let i = 0 ; i < res.data.length; i ++){
                        if (this.blog_obj.typeId == res.data[i].id){
                            this.blog_obj.type = res.data[i].name
                        }
                    }
                })
            },
            clickLike() {
                if (this.favorite) {
                    this.like_obj = {
                        init_like: false,
                        like_in: true
                    }
                } else {
                    this.like_obj = {
                        init_like: true,
                        like_in: false
                    }
                }
                this.favorite = !this.favorite
            },
            answerClick(val1,val2) {
                document.querySelector("#message-input").scrollIntoView(true)
                if(val2 == 0){
                    this.textanswer = '@' +val1.nickname
                    this.anid = val1.id
                }else{
                    this.textanswer = '@' +val2.nickname
                    this.anid = val2.id
                }
            },
            addMessage() {
                if (!this.anid){
                    let comment = {
                        nickname: this.inputName,
                        email: '1099875489@qq.com',
                        content: this.textarea,
                        blogId: this.blogId,
                        parentComment:{
                            id: -1
                        }
                    }
                    this.$https.post('http://39.96.45.31:8081/comment/saveComment',
                        comment,
                        {

                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                    ).then(res =>{
                        this.messageForm = res.data
                        this.$message.success('评论成功！')
                    })
                }else {
                    let comment = {
                        nickname: this.inputName,
                        email: '1099875489@qq.com',
                        content: this.textarea,
                        blogId: this.blogId,
                        parentComment:{
                            id: this.anid
                        }
                    }
                    this.$https.post('http://39.96.45.31:8081/comment/saveComment',
                        comment,
                        {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                    ).then(res =>{
                        this.messageForm = res.data
                        this.$message.success('回复成功！')
                    })
                }
                this.anid = ''
                this.textarea = ''
            },
        },
        mounted() {
            this.getData()
        }
    }
</script>

<style scoped="scoped" src="../../../public/css/blogmail.css">

</style>