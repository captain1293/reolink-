<template>
  <div class="header-text">
    <h2 class="title">{{ title }}</h2>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<style scoped>
.header-text {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.title {
  margin: 0;
  color: #2a2a2a;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
}

.description {
  margin: 0;
  max-width: 720px;
  color: #2a2a2a;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
}

@media screen and (max-width: 1000px) {
  .header-text {
    gap: 14px;
  }

  .title {
    font-size: 24px;
    line-height: 28.8px;
  }

  .description {
    color: #777;
    font-size: 14px;
    line-height: 16.8px;
  }
}
</style>
