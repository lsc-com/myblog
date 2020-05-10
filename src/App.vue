<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

    export default {

        watch: {
            // eslint-disable-next-line no-unused-vars
            '$route': function (to, from) {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }
        }

    }
</script>

<style>
    #app {
        min-height: 100%;
    }

</style>
