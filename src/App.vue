<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
// import CircleButton from "./CircleButton.vue";
</script>

<template>
  <header class="sticky top-0 z-20 hidden lg:block">
    <nav class="grid grid-cols-8 pl-5 pr-5 absolute top-0 w-full">
      <RouterLink class="custom-button" to="/">
        <img src="/media/A2.svg" alt="" />
      </RouterLink>
      <RouterLink class="custom-button" to="/about">About</RouterLink>
      <RouterLink class="custom-button" to="/pSonja">Sonja</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
