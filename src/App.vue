<script setup lang="ts">
import { RouterView } from 'vue-router';

import { AppMenu } from './components/AppMenu';
</script>

<template>
  <AppConfirm />
  <main class="main">
    <RouterView />
  </main>
  <AppMenu />
</template>

<style lang="scss">
.main {
  padding-bottom: 80px;
}
</style>
