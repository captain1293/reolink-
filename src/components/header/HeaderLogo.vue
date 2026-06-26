<template>
  <div class="header-logo">
    <a :href="homeHref" :title="logoTitle">
      <img
        id="header-logo"
        class="logo"
        :src="logoSrc"
        :alt="logoAlt"
      >
    </a>
  </div>
</template>

<script setup lang="ts">
import { HEADER_TEXT, IMG_URLS } from '@/constants/header'

const logoSrc = IMG_URLS.logo
const logoTitle = HEADER_TEXT.logoTitle
const logoAlt = HEADER_TEXT.logoAlt
const homeHref = 'https://reolink.com/'
</script>

<style scoped>
.header-logo {
  flex-shrink: 0;
}

.header-logo a {
  display: block;
  line-height: 0;
}

.logo {
  height: 28px;
  width: auto;
  display: block;
}
</style>
