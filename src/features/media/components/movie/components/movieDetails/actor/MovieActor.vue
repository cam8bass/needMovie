<script setup lang="ts">
import MovieActorNav from "./MovieActorNav.vue";
import MovieCast from "./MovieCast.vue";
import MovieCrew from "./MovieCrew.vue";
import type {
  CastInterface,
  CreditsInterface,
  CrewInterface,
} from "@/shared/interfaces";
import type { navCredits } from "@/shared/types";
import { ref } from "vue";

defineProps<{
  crews: CrewInterface[];
  casts: CastInterface[];
  credits: CreditsInterface;
}>();

const emits = defineEmits<{
  (e: "incPageCast"): void;
  (e: "incPageCrew"): void;
  (e: "getCast"): void;
  (e: "getCrew"): void;
}>();

const btnNavCredits = ref<navCredits>("cast");

function updateNavigation(value: navCredits): void {
  btnNavCredits.value = value;
}
</script>

<template>
  <div class="sectionDetails">
    <MovieActorNav
      :btnNavCredits="btnNavCredits"
      :credits="credits"
      @updateNavigation="updateNavigation"
    />
    <MovieCast
      v-if="btnNavCredits === 'cast'"
      :casts="casts"
      :credits="credits"
      @incPageCast="emits('incPageCast')"
    />
    <MovieCrew
      v-if="btnNavCredits === 'crew'"
      :credits="credits"
      :crews="crews"
      @incPageCrew="emits('incPageCrew')"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/sectionDetails";
</style>
