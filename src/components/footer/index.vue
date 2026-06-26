<template>
  <footer
    id="footer"
    class="site-footer"
  >
    <div class="footer-central-mod">
      <FooterNav :columns="columns" />

      <FooterMiddle
        :logo-src="logoSrc"
        :homepage-href="homepageHref"
        :homepage-aria="homepageAria"
        :tagline="tagline"
        :email="email"
        :subscribe-status="subscribeStatus"
        :is-submitting="isSubmitting"
        :payment-icons="paymentIcons"
        :social-links="socialLinks"
        @update:email="email = $event"
        @subscribe="handleSubscribe"
        @input="clearErrorOnInput"
      />

      <FooterBottom
        :legal-links="legalLinks"
        :gdpr-label="gdprLabel"
        :copyright="copyright"
        :country-name="countryName"
        @gdpr-click="handleGdprClick"
      />
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  FOOTER_COLUMNS,
  FOOTER_IMG_URLS,
  FOOTER_LEGAL_LINKS,
  FOOTER_LINKS,
  FOOTER_PAYMENT_ICONS,
  FOOTER_SOCIAL_LINKS,
  FOOTER_TEXT,
} from '@/constants/footer'
import { useFooter } from '@/composables/useFooter'
import FooterNav from './FooterNav.vue'
import FooterMiddle from './FooterMiddle.vue'
import FooterBottom from './FooterBottom.vue'

const {
  email,
  subscribeStatus,
  isSubmitting,
  clearErrorOnInput,
  handleSubscribe,
  handleGdprClick,
} = useFooter()

const columns = FOOTER_COLUMNS
const logoSrc = FOOTER_IMG_URLS.logo
const homepageHref = FOOTER_LINKS.homepage
const homepageAria = FOOTER_TEXT.homepageAria
const tagline = FOOTER_TEXT.tagline
const paymentIcons = FOOTER_PAYMENT_ICONS
const socialLinks = FOOTER_SOCIAL_LINKS
const legalLinks = FOOTER_LEGAL_LINKS
const gdprLabel = FOOTER_TEXT.gdprLabel
const copyright = FOOTER_TEXT.copyright
const countryName = FOOTER_TEXT.countryName
</script>

<style scoped>
.site-footer {
  margin-bottom: 0;
  padding: 96px 0 0;
  background-color: #000814;
  color: #fff;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 400;
}

.footer-central-mod {
  width: 100%;
}

@media screen and (max-width: 1000px) {
  .site-footer {
    padding-top: 64px;
  }
}
</style>
