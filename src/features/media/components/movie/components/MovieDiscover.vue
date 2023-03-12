<script setup lang="ts">
import type { MovieResultsInterface } from "@/shared/interfaces";

defineProps<{
  btnNav: {
    btnPopularMovie: boolean;
    btnTopRatedMovie: boolean;
    btnUpcomingMovie: boolean;
  };
  discover: {
    popularMovie: MovieResultsInterface;
    topRatedMovie: MovieResultsInterface;
    upComingMovie: MovieResultsInterface;
  };
}>();
</script>

<template>
  <RouterLink
    v-if="btnNav.btnPopularMovie && discover.popularMovie"
    :to="'/movie/' + discover.popularMovie.id"
    class="discover"
  >
    <img
      :src="
        'https://image.tmdb.org/t/p/original/' +
        discover.popularMovie.backdrop_path
      "
      alt="movie discover"
      class="discover__img"
    />
    <span class="discover__title">{{ discover.popularMovie.title }}</span>
  </RouterLink>

  <RouterLink
    v-if="btnNav.btnTopRatedMovie && discover.topRatedMovie"
    :to="'/movie/' + discover.topRatedMovie.id"
    class="discover"
  >
    <img
      :src="
        'https://image.tmdb.org/t/p/original/' +
        discover.topRatedMovie.backdrop_path
      "
      alt="movie discover"
      class="discover__img"
    />
    <span class="discover__title">{{ discover.topRatedMovie.title }}</span>
  </RouterLink>

  <RouterLink
    v-if="btnNav.btnUpcomingMovie && discover.upComingMovie"
    :to="'/movie/' + discover.upComingMovie.id"
    class="discover"
  >
    <img
      :src="
        'https://image.tmdb.org/t/p/original/' +
        discover.upComingMovie.backdrop_path
      "
      alt="movie discover"
      class="discover__img"
    />
    <span class="discover__title">{{ discover.upComingMovie.title }}</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/movie&serie/discover";
</style>
