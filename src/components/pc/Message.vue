<template>
    <div class="message">
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
        <div class="message-header">
            <img alt="" src="../../../public/imgs/classify/header.jpg">
            <span>Our progress can be shared</span>
        </div>
        <div style="clear: both"></div>
        <div class="message-main">
            <div class="message-main-header">
                <el-input
                        id="message-input"
                        type="textarea"
                        :rows="2"
                        :placeholder="textanswer"
                        v-model="textarea">
                </el-input>
                <el-input
                        @keyup.enter.native="addMessage"
                        class="message-username"
                        placeholder="请输入您的昵称"
                        v-model="inputName"
                        clearable>
                </el-input>
                <el-button type="primary" class="message-username-btn" @click="addMessage">发布留言</el-button>
            </div>
            <div class="message-main-content">
                <h2>留言</h2>
                <div style="width:100%;height:.1rem;background:#acacac;margin:0 auto"></div>
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
        <div class="home-main-footer">
            <div class="home-main-footer-top">
                <div class="home-main-footer-content">
                    <img alt="" src="../../../public/imgs/code/wcode.jpg">
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
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Message",
        data() {
            return{
                homeInput:'',
                nowTime: '',
                textarea: '',  //留言内容
                textanswer:'请输入留言内容',
                inputName: '',   //  昵称
                messageForm: [],  //  留言信息
                anid:'',  //当前回复id

            }
        },
        methods: {
            getData() {
                axios.get('/js/message.json').then((res) => {
                    // this.messageForm = res.data.message
                    console.log(res)
                })
            },
            searchIn() {

            },
            answerClick(val1,val2) {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
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
                const _this = this  // 防止this指向改变
                if (this.inputName&&this.textarea){  // 判断输入框是否是空
                    if (this.anid){  //  查找当前是否是回复状态，anid存在就是回复状态
                        for (var i = 0; i<_this.messageForm.length; i ++){  //  在留言数组中查找与回复id匹配的一条
                            if (_this.messageForm[i].mid == _this.anid){
                                let anobj = {}  //  创建对象，方便将输入数据存储
                                anobj.mid = _this.anid  //  id
                                anobj.name = _this.inputName  // 昵称
                                anobj.answername = _this.textanswer  // 回复的昵称
                                anobj.date = _this.nowTime  // 当前时间
                                anobj.content = _this.textarea  // 输入内容
                                if (_this.messageForm[i].sub){  // 判断当前留言是否存在回复
                                _this.messageForm[i].sub.push(anobj) // 存在回复直接推送当前对象至回复数组
                                    this.$message({  // 提示回复状态
                                        message: '留言成功！',
                                        type: 'success'
                                    });
                                }else{
                                    _this.messageForm[i].sub = []  // 当前回复不存在时，创建一个回复数组
                                    _this.messageForm[i].sub.push(anobj)  // 将输入的内容对象推送到回复数组
                                    this.$message({  //  提示回复状态
                                        message: '留言成功！',
                                        type: 'success'
                                    });
                                }
                            }
                        }
                    }else{  // 如果是新建留言，则直接在数组第一层添加对象
                        let anobj = {}  // 创建留言的对象
                        anobj.mid = _this.messageForm.length + 1 // 自动生成id，如果有删除存在就会产生bug
                        anobj.name = _this.inputName  // 存储信息
                        anobj.date = _this.nowTime
                        anobj.content = _this.textarea
                        _this.messageForm.push(anobj)  // 将留言对象推送到数组第一层
                        this.$message({  //  提示回复状态
                            message: '留言成功！',
                            type: 'success'
                        });
                    }
                    _this.anid = ''  //清空当前id 输入框内容
                    _this.textarea = '';
                    _this.textanswer = '请输入留言内容'
                }else{
                    this.$message.error('请输入内容和昵称');
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
            this.getData();
            this.getTime();
        }
    }
</script>

<style scoped="scoped" src="../../../public/css/message.css">

</style>