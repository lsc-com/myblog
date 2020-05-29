<template>
    <div class="message">
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
                        maxlength="10"
                        v-model="inputName"
                        clearable>
                </el-input>
                <el-button type="primary" class="message-username-btn" @click="addMessage">发布留言</el-button>
            </div>
            <div class="message-main-content">
                <h2>留言</h2>
                <div style="width:100%;height:.1rem;background:#acacac;margin:20px auto"></div>
                <span v-show="messageForm.length==0">当前暂无留言,欢迎留言！</span>
                <div class="message-content" v-for="message in messageForm" :key="message.id">
                    <img :src="message.avatar" alt="">
                    <div class="message-content-right">
                        <span>{{message.nickname}}</span>
                        <span>{{message.createTime}}</span>
                        <pre class="message-content-details">{{message.content}}</pre>
                        <span class="message-content-answer" @click="answerClick(message,0)">回复</span>
                    </div>
                    <div class="message-content-answer-bind" v-for="answers in message.replyMessages" :key="answers.id">
                        <img :src="answers.avatar" alt="">
                        <span>{{answers.nickname}}@{{answers.parentNickname}}</span>
                        <span>{{answers.createTime}}</span>
                        <pre class="message-content-details">{{answers.content}}</pre>
                        <span class="message-content-answer" @click="answerClick(message,answers)">回复</span>
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
        name: "Message",
        data() {
            return{
                textarea: '',  //留言内容
                textanswer:'请输入留言内容',
                inputName: '',   //  昵称
                messageForm: [],  //  留言信息
                anid:'',  //当前回复id

            }
        },
        watch:{
            inputName() {
                if (this.inputName.length == 10){
                    this.$message.error('昵称最多十个字符');
                }
            }
        },
        methods: {
            getData() {
                this.$https.get('/message').then((res) => {
                    this.messageForm = res.data
                })
            },
            answerClick(val1,val2) {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
                if(val2 == 0){
                    this.textanswer = '@' +val1.nickname
                    this.anid = val1.id
                }else{
                    this.textanswer = '@' +val2.nickname
                    this.anid = val2.id
                }
            },
            addMessage() {
                const _this = this  // 防止this指向改变
                if (this.inputName&&this.textarea) {  // 判断输入框是否是空
                    if (this.anid) {  //  查找当前是否是回复状态，anid存在就是回复状态
                        let message = {
                            nickname: _this.inputName,
                            email: '1099875489@qq.com',
                            content: _this.textarea,
                            parentMessage: {
                                id: this.anid
                            }
                        }
                        this.$https.post('/message/addMessage',
                            message,
                            {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }
                        ).then(() => {
                            this.$message.success('留言成功！')
                            this.getData()
                        })
                    } else {
                        let message = {
                            nickname: _this.inputName,
                            email: '1099875489@qq.com',
                            content: _this.textarea,
                            parentMessage: {
                                id: -1
                            }
                        }
                        this.$https.post('/message/addMessage',
                            message,
                            {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }
                        ).then(() => {
                            this.$message.success('留言成功！')
                            this.getData()
                        })
                    }
                }
                this.textarea = ''
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>

<style scoped="scoped" src="../../../public/css/message.css">

</style>