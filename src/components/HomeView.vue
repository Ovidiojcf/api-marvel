<script setup>
import { ref, onMounted } from 'vue';
import { getCharacters, getComics } from '@/services/marvelApi';
import HeroCard from '@/components/HeroCard.vue';
import ComicsCard from '@/components/ComicsCard.vue'

const heroes = ref([]);
const comics = ref([]);

onMounted(async () => {
  const data  = await getCharacters();
  heroes.value = data.data.results;
  const comicsData = await getComics();
  comics.value = comicsData.data.results;
  console.log(comics.value);
});
</script>

<template>
  <div>
    <h1>Personagens da Marvel</h1>
    <div class="grid">
      <HeroCard v-for="hero in heroes" :key="hero.id" :hero="hero" />
    </div>
    <div class="grid">
      <ComicsCard v-for="comic in comics" :key="comic.id" :comic="comic"/>
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
