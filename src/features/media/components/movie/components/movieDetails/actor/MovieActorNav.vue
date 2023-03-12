<script setup lang="ts">
import type { CreditsInterface } from "@/shared/interfaces";
import type { navCredits } from "@/shared/types";

defineProps<{
  btnNavCredits: navCredits;
  credits: CreditsInterface;
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
          :class="
            btnNavCredits === 'cast' ? 'navigationSection__btn--active' : ''
          "
        >
          Acteurs
        </button>
      </li>
      <li class="navigationSection__item" v-if="credits.crew.length">
        <button
          class="navigationSection__btn"
          @click="emits('updateNavigation', 'crew')"
          :class="
            btnNavCredits === 'crew' ? 'navigationSection__btn--active' : ''
          "
        >
          Équipe technique
        </button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/navigationSection";
</style>
