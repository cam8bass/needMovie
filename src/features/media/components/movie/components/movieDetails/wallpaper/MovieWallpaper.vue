<script setup lang="ts">
import MovieWallpaperNav from "./MovieWallpaperNav.vue";
import MovieBackdrop from "./MovieBackdrop.vue";
import MoviePoster from "./MoviePoster.vue";
import type {
  WallpapperBackdropsInterface,
  WallpapperInterface,
  WallpapperPostersInterface,
} from "@/shared/interfaces";
import type { navWallpaper } from "@/shared/types";
import { ref } from "vue";

const props = defineProps<{
  backdrops: WallpapperBackdropsInterface[];
  posters: WallpapperPostersInterface[];
  wallpappers: WallpapperInterface;
}>();

const emits = defineEmits<{
  (e: "incPageBackdrop"): void;
  (e: "incPagePoster"): void;
}>();

const btnNavWallpaper = ref<navWallpaper>(
  props.backdrops.length ? "backdrops" : "posters"
);

function updateWallpaperNavigation(value: navWallpaper): void {
  btnNavWallpaper.value = value;
}
</script>

<template>
  <div class="sectionDetails">
    <MovieWallpaperNav
      :btnNavWallpaper="btnNavWallpaper"
      :wallpapers="wallpappers"
      @updateNavigation="updateWallpaperNavigation"
    />
    <MovieBackdrop
      v-if="btnNavWallpaper === 'backdrops' && backdrops.length"
      :backdrops="backdrops"
      :wallpapers="wallpappers"
      @incPageBackdrop="emits('incPageBackdrop')"
    />
    <MoviePoster
      v-if="btnNavWallpaper === 'posters' && posters.length"
      :posters="posters"
      :wallpapers="wallpappers"
      @incPagePoster="emits('incPagePoster')"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/sectionDetails";
</style>
