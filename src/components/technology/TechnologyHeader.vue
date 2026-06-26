<template>
  <header class="section-header">
    <h1 class="section-title">{{ title }}</h1>
    <p class="section-description">{{ description }}</p>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<style scoped>
.section-header {
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  margin: 0;
  color: #2a2a2a;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
}

.section-description {
  margin: 12px 0 0;
  color: #2a2a2a;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
}

@media screen and (min-width: 1000px) and (max-width: 1440px) {
  .section-header {
    padding: 0 50px;
  }
}

@media screen and (max-width: 999px) {
  .section-header {
    padding: 0 20px;
  }

  .section-title {
    color: #1e1e1e;
    margin-bottom: 12px;
    font-size: 24px;
    line-height: 28.8px;
  }

  .section-description {
    color: #777;
    font-size: 14px;
    line-height: 16.8px;
  }
}
</style>
