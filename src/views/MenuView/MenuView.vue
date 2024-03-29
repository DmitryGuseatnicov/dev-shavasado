<script setup lang="ts">
import { CategoryCard } from '@/components/CategoryCard';
import type { CategoryCardProps } from '@/components/CategoryCard/CategoryCard.types';

const CATEGORY_LIST: CategoryCardProps[] = [
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
  {name: 'Завтрки', link: '/', image: 'https://i.pinimg.com/564x/54/bc/8a/54bc8a5cfb3dfb9ce1c12260ba184f16.jpg'},
]
</script>

<template>
  <div class="menu-view">
    <h1 class="menu-view__title">
        Меню
    </h1>
      <div class="menu-view__list">
        <CategoryCard class="menu-view__list-item" v-for="category in CATEGORY_LIST" :key="category.name" :name="category.name" :image="category.image" :link="category.link" />
      </div>
  </div>
</template>

<style lang="scss">
.menu-view {
  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__list-item {
      width: calc(50% - 8px);
  }
}
</style>
