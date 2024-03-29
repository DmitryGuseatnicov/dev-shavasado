<script setup lang="ts">
// import WebApp from '@twa-dev/sdk'
</script>

<template>
  <div class="home-view">
    <div class="home-view__title">
        Главная
    </div>
  </div>
</template>

<style lang="scss">
.home-view {
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;

  &__title {
    font-size: 40px;
    color: $color-gray-dark;
  }
}
</style>