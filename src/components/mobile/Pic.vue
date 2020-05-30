<template>
    <div>
        <ul>
            <li v-for="item in imgList" :key="item.id">
                <img preview :preview-text="item.picturedescription"  :src="item.pictureaddress">
                <span class="pic-name">{{item.picturename}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgList:[],
            }
        },
        methods:{
            getData() {
                this.$https.get('/admin/picture/showAllPictures').then(res =>{
                    console.log(res)
                    this.imgList = res.data
                    this.$previewRefresh()
                })
            },
        },
        mounted() {
            this.getData()
        }
    }
</script>

<style scoped>
img , li{
    position: relative;
    width: 100%;
    height: auto;
    margin-bottom: .01rem;
}
    .pic-name{
        position: absolute;
        display: block;
        bottom: .01rem;
        width: 100%;
        height: .4rem;
        line-height: .4rem;
        color: #fff;
        background: #000000ab;
        font-size: .18rem;
    }
</style>