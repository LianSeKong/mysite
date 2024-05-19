<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <use :xlinkHref="href" />
    </svg>
</template>


<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const $props = defineProps(['name'])

const href = computed(() => {
    return `/spritemap.svg#${$props.name}`
})

</script>
