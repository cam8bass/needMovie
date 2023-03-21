<script setup lang="ts">
import type { SerieResultsInterface } from "@/shared/interfaces";

defineProps<{
  popularSeries: SerieResultsInterface[];
  totalResultsSerie: number;
}>();

const emits = defineEmits<{
  (e: "incPageSerie"): void;
}>();
</script>

<template>
  <div class="news__block">
    <h3 class="news__title">Série populaires</h3>
    <ul class="news__list">
      <li
        v-for="popularSerie in popularSeries"
        :key="popularSerie.id"
        class="news__item"
      >
        <RouterLink :to="'/serie/' + popularSerie.id" class="news__link">
          <img
            v-if="popularSerie.poster_path"
            :src="'https://image.tmdb.org/t/p/w500/' + popularSerie.poster_path"
            alt="img serie"
            class="news__link-img"
          />
          <img
            v-else
            src="@/assets/images/icon/icon-no-pictures.png"
            alt="img no picture"
            class="news__link-img news__link-img--icon"
          />
          <span class="news__link-title">{{ popularSerie.name }}</span>
        </RouterLink>
      </li>

      <li class="news__item">
        <button
          v-if="popularSeries.length < totalResultsSerie"
          class="news__btnMore"
          @click="emits('incPageSerie')"
        >
          Afficher plus
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/home/homeNews";
</style>
