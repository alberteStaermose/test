<script setup>
// import HeroSection from "../components/HeroSection.vue";
import CircleSection from "../components/CircleSection.vue";
</script>

<template>
  <main>
    <CircleSection />

    <section>
      <article class="grid grid-cols-3">
        <RouterLink to="/pSonja">
          <div class="projectView">
            <div class="grid text-center">
              <h3>Café Sonja</h3>
              <p>Rebranding</p>
            </div>
            <img class="projectView" src="/media/sonjaLogo.webp" alt="" />
          </div>
        </RouterLink>
        <!--  -->
        <!--  -->

        <RouterLink to="/pMoebel">
          <div class="projectView">
            <div class="grid text-center">
              <h3>Møbelbutikken Valør</h3>
              <p>Visuel identitet</p>
            </div>

            <img class="projectView" src="/media/valorOutdoor2.webp" alt="" />
          </div>
        </RouterLink>
        <!--  -->
        <!--  -->
        <RouterLink to="/pPolitiken">
          <div class="projectView">
            <div class="grid text-center">
              <h3>Politiken Plus</h3>
              <p>Rebranding</p>
            </div>
            <img src="/media/politikenEks1.webp" alt="" />
          </div>
        </RouterLink>
        <!--  -->
        <!--  -->
        <RouterLink to="/pWhileInBattle"
          ><div class="projectView">
            <div class="grid text-center">
              <h3>Danseforestillingen: While In Battle</h3>
              <p>Visuel identitet</p>
            </div>
            <img src="/media/whilePlakatSort.webp" alt="" /></div
        ></RouterLink>
        <!--  -->
        <!--  -->
        <RouterLink to="/pSamyang"
          ><div class="projectView">
            <div class="grid text-center">
              <h3>Samyang Foods</h3>
              <p>Rebranding</p>
            </div>
            <img src="/media/samyangT-shirts.webp" alt="" /></div
        ></RouterLink>
        <!--  -->
        <!--  -->
        <RouterLink to="/pRF"
          ><div class="projectView">
            <div class="grid text-center">
              <h3>Roskilde Festivals pantsystem</h3>
              <p>Konceptudvikling</p>
            </div>
            <img src="/media/rfPlads.webp" alt="" /></div
        ></RouterLink>
        <!--  -->
        <!--  -->
        <!-- <RouterLink to="/pBlenderIsland"
          ><div class="projectView">
            <p class="hidden">Blender Island</p>
            <img src="/media/samyangT-shirts.webp" alt="" /></div
        ></RouterLink> -->
        <!-- <RouterLink to="/pSonja"
          ><div class="projectView"><p>Egen font</p></div></RouterLink
        >
        <RouterLink to="/pSonja"
          ><div class="projectView"><p>ZoneClinic</p></div></RouterLink
        >
        <RouterLink to="/pSonja"
          ><div class="projectView"><p>Olsen Banden spil</p></div></RouterLink
        >
        <RouterLink to="/pSonja"
          ><div class="projectView"><p>Bullet Tounge</p></div></RouterLink -->
      </article>
    </section>
  </main>
</template>

<style scoped>
.projectView {
  height: 260px;
  background-color: white;
  display: grid;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
/* .projectView img {
  width: 100%;
} */
.projectView p {
  display: none;
}
.projectView h3 {
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
  background-color: oklch(0.707 0.165 254.624);
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
.projectView:hover h3 {
  display: block;
  font-size: 20px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
