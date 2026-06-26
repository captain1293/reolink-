<template>
  <div class="footer-middle-content">
    <div class="footer-mt-content">
      <div class="logo-content">
        <div class="logo-box">
          <a
            :href="homepageHref"
            class="botlogo"
          >
            <span class="sr-only">{{ homepageAria }}</span>
            <img
              id="footer-logo"
              :src="logoSrc"
              alt="Reolink Logo"
            >
          </a>
          <span class="logo-dec">{{ tagline }}</span>
        </div>
      </div>

      <FooterSubscribe
        :email="email"
        :status="subscribeStatus"
        :is-submitting="isSubmitting"
        @update:email="emit('update:email', $event)"
        @subscribe="emit('subscribe')"
        @input="emit('input')"
      />
    </div>

    <div class="footer-mb-content">
      <FooterPayments :icons="paymentIcons" />
      <FooterSocial :links="socialLinks" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FooterPaymentIcon, FooterSocialLink, FooterSubscribeStatus } from '@/types/footer'
import FooterSubscribe from './FooterSubscribe.vue'
import FooterPayments from './FooterPayments.vue'
import FooterSocial from './FooterSocial.vue'

defineProps<{
  logoSrc: string
  homepageHref: string
  homepageAria: string
  tagline: string
  email: string
  subscribeStatus: FooterSubscribeStatus
  isSubmitting: boolean
  paymentIcons: FooterPaymentIcon[]
  socialLinks: FooterSocialLink[]
}>()

const emit = defineEmits<{
  'update:email': [value: string]
  subscribe: []
  input: []
}>()
</script>

<style scoped>
.footer-middle-content {
  padding: 80px 40px 10px;
  background-color: #0050e2;
}

.footer-mt-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 90px;
}

.logo-content {
  flex: 1;
}

.botlogo {
  display: block;
  width: 203px;
  font-size: 0;
}

.botlogo img {
  display: block;
  width: 100%;
  height: auto;
}

.logo-dec {
  display: block;
  margin-top: 10px;
  color: #fff;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.2;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.footer-mb-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

@media screen and (max-width: 1000px) {
  .footer-middle-content {
    padding: 48px 20px 10px;
  }

  .footer-mt-content {
    flex-direction: column;
    margin-bottom: 48px;
  }

  .footer-mb-content {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
