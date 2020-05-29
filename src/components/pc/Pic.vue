<template>
    <div>
        <div class="masonry">
            <div class="item" v-for="item in imgList" :key="item.id">
                <img preview :preview-text="item.picturedescription" :src="item.pictureaddress">
                <span class="pic-span">{{item.picturename}}</span>
            </div>
        </div>
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
<style>
    @import '../../../public/css/pic.css';
</style>