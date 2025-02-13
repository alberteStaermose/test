<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import HeroSection from "../components/HeroSection.vue";
</script>

<template>
  <main>
    <HeroSection />
    <section>
      <article class="grid grid-cols-3">
        <RouterLink to="/pSonja"
          ><div class="projectView"><p>Café Sonja</p></div></RouterLink
        >
        <RouterLink to="/pSonja">
          <div class="projectView"><p>Valør</p></div></RouterLink
        >
        <RouterLink to="/pPolitiken"
          ><div class="projectView"><p>Politiken Plus test</p></div>
        </RouterLink>
        <RouterLink to="/pSonja"
          ><div class="projectView"><p>While in battle</p></div></RouterLink
        >
        <RouterLink to="/pSonja">
          <div class="projectView"><p>Samyang</p></div>
        </RouterLink>
        <RouterLink to="/pSonja"
          ><div class="projectView"><p>Egen font</p></div></RouterLink
        >
        <RouterLink to="/pSonja"
          ><div class="projectView"><p>ZoneClinic</p></div></RouterLink
        >
        <RouterLink to="/pSonja"
          ><div class="projectView"><p>Olsen Banden spil</p></div></RouterLink
        >
        <RouterLink to="/pSonja"
          ><div class="projectView"><p>Bullet Tounge</p></div></RouterLink
        >
        <RouterLink to="/pSonja"
          ><div class="projectView"><p>Blender Island</p></div></RouterLink
        >
      </article>
    </section>
  </main>
</template>

<style scoped>
.projectView {
  height: 400px;
  background-color: rgb(178, 178, 226);
  padding-left: 18px;
  padding-top: 10px;
}
.projectView p {
  /* display: none; */
  display: block;
}
.projectView:hover {
  height: 400px;
  background-color: blue;
}

.projectView:hover p {
  display: block;
  font-size: 20px;
}
</style>
