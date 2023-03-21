<script setup lang="ts">
import type { WallpapperInterface } from "@/shared/interfaces";
import type { navWallpaper } from "@/shared/types";

defineProps<{
  btnNavWallpaper: navWallpaper;
  wallpapers: WallpapperInterface;
}>();

const emits = defineEmits<{
  (e: "updateNavigation", value: navWallpaper): void;
}>();
</script>

<template>
  <nav class="navigationSection">
    <ul class="navigationSection__list">
      <li class="navigationSection__item" v-if="wallpapers.backdrops.length">
        <button
          class="navigationSection__btn"
          @click="emits('updateNavigation', 'backdrops')"
          :class="
            btnNavWallpaper === 'backdrops'
              ? 'navigationSection__btn--active'
              : ''
          "
        >
          Wallpapers
        </button>
      </li>
      <li class="navigationSection__item" v-if="wallpapers.posters.length">
        <button
          class="navigationSection__btn"
          @click="emits('updateNavigation', 'posters')"
          :class="
            btnNavWallpaper === 'posters'
              ? 'navigationSection__btn--active'
              : ''
          "
        >
          Posters
        </button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/details/navigationSection";
</style>
