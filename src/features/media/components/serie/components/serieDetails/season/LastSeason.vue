<script setup lang="ts">
import type {
  SerieSeasonInterface,
  SerieSummarySeasonsInterface,
} from "@/shared/interfaces";
import { ERROR_EMPTY_OVERVIEW } from "@/shared/messages";
import type { navSeason } from "@/shared/types";
import { ref } from "vue";

defineProps<{
  btnNavSeason: navSeason;
  summary: SerieSummarySeasonsInterface;
  lastSeason: SerieSeasonInterface;
}>();

const emits = defineEmits<{
  (e: "openLastSeason"): void;
}>();

const openDetailSeason = ref<boolean>(false);
</script>

<template>
  <ul class="season__list">
    <li class="season__item">
      <img
        :src="'https://image.tmdb.org/t/p/w500/' + summary.poster_path"
        alt="poster season"
        class="season__img"
      />

      <div class="season__description">
        <span v-if="summary.season_number" class="season__title"
          >Saison {{ summary.season_number }}</span
        >

        <div class="season__block">
          <span v-if="summary.air_date" class="season__subtitle">
            {{ new Date(summary.air_date).getFullYear() }}
          </span>

          <span v-if="summary.episode_count > 0" class="season__subtitle"
            >{{ summary.episode_count }}
            {{ summary.episode_count > 1 ? "épisodes" : "épisode" }}
          </span>
        </div>

        <p v-if="summary.overview" class="season__overview">
          {{ summary.overview }}
        </p>
        <button
          @click="
            emits('openLastSeason'), (openDetailSeason = !openDetailSeason)
          "
          class="season__btn"
        >
          Détails
        </button>

        <Transition mode="out-in">
          <div class="season__episode" v-if="openDetailSeason && lastSeason">
            <ul class="season__episode-list">
              <li
                v-for="episode in lastSeason.episodes"
                :key="episode.id"
                class="season__episode-item"
              >
                <img
                  v-if="episode.still_path"
                  :src="'https://image.tmdb.org/t/p/w500/' + episode.still_path"
                  alt=""
                  class="season__episode-img"
                />

                <img
                  v-else
                  src="@/assets/images/icon/icon-no-pictures.png"
                  alt="icon no pictures"
                  class="season__episode-img"
                />

                <span class="season__episode-title"> {{ episode.name }}</span>

                <p class="season__episode-overview">
                  {{
                    episode.overview ? episode.overview : ERROR_EMPTY_OVERVIEW
                  }}
                </p>

                <span class="season__episode-text">
                  Note :
                  <span class="season__episode-score">{{
                    episode.vote_average
                  }}</span>
                  / 10
                </span>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/season";
</style>
