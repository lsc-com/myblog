<template>
    <div class="about">
        <div class="about-header">
            <img src="../../../public/imgs/classify/header.jpg">
            <span>This is my page</span>
        </div>
        <div style="clear: both"></div>
        <div class="about-main">
            <div class="about-main-content">
                <img v-image-preview src="../../../public/imgs/home/tx.jpg">
                <span class="about-content-title">LSC</span>
                <div class="about-mail">
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
                <div style="width:50%;height:.1rem;background:#acacac;margin:0 auto"></div>
                <div class="about-me">
                    <p>这里是我的个人空间</p>
                    <p>感谢您的来访</p>
                    <p>人生道路坎坷</p>
                    <p>很多事情并不尽人如意</p>
                    <p>但我们还是要顽强的将生活进行下去</p>
                    <p>在这世界上</p>
                    <p>虽然会有很多很多更优秀的人和事</p>
                    <p>我觉得</p>
                    <p>不要自卑</p>
                    <p>化悲痛为力量</p>
                    <p>努力学习</p>
                    <p>永远不要止于当前</p>
                    <p>相信大家都有那么一个隔壁家的小孩</p>
                    <p>所以从小到大</p>
                    <p>我们真的不知道自己到底有多么优秀</p>
                    <p>......</p>
                    <p>不求尽遂人意</p>
                    <p>但求问心无愧</p>
                    <p>相信自己</p>
                    <p>我就是世界上独一无二的自己</p>
                    <p>无须让别人的观点说法改变我自己原有的生活</p>
                    <p>我们都有自己的生活圈</p>
                    <p>不需要太在意别人的看法</p>
                    <p>不影响他人</p>
                    <p>做好自己</p>
                    <p>我觉得</p>
                    <p>能做到这一点</p>
                    <p>已经远超常人了</p>
                    <p>反过来想</p>
                    <p>又有多少人做到了呢</p>
                    <p>这个世界有很多不如意</p>
                    <p>可是生活还是要继续</p>
                    <p>太阳每天依旧要升起</p>
                    <p>希望永远种在你心里</p>
                    <p>再次感谢您的来访</p>
                    <p>......</p>
                </div>
                <div style="width:90%;height:.1rem;background:#acacac;margin:0 auto"></div>
                <div class="about-like">
                    <h2>打赏本站</h2>
                    <span>每一次结束，其实是又一次新旅途的开始，我相信，我们一直在路上</span>
                    <img src="../../../public/imgs/code/wcode.jpg" alt="">
                    <img src="../../../public/imgs/code/zcode.jpg" alt="">
                </div>
                <audio :src="mus" class="media-audio" loop="loop" autoplay ref="MusicPlay"></audio>
            </div>
        </div>
        <div style="clear: both"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                homeInput: '',
                nowTime: '',
                mus: require("../../../public/music/tfkz.mp3"),
            }
        },

        methods: {
            searchIn() {
                alert(this.homeInput)
                this.homeInput = ''
            }
        },
        mounted() {
            this.getTime()
        },


    }
</script>

<style scoped="scoped" src="../../../public/css/about.css">
</style>
