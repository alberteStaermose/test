<script setup>
import { onMounted, ref } from "vue";

const canvasRef = ref(null);

onMounted(() => {
  const canvas = canvasRef.value; // Get canvas through ref
  const ctx = canvas.getContext("2d");

  let radius = 200;
  let vinkel = 100;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FC4117";

    const numCircles = 16;
    const circleSize = 16;
    const circleSpacing = 360 / numCircles;

    const radiusAll = [
      radius - 0,
      radius - 30,
      radius - 60,
      radius - 90,
      radius - 120,
      radius - 140,
      radius - 153,
      radius - 165,
      radius - 175,
      radius - 190,
    ];

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);

    for (let j = 0; j < radiusAll.length; j++) {
      for (let i = 0; i < numCircles; i++) {
        ctx.beginPath();
        ctx.arc(radiusAll[j], 0, circleSize / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.rotate((circleSpacing * Math.PI) / 180);
      }
      ctx.rotate((vinkel * Math.PI) / 180);
    }

    ctx.restore();
    requestAnimationFrame(draw);
  }

  draw();

  window.addEventListener("mousemove", (event) => {
    let deltaX = event.movementX;
    let deltaY = event.movementY;

    if (deltaX !== 0) {
      radius += Math.sign(deltaX) * Math.min(Math.abs(deltaX) * 1.5, 10);
      vinkel += Math.sign(deltaX) * Math.min(Math.abs(deltaX) * 0.4, 5);
    }
    if (deltaY !== 0) {
      radius -= Math.sign(deltaY) * Math.min(Math.abs(deltaY) * 1.5, 10);
      vinkel -= Math.sign(deltaY) * Math.min(Math.abs(deltaY) * 0.4, 5);
    }

    radius = Math.max(1, Math.min(radius, 500));
  });
});
</script>

<template>
  <main>
    <div id="cirkler">
      <div class="myBox text-[#04151E] text-center">
        <h1 class="">Alberte Stærmose</h1>
        <h4>Kreativ Designer</h4>
      </div>
      <!-- Use ref for the canvas -->
      <canvas ref="canvasRef" width="1000px" height="1000px"></canvas>
    </div>
  </main>
</template>

<style>
#cirkler {
  /* z-index: -30; */
  background-color: #fffbe0;
}

.myBox {
  position: absolute;
  left: 0;
  right: 0;
  margin-inline: auto;
  width: fit-content;
  top: 40%;
}
</style>
