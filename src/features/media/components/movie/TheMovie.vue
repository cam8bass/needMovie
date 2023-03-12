<script setup lang="ts">
import { ref } from "vue";
import { useMovieStore } from "../../stores/movieStore";
import TheLoading from "@/shared/components/TheLoading.vue";
import MovieNav from "./components/MovieNav.vue";
import MovieHead from "./components/MovieHero.vue";
import MovieDiscover from "./components/MovieDiscover.vue";
import MovieList from "./components/MovieList.vue";

const movieStore = useMovieStore();

const btnPopularMovie = ref<boolean>(true);
const btnTopRatedMovie = ref<boolean>(false);
const btnUpcomingMovie = ref<boolean>(false);

function updateNavigationMovie(
  navPopular: boolean,
  navTopRated: boolean,
  navUpcoming: boolean
) {
  btnPopularMovie.value = navPopular;
  btnTopRatedMovie.value = navTopRated;
  btnUpcomingMovie.value = navUpcoming;
}

function fetchTopRatedMovie(): void {
  movieStore.fetchTopRatedMovie();
}

function fetchUpcomingMovie(): void {
  movieStore.fetchUpComingMovie();
}

function updatePopularMovie(): void {
  const page = movieStore.pages.popularPage++;
  movieStore.fetchPopularMovie(page);
}

function updateTopRatedMovie(): void {
  const page = movieStore.pages.topRatedPage++;
  movieStore.fetchTopRatedMovie(page);
}

function updateUpcomingMovie(): void {
  const page = movieStore.pages.upcomingPage++;
  movieStore.fetchUpComingMovie(page);
}
</script>

<template>
  <TheLoading v-if="movieStore.loading" />
  <div class="content" v-if="!movieStore.loading">
    <MovieHead />
    <MovieDiscover
      :btnNav="{ btnPopularMovie, btnTopRatedMovie, btnUpcomingMovie }"
      :discover="{
        popularMovie: movieStore.popular.results[0],
        topRatedMovie: movieStore.topRated.results[0],
        upComingMovie: movieStore.UpComing.results[0],
      }"
    />
    <MovieNav
      :btnNav="{ btnPopularMovie, btnTopRatedMovie, btnUpcomingMovie }"
      @navigationMovie="updateNavigationMovie"
      @fetchTopRatedMovie="fetchTopRatedMovie"
      @fetchUpcomingMovie="fetchUpcomingMovie"
    />
    <MovieList
      :btnNav="{ btnPopularMovie, btnTopRatedMovie, btnUpcomingMovie }"
      :popularMovies="movieStore.popular"
      :topRatedMovies="movieStore.topRated"
      :upComingMovies="movieStore.UpComing"
      @updatePopularMovie="updatePopularMovie"
      @updateTopRatedMovie="updateTopRatedMovie"
      @updateUpcomingMovie="updateUpcomingMovie"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/page/movie&serie";
</style>
