<script setup>
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/FooterComponent.vue';
</script>

<template>
  <NavBar/>
  <RouterView />
  <Footer/>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

</style>
