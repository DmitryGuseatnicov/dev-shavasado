<script setup lang="ts">
import type { OrderCardItemProps } from './OrderCardItem.types';

defineProps<OrderCardItemProps>()
</script>

<template>
  <div class="order-card-item">
    <div class="order-card-item__head">{{ `Заказ: #${id}` }}</div>
    <div class="order-card-item__row">
      <span>Дата:</span><span>{{date}}</span>
    </div>
    <div class="order-card-item__row">
      <span>Дата:</span><span>{{ status }}</span>
    </div>
    <div class="order-card-item__row">
      <span>Итого:</span><span>{{ total }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.order-card-item {
  padding: 8px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid black;

  &__row {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }
}
</style>
