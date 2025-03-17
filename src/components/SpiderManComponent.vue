<template>
  <section class="w-full lg: h-full">
    <div class="rounded-2xl bg-gray-900 py-10 overflow-hidden m-5 lg:m-0">
      <div class="max-w-full px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center xl:grid-cols-2 gap-14">
          <!-- Div do texto -->
          <div class="text-center lg:text-left">
            <div class="flex justiy-start text-sm font-medium text-gray-500 justify-center lg:justify-start">
              About that hero
            </div>
            <h1 class="py-8 text-white font-black font-manrope text-5xl">
              Embrace the Web of Justice. <br/><span class="text-red-600">Become the Spider-Man.</span>
            </h1>
            <p class="text-gray-500 text-2x1 pb-6 2zl:text-2x1">
              Peter Parker vive entre o equilíbrio de sua vida normal e a luta contra o crime. Com grandes poderes vêm
              grandes responsabilidades. Assuma o manto do Homem-Aranha e proteja a cidade enquanto enfrenta seus
              próprios dilemas pessoais.
            </p>
            <div class="mt-10 flex justify-start gap-x-6">
              <a href="#"
                class="rounded-md bg-red-600 px-3.5 py-2.5 text-xl font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Find your Hero</a>
            </div>
          </div>
          <!-- Div da imagem -->
          <div class="flex justify-center  lg:justify-end w-full">
            <img src="/src/assets/imgs/spiderman.jpg" alt="Dashboard image"
              class="rounded-l-3xl object-cover w-full h-1/3 lg: w-4/3">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
