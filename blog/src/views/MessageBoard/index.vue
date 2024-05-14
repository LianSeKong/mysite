<template>
    <div @click="handleClick" v-loading="loading">
        Message
    </div>
</template>

<script>
export default {
    name: 'MessageBox',
  data() {
      return {
        loading: true
      }
  },
    methods: {
      handleClick() {
          this.loading = !this.loading;
      }
    }

}
</script>


<style></style>
