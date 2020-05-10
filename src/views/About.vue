<template>
    <div class="home">
        <ul :class="s_obj">
            <router-link to="/about">
                <li>OPEN</li>
            </router-link>
            <li>HomePAGE</li>
            <li>Classify</li>
            <li>Timer</li>
            <li>Music</li>
            <li>Message</li>
            <li>About</li>
        </ul>
        <div class="home-header">
            <div class="home-bg"></div>
            <div class="home-logo">
                <img alt src="../../public/imgs/tx.jpg"/>
            </div>
            <div class="home-name">
                <span>OPEN</span>
            </div>
            <div class="home-mail">
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcode" src="../../public/imgs/code.jpg"/>
                    </div>
                    <span>
            <i class="iconfont icon-wo-copy"></i>
          </span>
                </el-tooltip>
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcode" src="../../public/imgs/code.jpg"/>
                    </div>
                    <span>
            <i class="iconfont icon-weixin"></i>
          </span>
                </el-tooltip>
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcode" src="../../public/imgs/code.jpg"/>
                    </div>
                    <span>
            <i class="iconfont icon-qq"></i>
          </span>
                </el-tooltip>
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcode" src="../../public/imgs/code.jpg"/>
                    </div>
                    <span>
            <i class="iconfont icon-Git-"></i>
          </span>
                </el-tooltip>
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcode" src="../../public/imgs/code.jpg"/>
                    </div>
                    <span>
            <i class="iconfont icon-CSDN"></i>
          </span>
                </el-tooltip>
                <el-tooltip placement="bottom">
                    <div slot="content">
                        <img class="rqcode" src="../../public/imgs/code.jpg"/>
                    </div>
                    <span>
            <i class="iconfont icon-youxiang"></i>
          </span>
                </el-tooltip>
            </div>
            <div class="home-title">
                <span>Welcome to my blog ! A website worth watching !</span>
            </div>
            <div style="clear:both"></div>
            <div style="width:30%;height:.1rem;background:#ffffff;margin:0 auto"></div>
            <div class="home-content">
                <span>This is my blog.</span>
                <br/>
                <span>It records my development life.</span>
                <br/>
                <span>I study here.</span>
                <br/>
                <span>It's very good</span>
                <br/>
            </div>
            <div class="home-footer">
                <el-button round>HomePage</el-button>
                <el-button round>Classify</el-button>
                <el-button round>Timer</el-button>
                <el-button round>Music</el-button>
                <el-button round>Message</el-button>
                <el-button round>About</el-button>
            </div>
        </div>
        <img alt src="https://onestar.newstar.net.cn/images/bg.jpg"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                whether: false,
                curId: 0
            }
        },

        methods: {
            handleScroll() {
                var scrollTop =
                    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                // console.log(scrollTop)
                if (scrollTop > 700) {
                    this.whether = true;
                } else {
                    this.whether = false;
                }
            },
        },

// 监听页面滚动
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },


    }
</script>

<style>
    .fixTitle {
        position: fixed;
        top: 2.25rem;
        left: 0;
        width: 100%;
        border-top: 0.05rem solid #f5f5f5;
        border-bottom: 0.05rem solid #f5f5f5;
        background: #f5f5f5;
    }

</style>
