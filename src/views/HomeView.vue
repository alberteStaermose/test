<script setup>
// import HeroSection from "../components/HeroSection.vue";
import CircleSection from "../components/CircleSection.vue";
</script>

<template>
  <main>
    <CircleSection />

    <section>
      <article class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <RouterLink to="/pBufferlo">
          <div class="projectView">
            <div class="grid text-center">
              <h3>Bufferlo 5G router</h3>
              <p>Rebranding og kampagne</p>
            </div>
            <img class="projectView" src="/media/bufferlo.webp" alt="" />
          </div>
        </RouterLink>
        <!--  -->
        <!--  -->
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
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  display: flex;
  width: 100%;
  position: relative;
}

.projectView img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
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
  /* background-color: oklch(0.707 0.165 254.624); */
  background-color: #04151e;
}

.projectView:hover img {
  display: none;
}

.projectView:hover p {
  display: block;
  font-size: 20px;
  padding-left: 10px;
  padding-top: 10px;
  color: #ffffff;
}
.projectView:hover h3 {
  display: block;
  font-size: 20px;
  padding-left: 10px;
  padding-top: 10px;
  color: #ffffff;
}

@media only screen and (max-width: 600px) {
}
</style>
