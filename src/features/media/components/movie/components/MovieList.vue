<script setup lang="ts">
import type { MovieContentInterface } from "@/shared/interfaces";

defineProps<{
  btnNav: {
    btnPopularMovie: boolean;
    btnTopRatedMovie: boolean;
    btnUpcomingMovie: boolean;
  };

  popularMovies: MovieContentInterface;
  topRatedMovies: MovieContentInterface;
  upComingMovies: MovieContentInterface;
}>();

const emits = defineEmits<{
  (e: "updatePopularMovie"): void;
  (e: "updateTopRatedMovie"): void;
  (e: "updateUpcomingMovie"): void;
}>();
</script>

<template>
  <ul class="mediaList" v-if="btnNav.btnPopularMovie">
    <li
      v-for="popularMovie in popularMovies.results"
      :key="popularMovie.id"
      class="mediaList__item"
    >
      <RouterLink :to="'/movie/' + popularMovie.id" class="mediaList__link">
        <img
          v-if="popularMovie.poster_path"
          :src="'https://image.tmdb.org/t/p/w500/' + popularMovie.poster_path"
          alt="movie image"
          class="mediaList__link-img"
        />
        <img
          v-else
          src="@/assets/images/icon/icon-no-pictures.png"
          alt="movie image"
          class="mediaList__link-img mediaList__link-img--icon"
        />
        <span v-if="!popularMovie.poster_path" class="mediaList__link-title">{{
          popularMovie.title
        }}</span>
      </RouterLink>
    </li>
    <button
      class="mediaList__btn"
      v-if="popularMovies.page < popularMovies.total_pages"
      @click="emits('updatePopularMovie')"
    >
      +
    </button>
  </ul>
  <ul class="mediaList" v-if="btnNav.btnTopRatedMovie">
    <li
      v-for="topRatedMovie in topRatedMovies.results"
      :key="topRatedMovie.id"
      class="mediaList__item"
    >
      <RouterLink :to="'/movie/' + topRatedMovie.id" class="mediaList__link">
        <img
          v-if="topRatedMovie.poster_path"
          :src="'https://image.tmdb.org/t/p/w500/' + topRatedMovie.poster_path"
          alt="movie image"
          class="mediaList__link-img"
        />
        <img
          v-else
          src="@/assets/images/icon/icon-no-pictures.png"
          alt="movie image"
          class="mediaList__link-img mediaList__link-img--icon"
        />
        <span v-if="!topRatedMovie.poster_path" class="mediaList__link-title">{{
          topRatedMovie.title
        }}</span>
      </RouterLink>
    </li>
    <button
      class="mediaList__btn"
      v-if="topRatedMovies.page < topRatedMovies.total_pages"
      @click="emits('updateTopRatedMovie')"
    >
      +
    </button>
  </ul>
  <ul class="mediaList" v-if="btnNav.btnUpcomingMovie">
    <li
      v-for="upcomingMovie in upComingMovies.results"
      :key="upcomingMovie.id"
      class="mediaList__item"
    >
      <RouterLink :to="'/movie/' + upcomingMovie.id" class="mediaList__link">
        <img
          v-if="upcomingMovie.poster_path"
          :src="'https://image.tmdb.org/t/p/w500/' + upcomingMovie.poster_path"
          alt="movie image"
          class="mediaList__link-img"
        />
        <img
          v-else
          src="@/assets/images/icon/icon-no-pictures.png"
          alt="movie image"
          class="mediaList__link-img mediaList__link-img--icon"
        />
        <span v-if="!upcomingMovie.poster_path" class="mediaList__link-title">{{
          upcomingMovie.title
        }}</span>
      </RouterLink>
    </li>
    <button
      class="mediaList__btn"
      v-if="upComingMovies.page < upComingMovies.total_pages"
      @click="emits('updateUpcomingMovie')"
    >
      +
    </button>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/movie&serie/mediaList";
</style>
