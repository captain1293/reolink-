<template>
  <WelcomePopupPanel
    :visible="isVisible"
    @close="close"
  />
</template>

<script setup lang="ts">
import { useWelcomePopup } from '@/composables/useWelcomePopup'
import WelcomePopupPanel from './WelcomePopupPanel.vue'

const { isVisible, close } = useWelcomePopup()
</script>
