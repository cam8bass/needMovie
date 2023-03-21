<script setup lang="ts">
import type {
  HomeResultsCinemaInterface,
  MovieResultsInterface,
  SerieResultsInterface,
} from "@/shared/interfaces";
import HomeNewsCinema from "./homeNewsCinema.vue";
import HomeNewsMovie from "./homeNewsMovie.vue";
import HomeNewsSerie from "./homeNewsSerie.vue";
defineProps<{
  cinemaMovies: HomeResultsCinemaInterface[];
  popularMovies: MovieResultsInterface[];
  popularSeries: SerieResultsInterface[];
  totalResultsCinema: number;
  totalResultsMovie: number;
  totalResultsSerie: number;
}>();

const emits = defineEmits<{
  (e: "incPageCinema"): void;
  (e: "incPageMovie"): void;
  (e: "incPageSerie"): void;
}>();
</script>

<template>
  <section class="news">
    <HomeNewsCinema
      :cinemaMovies="cinemaMovies"
      :totalResultsCinema="totalResultsCinema"
      @inc-page-cinema="emits('incPageCinema')"
    />
    <HomeNewsMovie
      :totalResultsMovie="totalResultsMovie"
      :popularMovies="popularMovies"
      @inc-page-movie="emits('incPageMovie')"
    />
    <HomeNewsSerie
      :totalResultsSerie="totalResultsSerie"
      :popularSeries="popularSeries"
      @inc-page-serie="emits('incPageSerie')"
    />
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/home/homeNews";
</style>
