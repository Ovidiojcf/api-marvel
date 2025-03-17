<template>
  <div class="relative">
    <section class="grid gap-8 p-10  md:grid-cols-2 md: items-center md: text-left ">
      <div class="relative">
        <img src="/src/assets/imgs/hero-image-component.svg" alt="Hero Image"
          class="w-5/6 relative rounded-lg mt-8 mx-auto z-10">
      </div>
      <div>
        <h1 class="text-4xl font-bold tracking-tight text-balance text-black sm:text-3xl md:text-4x1 xl:text-7x1">
          Helping you explore the
          Marvel Universe<br class="hidden md:block" />
          <span class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-red-500 sm:text-7xl">like never
            before!</span>
        </h1>
        <p class="py-4 text-lg/8 text-gray-600 sm:text-xl/8">Explore the vast Marvel universe with access to thousands
          of characters, comics, movies, and more! Discover the power of heroes and dive into epic stories that span
          generations.</p>

        <div class="mt-10 flex justify-start gap-x-6">
          <a href="#"
            class="rounded-md bg-red-600 px-3.5 py-2.5 text-xl font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
            started</a>
          <a href="#"
            class="rounded-md bg-black px-3.5 py-2.5 text-xl font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Learn
            more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  </div>
</template>
