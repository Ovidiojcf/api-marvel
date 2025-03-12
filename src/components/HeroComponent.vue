<template>
  <div class="relative">
    <div class="absolute top-0 left-0 w-full -z-10 blur-3xl" aria-hidden="true">
      <div class="aspect-1155/678 w-[72.1875rem] bg-gradient-to-tr from-red-500 to-red-800 opacity-30"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
      </div>
    </div>

    <section class="grid gap-8 p-10  md:grid-cols-2 md: items-center md: text-left ">
      <div class="relative">
        <img src="/src/assets/imgs/hero-image-component.svg" alt="Hero Image" class="w-5/6 relative rounded-lg mt-8 mx-auto z-10">
      </div>
      <div>
        <h1 class="text-7xl font-semibold tracking-tight text-balance text-black sm:text-5xl">Helping you explore the
          Marvel Universe<br class="hidden md:block" />
          <span class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-red-500 sm:text-5xl">like never
            before!</span>
        </h1>
        <p class="py-4 mt-6 text-lg/8 text-gray-600">Explore o vasto universo da Marvel com acesso a milhares de
          personagens,
          HQs, filmes e muito mais! Descubra
          o
          poder dos heróis e mergulhe em histórias épicas que atravessam gerações.</p>

        <div class="mt-10 flex justify-start gap-x-6">
          <a href="#"
            class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
            started</a>
          <a href="#"
            class="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Learn
            more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  </div>
</template>
