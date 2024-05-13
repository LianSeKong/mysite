<template>
    <div class="h-full" >
        <Carouse></Carouse>
    </div>
</template>


<script>
    import Carouse from './Carouse.vue';
    export default {
        name: 'MyHome',
        components: {
            Carouse
        }
    }

</script>


<style lang="scss" scoped>

.home {
    height: 100%;
    position: relative;
}
</style>