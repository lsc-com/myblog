<template>
    <div>
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
        <el-backtop></el-backtop>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                nowTime: ''
            }
        },
        methods:{
            getTime () {
                const _this = this;
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
        }
    }
</script>

<style scoped>

</style>