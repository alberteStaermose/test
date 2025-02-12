<script>
import Kontakt from "../components/Kontakt.vue";

export default {
  components: {
    Kontakt,
  },
};
</script>

<template>
  <body class="grid gap-44">
    <section class="flex items-end h-[40vh] px-32 justify-center bg-[#04151E]">
      <h1 class="text-white mb-8">Café Sonja</h1>
    </section>

    <section class="grid grid-cols-2 px-56 gap-x-20 gap-y-16">
      <div>
        <h2>Opgaven</h2>
        <p>
          Opgaven gik ud på at finde et brand som vi kunne se potentiale i ved
          en rebranding. Jeg valgte Samyang Foods, da alle nudler på hylderne i
          Danmark ikke visuelt er så forskellige. MIn rebranding har fokus på
          Samyang Foods som et paraply brand, hvis visuelle identitet skal
          skinne igennem på alle deres produkter, og jeg har derfor også
          fokuseret på deres "Original" nudler.
        </p>
      </div>

      <div>
        <img src="/media/samyangOgMarkedet.png" alt="" />
      </div>
    </section>

    <section class="px-56">
      <article class="mb-20">
        <h2>Løsning</h2>
        <p>Løsningen er baseret på en dybdegående research af Café Sonja.</p>
      </article>

      <article class="grid gap-20">
        <div>
          <div class="">
            <h3>Strategi</h3>
            <p>
              Ud fra vores research kom vi frem til en ny strategi til Politiken
              Plus, som er den der ligger til grund for vores løsning -
              Politiken Plus nye navn "Politken Puls" og den nye visuelle
              identitet.
            </p>
          </div>
          <div class="grid grid-cols-3 gap-y-16 mb-10">
            <img src="/media/sonjaStrategi1.png" alt="" />
            <img src="/media/sonjaStrategi2.png" alt="" />
            <img src="/media/sonjaStrategi3.png" alt="" />
          </div>
        </div>
        <div>
          <div>
            <div class="mb-5">
              <h3>Verbal identitet</h3>
              <p>
                Ud fra en dybdegående research kom vi frem til en strategi til
                Politken Plus. Vi gjorde en dyd af at researche på Politken og
                Politiken Plus, både visuelt og verbalt for at få et klar
                overblik over hvem Politiken er. Udover det, indsamlede vi en
                masse data på eksisterende og mulige forbrugere af Politiken
                Plus for at få en forståelse for deres behov. For at få et
                overblik over markedet og hvor Politiken Plus nye posititon
                kunne være, undersøgte vi hvordan konkurrenterne både
                kommunikerer visuelt og verbalt og hvordan de havde løst og
                opsat deres fordelsuniverser. Til sidst undersøgte vi kulturen
                for at finde frem til trends og tendenser vi kunne tappe ind i.
              </p>
            </div>
            <div class="grid grid-cols-3 gap-y-16 mb-10">
              <img src="/media/sonjaToneOfVoice.png" alt="" />
              <img src="/media/sonjaManifest.png" alt="" />
              <img src="/media/sonjaTagline.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div class="">
            <h3>Visuel identitet</h3>
            <p>
              Ud fra vores research kom vi frem til en ny strategi til Politiken
              Plus, som er den der ligger til grund for vores løsning -
              Politiken Plus nye navn "Politken Puls" og den nye visuelle
              identitet.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-20 gap-y-16 mb-10">
            <img src="/media/sonjaLogo2.png" alt="" />
            <img src="/media/sonjaBilledstil.png" alt="" />
            <img src="/media/sonjaGrafik.png" alt="" />
            <img src="/media/sonjaFarver.png" alt="" />
          </div>
        </div>
        <div>
          <div class="">
            <h3>Identiteten i brug</h3>
            <p>
              Ud fra vores research kom vi frem til en ny strategi til Politiken
              Plus, som er den der ligger til grund for vores løsning -
              Politiken Plus nye navn "Politken Puls" og den nye visuelle
              identitet.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-20 gap-y-16 ml-40 mr-40">
            <img src="/media/sonjaInsta.png" alt="" />
            <img src="/media/sonjaMenu.png" alt="" />
          </div>
        </div>
        <div>
          <div class="">
            <h3>Samlet overblik</h3>
            <img src="/media/sonjaIdentitet.png" alt="" />
          </div>
        </div>
      </article>
    </section>

    <Kontakt></Kontakt>
  </body>
</template>

<style>
svg {
  fill: blue;
}
</style>
