<script setup>
import { ref, onMounted } from 'vue';
import { getCharacters, getComics, getSeries } from '@/services/marvelApi';
import HeroCard from '@/components/HeroCard.vue';
import ComicsCard from '@/components/ComicsCard.vue';
import SeriesCard from '@/components/SeriesCard.vue';

const heroes = ref([]);
const comics = ref([]);
const series = ref([]);

onMounted(async () => {
  const data  = await getCharacters(40,0);
  heroes.value = data.data.results;
  const comicsData = await getComics();
  comics.value = comicsData.data.results;
  const seriesData = await getSeries();
  series.value = seriesData.data.results;
  console.log(series);

});
</script>

<template>
  <div>
    <h1>Personagens da Marvel</h1>
    <div>
      <h1>Lista de Heróis</h1>
      <HeroCard v-for="hero in heroes" :key="hero.id" :hero="hero" />
    </div>
    <p>----------------------------</p>
    <div>
      <h1>Lista de Comics</h1>
      <ComicsCard v-for="comic in comics" :key="comic.id" :comic="comic"/>
    </div>
    <p>----------------------------</p>
    <div>
      <h1>Lista de Séries</h1>
      <SeriesCard v-for="serie in series" :key="serie.id" :serie="serie"/>
    </div>
  </div>
</template>

<style scoped>

</style>
