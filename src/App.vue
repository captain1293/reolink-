<template>
  <ReolinkHeader />
  <main class="demo-main">
    <p>Reolink Header 复刻演示 — 悬停 <strong>Products</strong> 查看产品 Mega Menu</p>
  </main>
</template>

<script setup>
import ReolinkHeader from '@/components/header/index.vue'
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f5f6f8;
  color: #1a1a1a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.demo-main {
  max-width: 1440px;
  margin: 0 auto;
  padding: 48px 24px;
}

.demo-main p {
  font-size: 16px;
  line-height: 1.6;
}
</style>
