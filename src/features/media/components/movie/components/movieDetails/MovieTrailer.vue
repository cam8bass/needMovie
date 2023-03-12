<script setup lang="ts">
import type { TrailerInterface } from "@/shared/interfaces";

defineProps<{
  trailers: TrailerInterface;
}>();
</script>

<template>
  <section class="sectionDetails" v-if="trailers.results.length">
    <h2 class="sectionDetails__title">Bandes-annonces</h2>
    <ul class="landscapeList">
      <li
        v-for="trailer in trailers.results"
        :key="trailer.id"
        class="landscapeList__item"
      >
        <iframe
          class="trailer__video"
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
@use "@/assets/sass/abstracts/mixins" as m;
@import "@/assets/sass/components/sectionDetails";
@import "@/assets/sass/components/landscapeList";

.trailer {
  &__video {
    box-shadow: var(--boxShadow-1);
    border-radius: 10px;
  }
}
</style>
