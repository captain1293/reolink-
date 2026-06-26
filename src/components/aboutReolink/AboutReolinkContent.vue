<template>
  <div class="about-content">
    <h2 class="about-title">{{ title }}</h2>
    <p class="about-desc">{{ description }}</p>

    <div class="about-actions">
      <AboutReolinkButton
        :label="buttonLabel"
        @click="emit('learn-more')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutReolinkButton from './AboutReolinkButton.vue'

defineProps<{
  title: string
  description: string
  buttonLabel: string
}>()

const emit = defineEmits<{
  'learn-more': []
}>()
</script>

<style scoped>
.about-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 580px;
  margin-right: auto;
  color: #fff;
  text-align: left;
}

.about-title {
  max-width: 100%;
  margin: 0 0 12px;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0;
  word-break: break-word;
  overflow-wrap: anywhere;
}

.about-desc {
  max-width: 100%;
  margin: 0 0 24px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  letter-spacing: 0;
  word-break: break-word;
  overflow-wrap: anywhere;
}

.about-actions {
  display: flex;
  justify-content: flex-start;
  margin-top: 0;
}

@media screen and (max-width: 1000px) {
  .about-content {
    align-items: center;
    max-width: 100%;
    margin-right: 0;
    text-align: center;
  }

  .about-title {
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 600;
    line-height: 28.8px;
    text-transform: capitalize;
  }

  .about-desc {
    margin-bottom: 14px;
    font-size: 14px;
    line-height: 16.8px;
  }

  .about-actions {
    justify-content: center;
    width: 100%;
  }
}
</style>
