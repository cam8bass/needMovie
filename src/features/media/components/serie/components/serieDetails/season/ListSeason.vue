<script setup lang="ts">
import type {
  SerieSeasonInterface,
  SerieSummaryInterface,
} from "@/shared/interfaces";
import type { navSeason } from "@/shared/types";
import { ERROR_EMPTY_OVERVIEW } from "@/shared/messages";
import { ref } from "vue";

const props = defineProps<{
  btnNavSeason: navSeason;
  summary: SerieSummaryInterface;
  seasons: SerieSeasonInterface[];
}>();

const emits = defineEmits<{
  (e: "openSelectedSeason", seasonNumber: number): void;
}>();

// Allows to manage the opening and closing of lists when clicking on the 'details' button
const openList = ref<boolean[]>([]);
openList.value = Array(props.seasons.length).fill(false);

function toogleOpenlist(index: number) {
  openList.value[index] = !openList.value[index];
}
</script>

<template>
  <ul class="season__list" v-if="btnNavSeason === 'allSeason'">
    <li
      v-for="summarySeason in summary.seasons"
      :key="summarySeason.id"
      class="season__item"
    >
      <img v-if="summarySeason.poster_path"
        :src="'https://image.tmdb.org/t/p/w300/' + summarySeason.poster_path"
        alt="poster season"
        class="season__img"
      />

      <div class="season__description">
        <span
          v-if="summarySeason.season_number && summarySeason.season_number > 1"
          class="season__title"
          >Saison {{ summarySeason.season_number }}</span
        >
        <span v-else class="season__title">{{ summarySeason.name }}</span>

        <div class="season__block">
          <span v-if="summarySeason.air_date" class="season__subtitle">
            {{ new Date(summarySeason.air_date).getFullYear() }}
          </span>

          <span v-if="summarySeason.episode_count" class="season__subtitle"
            >{{ summarySeason.episode_count }}
            {{ summarySeason.episode_count > 1 ? "épisodes" : "épisode" }}
          </span>
        </div>

        <p v-if="summarySeason.overview" class="season__overview">
          {{ summarySeason.overview }}
        </p>
        <button
          @click="
            emits('openSelectedSeason', summarySeason.season_number),
              toogleOpenlist(summarySeason.season_number)
          "
          class="season__btn"
        >
          Détails
        </button>

        <div class="season__episode" v-for="season in seasons" :key="season.id">
          <Transition mode="out-in">
            <ul
              v-if="
                season.season_number === summarySeason.season_number &&
                openList[summarySeason.season_number]
              "
              class="season__episode-list"
            >
              <li
                class="season__episode-item"
                v-for="episode in season.episodes"
                :key="episode.id"
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
          </Transition>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/season";

.hide {
  display: none;
}
</style>
