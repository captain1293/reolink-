<template>
  <div class="footer-bottom-content">
    <div class="footer-bl-content">
      <div class="last-bottom-box">
        <ul>
          <li
            v-for="link in legalLinks"
            :key="link.id"
          >
            <a
              class="botlink"
              :href="link.href"
            >{{ link.label }}</a>
          </li>
        </ul>

        <button
          type="button"
          class="footer-gdpr-btn"
          @click="emit('gdpr-click')"
        >
          {{ gdprLabel }}
        </button>

        <span class="desc">
          <span>{{ copyright }}</span>
        </span>
      </div>
    </div>

    <div class="footer-br-content">
      <div class="copyright-worktime-box">
        <div class="toggle-lang-box show-country-selector">
          <div class="select-wrap">
            <span
              class="country-abbreviation"
              :title="countryName"
            >{{ countryName }}</span>
            <span class="arrow-down" aria-hidden="true">▼</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  legalLinks: ReadonlyArray<{ id: string; label: string; href: string }>
  gdprLabel: string
  copyright: string
  countryName: string
}>()

const emit = defineEmits<{
  'gdpr-click': []
}>()
</script>

<style scoped>
.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 10px 40px 30px;
  background-color: #0050e2;
}

.footer-bl-content {
  display: flex;
  flex-direction: column;
}

.last-bottom-box {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 12px 16px;
  padding: 0;
  border-bottom: none;
}

.last-bottom-box ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #fff;
  font-size: 12px;
}

.last-bottom-box ul li {
  display: inline-block;
  margin: 0;
  padding-right: 10px;
}

.last-bottom-box ul li + li {
  padding-left: 10px;
}

.botlink {
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  text-decoration: none;
}

.botlink:hover {
  text-decoration: underline;
}

.footer-gdpr-btn {
  padding: 0;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  text-decoration: underline;
  cursor: pointer;
  font-family: inherit;
}

.desc {
  display: block;
  color: #999;
  font-size: 12px;
  font-weight: 500;
}

.footer-br-content .copyright-worktime-box {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 200px;
  text-align: right;
}

.show-country-selector {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding-bottom: 10px;
  color: #999;
  cursor: pointer;
}

.select-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 21px;
  padding: 3px 7px;
  border-radius: 4px;
  background: #4d85eb;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
}

.country-abbreviation {
  display: inline-block;
  max-width: 160px;
  margin-right: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.arrow-down {
  font-size: 11px;
  line-height: 1;
}

@media screen and (max-width: 1000px) {
  .footer-bottom-content {
    flex-direction: column;
    padding: 10px 20px 30px;
  }

  .footer-br-content .copyright-worktime-box {
    text-align: left;
  }

  .show-country-selector {
    justify-content: flex-start;
  }
}
</style>
