<script setup>
import { ref, onMounted } from 'vue';
import {
  getCharacters,
  getComics,
  getSeries,
  getTopSeries,
} from '@/services/marvelApi';
import HeroCard from '@/components/HeroCard.vue';
// import ComicsCard from '@/components/ComicsCard.vue';
import SeriesCard from '@/components/SeriesCard.vue';
import Hero from '@/components/HeroComponent.vue';
import BestSeriesComponent from '@/components/BestSeriesComponent.vue';
import MoonComponent from '@/components/MoonComponent.vue';
import SpiderMan from '@/components/SpiderManComponent.vue';

const heroes = ref([]);
const comics = ref([]);
const series = ref([]);
const seriesTopSellers = ref([]);

onMounted(async () => {
  const data = await getCharacters(4, 0);
  heroes.value = data.data.results;
  const comicsData = await getComics();
  comics.value = comicsData.data.results;
  const seriesData = await getSeries(8, 0, 2015);
  series.value = seriesData;
  const seriesTop = await getTopSeries();
  seriesTopSellers.value = seriesTop;
});
</script>

<template>
  <div class="relative">
    <Hero />
  </div>
  <div>
    <BestSeriesComponent class="relative " :series="seriesTopSellers" />
  </div>
  <div class="p-10">
    <SpiderMan/>
  </div>
  <div class="relative ">
    <div class="bg-black">
      <h3 class="py-4 mt-10 text-center text-5xl md:text-7xl font-bold tracking-tight text-white">
        Heros From Marvel
      </h3>
      <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <HeroCard v-for="hero in heroes" :key="hero.id" :hero="hero" class="group relative" />
      </div>
    </div>
    <div class="p-10">
      <MoonComponent />
    </div>
    <div class="bg-black mt-10 p-6">
      <h3 class="py-4 text-center text-5xl md:text-7xl font-bold tracking-tight text-white">
        Featured Series
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SeriesCard v-for="serie in series" :key="serie.id" :serie="serie" class="group relative" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
