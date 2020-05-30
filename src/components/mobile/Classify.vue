<template>
    <div class="">
        <div class="classify-header">
            <img alt="" src="../../../public/imgs/classify/header.jpg">
            <span>Make a little progress every day</span>
        </div>
        <div class="classify-main">
            <div class="classify-main-top">
                <ul class="classify-main-tag">
                    <li :key="item.id"
                        v-for="(item,index) in tag"
                        @click="classify(index,item)"
                        :style="item.count == 0 ? 'display:none':''"
                        :class="activeIndex === index? 'tag-active':''">
                        <span :class="activeIndex === index? 'tag-active':''">{{item.name}}</span>
                        <p :class="activeIndex === index? 'tag-active':''" ref='circular'></p>
                        <span>{{item.count}}</span>
                    </li>
                </ul>
                <div style="clear: both"></div>
            </div>

            <div class="homem-article">
                <div class="homem-article-box" v-for="item in blog" :key="item.id">
                    <img v-image-preview :src="item.firstPicture">
                    <span @click="jumpBlog(item)">{{item.title}}</span>
                    <div class="homem-blog-code">
                        原创
                    </div>
                    <span @click="jumpBlog(item)" v-html="item.content"></span>
                    <div class="homem-article-footer">
                        <img alt="" src="../../../public/imgs/home/tx.jpg">
                        <div>LSC</div>
                        <div>
                            <i class="iconfont icon-xuanzeriqi"></i>
                            {{item.updateTime}}
                        </div>
                        <div>
                            <i class="iconfont icon-eyes"></i>
                            {{item.views}}
                        </div>
                        <div>
                            <i class="iconfont icon-chat51"></i>
                            {{item.commentCount}}
                        </div>
                    </div>
                </div>
                <div class="homem-article-page">
                    <div class="homem-page-pre" v-if="currentPage!=1" @click="changePage('pre')"><i class="el-icon-back"></i> Previous</div>
                    <span class="homem-page-enter">{{currentPage}}/{{pageCount}}</span>
                    <div class="homem-page-next" v-if="currentPage!=pageCount" @click="changePage('next')">Next <i class="el-icon-right"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Classify",
        data() {
            return{
                tag: [],
                blog:[],
                activeIndex: 0,
                currentPage: 1,
                pageCount: 1,
                typeId: ''
            }
        },
        methods: {
            getData() {
                this.$https.get('/admin/blogs/listType').then(res =>{
                    this.tag = res.data
                    let searchBlog = {
                        typeId: this.tag[0].id
                    }
                    this.$https.post('/admin/blogs/blogSearch?pageNo='+this.currentPage,searchBlog).then(res =>{
                        var blog = []
                        for (let i = 0 ; i < res.data.list.length ; i ++) {
                            let time_obj = res.data.list[i]
                            let time1 = String(time_obj.createTime).substring(0,10)
                            let time2 = String(time_obj.createTime).substring(11,16)
                            let time = time1 + ' ' + time2
                            let time3 = String(time_obj.createTime).substring(0,10)
                            let time4 = String(time_obj.createTime).substring(11,16)
                            let time5 = time3 + ' ' + time4
                            time_obj.createTime = time
                            time_obj.updateTime = time5
                            blog.push(time_obj)
                        }
                        this.currentPage = res.data.pageNum
                        this.pageCount = res.data.pages
                        this.typeId = this.tag[0].id
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
                        this.blog = data
                    })
                })
            },
            classify(val,item) {
                this.currentPage = 1
                this.activeIndex = val
                let searchBlog = {
                    typeId: item.id
                }
                this.$https.post('/admin/blogs/blogSearch?pageNo='+this.currentPage,searchBlog).then(res =>{
                    var blog = []
                    for (let i = 0 ; i < res.data.list.length ; i ++) {
                        let time_obj = res.data.list[i]
                        let time1 = String(time_obj.createTime).substring(0,10)
                        let time2 = String(time_obj.createTime).substring(11,16)
                        let time = time1 + ' ' + time2
                        let time3 = String(time_obj.createTime).substring(0,10)
                        let time4 = String(time_obj.createTime).substring(11,16)
                        let time5 = time3 + ' ' + time4
                        time_obj.createTime = time
                        time_obj.updateTime = time5
                        blog.push(time_obj)
                    }
                    this.currentPage = res.data.pageNum
                    this.pageCount = res.data.pages
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
                    this.blog = data
                    this.typeId = item.id
                })
            },
            changePage(val){
                if (val == 'pre'){
                    this.currentPage--
                }else {
                    this.currentPage++
                }
                this.getData()
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            },
            jumpBlog(val){
                this.$router.push('/blogmail/'+val.id)
            }
        },
        mounted() {
            this.getData()
        }
    }
</script>

<style scoped="scoped" src="../../../public/css/mobile/classify.css">

</style>