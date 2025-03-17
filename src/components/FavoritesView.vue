<script setup>
import { useHeroStore } from '@/stores/heroStore';
import HeroCard from '@/components/HeroCard.vue';

const heroStore = useHeroStore();
</script>

<template>
  <div class="w-full bg-black mx-auto px-6 py-12">
    <h1 class="text-white text-3xl font-bold text-center mb-6">Heróis Favoritos</h1>

    <div v-if="heroStore.favorites.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <HeroCard v-for="hero in heroStore.favorites" :key="hero.id" :hero="hero" :showFavorite="true" />
    </div>

    <div v-else>
      <p  class=" h-96 text-white text-center text-lg">Nenhum herói favoritado ainda.</p>
    </div>
  </div>
</template>
