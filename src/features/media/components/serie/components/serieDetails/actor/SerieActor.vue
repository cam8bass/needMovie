<script setup lang="ts">
import SerieActorNav from "./SerieActorNav.vue";
import SerieCast from "./SerieCast.vue";
import SerieCrew from "./SerieCrew.vue";
import type {
  SerieCastInterface,
  SerieCreditsInterface,
  SerieCrewInterface,
} from "@/shared/interfaces";
import type { navCredits } from "@/shared/types";
import { ref } from "vue";

const props = defineProps<{
  crews: SerieCrewInterface[];
  casts: SerieCastInterface[];
  credits: SerieCreditsInterface;
}>();

const emits = defineEmits<{
  (e: "incPageCast"): void;
  (e: "incPageCrew"): void;
  (e: "getCast"): void;
  (e: "getCrew"): void;
}>();

const btnNavCredits = ref<navCredits>(props.casts ? "cast" : "crew");

function updateNavigation(value: navCredits): void {
  btnNavCredits.value = value;
}
</script>

<template>
  <div class="sectionDetail">
    <SerieActorNav
      :btnNavCredits="btnNavCredits"
      :credits="credits"
      @updateNavigation="updateNavigation"
    />
    <SerieCast
      v-if="btnNavCredits === 'cast'"
      :casts="casts"
      :credits="credits"
      @incPageCast="emits('incPageCast')"
    />
    <SerieCrew
      v-if="btnNavCredits === 'crew'"
      :crews="crews"
      :credits="credits"
      @incPageCrew="emits('incPageCrew')"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/details/sectionDetail";
</style>
