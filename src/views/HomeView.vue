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
        <!--  -->
        <!--  -->

        <RouterLink to="/pMoebel">
          <div class="projectView">
            <p class="hidden">Møbelbutikken Valør</p>
            <img class="projectView" src="/media/valorOutdoor2.webp" alt="" />
          </div>
        </RouterLink>
        <!--  -->
        <!--  -->
        <RouterLink to="/pPolitiken">
          <div class="projectView">
            <p class="hidden">Politiken Plus</p>
            <img src="/media/politikenEks1.webp" alt="" />
          </div>
        </RouterLink>
        <!--  -->
        <!--  -->
        <RouterLink to="/pWhileInBattle"
          ><div class="projectView">
            <p class="hidden">Danseforestillingen: While In Battle</p>
            <img src="/media/whilePlakatSort.webp" alt="" /></div
        ></RouterLink>
        <!--  -->
        <!--  -->
        <RouterLink to="/pSamyang"
          ><div class="projectView">
            <p class="hidden">Samyang Foods</p>
            <img src="/media/samyangT-shirts.webp" alt="" /></div
        ></RouterLink>
        <!--  -->
        <!--  -->
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
  height: 260px;
  background-color: rgb(178, 178, 226);
  display: grid;
  justify-content: center;
  align-items: end;
}
/* .projectView img {
  width: 100%;
} */
.projectView p {
  display: none;
}
.projectView:hover p {
  /* display: none; */
  display: block;
  padding-bottom: 10px;
}
.projectView:hover {
  /* height: 300px; */
  /* display: none; */
  background-color: white;
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
