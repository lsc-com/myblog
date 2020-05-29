<!--<template>-->
<!--   <div>-->
<!--      <ul class="home_nav">-->
<!--         <router-link to="/">-->
<!--            <li>OPEN</li>-->
<!--         </router-link>-->
<!--         <router-link to="/">-->
<!--            <li>HomePage</li>-->
<!--         </router-link>-->
<!--         <router-link to="/classify">-->
<!--            <li>Classify</li>-->
<!--         </router-link>-->
<!--         <router-link to="/timer">-->
<!--            <li>Timer</li>-->
<!--         </router-link>-->
<!--         <router-link to="/music">-->
<!--            <li>Music</li>-->
<!--         </router-link>-->
<!--         <router-link to="/message">-->
<!--            <li>Message</li>-->
<!--         </router-link>-->
<!--         <router-link to="/about">-->
<!--            <li>About</li>-->
<!--         </router-link>-->
<!--         <li class="home-input">-->
<!--            <el-input-->
<!--                    @keyup.enter.native="searchIn"-->
<!--                    placeholder="请输入内容"-->
<!--                    prefix-icon="el-icon-search"-->
<!--                    v-model="homeInput"-->
<!--            ></el-input>-->
<!--         </li>-->
<!--      </ul>-->
<!--   </div>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "Pic"-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->


<template>
    <div class="pic">
        <div class="pic-piclists">
            <div class="v-waterfall-content" id="v-waterfall">
                <div v-for="img in waterfallList"
                     class="v-waterfall-item"
                     :key="img.id"
                     :style="{top:img.top+'px',
           left:img.left+'px',
           width:waterfallImgWidth+'px',
           height:img.height}">
                    <img :src="img.src" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pic",
        data(){
            return {
                waterfallList:[],
                imgList:[
                    require('../../../public/imgs/home/tx.jpg'),
                    require('../../../public/imgs/blog/home.jpg'),
                    require('../../../public/imgs/blog/0511.png'),
                    require('../../../public/imgs/blog/mother.jpg'),
                    require('../../../public/imgs/blog/mobile.jpg'),
                    require('../../../public/imgs/blog/s.jpg'),
                    require('../../../public/imgs/home/tx.jpg'),
                    require('../../../public/imgs/blog/home.jpg'),
                    require('../../../public/imgs/blog/0511.png'),
                    require('../../../public/imgs/blog/mother.jpg'),
                    require('../../../public/imgs/blog/mobile.jpg'),
                    require('../../../public/imgs/blog/s.jpg'),
                    require('../../../public/imgs/home/tx.jpg'),
                    require('../../../public/imgs/blog/home.jpg'),
                    require('../../../public/imgs/blog/0511.png'),
                    require('../../../public/imgs/blog/mobile.jpg'),
                    require('../../../public/imgs/blog/s.jpg'),
                    require('../../../public/imgs/blog/mother.jpg'),
                    require('../../../public/imgs/blog/mobile.jpg'),
                    require('../../../public/imgs/blog/s.jpg'),
                    require('../../../public/imgs/blog/mobile.jpg'),
                    require('../../../public/imgs/blog/s.jpg'),
                    require('../../../public/imgs/home/tx.jpg'),
                    require('../../../public/imgs/blog/home.jpg'),
                    require('../../../public/imgs/blog/0511.png'),
                    require('../../../public/imgs/blog/mother.jpg'),
                    require('../../../public/imgs/blog/mobile.jpg'),
                    require('../../../public/imgs/blog/s.jpg'),
                    require('../../../public/imgs/blog/mobile.jpg'),
                    require('../../../public/imgs/blog/s.jpg'),
                    require('../../../public/imgs/home/tx.jpg'),
                    require('../../../public/imgs/blog/home.jpg'),
                    require('../../../public/imgs/blog/0511.png'),
                    require('../../../public/imgs/blog/mother.jpg'),
                    require('../../../public/imgs/blog/mobile.jpg'),
                    require('../../../public/imgs/blog/s.jpg'),
                    require('../../../public/imgs/blog/mobile.jpg'),
                    require('../../../public/imgs/blog/s.jpg'),
                    require('../../../public/imgs/home/tx.jpg'),
                    require('../../../public/imgs/blog/home.jpg'),
                    require('../../../public/imgs/blog/0511.png'),
                    require('../../../public/imgs/blog/mother.jpg'),
                    require('../../../public/imgs/blog/mobile.jpg'),
                    require('../../../public/imgs/blog/s.jpg'),
                ],
                waterfallImgWidth:280,
                waterfallImgCol:5,
                waterfallImgRight:10,
                waterfallImgBottom:10,
                waterfallDeviationHeight:[],
            }
        },
        mounted(){
            this.calculationWidth();
        },
        methods:{
            //计算每个图片的宽度或者是列数
            calculationWidth(){
                let domWidth = document.getElementById("v-waterfall").offsetWidth;
                if (!this.waterfallImgWidth && this.waterfallImgCol){
                    this.waterfallImgWidth = (domWidth-this.waterfallImgRight*this.waterfallImgCol)/this.waterfallImgCol;
                }else if(this.waterfallImgWidth && !this.waterfallImgCol){
                    this.waterfallImgCol = Math.floor(domWidth/(this.waterfallImgWidth+this.waterfallImgRight))
                }
                //初始化偏移高度数组
                this.waterfallDeviationHeight = new Array(this.waterfallImgCol);
                for (let i = 0;i < this.waterfallDeviationHeight.length;i++){
                    this.waterfallDeviationHeight[i] = 0;
                }
                this.imgPreloading()
            },
            //图片预加载
            imgPreloading(){
                for (let i = 0;i < this.imgList.length;i++){
                    let aImg = new Image();
                    aImg.src = this.imgList[i];
                    // eslint-disable-next-line no-unused-vars
                    aImg.onload = aImg.onerror = (e)=>{
                        let imgData = {};
                        imgData.height = this.waterfallImgWidth/aImg.width*aImg.height;
                        imgData.src = this.imgList[i];
                        this.waterfallList.push(imgData);
                        this.rankImg(imgData);
                    }
                }
            },
            //瀑布流布局
            rankImg(imgData){
                // eslint-disable-next-line no-unused-vars
                let {waterfallImgWidth,waterfallImgRight,waterfallImgBottom,waterfallDeviationHeight,waterfallImgCol} = this;
                //for (let i = 0;i < this.waterfallList.length;i++){
                let minIndex = this.filterMin();
                imgData.top = waterfallDeviationHeight[minIndex];
                imgData.left = minIndex*(waterfallImgRight+waterfallImgWidth);
                waterfallDeviationHeight[minIndex] += imgData.height + waterfallImgBottom;
                //}
                // console.log(imgData);
            },
            /**
             * 找到最短的列并返回下标
             * @returns {number} 下标
             */
            filterMin(){
                const min = Math.min.apply(null, this.waterfallDeviationHeight);
                return this.waterfallDeviationHeight.indexOf(min);
            },
        }
    }
</script>

<style scoped>
    .pic-piclists{
        padding-top: 60px;
        margin: 5px auto;
    }
    .v-waterfall-content{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .v-waterfall-item{
        float: left;
        position: absolute;
    }
    .v-waterfall-item img{
        display: block;
        width: 100%;
        height: auto;
    }
</style>
