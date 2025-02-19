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
</template>

<style scoped></style>
