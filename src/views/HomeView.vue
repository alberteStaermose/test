<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import HeroSection from "../components/HeroSection.vue";
</script>

<template>
  <main>
    <HeroSection />
    <section>
      <article class="grid grid-cols-3">
        <RouterLink to="/pSonja">
          <div class="projectView">
            <p class="hidden">Café Sonja</p>
            <img class="projectView" src="/media/sonjaLogo.webp" alt="" />
          </div>
        </RouterLink>
        <RouterLink to="/pValor">
          <div class="projectView">
            <p class="hidden">Valør</p>
            <img class="projectView" src="/media/sonjaLogo.webp" alt="" />
          </div>
        </RouterLink>
        <RouterLink to="/pPolitiken"
          ><div class="projectView">
            <img src="/media/politikenLogo.webp" alt="" />
          </div>
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
  height: 250px;
  background-color: rgb(178, 178, 226);
}
.projectView img {
  width: 100%;
}
.projectView p {
  display: none;
}
.projectView:hover p {
  /* display: none; */
  display: block;
}
.projectView:hover {
  height: 250px;
  /* display: none; */
  background-color: blue;
}
.projectView:hover img {
  display: none;
}

.projectView:hover p {
  display: block;
  font-size: 20px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
