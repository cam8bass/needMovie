<script setup lang="ts">
import MediaSummary from "@/shared/components/media/MediaSummary.vue";
import MediaTrailer from "@/shared/components/media/MediaTrailer.vue";
import MediaWallpaper from "@/shared/components/media/MediaWallpaper.vue";
import MediaActor from "@/shared/components/media/MediaActor.vue";
import MediaSimilar from "@/shared/components/media/MediaSimilar.vue";

import {
  initialFetchMovieDetails,
  useSearchStore,
} from "../../stores/searchStore";
import TheLoading from "@/shared/components/TheLoading.vue";
import type {
  CastInterface,
  CrewInterface,
  WallpapperBackdropsInterface,
  WallpapperPostersInterface,
} from "@/shared/interfaces";
import { watch } from "vue";
import { useRoute } from "vue-router";

const searchStore = useSearchStore();
const route = useRoute();

function getCast(page: number): CastInterface[] {
  return searchStore.getCast(page);
}

function getCrew(page: number): CrewInterface[] {
  return searchStore.getCrew(page);
}

function getWallpapperBackdrops(page: number): WallpapperBackdropsInterface[] {
  return searchStore.getWallpapperBackdrops(page);
}

function getWallpapperPosters(page: number): WallpapperPostersInterface[] {
  return searchStore.getWallpapperPosters(page);
}

function incPageCast() {
  searchStore.pages.castPage++;
}

function incPageCrew() {
  searchStore.pages.crewPage++;
}

function incPageBackdrop() {
  searchStore.pages.backdropPage++;
}

function incPagePoster() {
  searchStore.pages.posterPage++;
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
  <TheLoading v-if="searchStore.loading" />
  <div class="details" v-if="!searchStore.loading">
    <MediaSummary
      class="details__summary"
      :summary="searchStore.summary"
      :director="searchStore.getDirector"
    />
    <MediaActor
      :crews="getCrew(searchStore.pages.crewPage)"
      :casts="getCast(searchStore.pages.castPage)"
      @incPageCast="incPageCast"
      @incPageCrew="incPageCrew"
      :credits="searchStore.credits"
    />
    <MediaTrailer class="details__trailer" :trailers="searchStore.trailer" />
    <MediaWallpaper
      :wallpappers="searchStore.wallpapper"
      :backdrops="getWallpapperBackdrops(searchStore.pages.backdropPage)"
      :posters="getWallpapperPosters(searchStore.pages.posterPage)"
      @incPageBackdrop="incPageBackdrop"
      @incPagePoster="incPagePoster"
    />
    <MediaSimilar
      :similars="searchStore.similar"
      v-if="searchStore.similar.total_results !== 0"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/mixins" as m;
@import "@/assets/sass/debug";

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

  &__trailer {
  }
}
</style>
