<script setup lang="ts">
import type { MovieContentInterface } from "@/shared/interfaces";
import { reactive } from "vue";

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
  (e: "updatePopularMovie", page: number): void;
  (e: "updateTopRatedMovie", page: number): void;
  (e: "upddateUpcomingMovie", page: number): void;
}>();

const pages = reactive<{
  popularPage: number;
  topRatedPage: number;
  upcomingPage: number;
}>({
  popularPage: 2,
  topRatedPage: 2,
  upcomingPage: 2,
});
</script>

<template>
  <ul class="list" v-if="btnNav.btnPopularMovie">
    <li
      v-for="popularMovie in popularMovies.results"
      :key="popularMovie.id"
      class="list__item"
    >
      <RouterLink :to="'/movie/' + popularMovie.id" class="list__link">
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + popularMovie.poster_path"
          alt="movie image"
          class="list__link-img"
        />
      </RouterLink>
    </li>
    <button
      class="list__btn"
      v-if="popularMovies.page < popularMovies.total_pages"
      @click="emits('updatePopularMovie', pages.popularPage++)"
    >
      +
    </button>
  </ul>
  <ul class="list" v-if="btnNav.btnTopRatedMovie">
    <li
      v-for="topRatedMovie in topRatedMovies.results"
      :key="topRatedMovie.id"
      class="list__item"
    >
      <RouterLink :to="'/movie/' + topRatedMovie.id" class="list__link">
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + topRatedMovie.poster_path"
          alt="movie image"
          class="list__link-img"
        />
      </RouterLink>
    </li>
    <button
      class="list__btn"
      v-if="topRatedMovies.page < topRatedMovies.total_pages"
      @click="emits('updateTopRatedMovie', pages.topRatedPage++)"
    >
      +
    </button>
  </ul>
  <ul class="list" v-if="btnNav.btnUpcomingMovie">
    <li
      v-for="upcomingMovie in upComingMovies.results"
      :key="upcomingMovie.id"
      class="list__item"
    >
      <RouterLink :to="'/movie/' + upcomingMovie.id" class="list__link">
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + upcomingMovie.poster_path"
          alt="movie image"
          class="list__link-img"
        />
      </RouterLink>
    </li>
    <button
      class="list__btn"
      v-if="upComingMovies.page < upComingMovies.total_pages"
      @click="emits('upddateUpcomingMovie', pages.upcomingPage++)"
    >
      +
    </button>
  </ul>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/mixins" as m;
.list {
  padding: 0 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min-content, 15rem));
  grid-template-rows: auto;
  justify-content: center;
  gap: 2rem;

  @include m.md {
    grid-template-columns: repeat(auto-fill, minmax(min-content, 20rem));
    gap: 3rem;
    padding: 0 4rem;
  }

  &__item {
    transition: all 0.2s;

    &:hover,
    &:active {
      transform: scale(1.1);
    }
  }

  &__link {
    &-img {
      width: 100%;
      border-radius: 10px;
      box-shadow: var(--boxShadow-1);
    }
  }

  &__btn {
    width: 100%;
    min-height: 20rem;
    border-radius: 10px;
    box-shadow: var(--boxShadow-1);
    font-size: 2rem;
    color: #fff;
    background-color: var(--backgroundColor-primary-2);
    transition: background-color 0.2s;
    &:hover,
    &:active {
      background-color: var(--backgroundColor-secondary-1);
    }
    @include m.md {
      height: 30rem;
      font-size: 4rem;
    }
  }
}
</style>
