<script setup lang="ts">
import type {CategoryCardProps} from './CategoryCard.types';

defineProps<CategoryCardProps>()
</script>

<template>
  <RouterLink class="category-card" :to="link">
    <div class="category-card__image">
      <img :src="image" alt="category">
    </div>
    <div class="category-card__name">{{ name }}</div>
  </RouterLink>
</template>

<style lang="scss">
.category-card {
  text-decoration: none;
  padding: 8px;

  &__image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  &__name {
    text-decoration: none;
    color: black;
    text-align: center;
  }
}
</style>
