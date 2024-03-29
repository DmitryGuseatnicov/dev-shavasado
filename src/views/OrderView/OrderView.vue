<script setup lang="ts">
import { OrderCardItem } from '@/components/OrderCardItem';
import { OrderCardItemProps } from '@/components/OrderCardItem/OrderCardItem.types';

const ORDERS_LIST: OrderCardItemProps[] = [
  {id: '123cds2cdcd', date: new Date().toLocaleDateString() ,total: '658', status: 'оплачен'},
  {id: '12fddfscds2cdcd', date: new Date().toLocaleDateString() ,total: '658', status: 'оплачен'},
  {id: '123cds2sdfdcdcd', date: new Date().toLocaleDateString() ,total: '658', status: 'оплачен'},
  {id: '34-343=43423', date: new Date().toLocaleDateString() ,total: '658', status: 'оплачен'},
]
</script>

<template>
  <div  class="order-view">
    <h1 class="order-view__title">Заказы</h1>
    <div class="order-view__list">
      <OrderCardItem class="order-view__list-item" v-for="order in ORDERS_LIST" :key="order.id" :id="order.id" :date="order.date" :total="order.total" :status="order.status" />
    </div>
  </div>
</template>

<style lang="scss">
.order-view {
  &__list-item {
    margin-top: 10px;
  }
}
</style>
