<template>
    <div class="text-center p-2.5 cursor-pointer">
        <img class="block object-cover mx-auto my-1" :src="imgSrc" :width="width" :height="height" alt="头像">
        <span class=" font-['AliW'] text-lg text-blue-500" >{{ description }}</span>
    </div>
</template>


<script>
export default {
    name: 'BlogAvatar',
    props: {
        width: {
            required: true,
            type: Number
        },
        height: {
            required: true,
            type: Number
        },
        description: {
            type: String,
            default: 'Admin'
        },
        imgSrc: {
            type: String,
            default: 'https://img.icons8.com/stickers/200/mana.png'
        }
    }
}

</script>
