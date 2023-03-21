<script setup lang="ts">
import {
  initialFetchSerieDetails,
  useSerieDetailStore,
} from "@/features/media/stores/serieDetailStore";
import TheLoading from "@/shared/components/TheLoading.vue";
import SerieSummary from "./SerieSummary.vue";
import SerieActor from "./actor/SerieActor.vue";
import SerieTrailer from "./SerieTrailer.vue";
import SerieWallpapper from "./wallpaper/SerieWallpaper.vue";
import SerieSeason from "./season/SerieSeason.vue";
import SerieSimilar from "./SerieSimilar.vue";
import type {
  SerieCastInterface,
  SerieCrewInterface,
  WallpapperBackdropsInterface,
  WallpapperPostersInterface,
} from "@/shared/interfaces";
import { useRoute } from "vue-router";
import { watch } from "vue";

const serieDetailStore = useSerieDetailStore();
const route = useRoute();

function getCast(page: number): SerieCastInterface[] {
  return serieDetailStore.getCast(page);
}

function getCrew(page: number): SerieCrewInterface[] {
  return serieDetailStore.getCrew(page);
}

function getWallpapperBackdrops(page: number): WallpapperBackdropsInterface[] {
  return serieDetailStore.getWallpapperBackdrops(page);
}

function getWallpapperPosters(page: number): WallpapperPostersInterface[] {
  return serieDetailStore.getWallpapperPosters(page);
}

function incPageCast(): void {
  serieDetailStore.pages.castPage++;
}

function incPageCrew(): void {
  serieDetailStore.pages.crewPage++;
}

function incPageBackdrop(): void {
  serieDetailStore.pages.backdropPage++;
}

function incPagePoster(): void {
  serieDetailStore.pages.posterPage++;
}

function fetchLastSeasonDetail() {
  const id = route.params.id as string;
  const lastSeasonNumber = serieDetailStore.summary.number_of_seasons;

  serieDetailStore.fetchLastSerieSeason(id, lastSeasonNumber);
}

function fetchSelectedSeason(seasonNumber: number) {
  const id = route.params.id as string;
  serieDetailStore.fetchSerieSeason(id, seasonNumber);
}

watch(
  () => route.params.id as string,
  (newId) => {
    if (newId) {
      initialFetchSerieDetails(newId);
    }
  }
);
</script>

<template>
  <TheLoading v-if="serieDetailStore.loading" />
  <div class="details" v-if="!serieDetailStore.loading">
    <SerieSummary
      :summary="serieDetailStore.summary"
      :director="serieDetailStore.getDirector"
    />

    <SerieSeason
      :lastSeason="serieDetailStore.getLastSeason"
      :seasons="serieDetailStore.seasons"
      :summary="serieDetailStore.summary"
      @openLastSeason="fetchLastSeasonDetail"
      @open-selected-season="fetchSelectedSeason"
    />
    <SerieActor
      :crews="getCrew(serieDetailStore.pages.crewPage)"
      :casts="getCast(serieDetailStore.pages.castPage)"
      :credits="serieDetailStore.credits"
      @incPageCast="incPageCast"
      @incPageCrew="incPageCrew"
    />
    <SerieTrailer :trailers="serieDetailStore.trailer" />
    <SerieWallpapper
      :backdrops="getWallpapperBackdrops(serieDetailStore.pages.backdropPage)"
      :posters="getWallpapperPosters(serieDetailStore.pages.posterPage)"
      :wallpapers="serieDetailStore.wallpapper"
      @incPageBackdrop="incPageBackdrop"
      @incPagePoster="incPagePoster"
    />

    <SerieSimilar :similars="serieDetailStore.similar" />
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
