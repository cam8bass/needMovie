<script setup lang="ts">
import type {
  SerieSeasonInterface,
  SerieSummaryInterface,
} from "@/shared/interfaces";
import type { navSeason } from "@/shared/types";

defineProps<{
  btnNavSeason: navSeason;
  seasons: SerieSeasonInterface;
  summary: SerieSummaryInterface;
}>();
</script>

<template>
  <ul class="season__list">
    <li class="season__item">
      <RouterLink :to="'/serie/season/' + summary.seasons[0].id" class="season__link">
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + seasons.poster_path"
          alt="poster season"
          class="season__img"
        />

        <div class="season__description">
          <span v-if="seasons.season_number" class="season__title"
            >Saison {{ seasons.season_number }}</span
          >

          <div class="season__block">
            <span v-if="seasons.air_date" class="season__subtitle">
              {{ new Date(seasons.air_date).getFullYear() }}
            </span>

            <span v-if="seasons.episodes.length" class="season__subtitle"
              >{{ seasons.episodes.length }}
              {{ seasons.episodes.length > 1 ? "épisodes" : "épisode" }}
            </span>
          </div>

          <p v-if="seasons.overview" class="season__overview">
            {{ seasons.overview }}
          </p>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/season";
</style>
