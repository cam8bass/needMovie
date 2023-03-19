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

defineProps<{
  credits: ActorCreditsInterface;
  casts: ActorCreditsCastInterface[];
  crews: ActorCreditCrewInterface[];
}>();

const emits = defineEmits<{
  (e: "incPageCast"): void;
  (e: "incPageCrew"): void;
}>();
const btnNavJob = ref<navCredits>("cast");

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
      @incPageCast="emits('incPageCast')"
    />
    <ActorJobCrew
      v-if="btnNavJob === 'crew'"
      :credits="credits"
      :crews="crews"
      @incPageCrew="emits('incPageCrew')"
    />
  </div>
</template>

<style lang="scss" scoped></style>
