<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
  hero: {
    type: Object,
    required: true,  // Garantir que o prop será sempre passado
  }
});;

</script>


<template>
  <div v-if="hero && hero.thumbnail">
    <h2>{{ props.hero.name }}</h2>
    <img :src="props.hero.thumbnail.path + '.' + props.hero.thumbnail.extension" alt="Hero Image" />
  </div>
  <div v-else>
    <p>Carregando herói...</p>
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
