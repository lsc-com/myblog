<template>
    <div class="timer">
        <div class="timer-content">
            <div class='time-line'>
                <div :key="item.id" class='time-line-div' v-for='(item,index) in testList'>
                    <p v-show="index%2 == 0" @click="jumpBlog(item)">
                        <span>{{item.updateTime}}</span>
                        <span>{{item.title}}</span>
                    </p>
                    <p ref='circular'></p>
                    <p v-show="index%2" @click="jumpBlog(item)">
                        <span>{{item.updateTime}}</span>
                        <span>{{item.title}}</span>
                    </p>
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

<style scoped="scoped" src="../../../public/css/timer.css">
</style>