<template>
  <div class="products-list-content">
    <ul class="product-list-ul">
      <li
        v-for="column in columns"
        :key="column.id"
        :class="{ 'footer-programs': column.id === 'programs' }"
      >
        <h3>{{ column.title }}</h3>
        <a
          v-for="link in column.links"
          :key="link.id"
          class="footerlink"
          :class="{ 'footer-a-blue': link.highlight }"
          :href="link.href"
          :target="link.target"
          :rel="link.rel"
        >
          {{ link.label }}
          <span
            v-if="link.highlight"
            class="link-arrow"
            aria-hidden="true"
          >→</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { FooterColumn } from '@/types/footer'

defineProps<{
  columns: FooterColumn[]
}>()
</script>

<style scoped>
.products-list-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px 80px;
}

.product-list-ul {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}

.product-list-ul li {
  margin: 0;
}

.product-list-ul h3 {
  margin: 0 0 20px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
}

.footerlink {
  display: block;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.footerlink + .footerlink {
  margin-top: 10px;
}

.footerlink:hover {
  opacity: 1;
}

.footer-a-blue {
  color: #0e6aff;
  opacity: 1;
}

.footer-a-blue:hover {
  text-decoration: underline;
}

.link-arrow {
  display: inline-block;
  margin-left: 2px;
  font-size: 14px;
}

@media screen and (max-width: 1200px) {
  .product-list-ul {
    flex-wrap: wrap;
    gap: 40px 32px;
  }

  .product-list-ul li {
    flex: 1 1 calc(50% - 16px);
    min-width: 200px;
  }
}

@media screen and (max-width: 767px) {
  .products-list-content {
    max-width: calc(100% - 40px);
    padding-bottom: 48px;
  }

  .product-list-ul {
    flex-direction: column;
    gap: 32px;
  }

  .product-list-ul li {
    flex: none;
    width: 100%;
  }

  .product-list-ul h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  .footerlink {
    font-size: 14px;
  }
}
</style>
