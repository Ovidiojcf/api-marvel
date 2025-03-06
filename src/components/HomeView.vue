<script setup>
import { ref, onMounted } from 'vue';
import { getCharacters } from '@/services/marvelApi';
import HeroCard from '@/components/HeroCard.vue';

const heroes = ref([]);

onMounted(async () => {
  const data  = await getCharacters();
  console.log(data)
  heroes.value = data.data.results;
  console.log(heroes.value);
});
</script>

<template>
  <div>
    <h1>Personagens da Marvel</h1>
    <div class="grid">
      <HeroCard v-for="hero in heroes" :key="hero.id" :hero="hero" />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
