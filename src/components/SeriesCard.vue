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
  <div v-if="serie && serie.id">
    <h2>{{ props.serie.title }}</h2>
    <img
      :src="serie.thumbnail ? `${serie.thumbnail.path}.${serie.thumbnail.extension}` : 'https://via.placeholder.com/200x300'"
      alt="Capa da série" />
  </div>
  <div v-else>
    <p>Carregando as Séries...</p>
  </div>
</template>
