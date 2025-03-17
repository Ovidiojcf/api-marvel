<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  serie: {
    type: Object,
    required: true,
  }
});
</script>

<template>
  <div v-if="serie && serie.id" class="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <!-- Imagem da capa da série -->
    <img
      :src="serie.thumbnail ? `${serie.thumbnail.path}.${serie.thumbnail.extension}` : 'https://via.placeholder.com/200x300'"
      alt="Capa da série"
      class="w-full  h-auto rounded-md mx-auto mb-4"
    />
    <!-- Título da série -->
    <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ props.serie.title }}</h2>

    <!-- Exibição do período da série -->
    <p v-if="serie.startYear && serie.endYear" class="text-gray-600 text-sm mb-4">
      {{ serie.startYear }} - {{ serie.endYear }}
    </p>
  </div>
  <div v-else>
    <p class="text-center text-gray-500">Carregando as Séries...</p>
  </div>
</template>
