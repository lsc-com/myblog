<template>
    <div>
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
                        v-model="search"
                ></el-input>
            </li>
        </ul>
        <div class="search-header">
            <img alt="" src="../../../public/imgs/classify/header.jpg">
            <span>This is search mail</span>
        </div>
        <div class="search-main">
            <div class="search-main-content">
                <ul>
                    <li :key="item.id" v-for="item in blog">
                        <div class="search-main-lable">
                            <div class="search-main-lable-left" @click="jumpBlog(item)">
                                <h2>{{item.title}}</h2>
                                <span  v-html="item.content"></span>
                                <div class="search-main-lable-footer">
                                    <img alt="" src="../../../public/imgs/home/tx.jpg">
                                    <span>LSC</span>
                                    <span>
                                        <i class="iconfont icon-xuanzeriqi"></i>
                                        {{item.updateTime}}
                                    </span>
                                    <span>
                                        <i class="iconfont icon-eyes"></i>
                                        {{item.views}}
                                    </span>
                                    <span>
                                        <i class="iconfont icon-chat51"></i>
                                        {{item.commentCount}}
                                    </span>
                                    <div class="search-main-lable-btn">
                                        <p>LSC</p>
                                    </div>
                                </div>
                            </div>
                            <div class="search-main-lable-right">
                                <img :src="item.firstPicture" v-image-preview>
                            </div>
                        </div>
                    </li>
                    <h3 v-show="isBlog">关于 “{{notFind}}” 的博客暂时还搜不到哟！</h3>
                    <li>
                        <div class="search-lable-page">
                            <div @click="changePage('pre')" class="search-page-pre" v-if="currentPage!=1"><i
                                    class="el-icon-back"></i> Previous
                            </div>
                            <span>{{currentPage}}/{{pageCount}}</span>
                            <div @click="changePage('next')" class="search-page-next" v-if="currentPage!=pageCount">Next
                                <i class="el-icon-right"></i></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchMail",
        data() {
            return {
                blog: [],
                currentPage: 1,
                pageCount: 1,
                homeInput: this.$route.query.homeInput,
                search:'',
                isBlog: false,
                notFind: '',
            }
        },
        watch:{
            // eslint-disable-next-line no-unused-vars
            $route(to,from){
                if (to.path == '/searchMail'){
                    this.getData()
                }
            }
        },
        methods: {
            getData() {
                this.search = this.homeInput
                this.$https.get('/admin/getSearchBlog?pageNo='+this.currentPage+'&input='+this.search).then(res =>{
                    if (res.data.total){
                        let data = res.data.list
                        let array = []
                        for (let i = 0 ; i < data.length; i ++) {
                            let arr_Obj = {}
                            let str = data[i].content
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
                        for (let i = 0 ; i < data.length; i ++){
                            data[i].content = array[i].content
                        }
                        this.isBlog = false
                        this.blog = data
                        this.currentPage = res.data.pageNum
                        this.pageCount = res.data.pages
                    }else{
                        this.notFind = this.homeInput
                        this.blog = []
                        this.isBlog = true
                        this.currentPage = 1
                        this.pageCount = 1
                    }
                })
            },
            searchIn() {
                this.$https.get('/admin/getSearchBlog?pageNo='+this.currentPage+'&input='+this.search).then(res =>{
                    console.log(res)
                    if (res.data.total){
                        let data = res.data.list
                        let array = []
                        for (let i = 0 ; i < data.length; i ++) {
                            let arr_Obj = {}
                            let str = data[i].content
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
                        for (let i = 0 ; i < data.length; i ++){
                            data[i].content = array[i].content
                        }
                        this.isBlog = false
                        this.blog = data
                        this.currentPage = res.data.pageNum
                        this.pageCount = res.data.pages
                    }else{
                        this.notFind = this.search
                        this.blog = []
                        this.isBlog = true
                        this.currentPage = 1
                        this.pageCount = 1
                    }
                })
                this.homeInput = ''
            },
            jumpBlog(val) {
                this.$router.push('/blogmail/'+val.id)
            },
            changePage(val) {
                if (val == 'pre'){
                    this.currentPage--
                }else{
                    this.currentPage++
                }
                document.documentElement.scrollTop = document.body.scrollTop = 0;
                this.getData()
            }
        },
        mounted() {
            this.getData();
            this.$store.dispatch('HIDE_HEADER')
        },
        destroyed() {
            this.$store.dispatch('SHOW_HEADER')
        }
    }
</script>

<style scoped src="../../../public/css/search.css">

</style>