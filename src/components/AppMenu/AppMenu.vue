<script setup lang="ts">
import { appRoutes } from '@/router/appRoutes';

const APP_MENU = [
    {label: 'Главаня', to: appRoutes.home()},
    {label: 'Меню', to: appRoutes.menu()},
    {label: 'Заказ', to: appRoutes.order()},
    {label: 'Профиль', to: appRoutes.profile()},
]

</script>

<template>
<div class="app-menu">
    <div v-for="link in APP_MENU" :key="link.label" class="app-menu__link">
        <RouterLink :to="link.to">{{ link.label }}</RouterLink>
    </div>
</div>
</template>

<style lang="scss">
.app-menu {
    border-top: 1px solid black;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    padding: 20px;
    justify-content: space-between;
    z-index: 100;
    background: #fff;

    &__link {
        a {
            color: black;
            text-decoration: none;
        }
    }

}
</style>
