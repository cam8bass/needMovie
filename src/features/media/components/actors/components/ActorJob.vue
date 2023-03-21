<script setup lang="ts">
import type { navCredits } from "@/shared/types";
import { ref } from "vue";
import ActorJobNav from "./actorJob/ActorJobNav.vue";
import ActorJobCast from "./actorJob/ActorJobCast.vue";
import ActorJobCrew from "./actorJob/ActorJobCrew.vue";
import type {
  ActorCreditCrewInterface,
  ActorCreditsCastInterface,
  ActorCreditsInterface,
} from "@/shared/interfaces";

const props = defineProps<{
  credits: ActorCreditsInterface;
  casts: ActorCreditsCastInterface[];
  crews: ActorCreditCrewInterface[];
}>();

const btnNavJob = ref<navCredits>(props.casts.length ? "cast" : "crew");

function updateJobNavigation(value: navCredits): void {
  btnNavJob.value = value;
}
</script>

<template>
  <div class="job">
    <ActorJobNav
      :btnNavJob="btnNavJob"
      :credits="credits"
      @updateNavigation="updateJobNavigation"
    />
    <ActorJobCast
      v-if="btnNavJob === 'cast'"
      :casts="casts"
      :credits="credits"
    />
    <ActorJobCrew
      v-if="btnNavJob === 'crew'"
      :credits="credits"
      :crews="crews"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/mixins" as m;
.job {
  margin: 2rem 0;

  @include m.md {
    margin: 4rem 0;
  }

  @include m.xl {
    margin: 6rem 0;
  }
}
</style>
