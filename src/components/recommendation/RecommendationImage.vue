<template>
  <div class="image-area">
    <picture class="image-picture">
      <source :srcset="image.mobile" media="(max-width: 767px)" />
      <img
        class="image"
        :src="image.pc"
        :alt="image.alt"
        loading="lazy"
        decoding="async"
      />
    </picture>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: {
    pc: string
    mobile: string
    alt: string
  }
}>()
</script>

<style scoped>
.image-area {
  position: relative;
  overflow: hidden;
}

.image-picture {
  display: block;
  width: 100%;
  height: 100%;
}

.image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
}

@media screen and (min-width: 1000px) {
  .image-area {
    flex-shrink: 0;
    width: 586px;
  }
}

@media screen and (max-width: 999px) {
  .image-area {
    order: 2;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 100%;
  }
}
</style>
