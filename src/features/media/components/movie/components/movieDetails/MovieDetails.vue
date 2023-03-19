<script setup lang="ts">
import MovieSummary from "@/features/media/components/movie/components/movieDetails/MovieSummary.vue";
import MovieTrailer from "@/features/media/components/movie/components/movieDetails/MovieTrailer.vue";
import MovieWallpaper from "@/features/media/components/movie/components/movieDetails/wallpaper/MovieWallpaper.vue";
import MovieActor from "@/features/media/components/movie/components/movieDetails/actor/MovieActor.vue";
import MovieSimilar from "@/features/media/components/movie/components/movieDetails/MovieSimilar.vue";

import {
  initialFetchMovieDetails,
  useMovieDetailStore,
} from "../../../../stores/movieDetailStore";
import TheLoading from "@/shared/components/TheLoading.vue";
import type {
  MovieCastInterface,
  MovieCrewInterface,
  WallpapperBackdropsInterface,
  WallpapperPostersInterface,
} from "@/shared/interfaces";
import { watch } from "vue";
import { useRoute } from "vue-router";

const movieDetailStore = useMovieDetailStore();
const route = useRoute();

function getCast(page: number): MovieCastInterface[] {
  return movieDetailStore.getCast(page);
}

function getCrew(page: number): MovieCrewInterface[] {
  return movieDetailStore.getCrew(page);
}

function getWallpapperBackdrops(page: number): WallpapperBackdropsInterface[] {
  return movieDetailStore.getWallpapperBackdrops(page);
}

function getWallpapperPosters(page: number): WallpapperPostersInterface[] {
  return movieDetailStore.getWallpapperPosters(page);
}

function incPageCast() {
  movieDetailStore.pages.castPage++;
}

function incPageCrew() {
  movieDetailStore.pages.crewPage++;
}

function incPageBackdrop() {
  movieDetailStore.pages.backdropPage++;
}

function incPagePoster() {
  movieDetailStore.pages.posterPage++;
}

watch(
  () => route.params.id as string,
  (newId) => {
    if (newId) {
      initialFetchMovieDetails(newId);
    }
  }
);
</script>

<template>
  <TheLoading v-if="movieDetailStore.loading" />
  <div class="details" v-if="!movieDetailStore.loading">
    <MovieSummary
      class="details__summary"
      :summary="movieDetailStore.summary"
      :director="movieDetailStore.getDirector"
    />
    <MovieActor
      :crews="getCrew(movieDetailStore.pages.crewPage)"
      :casts="getCast(movieDetailStore.pages.castPage)"
      @incPageCast="incPageCast"
      @incPageCrew="incPageCrew"
      :credits="movieDetailStore.credits"
    />
    <MovieTrailer
      class="details__trailer"
      :trailers="movieDetailStore.trailer"
    />
    <MovieWallpaper
      :wallpappers="movieDetailStore.wallpapper"
      :backdrops="getWallpapperBackdrops(movieDetailStore.pages.backdropPage)"
      :posters="getWallpapperPosters(movieDetailStore.pages.posterPage)"
      @incPageBackdrop="incPageBackdrop"
      @incPagePoster="incPagePoster"
    />
    <MovieSimilar
      :similars="movieDetailStore.similar"
      v-if="movieDetailStore.similar.total_results !== 0"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/mixins" as m;

.details {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  &__summary {
    width: 100%;
  }
}
</style>
