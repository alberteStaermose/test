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
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.custom-button {
  display: grid;
  text-align: center;
  place-items: center;
  background: linear-gradient(to bottom right, #1549ff, #061fdf, #002092);
  aspect-ratio: 1 / 1; /* Ensures a square shape */
  border-radius: 50%;
  color: white;
  text-transform: uppercase;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  transform: scale(0.8);
  transition: all 0.3s ease-in-out;
  max-width: 9vw; /* Maximum width is 9% of the viewport width */
  max-height: 9vh; /* Maximum height is 9% of the viewport height */
}

.custom-button:hover {
  background: linear-gradient(to bottom right, #c02425, #fe675c, #ff872a);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.custom-button.group-hover {
  transform: scale(1);
}
</style>
