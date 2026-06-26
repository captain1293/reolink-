<template>
  <div class="content-text">
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
.content-text {
  display: flex;
  flex-direction: column;
}

.title {
  margin: 0;
  color: #2a2a2a;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
}

.description {
  margin: 12px 0 0;
  color: #5c5c5c;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
}

@media screen and (max-width: 999px) {
  .title {
    font-size: 24px;
    line-height: 28.8px;
  }

  .description {
    margin-top: 14px;
    color: #777;
    font-size: 14px;
  }
}
</style>
