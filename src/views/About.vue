<template>
    <div>
        <mobile class="mobile"></mobile>
        <pc class="pc"></pc>
    </div>
</template>

<script>
    import mobile from '../components/mobile/About'
    import pc from '../components/pc/About'
    export default {
        data() {
            return {
            }
        },
        components: {
            mobile,
            pc
        }


    }
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
