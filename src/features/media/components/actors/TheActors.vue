<script setup lang="ts">
import TheLoading from "@/shared/components/TheLoading.vue";
import ActorImage from "@/features/media/components/actors/components/ActorImage.vue";
import ActorJob from "@/features/media/components/actors/components/ActorJob.vue";
import ActorSummary from "@/features/media/components/actors/components/ActorSummary.vue";
import { useActorDetailStore } from "../../stores/actorDetailStore";
import type {
  ActorCreditCrewInterface,
  ActorCreditsCastInterface,
} from "@/shared/interfaces";

const actorDetailStore = useActorDetailStore();

function getActorCast(): ActorCreditsCastInterface[] {
  return actorDetailStore.getActorCast;
}

function getActorCrew(): ActorCreditCrewInterface[] {
  return actorDetailStore.getActorCrew;
}
</script>

<template>
  <TheLoading v-if="actorDetailStore.loading" />
  <div class="actor" v-if="!actorDetailStore.loading">
    <ActorSummary :summary="actorDetailStore.details!" />
    <ActorImage
      v-if="actorDetailStore.images"
      :images="actorDetailStore.images.profiles!"
    />
    <ActorJob
      :credits="actorDetailStore.credits!"
      :casts="getActorCast()"
      :crews="getActorCrew()"
    />
  </div>
</template>

<style lang="scss" scoped>
.actor {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
