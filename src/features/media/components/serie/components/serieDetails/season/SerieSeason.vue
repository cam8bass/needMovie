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
  seasons: SerieSeasonInterface;
  summary: SerieSummaryInterface;
}>();
const btnNavSeason = ref<navSeason>("lastSeason");

function updateSeasonNavigation(value: navSeason): void {
  btnNavSeason.value = value;
}
</script>

<template>
  <div class="sectionDetails">
    <SerieSeasonNav
      :btnNavSeason="btnNavSeason"
      @update-navigation="updateSeasonNavigation"
    />
    <div class="season">
      <LastSeason
        class="season__list"
        v-if="btnNavSeason === 'lastSeason'"
        :btnNavSeason="btnNavSeason"
        :seasons="seasons"
        :summary="summary"
      />
      <ListSeason
        class="season__list"
        v-if="btnNavSeason === 'allSeason'"
        :btnNavSeason="btnNavSeason"
        :summary="summary"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/mixins" as m;
@import "@/assets/sass/components/sectionDetails";
@import "@/assets/sass/components/season";
</style>
