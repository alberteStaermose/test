<script setup></script>

<template>
  <main>
    <section class="h-screen bg-[rgb(4,21,30)] sticky top-0 -z-20 w-screen">
      <img src="/media/whilePlakatSort.webp" alt="" />
    </section>
    <section class="bg-white grid grid-cols-2 pr-20 pl-20 pt-20 pb-10">
      <h1>While In Battle</h1>
      <div class="justify-self-end">
        <div class="flex items-baseline gap-1">
          <h3>Projekt:</h3>
          <h4>Eksamensprojekt</h4>
        </div>
        <div class="flex items-baseline gap-1">
          <h3>Type:</h3>
          <h4>Gruppeopgave</h4>
        </div>
        <div class="flex items-baseline gap-1">
          <h3>Kunden:</h3>
          <h4>Metropolis</h4>
        </div>
        <div class="flex items-baseline gap-1">
          <h3>Min rolle:</h3>
          <h4>Projektleder, grafisk og coded designer</h4>
        </div>
      </div>
    </section>
    <section class="grid pl-20 pr-20 gap-10 bg-white">
      <article class="grid grid-cols-3 p-10 mb-20 gap-10 bg-blue-50">
        <div>
          <h2>Clientbrief</h2>
          <p>
            Dette eksamensprojekt gik ud på at vi skulle lave en visuel
            identitet, et kampagnesite, en plakat og en fysisk installation til
            danseferestillingen "While In Battle I'm Free, Never Free To Rest"
            som blev opført af Metropolis og dansekompagniet Culberg på
            Blågårdsplads og var koreograferet af Hooman Sharifi.
          </p>
        </div>
        <div>
          <h2>Proces</h2>
          <p>
            Vi startede dette projekt ud med at lægge en struktureret plan for
            vores process, hvor vi her benyttede os af Trello til dette. Det var
            vigtgit for os at lave en dybdegående research på forestillingen og
            Hooman, og de valg han tog omkring forestillingen, for virkelig
            forstå budskabet bag danseforestillingen. Baseret på denne
            dybdegående research og analyse af Metropolis’ vision, stykkets
            tematik, aktører mm. designede vi en visuel identitet til
            forestillingen. Med afsæt i den visuelle identitet designede vi en
            plakat samt et kampagnesite der annoncerer og kommunikerer
            forestillingen. Til sidst designede og kodede vi i processing en
            fysisk installation til selve forestillingen i som tilskuerne kan
            interagere med, der udfolder den visuelle identitet, en del af
            forestillingen vi gerne ville belyse og vækker nysgerrighed.
          </p>
          <!-- <ul>
          <li>
            Installationen skal folde din visuelle identitet ud og kommunikere
            den del af forestillingen du gerne vil belyse.
          </li>
          <li>
            Installationen skal vække nysgerrighed, være informerende og
            forklarende.
          </li>
          <li>
            Installationen skal indeholde en lydside men skal også kunne fungere
            uden lyd.
          </li>
        </ul> -->
        </div>
        <div>
          <h2>Insight og løsning</h2>
          <p class="mb-3">
            Vores visuelle identitet er skabt ud fra værdiord – abstraktion,
            bevægelse og kontrast. Centralt i vores visuelle identitet er en
            grafisk konstruktion af abstrakte former, som danner et samlet
            billede. Det var vigtigt for os at inddrage abstraktion, for at
            appellere til en af egenskaberne contemporary art har, nemlig at
            invitere beskueren til en personlig refleksion, og ikke give et
            endegyldigt svar på hvordan det skal tolkes. Vores andet værdiord er
            bevægelse. Kroppen som dynamisk form er centralt, selvsagt fordi det
            er en danseforestilling, men også for at fremhæve tematikken, at
            danserne mødes og taler et fælles sprog igennem dansen. Formerne
            skal skabe associationer til dansende kropsdele, men samtidig åbne
            op for egen tolkning. Det sidste værdiord er kontrast. Kontrasten
            mellem fællesskabet og individet, krig og fred og en legende
            dansefest og et dramatisk opgør mellem mennesker. Vi har brugt
            kontrasten til at skabe dramatik i mødet mellem bløde dynamiske
            former, en grotesk font og i farverne. Til at løse opgaven benyttede
            vi os af P5, HTML, CSS, JavaScript, Adobe Illustrator og Midjourney.
          </p>
        </div>
      </article>
    </section>

    <section class="pl-40 pb-20 pr-40 bg-white gap-20 grid">
      <article class="grid gap-20">
        <div style="padding: 54.48% 0 0 0; position: relative">
          <iframe
            src="https://player.vimeo.com/video/1056938054?h=361df1aec9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            title="whileKampagnesite"
          ></iframe>
        </div>
        <div class="flex">
          <div class="w-4/5">
            <h2>Kodet prototype på kampgnesite</h2>
            <p>
              Sitet er sat op med togglebutton, der får sitet til at skifte
              mellem kontrasten, light- og darkmode, og muligheden for at gå
              tilbage til default som er der hvor kontrasterne mødes og skal
              symbolisere forestillingen hvor kontrasterne mødes. Da det er en
              prototype er der kun én version i light og én version, men tanken
              var at der skulle være et array med flere versioner af light- og
              darkmode.
            </p>
          </div>
          <div class="">
            <a
              class="custom-button"
              href="https://master--alberteogjosefine.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              >Site</a
            >
          </div>
        </div>
        <div class="grid grid-cols-3 gap-3">
          <img src="/media/whileLightMode.webp" alt="" />
          <img src="/media/whileDefaultMode.webp" alt="" />
          <img src="/media/whileDarkMode.webp" alt="" />
        </div>
        <img
          class="w-1/3 place-self-center"
          src="/media/whileInBatllePlakat.webp"
          alt=""
        />
        <img
          class="place-self-center"
          src="/media/whilePlakatSort.webp"
          alt=""
        />
        <div class="grid grid-cols-4">
          <img src="/media/whileLightBlue.webp" alt="" />
          <img src="/media/whileLightRed.webp" alt="" />
          <img src="/media/whileLightGreen.webp" alt="" />
          <img src="/media/whileLightOrange.webp" alt="" />
        </div>
      </article>
      <article class="grid">
        <div style="padding: 56.25% 0 0 0; position: relative">
          <iframe
            src="https://player.vimeo.com/video/1056939586?h=be80d53412&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            title="FysiskInstallationVideoJosefineAlberte"
          ></iframe>
        </div>
        <img
          class="place-self-center w-2/3"
          src="/media/whileFysiskInstallation.webp"
          alt=""
        />
        <!-- <script src="https://player.vimeo.com/api/player.js"></script> -->
      </article>
      <article class="grid gap-10">
        <img src="/media/whileBilledstil.webp" alt="" />
        <div class="grid grid-cols-2">
          <img src="/media/whileDancer1.webp" alt="" />
          <img src="/media/whileDancer2.webp" alt="" />
        </div>
        <img src="/media/whileStyletyle.webp" alt="" />
      </article>
    </section>
  </main>
</template>
