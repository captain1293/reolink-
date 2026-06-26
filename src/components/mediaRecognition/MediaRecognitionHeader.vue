<template>
  <header class="media-header">
    <div class="header-text">
      <h2 class="title">{{ title }}</h2>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
.media-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;
}

.header-text {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.title {
  margin: 0;
  color: #2a2a2a;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0;
  text-align: center;
}

@media screen and (max-width: 1000px) {
  .header-text {
    gap: 14px;
  }

  .title {
    font-size: 24px;
    line-height: 28.8px;
  }
}
</style>
