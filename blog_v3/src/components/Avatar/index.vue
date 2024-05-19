<template>
  <div class="text-center select-none p-2.5 cursor-pointer">
    <img class="block object-cover mx-auto my-1" :src="imgSrc" :width="width" :height="height" alt="头像">
    <span class=" text-lg font-mono font-bold text-[#ff5576]" >{{ description }}</span>
  </div>
</template>


<script setup lang="ts">
defineOptions({
  name: 'BlogAvatar',
})

import { defineProps } from 'vue'
defineProps({
  width: {
    default: 40,
    type: Number
  },
  height: {
    default: 40,
    type: Number
  },
  description: {
    type: String,
    default: 'Admin'
  },
  imgSrc: {
    type: String,
    default: 'https://img.icons8.com/cotton/512/joystick.png'
  }
})
</script>
