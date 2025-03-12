<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
  hero: {
    type: Object,
    required: true,  // Garantir que o prop será sempre passado
  }
});

</script>


<template>
  <div v-if="hero && hero.thumbnail">
    <!-- Grid Container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div class="flex flex-col items-center">
        <h2 class="text-xl font-semibold mb-2">{{ props.hero.name }}</h2>
        <img
          :src="props.hero.thumbnail.path + '.' + props.hero.thumbnail.extension"
          alt="Hero Image"
          class="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
  <div v-else>
    <p class="text-center text-gray-500">Carregando herói...</p>
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
