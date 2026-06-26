<template>
  <header class="promise-header">
    <h2 class="promise-title">{{ title }}</h2>
    <p class="promise-description">{{ description }}</p>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<style scoped>
.promise-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 24px;
  text-align: left;
}

.promise-title {
  margin: 0;
  color: #2a2a2a;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0;
}

.promise-description {
  margin: 0;
  max-width: 720px;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
}

@media screen and (max-width: 1000px) {
  .promise-header {
    gap: 14px;
    padding: 0 20px;
  }

  .promise-title {
    font-size: 24px;
    line-height: 28.8px;
  }

  .promise-description {
    font-size: 14px;
    line-height: 16.8px;
  }
}
</style>
