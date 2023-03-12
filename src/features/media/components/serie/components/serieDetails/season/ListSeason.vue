<script setup lang="ts">
import type { SerieSummaryInterface } from "@/shared/interfaces";
import type { navSeason } from "@/shared/types";

defineProps<{
  btnNavSeason: navSeason;
  summary: SerieSummaryInterface;
}>();
</script>

<template>
  <ul class="season__list" v-if="btnNavSeason === 'allSeason'">
    <li v-for="season in summary.seasons" :key="season.id" class="season__item">
      <RouterLink :to="'/serie/season/' + season.id" class="season__link">
        <img
          :src="'https://image.tmdb.org/t/p/w300/' + season.poster_path"
          alt="poster season"
          class="season__img"
        />

        <div class="season__description">
          <span
            v-if="season.season_number && season.season_number > 1"
            class="season__title"
            >Saison {{ season.season_number }}</span
          >
          <span v-else class="season__title">{{ season.name }}</span>

          <div class="season__block">
            <span v-if="season.air_date" class="season__subtitle">
              {{ new Date(season.air_date).getFullYear() }}
            </span>

            <span v-if="season.episode_count" class="season__subtitle"
              >{{ season.episode_count }}
              {{ season.episode_count > 1 ? "épisodes" : "épisode" }}
            </span>
          </div>

          <p v-if="season.overview" class="season__overview">
            {{ season.overview }}
          </p>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/season";
</style>
