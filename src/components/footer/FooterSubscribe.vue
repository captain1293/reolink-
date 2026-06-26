<template>
  <div class="reo-subscription-box pre-subscribe">
    <div class="reserve-describe">{{ describe }}</div>

    <div class="footer-flex-content">
      <input
        class="reo-subscription-input"
        type="email"
        :title="inputTitle"
        :placeholder="placeholder"
        :value="email"
        :disabled="isSubmitting"
        @input="onInput"
        @keydown.enter.prevent="emit('subscribe')"
      >
      <button
        type="button"
        class="subscribe-btn"
        :class="{ 'is-submiting': isSubmitting, disabled: isSubmitting }"
        :disabled="isSubmitting"
        @click="emit('subscribe')"
      >
        <span class="btn-text">{{ isSubmitting ? processingLabel : buttonLabel }}</span>
        <svg
          class="email-icon"
          viewBox="0 0 24 24"
          width="26"
          height="26"
          aria-hidden="true"
        >
          <path
            d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 2 8 5 8-5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <p
      v-if="status === 'success'"
      class="success-tips success-attention"
    >
      <span class="success-icon" aria-hidden="true">✓</span>
      {{ successMessage }}
    </p>

    <div
      v-if="showErrors"
      class="tips-wrap"
    >
      <p
        v-if="status === 'invalid'"
        class="valid-tips error-attention"
      >
        {{ invalidMessage }}
      </p>
      <p
        v-if="status === 'server'"
        class="server-tips error-attention"
      >
        {{ serverErrorMessage }}
      </p>
      <p
        v-if="status === 'repeat'"
        class="repeat-tips error-attention"
      >
        {{ repeatMessage }}
      </p>
      <p
        v-if="status === 'frequent'"
        class="frequent-tips error-attention"
      >
        {{ frequentMessage }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { FooterSubscribeStatus } from '@/types/footer'
import { FOOTER_TEXT } from '@/constants/footer'

const props = defineProps<{
  email: string
  status: FooterSubscribeStatus
  isSubmitting: boolean
}>()

const emit = defineEmits<{
  'update:email': [value: string]
  subscribe: []
  input: []
}>()

const describe = FOOTER_TEXT.subscribeDescribe
const placeholder = FOOTER_TEXT.subscribePlaceholder
const inputTitle = 'subscribe email'
const buttonLabel = FOOTER_TEXT.subscribeButton
const processingLabel = FOOTER_TEXT.subscribeProcessing
const successMessage = FOOTER_TEXT.subscribeSuccess
const invalidMessage = FOOTER_TEXT.subscribeInvalid
const serverErrorMessage = FOOTER_TEXT.subscribeServerError
const repeatMessage = FOOTER_TEXT.subscribeRepeat
const frequentMessage = FOOTER_TEXT.subscribeFrequent

const showErrors = computed(
  () => ['invalid', 'server', 'repeat', 'frequent'].includes(props.status),
)

function onInput(e: Event) {
  emit('update:email', (e.target as HTMLInputElement).value)
  emit('input')
}
</script>

<style scoped>
.reo-subscription-box {
  width: 480px;
  max-width: 100%;
}

.reserve-describe {
  margin-bottom: 20px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}

.footer-flex-content {
  display: flex;
  position: relative;
  width: 100%;
}

.reo-subscription-input {
  flex: 1;
  height: 48px;
  padding: 0 12px 0 20px;
  border: 1px solid #fff;
  border-right: none;
  border-radius: 5px 0 0 5px;
  background: #fff;
  color: #000814;
  font-size: 16px;
  font-weight: 500;
  line-height: 46px;
  outline: none;
}

.reo-subscription-input::placeholder {
  color: #d5d5d5;
}

.reo-subscription-input:focus {
  border-color: #fff;
  background: #fff;
}

.subscribe-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 48px;
  padding: 0;
  border: 1px solid #2da7ff;
  border-radius: 0 5px 5px 0;
  background: #2da7ff;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

.subscribe-btn:hover:not(:disabled) {
  background: #1a96ee;
  border-color: #1a96ee;
}

.subscribe-btn.is-submiting,
.subscribe-btn.disabled {
  pointer-events: none;
  background: #ccc;
  border-color: #ccc;
}

.btn-text {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

.email-icon {
  flex-shrink: 0;
}

.success-tips {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 14px 0 0;
  color: #63c622;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
}

.success-icon {
  font-size: 14px;
}

.tips-wrap {
  margin-top: 4px;
  color: #e74330;
  font-size: 14px;
}

.error-attention {
  margin: 4px 0 0;
}
</style>
