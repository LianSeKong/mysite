<template>
  <div class="imageLoader" :style="{ paddingTop: containerAspectRatio + '%' }">
    <img
        ref="image"
        :src="imageSrc"
        :class="{ 'opacity-100': imageLoaded, 'opacity-0': !imageLoaded }"
        alt=""
        @load="handleLoader"
        class="image transition-opacity duration-300"
    />
    <img
        ref="placeholder"
        :src="placeholder"
        class="image placeholder"
        alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'ImageLoader',
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      imageLoaded: false,
      containerAspectRatio: 0
    };
  },
  mounted() {
    // Calculate aspect ratio of the container
    this.containerAspectRatio = this.$refs.placeholder.clientHeight / this.$refs.placeholder.clientWidth;
  },
  methods: {
    handleLoader() {
      // Set the imageLoaded flag to true once the image is loaded
      this.imageLoaded = true;
      // Emit 'load' event
      this.$emit('load');
    }
  }
};
</script>

<style lang="scss" scoped>
/* No custom CSS needed */
</style>
