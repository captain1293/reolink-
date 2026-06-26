<template>
  <div class="site-icon">
    <a
      v-for="link in links"
      :key="link.id"
      :href="link.href"
      :title="link.title"
      rel="nofollow"
      target="_blank"
    >
      <component :is="iconMap[link.icon]" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import type { FooterSocialLink } from '@/types/footer'

defineProps<{
  links: FooterSocialLink[]
}>()

const iconProps = {
  width: 22,
  height: 22,
  fill: 'currentColor',
  'aria-hidden': 'true',
}

const iconMap = {
  facebook: () => h('svg', { viewBox: '0 0 24 24', ...iconProps }, [
    h('path', { d: 'M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v8h4v-8h3l1-4h-4v-2c0-.6.4-1 1-1z' }),
  ]),
  x: () => h('svg', { viewBox: '0 0 24 24', ...iconProps }, [
    h('path', { d: 'M17.3 4H20l-6.2 7.1L20.5 20h-4.6l-3.6-4.7L7.8 20H5l6.7-7.6L3.5 4h4.7l3.3 4.3L17.3 4zm-1.6 14h1.3L8.5 5.9H7.1L15.7 18z' }),
  ]),
  youtube: () => h('svg', { viewBox: '0 0 24 24', ...iconProps }, [
    h('path', { d: 'M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 9 2 12 2 12s0 3 .4 4.8a2.5 2.5 0 0 0 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.8.4-4.8.4-4.8s0-3-.4-4.8zM10 15.5V8.5l6 3.5-6 3.5z' }),
  ]),
  instagram: () => h('svg', { viewBox: '0 0 24 24', ...iconProps }, [
    h('path', { d: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5zM17.5 7a1 1 0 1 1-1 1 1 1 0 0 1 1-1z' }),
  ]),
  reddit: () => h('svg', { viewBox: '0 0 24 24', ...iconProps }, [
    h('path', { d: 'M14.5 11.25a1.25 1.25 0 1 1-1.25-1.25 1.25 1.25 0 0 1 1.25 1.25zm-5 0a1.25 1.25 0 1 1-1.25-1.25 1.25 1.25 0 0 1 1.25 1.25zM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm5.84 11.56a6.3 6.3 0 0 1 .19 1.54 5.9 5.9 0 0 1-3.37 1.06 8.08 8.08 0 0 1-1.66 1.7 2.43 2.43 0 0 1-3.08 0 8.08 8.08 0 0 1-1.66-1.7 5.9 5.9 0 0 1-3.37-1.06 6.3 6.3 0 0 1 .19-1.54 3.5 3.5 0 0 1-1.4-2.8 3.52 3.52 0 0 1 3.5-3.5 3.42 3.42 0 0 1 2.45 1 6.38 6.38 0 0 1 3.84 0 3.42 3.42 0 0 1 2.45-1 3.52 3.52 0 0 1 3.5 3.5 3.5 3.5 0 0 1-1.4 2.8z' }),
  ]),
}
</script>

<style scoped>
.site-icon {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 24px;
}

.site-icon a {
  display: block;
  color: #fff;
  opacity: 0.69;
  transition: opacity 0.2s;
}

.site-icon a:hover {
  opacity: 1;
}

@media screen and (max-width: 1000px) {
  .site-icon {
    justify-content: flex-start;
  }
}
</style>
