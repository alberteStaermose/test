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
    <section class="flex justify-center py-20 gap-28 bg-white">
      <div class="buttonContainer">
        <a href="" class="custom-button w-48 h-48">Linked-IN</a>
      </div>
      <div class="buttonContainer">
        <a href="" class="custom-button w-48 h-48">Instagram</a>
      </div>
    </section>
  </footer>
</template>

<style scoped></style>
