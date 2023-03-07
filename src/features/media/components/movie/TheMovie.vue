<script setup lang="ts">
import { ref } from "vue";
import { useMovieStore } from "../../stores/movieStore";
import TheLoading from "@/shared/components/TheLoading.vue";
import MovieNav from "./MovieNav.vue";
import MovieHead from "./MovieHead.vue";
import MovieLatest from "./MovieLatest.vue";
import MovieList from "./MovieList.vue";

const movieStore = useMovieStore();

const btnPopularMovie = ref<boolean>(true);
const btnTopRatedMovie = ref<boolean>(false);
const btnUpcomingMovie = ref<boolean>(false);

function fetchTopRatedMovie(): void {
  movieStore.fetchTopRatedMovie();
}

function fetchUpcomingMovie(): void {
  movieStore.fetchUpComingMovie();
}

function updatePopularMovie(page: number) {
  movieStore.fetchPopularMovie(page);
}

function updateTopRatedMovie(page: number) {
  movieStore.fetchTopRatedMovie(page);
}

function updateUpcomingMovie(page: number) {
  movieStore.fetchUpComingMovie(page);
}

function updateNavigationMovie(
  btnPopular: boolean,
  btnTopRated: boolean,
  btnUpcoming: boolean
) {
  btnPopularMovie.value = btnPopular;
  btnTopRatedMovie.value = btnTopRated;
  btnUpcomingMovie.value = btnUpcoming;
}
</script>

<template>
  <TheLoading v-if="movieStore.loading" />
  <div class="movie" v-if="!movieStore.loading">
    <MovieHead />
    <MovieLatest
      :btnNav="{ btnPopularMovie, btnTopRatedMovie, btnUpcomingMovie }"
      :movieStore="{
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
      @upddateUpcomingMovie="updateUpcomingMovie"
    />
  </div>
  <RouterView></RouterView>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/mixins" as m;

.movie {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include m.md {
    margin-bottom: 4rem;
  }

  @include m.xl {
    margin-bottom: 6rem;
  }
}
</style>
