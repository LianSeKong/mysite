<script setup lang="ts">
import { BlogAvatar } from '@/components/Avatar'
import { type Ref, ref } from 'vue'
const loading: Ref<boolean> = ref(true);
function handleClick() {
  console.log(1)
  loading.value = !loading.value
}
</script>

<template>
    <div class="None:container overflow-auto flex h-screen bg-slate-950">
        <div class="w-[240px] shadow-lg bg-slate-950/10 py-2">
          <BlogAvatar description="LianSeKong" :width="120" :height="120" @click="handleClick"></BlogAvatar>
        </div>
        <div class="flex-1 text-gray-50" v-loading="loading">123</div>
    </div>
</template>



