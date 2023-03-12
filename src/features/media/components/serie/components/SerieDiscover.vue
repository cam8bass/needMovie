<script setup lang="ts">
import type { SerieResultsInterface } from "@/shared/interfaces";

defineProps<{
  btnNav: {
    btnPopularSerie: boolean;
    btnTopRatedSerie: boolean;
    btnCurrentlyAiringSerie: boolean;
  };
  discover: {
    popularSerie: SerieResultsInterface;
    topRatedSerie: SerieResultsInterface;
    currentlyAiringSerie: SerieResultsInterface;
  };
}>();
</script>

<template>
  <RouterLink
    v-if="btnNav.btnPopularSerie && discover.popularSerie"
    :to="'/serie/' + discover.popularSerie.id"
    class="discover"
  >
    <img
      :src="
        'https://image.tmdb.org/t/p/original/' +
        discover.popularSerie.backdrop_path
      "
      alt="serie discover"
      class="discover__img"
    />
    <span class="discover__title">{{
      discover.popularSerie.original_name
    }}</span>
  </RouterLink>

  <RouterLink
    v-if="btnNav.btnTopRatedSerie && discover.topRatedSerie"
    :to="'/serie/' + discover.topRatedSerie.id"
    class="discover"
  >
    <img
      :src="
        'https://image.tmdb.org/t/p/original/' +
        discover.topRatedSerie.backdrop_path
      "
      alt="serie discover"
      class="discover__img"
    />
    <span class="discover__title">{{
      discover.topRatedSerie.original_name
    }}</span>
  </RouterLink>

  <RouterLink
    v-if="btnNav.btnCurrentlyAiringSerie && discover.currentlyAiringSerie"
    :to="'/serie/' + discover.currentlyAiringSerie.id"
    class="discover"
  >
    <img
      :src="
        'https://image.tmdb.org/t/p/original/' +
        discover.currentlyAiringSerie.backdrop_path
      "
      alt="serie discover"
      class="discover__img"
    />
    <span class="discover__title">{{
      discover.currentlyAiringSerie.original_name
    }}</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/movie&serie/discover";
</style>
