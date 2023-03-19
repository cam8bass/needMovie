<script setup lang="ts">
import type { ActorCreditsInterface } from "@/shared/interfaces";
import type { navCredits } from "@/shared/types";

defineProps<{
  btnNavJob: navCredits;
  credits: ActorCreditsInterface;
}>();

const emits = defineEmits<{
  (e: "updateNavigation", value: navCredits): void;
}>();
</script>

<template>
  <nav class="navigationSection">
    <ul class="navigationSection__list">
      <li class="navigationSection__item" v-if="credits.cast.length">
        <button
          class="navigationSection__btn"
          @click="emits('updateNavigation', 'cast')"
          :class="btnNavJob === 'cast' ? 'navigationSection__btn--active' : ''"
        >
          Interprétations
        </button>
      </li>
      <li class="navigationSection__item" v-if="credits.crew.length">
        <button
          class="navigationSection__btn"
          @click="emits('updateNavigation', 'crew')"
          :class="btnNavJob === 'crew' ? 'navigationSection__btn--active' : ''"
        >
          Production
        </button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/navigationSection";
</style>
