<script setup lang="ts">
import { BlogAvatar } from '@/components/Avatar'
import t from './icons/logo.svg'
import { type Ref, ref, computed, onRenderTracked, onRenderTriggered } from 'vue'
const loading: Ref<boolean> = ref(true);
function handleClick() {
  loading.value = !loading.value
}
const test = computed(() => {
  return loading.value && false
})

console.log(t);


</script>

<template>
    <div :id="test"  class="None:container overflow-auto flex h-screen bg-slate-950">
        <div class="w-[240px] shadow-lg bg-slate-950/10 py-2">
          <BlogAvatar description="LianSeKong" :width="120" :height="120" @click="handleClick"></BlogAvatar>
        </div>

        <div class="flex-1 text-gray-50" v-loading="loading">
          <MyIcon />

        </div>
    </div>
</template>



