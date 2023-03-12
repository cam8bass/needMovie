<script setup lang="ts">
import TheLoading from "@/shared/components/TheLoading.vue";
import { useSerieStore } from "../../stores/serieStore";
import SerieDiscover from "@/features/media/components/serie/components/SerieDiscover.vue";
import SerieHead from "@/features/media/components/serie/components/SerieHero.vue";
import SerieList from "@/features/media/components/serie/components/SerieList.vue";
import SerieNav from "@/features/media/components/serie/components/SerieNav.vue";
import { ref } from "vue";

const serieStore = useSerieStore();

const btnPopularSerie = ref<boolean>(true);
const btnTopRatedSerie = ref<boolean>(false);
const btnCurrentlyAiringSerie = ref<boolean>(false);

function UpdatenavigationSerie(
  navPopular: boolean,
  navTopRated: boolean,
  navCurrentlyAiring: boolean
) {
  btnPopularSerie.value = navPopular;
  btnTopRatedSerie.value = navTopRated;
  btnCurrentlyAiringSerie.value = navCurrentlyAiring;
}

function fetchTopRatedSerie() {
  serieStore.fetchTopRatedSerie();
}

function fetchCurrentlyAiringSerie() {
  serieStore.fetchCurrentlyAiringSerie();
}

function updatePopularSerie(): void {
  const page = serieStore.pages.popularPage++;
  serieStore.fetchPopularSerie(page);
}

function updateTopRatedSerie(): void {
  const page = serieStore.pages.topRatedPage++;
  serieStore.fetchTopRatedSerie(page);
}

function updateCurrentlyAiringSerie(): void {
  const page = serieStore.pages.currentlyAiringPage++;
  serieStore.fetchCurrentlyAiringSerie(page);
}
</script>

<template>
  <TheLoading v-if="serieStore.loading" />
  <div class="content" v-if="!serieStore.loading">
    <SerieHead />
    <SerieDiscover
      :btnNav="{ btnPopularSerie, btnTopRatedSerie, btnCurrentlyAiringSerie }"
      :discover="{
        popularSerie: serieStore.popular.results[0],
        topRatedSerie: serieStore.topRated.results[0],
        currentlyAiringSerie: serieStore.currentlyAiring.results[0],
      }"
    />
    <SerieNav
      :btnNav="{ btnPopularSerie, btnTopRatedSerie, btnCurrentlyAiringSerie }"
      @navigationSerie="UpdatenavigationSerie"
      @fetchTopRatedSerie="fetchTopRatedSerie"
      @fetchCurrentlyAiringSerie="fetchCurrentlyAiringSerie"
    />
    <SerieList
      :btnNav="{ btnPopularSerie, btnTopRatedSerie, btnCurrentlyAiringSerie }"
      :popularSeries="serieStore.popular"
      :topRatedSeries="serieStore.topRated"
      :currentlyAiringSeries="serieStore.currentlyAiring"
      @updatePopularSerie="updatePopularSerie"
      @updateTopRatedSerie="updateTopRatedSerie"
      @updateCurrentlyAiringSerie="updateCurrentlyAiringSerie"
    />
  </div>
 
</template>

<style lang="scss" scoped>
@import "@/assets/sass/page/movie&serie";
</style>
