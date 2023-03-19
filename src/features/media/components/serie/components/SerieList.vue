<script setup lang="ts">
import type { SerieContentInterface } from "@/shared/interfaces";

defineProps<{
  btnNav: {
    btnPopularSerie: boolean;
    btnTopRatedSerie: boolean;
    btnCurrentlyAiringSerie: boolean;
  };

  popularSeries: SerieContentInterface;
  topRatedSeries: SerieContentInterface;
  currentlyAiringSeries: SerieContentInterface;
}>();

const emits = defineEmits<{
  (e: "updatePopularSerie"): void;
  (e: "updateTopRatedSerie"): void;
  (e: "updateCurrentlyAiringSerie"): void;
}>();
</script>

<template>
  <ul class="mediaList" v-if="btnNav.btnPopularSerie">
    <li
      v-for="popularSerie in popularSeries.results"
      :key="popularSerie.id"
      class="mediaList__item"
    >
      <RouterLink :to="'/serie/' + popularSerie.id" class="mediaList__link">
        <img
          v-if="popularSerie.poster_path"
          :src="'https://image.tmdb.org/t/p/w500/' + popularSerie.poster_path"
          alt="movie image"
          class="mediaList__link-img"
        />
        <img
          v-else
          src="@/assets/images/icon/icon-no-pictures.png"
          alt="movie image"
          class="mediaList__link-img mediaList__link-img--icon"
        />
        <span v-if="!popularSerie.poster_path" class="mediaList__link-title">{{
          popularSerie.name
        }}</span>
      </RouterLink>
    </li>
    <button
      class="mediaList__btn"
      v-if="popularSeries.page < popularSeries.total_pages"
      @click="emits('updatePopularSerie')"
    >
      +
    </button>
  </ul>
  <ul class="mediaList" v-if="btnNav.btnTopRatedSerie">
    <li
      v-for="topRatedMovie in topRatedSeries.results"
      :key="topRatedMovie.id"
      class="mediaList__item"
    >
      <RouterLink :to="'/serie/' + topRatedMovie.id" class="mediaList__link">
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
          topRatedMovie.name
        }}</span>
      </RouterLink>
    </li>
    <button
      class="mediaList__btn"
      v-if="topRatedSeries.page < topRatedSeries.total_pages"
      @click="emits('updateTopRatedSerie')"
    >
      +
    </button>
  </ul>
  <ul class="mediaList" v-if="btnNav.btnCurrentlyAiringSerie">
    <li
      v-for="upcomingMovie in currentlyAiringSeries.results"
      :key="upcomingMovie.id"
      class="mediaList__item"
    >
      <RouterLink :to="'/serie/' + upcomingMovie.id" class="mediaList__link">
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
          upcomingMovie.name
        }}</span>
      </RouterLink>
    </li>
    <button
      class="mediaList__btn"
      v-if="currentlyAiringSeries.page < currentlyAiringSeries.total_pages"
      @click="emits('updateCurrentlyAiringSerie')"
    >
      +
    </button>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/movie&serie/mediaList";
</style>
