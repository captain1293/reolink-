<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="icon">
        <div class="icon-media">
          <img
            class="icon-image"
            :src="item.iconSrc"
            :alt="item.iconAlt"
          >
        </div>
      </div>

      <div class="card-body">
        <div
          class="desc-row"
          :class="{ 'desc-row--has-remark': hasRemark }"
        >
          <div class="card-desc">{{ item.description }}</div>

          <PromiseRemarkBalloon
            v-if="hasRemark"
            :content="item.remark"
            :label="item.description"
            :visible="isTooltipVisible"
            @show="emit('show-tooltip', item.id)"
            @hide="emit('hide-tooltip')"
            @toggle="emit('toggle-tooltip', item.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PromiseItem } from '@/types/promise'
import PromiseRemarkBalloon from './PromiseRemarkBalloon.vue'

const props = defineProps<{
  item: PromiseItem
  activeTooltipId: string | null
}>()

const emit = defineEmits<{
  'show-tooltip': [id: string]
  'hide-tooltip': []
  'toggle-tooltip': [id: string]
}>()

const hasRemark = computed(() => Boolean(props.item.remark))

const isTooltipVisible = computed(
  () => props.activeTooltipId === props.item.id,
)
</script>

<style scoped>
.card-wrapper {
  display: flex;
  align-self: stretch;
  align-items: stretch;
  min-height: 0;
}

.card {
  display: flex;
  flex-direction: column;
  flex: auto;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 15px 14px;
  border-radius: 10px;
  background: #fff;
  text-align: center;
  box-shadow: 0 2px 5px rgba(77, 52, 14, 0.04);
}

.icon {
  display: flex;
  flex: 0 0 60px;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
}

.icon-media {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.icon-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card-body {
  display: flex;
  flex: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 0;
  text-align: center;
}

.desc-row {
  box-sizing: border-box;
  display: flex;
  flex: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 0;
  margin: 0 auto;
}

.desc-row--has-remark {
  padding-left: 22px;
}

.card-desc {
  max-width: 100%;
  color: #2a2a2a;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  letter-spacing: 0;
  text-align: center;
  word-break: break-word;
  overflow-wrap: break-word;
}

@media screen and (max-width: 1000px) {
  .icon {
    flex-basis: 46px;
    width: 46px;
    height: 46px;
  }

  .desc-row--has-remark {
    padding-left: 20px;
  }

  .card-desc {
    max-width: calc(100% - 20px);
    font-size: 14px;
    font-weight: 600;
    line-height: 16.8px;
  }
}
</style>
