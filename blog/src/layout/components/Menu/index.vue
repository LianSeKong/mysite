<template>
    <ul class="menu relative text-slate-500 text-base">
        <li v-for="item of list" :key="item.path" class="mb-1 hover:text-blue-400 hover:bg-zinc-100 transition-all cursor-pointer gap-2 px-8 flex items-center"
            :class="activeClass(item.path)"
            @click="goToLink(item.name)">
            <Icon :iconName="item.meta.icon" :iconSize="40"></Icon>
            <span class="py-3 pl-2">{{ item.meta.title }}</span>
        </li>
    </ul>
</template>
<script>
import Icon from '@/components/Icon'
import routes from '@/router/routes.js'
export default {
    name: 'BlogMenu',
    components: {
        Icon
    },
    data() {
        return {
            currentPath: ''
        }
    },
    computed: {
        list() {
            return routes[0].children.filter(item => item.meta.isShow)
        }
    },
    watch: {
        $route(newV) {
            this.currentPath = newV.path
        }
    },
    methods: {
        activeClass(path) {
            return this.currentPath.includes(path) ? 'text-blue-400 bg-zinc-100' : ''
        },
        goToLink(name) {
            if (this.$route.name === name) return;
            this.$router.push({ name })
        }
    },
    beforeMount() {
        this.currentPath = this.$route.path
    }
}

</script>


<style lang="scss" scoped>
.menu {
    font-family: 'AliR', Courier, monospace;
}
</style>>
