<script setup lang="ts">
import TheLoading from "@/shared/components/TheLoading.vue";
import ActorImage from "@/features/media/components/actors/components/ActorImage.vue";
import ActorLatest from "@/features/media/components/actors/components/ActorLatest.vue";
import ActorPopular from "@/features/media/components/actors/components/ActorPopular.vue";
import ActorSummary from "@/features/media/components/actors/components/ActorSummary.vue";
import { useActorDetailStore } from "../../stores/actorDetailStore";

const actorDetailStore = useActorDetailStore();
</script>

<template>
  <TheLoading v-if="actorDetailStore.loading" />
  <div class="actor" v-if="!actorDetailStore.loading">
    <ActorSummary />
    <ActorPopular />
    <ActorLatest />
    <ActorImage />
  </div>
</template>

<style lang="scss" scoped></style>
