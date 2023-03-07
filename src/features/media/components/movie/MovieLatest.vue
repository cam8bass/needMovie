<script setup lang="ts">
import type { MovieResultsInterface } from "@/shared/interfaces";

defineProps<{
  btnNav: {
    btnPopularMovie: boolean;
    btnTopRatedMovie: boolean;
    btnUpcomingMovie: boolean;
  };
  movieStore: {
    popularMovie: MovieResultsInterface;
    topRatedMovie: MovieResultsInterface;
    upComingMovie: MovieResultsInterface;
  };
}>();
</script>

<template>
  <RouterLink
    v-if="btnNav.btnPopularMovie && movieStore.popularMovie"
    :to="'/movie/' + movieStore.popularMovie.id"
    class="latest"
  >
    <img
      :src="
        'https://image.tmdb.org/t/p/original/' +
        movieStore.popularMovie.backdrop_path
      "
      alt="movie latest"
      class="latest__img"
    />
    <span class="latest__title">{{ movieStore.popularMovie.title }}</span>
  </RouterLink>

  <RouterLink
    v-if="btnNav.btnTopRatedMovie && movieStore.topRatedMovie"
    :to="'/movie/' + movieStore.topRatedMovie.id"
    class="latest"
  >
    <img
      :src="
        'https://image.tmdb.org/t/p/original/' +
        movieStore.topRatedMovie.backdrop_path
      "
      alt="movie latest"
      class="latest__img"
    />
    <span class="latest__title">{{ movieStore.topRatedMovie.title }}</span>
  </RouterLink>

  <RouterLink
    v-if="btnNav.btnUpcomingMovie && movieStore.upComingMovie"
    :to="'/movie/' + movieStore.upComingMovie.id"
    class="latest"
  >
    <img
      :src="
        'https://image.tmdb.org/t/p/original/' +
        movieStore.upComingMovie.backdrop_path
      "
      alt="movie latest"
      class="latest__img"
    />
    <span class="latest__title">{{ movieStore.upComingMovie.title }}</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/mixins" as m;
.latest {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &__img {
    box-shadow: var(--boxShadow-1);
    border-radius: 10px;
    width: 80%;
    filter: brightness(0.45);
    max-height: 50rem;
    transition: filter 0.2s;
    &:hover,
    &:active {
      filter: brightness(0.2);
    }
  }

  &__title {
    font-family: var(--fontText);
    font-size: 1.6rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    @include m.md {
      font-size: 1.8rem;
    }

    @include m.xl {
      font-size: 2rem;
    }
  }
}
</style>
