<template>
    <div class="homem">
        <div :style="contentStyleObj" class="homem-header">
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
        <div class="homem-lable">
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
        <div class="homem-article">
            <div class="homem-lable-title">
                <span><i class="iconfont icon-biaoqian"></i></span>
                <span>New Page</span>
            </div>
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
                        {{item.createTime}}
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
</template>

<script>

    export default {
        name: "Home",
        data() {
            return {
                contentStyleObj: {
                    height: ''  // 当前浏览器高度
                },
                pageCount: 1,
                currentPage: 1,
                blog: [],
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
                    }
                    for (let i = 0 ; i < data.records.length; i ++){
                        data.records[i].content = array[i].content
                    }
                    this.blog = data.records
                })
            },
            getHeight() {
                this.contentStyleObj.height = window.innerHeight + 'px';
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
                document.documentElement.scrollTop = document.body.scrollTop = 0;
                this.getData()
            },
        },

        mounted() {
            this.getData();
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

</style>