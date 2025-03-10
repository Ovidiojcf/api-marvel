<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  comic: {
    type: Object,
    required: true,
  }
});
</script>

<template>
  <div v-if="comic && comic.title">
    <h2>{{ props.comic.title }}</h2>
    <img
      :src="comic.thumbnail ? `${comic.thumbnail.path}.${comic.thumbnail.extension}` : 'https://via.placeholder.com/200x300'"
      alt="Capa da série" />
  </div>
  <div v-else>
    <p>Não foi possivel achar nenhuma revista</p>
  </div>
</template>
