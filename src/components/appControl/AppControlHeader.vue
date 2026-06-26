<template>
  <div class="app-header">
    <h2 class="title">{{ title }}</h2>
    <p class="desc">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<style scoped>
.title {
  margin: 0;
  color: #2a2a2a;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
}

.desc {
  margin: 12px 0 0;
  color: #2a2a2a;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
}

@media screen and (max-width: 999px) {
  .title {
    font-size: 24px;
  }

  .desc {
    font-size: 14px;
  }
}
</style>
