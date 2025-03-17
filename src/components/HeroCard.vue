<script setup>
import { defineProps } from 'vue';
import { ref } from 'vue';
import { HeartIcon } from '@heroicons/vue/24/solid';

const isFavorite = ref(false); // necessário para utilizar somente na HeroList.vue o icone.

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

const props = defineProps({
  hero: {
    type: Object,
    required: true,  // Garantir que o prop será sempre passado
  },
  showFavorite: {
    type: Boolean,
    default: false,
  }
});

</script>


<template>
  <div v-if="hero && hero.thumbnail">
    <div class="mx-auto max-w-7xl px-8 py-10 lg: py-14">
      <div class="mt-6">
        <div class="rounded-lg relative">
          <h2 class="text-white text-5x1 font-bold mb-2 py-2 sm:text-3xl">{{ props.hero.name }}</h2>
          <img :src="props.hero.thumbnail.path + '.' + props.hero.thumbnail.extension" alt="Hero Image"
            class="aspect-square w-full rounded-md bg-gray-200 object-cover my-8">
          <button v-if="showFavorite" @click="toggleFavorite"
            class="absolute top-2 right-2 p-2 rounded-full bg-black/50 hover:bg-black/80 transition">
            <HeartIcon :class="isFavorite ? 'text-red-500' : 'text-gray-300'" class="w-6 h-6" />
          </button>
          <p class="mt-1 py-4 text-base text-white">Description: {{ props.hero.description || "No description available." }}</p>
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped>
.card {
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}

.card img {
  width: 100%;
  border-radius: 5px;
}
</style>
