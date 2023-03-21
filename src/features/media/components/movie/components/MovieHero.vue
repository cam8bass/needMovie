<script setup lang="ts"></script>

<template>
  <div class="hero">
    <h1 class="hero__title">
      Rejoignez notre communauté de cinéphiles passionnés et découvrez les
      meilleurs films du moment.
    </h1>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/mixins" as m;
@import "@/assets/sass/components/movie&serie/hero";
.hero {
  background-image: url("@/assets/images/background/background-movie-tab.png");

  @include m.md {
    background-image: url("@/assets/images/background/background-movie-tab.png");
  }

  @include m.xl {
    background-image: url("@/assets/images/background/background-movie-desk.png");
  }
}
</style>
