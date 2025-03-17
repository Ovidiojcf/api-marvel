<script setup>
import { defineProps } from 'vue';

const { series } = defineProps({
  series: {
    type: Array,
    required: true,
  }
});
</script>

<template>
  <div class="bg-gray-700">
    <div class="max-w-2xl px-4 py-16 sm: max-w-full px-6 sm:py-24 lg:max-w-full px-8">
      <h2 class="py-4 mt-10 text-center text-5xl md:text-6xl font-bold tracking-tight text-black">Best Sellers Series
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="serie in series" :key="serie.id" class="  overflow-hidden">
          <div>
            <h4 class="font-semibold text-black text-xl " v-if="serie.title">{{ serie.title }}</h4>
          </div>
          <img :src="`${serie.thumbnail.path}.${serie.thumbnail.extension}`" :alt="serie.title"
            class="w-full h-full object-contain" />
          </div>
      </div>
    </div>
  </div>
</template>
