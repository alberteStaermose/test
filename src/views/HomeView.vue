<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import HeroSection from "../components/HeroSection.vue";
</script>

<template>
  <main>
    <HeroSection />
    <section
      id="circleGrid"
      class="grid grid-cols-12 grid-rows-6 w-screen text-white bg-[#04151E] h-screen py-5"
    >
      <div
        class="grid col-start-3 row-start-2 col-span-5 row-span-3 z-10 bg-[#04151E] text-left content-center"
      >
        <h2 class="grid content-center">Min digitale profil</h2>
        <p class="grid content-center">
          Mit navn er Alberte Stærmose. Jeg er uddannet Multimediedesigner fra
          KEA - Københavns Erhvervsakademi, og studerer lige nu Design og
          Business på studieretningen Creative Branding på KEA - Københavns
          Erhvervsakademi. Som kreativ designer arbejder jeg altid struktureret
          og konsekvent. Jeg er en teamplayer, men kan også arbejde
          selvstendigt. Mulitmediedesign har givet mig kompetencer indenfor
          hjemmesideopsætning, UX, UI og kode, hvor jeg på Creative Branding har
          fået kompetencer indenfor det strategiske og det kreative omkring
          brandingprocessen, kampagner, kampagnestrategi, brandstrategi,
          visuelle og verbale identiteter og aktivering af det på kanaler og
          platforme. Jeg går til alle projekter velplanlagt og struktureret og
          alt udvikles og baseres på dybdegående research.
        </p>
      </div>

      <div
        class="grid col-start-3 row-start-5 col-span-1 row-span-1 z-10 bg-[#04151E]"
      >
        <RouterLink class="custom-button" to="/about">About</RouterLink>
      </div>

      <div
        class="grid col-start-9 row-start-2 col-span-2 row-span-4 top-0 z-10 bg-[#04151E]"
      >
        <h3 class="grid text-center content-center">Mine kompetencer</h3>
        <ul class="list-disc list-inside grid text-left justify-center pl-3">
          <li>Adobe</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Processing</li>
          <li>Tailwind</li>
          <li>Figma</li>
          <li>MM.</li>
        </ul>
      </div>
    </section>
  </main>
</template>
