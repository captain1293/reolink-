<template>
  <button
    type="button"
    class="floating-circle-btn"
    :class="{
      'floating-circle-btn--spaced': spaced,
      'floating-circle-btn--decorative': decorative,
    }"
    :aria-label="ariaLabel"
    :aria-hidden="decorative ? true : undefined"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  ariaLabel: string
  spaced?: boolean
  decorative?: boolean
}>()

const emit = defineEmits<{
  click: []
}>()

function handleClick() {
  if (!props.decorative) {
    emit('click')
  }
}
</script>

<style scoped>
.floating-circle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #fff;
  color: #333;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  transition: color 0.2s ease;
  pointer-events: auto;
}

.floating-circle-btn--decorative {
  cursor: default;
  pointer-events: none;
}

.floating-circle-btn:not(.floating-circle-btn--decorative) {
  cursor: pointer;
}

.floating-circle-btn:not(.floating-circle-btn--decorative):hover {
  color: #0050e2;
}

.floating-circle-btn--spaced {
  margin-top: 10px;
}
</style>
