<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
// import CircleButton from "./CircleButton.vue";
</script>

<template>
  <header class="sticky top-0 z-20 hidden lg:block w-screen">
    <nav class="flex justify-between pl-5 pr-5 pt-3 absolute top-0 w-screen">
      <div class="buttonContainer">
        <RouterLink class="custom-button w-24 h-24" to="/">
          <img src="/media/A2.svg" alt="" />
        </RouterLink>
      </div>
      <div class="buttonContainer">
        <RouterLink class="custom-button w-24 h-24" to="/about"
          >About</RouterLink
        >
      </div>
    </nav>
  </header>

  <RouterView />

  <footer>
    <section class="flex justify-center pt-10 pb-30 gap-28 bg-white">
      <div class="buttonContainer">
        <a
          href="www.linkedin.com/in/alberte-stærmose-b182b2232"
          class="custom-button w-36 h-36"
          >Linked-IN</a
        >
      </div>
      <div class="buttonContainer">
        <a
          href="https://www.instagram.com/alberte_staermose?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          class="custom-button w-36 h-36"
          >Instagram</a
        >
      </div>
    </section>
  </footer>
</template>

<style scoped></style>
