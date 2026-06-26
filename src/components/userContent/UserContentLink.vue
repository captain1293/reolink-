<template>
  <a
    class="content-link"
    :style="linkStyle"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    @click.prevent="emit('click')"
  >
    <span class="link-text">
      {{ text }}
      <span class="link-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </span>
  </a>
</template>

<script setup lang="ts">
import { USER_CONTENT_COLORS } from '@/constants/userContent'

defineProps<{
  href: string
  text: string
  target?: string
}>()

const emit = defineEmits<{
  click: []
}>()

const linkStyle = {
  '--color': USER_CONTENT_COLORS.linkColor,
  '--hover-color': USER_CONTENT_COLORS.linkColor,
}
</script>

<style scoped>
.content-link {
  display: inline-flex;
  color: var(--color, #427bf8);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.content-link:hover {
  color: var(--hover-color, #427bf8);
  text-decoration: underline;
}

.link-text {
  display: inline-flex;
  align-items: center;
  gap: 2px;
}

.link-arrow {
  display: inline-flex;
  align-items: center;
}
</style>
