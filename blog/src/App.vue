<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'

}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
#app {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

</style>
