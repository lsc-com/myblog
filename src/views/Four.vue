<template>
    <div class="four" :style="contentStyleObj" @click="goback">

    </div>
</template>

<script>
    export default {
        name: "Four",
        data() {
            return{
                contentStyleObj:{
                    height:''  // 当前浏览器高度
                },
            }
        },
        methods: {
            getHeight(){
                this.contentStyleObj.height=window.innerHeight+'px';
            },
            goback() {
                this.$router.push('/')
            }
        },
        created(){
            window.addEventListener('resize', this.getHeight);
            this.getHeight()
        },

        destroyed(){
            window.removeEventListener('resize', this.getHeight)
        }
    }
</script>

<style scoped>
.four {
    width: 100%;
    height: 100%;
    background: url('../../public/imgs/code/404.gif') no-repeat center center;
    background-size: cover;
}
</style>