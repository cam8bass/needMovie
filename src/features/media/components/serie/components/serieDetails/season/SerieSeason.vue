<script setup lang="ts">
import SerieSeasonNav from "./SerieSeasonNav.vue";
import LastSeason from "./LastSeason.vue";
import ListSeason from "./ListSeason.vue";
import type {
  SerieSeasonInterface,
  SerieSummaryInterface,
} from "@/shared/interfaces";
import type { navSeason } from "@/shared/types";
import { ref } from "vue";
defineProps<{
  seasons: SerieSeasonInterface[];
  summary: SerieSummaryInterface;
  lastSeason: SerieSeasonInterface;
}>();
const btnNavSeason = ref<navSeason>("lastSeason");

function updateSeasonNavigation(value: navSeason): void {
  btnNavSeason.value = value;
}

const emits = defineEmits<{
  (e: "openLastSeason"): void;
  (e: "openSelectedSeason", seasonNumber: number): void;
}>();
</script>

<template>
  <div class="sectionDetail">
    <SerieSeasonNav
      :btnNavSeason="btnNavSeason"
      @update-navigation="updateSeasonNavigation"
    />
    <div class="season">
      <LastSeason
        class="season__list"
        v-if="btnNavSeason === 'lastSeason'"
        :btnNavSeason="btnNavSeason"
        :summary="summary.seasons.slice(-1).pop()!"
        @openLastSeason="emits('openLastSeason')"
        :lastSeason="lastSeason"
      />
      <ListSeason
        class="season__list"
        v-if="btnNavSeason === 'allSeason'"
        :btnNavSeason="btnNavSeason"
        :summary="summary"
        @open-selected-season="emits('openSelectedSeason', $event)"
        :seasons="seasons"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/mixins" as m;
@import "@/assets/sass/components/details/sectionDetail";
@import "@/assets/sass/components/serie/season";
</style>
