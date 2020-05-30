<template>
    <div class="timer">
        <div class="timer-content">
            <div class='time-line'>
                <div :key="item.id" class='time-line-div' v-for='item in testList'>
                    <p @click="jumpBlog(item)">
                        <span>{{item.updateTime}}</span>
                        <span>{{item.title}}</span>
                    </p>
                    <p ref='circular'></p>
                </div>
                <div class='img-dotted'></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Timer",
        data() {
            return {
                testList: [],
            };
        },
        methods: {
            getData() {
                this.$https.get('/admin/times').then(res =>{
                    for (let i = 0 ; i < res.data.length; i++){
                        let arr_obj = {}
                        let time = String(res.data[i].updateTime).substring(0,10)
                        arr_obj.updateTime = time
                        res.data[i].updateTime = arr_obj.updateTime
                    }
                    this.testList = res.data
                })
            },
            jumpBlog(val){
                this.$router.push('/blogmail/'+val.id)
            },
        },
        mounted() {
            this.getData()
        }
    };
</script>

<style scoped="scoped" src="../../../public/css/mobile/timer.css">
</style>