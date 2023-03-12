<script setup lang="ts"></script>

<template>
  <div class="hero">
    <h1 class="hero__title">
      Que vous soyez fan de séries classiques ou à la recherche de la prochaine
      grande série, plongez dans un univers de divertissement infini
    </h1>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/mixins" as m;
@import "@/assets/sass/components/movie&serie/hero";
.hero {
  background-image: url("@/assets/images/background/background-series-mob.png");

  @include m.md {
    background-image: url("@/assets/images/background/background-series.png");
  }

  @include m.xl {
    background-image: url("@/assets/images/background/background-serie-desk.png");
  }
}
</style>
