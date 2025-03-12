<template>
  <footer class="bg-black text-base-content p-10 flex flex-col items-start text-neutral-content">
    <!-- Logo na primeira linha -->
    <div class="mb-10">
      <img class="h-10 w-auto " src="@/assets/imgs/marvel.svg" alt="Your Company">
    </div>

    <!-- Navegação na segunda linha -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-12 xl: gap-x-20 text-center md:text-left w-full max-w-4xl text-3xl">
      <nav>
        <h6 class="footer-title text-white">Services</h6>
        <ul class="space-y-2">
          <li><a class="link link-hover">Branding</a></li>
          <li><a class="link link-hover">Design</a></li>
          <li><a class="link link-hover">Marketing</a></li>
          <li><a class="link link-hover">Advertisement</a></li>
        </ul>
      </nav>
      <nav>
        <h6 class="footer-title text-white">Company</h6>
        <ul class="space-y-2">
          <li><a class="link link-hover">About us</a></li>
          <li><a class="link link-hover">Contact</a></li>
          <li><a class="link link-hover">Jobs</a></li>
          <li><a class="link link-hover">Press kit</a></li>
        </ul>
      </nav>
      <nav>
        <h6 class="footer-title text-white">Social</h6>
        <ul class="space-y-2">
          <li><a class="link link-hover">Facebook</a></li>
          <li><a class="link link-hover">Twitter</a></li>
          <li><a class="link link-hover">Instagram</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
