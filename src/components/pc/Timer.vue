<template>
    <div class="timer">
        <div class="timer-content">
            <div class='time-line'>
                <div :key="item.id" class='time-line-div' v-for='item in testList'>
                    <p v-show="item.id%2">
                        <span>2020-05-10</span>
                        <span>{{item.text}}</span>
                    </p>
                    <p ref='circular'></p>
                    <p v-show="item.id%2 == 0">
                        <span>2020-05-10</span>
                        <span>{{item.text}}</span>
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
                homeInput: "",
                testList: [
                    {id: '1', time: '2020-05-10', text: 'hello'},
                    {id: '2', time: '2020-05-10', text: 'hello'},
                    {id: '3', time: '2020-05-10', text: 'hello'},
                    {id: '4', time: '2020-05-10', text: 'hello'},
                    {id: '5', time: '2020-05-10', text: 'hello'},
                    {id: '6', time: '2020-05-10', text: 'hello'}
                ],
            };
        },
        methods: {
            searchIn() {
                alert(this.homeInput)
                this.homeInput = ''
            },
            getTime () {
                var _this = this;
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
        },
        mounted() {
            this.getTime()
        }
    };
</script>

<style scoped="scoped" src="../../../public/css/timer.css">
</style>