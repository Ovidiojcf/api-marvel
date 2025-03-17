<script>

</script>
<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex h-16 items-center justify-center">
        <!-- Logo -->
        <div class="flex items-center">
          <img class="h-8 w-auto" src="@/assets/imgs/marvel.svg" alt="Your Company">
        </div>

        <!-- Navegação -->
        <div class="flex-1 flex ">
          <div class="flex space-x-8">
            <router-link to="/heroes"  class="rounded-md px-4 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Heroes</router-link>
            <router-link to="/favorites"  class="rounded-md px-4 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Favorites Heroes</router-link>
            <a href="#" class="rounded-md px-4 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Comics</a>
            <a href="#" class="rounded-md px-4 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Series</a>
            <a href="#" class="rounded-md px-4 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
