<template>
    <div>
        <mobile class="mobile"></mobile>
        <pc class="pc"></pc>
    </div>
</template>




<script>
    import mobile from "../components/mobile/Music";
    import pc from "../components/pc/Music";

    export default {
        name: "Music",
        components: {
            mobile,
            pc
        },
        mounted() {
            this.$store.dispatch('HIDE_FOOTER')
            this.$store.dispatch('HIDE_HEADER')
        },
        destroyed() {
            this.$store.dispatch('SHOW_FOOTER')
            this.$store.dispatch('SHOW_HEADER')
        }
    };
</script>

<style scoped>
    @media only screen and  (max-width: 768px){
        .pc{
            display: none !important;
        }
        .mobile{
            display: block !important;
            touch-action: auto !important;
        }
    }
    @media only screen and (min-width: 769px){
        .pc{
            display: block !important;
        }
        .mobile{
            display: none !important;
            touch-action: auto !important;
        }
    }
</style>