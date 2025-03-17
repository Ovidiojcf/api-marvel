<script setup>
import { ref, onMounted } from 'vue';
import { getCharacters } from '@/services/marvelApi';
import HeroCard from '@/components/HeroCard.vue';

const heroes = ref([]);
const limit = 20;
const offset = ref(0);
const total = ref(0);

const fetchHeroes = async () => {
  try {
    const data = await getCharacters(limit, offset.value);
    heroes.value = data.data.results;
    total.value = data.data.total;
  } catch (error) {
    console.error('Erro ao buscar na lista de Heróis:', error);
  }
};

const nextPage = () => {
  if (offset.value + limit < total.value) {
    offset.value += limit;
    fetchHeroes();
    window.scrollTo(0,0);
  }
};

const prevPage = () => {
  if (offset.value > 0) {
    offset.value -= limit;
    fetchHeroes();
  }
};

onMounted(fetchHeroes);
</script>

<template>
  <div class="w-full bg-black mx-auto px-6 py-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <HeroCard v-for="hero in heroes" :key="hero.id" :hero="hero" :showFavorite="true" />
    </div>

    <!-- Controles de Paginação -->
    <div class="flex justify-center items-center gap-4 mt-8 space-x-4">
      <button @click="prevPage" :disabled="offset === 0" class="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50">Anterior</button>
      <button @click="nextPage" :disabled="offset + limit >= total" class="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50">Próximo</button>
    </div>
  </div>
</template>


