<script>
// import Kontakt from "../components/Kontakt.vue";
</script>

<template>
  <body class="grid gap-24">
    <section class="flex items-end h-[40vh] px-32 justify-center bg-[#04151E]">
      <h1 class="text-white mb-8">Alberte Stærmose</h1>
    </section>

    <section class="grid grid-cols-2 px-56 gap-x-20 gap-y-16">
      <div>
        <h2>Hvem er jeg?</h2>
        <p>
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

      <div class="grid">
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

      <!-- <div><img src="/media/mig.jpg" alt="" /></div> -->
      <div>
        <h2>Interesseret?</h2>
      </div>
    </section>

    <Kontakt></Kontakt>
  </body>
</template>

<style>
svg {
  fill: blue;
}
</style>
