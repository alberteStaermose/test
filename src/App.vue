<template>
  <header class="sticky top-0 z-20 w-screen">
    <nav class="flex justify-between pl-5 pr-5 pt-3 absolute top-0 w-screen">
      <div class="buttonContainer">
        <RouterLink class="custom-button w-24 h-24" to="/">
          <img src="/media/A2.svg" alt="" />
        </RouterLink>
      </div>

      <div class="buttonContainer">
        <RouterLink class="custom-button w-24 h-24" to="/about"
          >OM mig</RouterLink
        >
      </div>
    </nav>
  </header>

  <RouterView />

  <footer>
    <section class="flex justify-center pt-10 pb-30 gap-28 bg-[#fffbe0]">
      <div class="buttonContainer">
        <a
          href="https://www.linkedin.com/in/alberte-stærmose-b182b2232"
          class="custom-button w-36 h-36"
          >Linked-IN</a
        >
      </div>
      <div class="buttonContainer">
        <a
          href="https://www.instagram.com/alberte_staermose?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          class="custom-button w-36 h-36"
          >Instagram</a
        >
      </div>
    </section>
  </footer>
</template>

<style scoped></style>
