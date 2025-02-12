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
          KEA - Københavns Erhvervsakademi, og studerer lige nu Coded Design på
          DMJX - Danamarks Medie- og Journalisthøjskole. Som digital designer
          arbejder jeg altid struktureret og konsekvent. Jeg kan arbejde
          selvstændigt, men er også en teamplayer. Med min uddannelse som
          multimediedesigner kan jeg kode, lave grafisk materiale, tage billeder
          og lave video til hjemmesider mm. Alt laves til rette målgruppe, med
          et visuelt design, der passer til den visuelle identitet. Med Coded
          Design har jeg, og udvider fortsat min kode erfaring. Jeg arbejder med
          både processing og frontend-kode og kan bruge koden aktivt og
          kreativt. Udover kode har jeg erfaring med adobepakken og Blender.
        </p>
      </div>

      <div
        class="grid col-start-3 row-start-5 col-span-1 row-span-1 z-10 bg-[#04151E]"
      >
        <CircleButton to="/about">Om mig</CircleButton>
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
