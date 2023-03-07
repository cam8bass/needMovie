<script setup lang="ts">
import type { TrailerInterface } from "@/shared/interfaces";

defineProps<{
  trailers: TrailerInterface;
}>();
</script>

<template>
  <section class="details" v-if="trailers.results.length">
    <h2 class="details__title">Bandes-annonces</h2>
    <ul class="details__list">
      <li
        v-for="trailer in trailers.results"
        :key="trailer.id"
        class="details__item"
      >
        <iframe
          class="details__video"
          width="315"
          height="215"
          :src="'https://www.youtube.com/embed/' + trailer.key"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/details";
</style>
