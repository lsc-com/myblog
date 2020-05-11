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
            <img alt="" src="../../public/imgs/classify/header.jpg">
            <span>Our progress can be shared</span>
        </div>
        <div style="clear: both"></div>
        <div class="message-main">
            <div class="message-main-header">
                <el-input
                        @keyup.enter.native="addMessage"
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
                    <img src="../../public/imgs/home/tx.jpg" alt="">
                    <div class="message-content-right">
                        <span>{{message.name}}</span>
                        <span>{{message.date}}</span>
                        <span class="message-content-details">{{message.content}}</span>
                        <span class="message-content-answer" @click="answer(message.name)">回复</span>
                    </div>
                </div>
                <div style="clear:both"></div>
            </div>
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
                inputName: '',
                messageForm: [],

            }
        },
        methods: {
            getData() {
                axios.get('/js/message.json').then((res) => {
                    this.messageForm = res.data.message
                })
            },
            searchIn() {

            },
            answer(val) {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
                this.textanswer = '@'+val
            },
            addMessage() {
                if (this.inputName&&this.textarea){
                    var obj = {}
                    obj.name = this.inputName
                    obj.date = this.nowTime
                    obj.content = this.textarea
                    this.messageForm.push(obj)
                    this.$message({
                        message: '留言成功！',
                        type: 'success'
                    });
                    this.inputName = '';
                    this.textarea = '';
                    this.textanswer = '请输入内容'
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
                let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
                var d = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
                var time = new Date(d)
                _this.nowTime =String(time).substring(0,15) // 转换成日期字符串
            },
        },
        mounted() {
            this.getData();
            this.getTime();
        }
    }
</script>

<style scoped>
@import '../../public/css/message.css';
</style>