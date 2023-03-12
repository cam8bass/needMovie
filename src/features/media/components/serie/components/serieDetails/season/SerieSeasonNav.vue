<script setup lang="ts">
import type { navSeason } from "@/shared/types";

defineProps<{
  btnNavSeason: navSeason;
}>();

const emits = defineEmits<{
  (e: "updateNavigation", value: navSeason): void;
}>();
</script>

<template>
  <nav class="navigationSection">
    <ul class="navigationSection__list">
      <li class="navigationSection__item">
        <button
          class="navigationSection__btn"
          @click="emits('updateNavigation', 'lastSeason')"
          :class="
            btnNavSeason === 'lastSeason'
              ? 'navigationSection__btn--active'
              : ''
          "
        >
          Saison en cours
        </button>
      </li>
      <li class="navigationSection__item">
        <button
          class="navigationSection__btn"
          @click="emits('updateNavigation', 'allSeason')"
          :class="
            btnNavSeason === 'allSeason' ? 'navigationSection__btn--active' : ''
          "
        >
          Toutes les saisons
        </button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/navigationSection";
</style>
