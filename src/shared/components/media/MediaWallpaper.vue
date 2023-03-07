<script setup lang="ts">
import type {
  WallpapperBackdropsInterface,
  WallpapperInterface,
  WallpapperPostersInterface,
} from "@/shared/interfaces";
import type { navWallpaper } from "@/shared/types";
import { ref } from "vue";

defineProps<{
  backdrops: WallpapperBackdropsInterface[];
  posters: WallpapperPostersInterface[];
  wallpappers: WallpapperInterface;
}>();

const emits = defineEmits<{
  (e: "incPageBackdrop"): void;
  (e: "incPagePoster"): void;
}>();

const btnNavWallpaper = ref<navWallpaper>("backdrops");
</script>

<template>
  <div class="details">
    <nav class="details__nav">
      <ul class="details__nav-list">
        <li class="details__nav-item">
          <button
            v-if="backdrops.length"
            class="details__nav-btn"
            @click="btnNavWallpaper = 'backdrops'"
            :class="
              btnNavWallpaper === 'backdrops' ? 'details__nav-btn--active' : ''
            "
          >
            Wallpapers
          </button>
        </li>
        <li class="details__nav-item">
          <button
            v-if="posters.length"
            class="details__nav-btn"
            @click="btnNavWallpaper = 'posters'"
            :class="
              btnNavWallpaper === 'posters' ? 'details__nav-btn--active' : ''
            "
          >
            Posters
          </button>
        </li>
      </ul>
    </nav>
    <ul
      v-if="btnNavWallpaper === 'backdrops' && backdrops.length"
      class="details__list"
    >
      <li
        v-for="backdrop in backdrops"
        :key="backdrop.file_path"
        class="details__item"
      >
        <a
          :href="'https://image.tmdb.org/t/p/original/' + backdrop.file_path"
          class="details__link"
          target="_blank"
        >
          <img
            :src="'https://image.tmdb.org/t/p/w500/' + backdrop.file_path"
            alt="img movie"
            class="details__img details__img-wallpaper"
          />
        </a>
      </li>
      <li class="details__item">
        <button
          v-if="wallpappers.backdrops.length !== backdrops.length"
          class="details__btn details__btn-actor"
          @click="emits('incPageBackdrop')"
        >
          Afficher plus
        </button>
      </li>
    </ul>

    <ul
      v-if="btnNavWallpaper === 'posters' && posters.length"
      class="details__list"
    >
      <li
        v-for="poster in posters"
        :key="poster.file_path"
        class="details__item"
      >
        <a
          :href="'https://image.tmdb.org/t/p/original/' + poster.file_path"
          class="details__link"
          target="_blank"
        >
          <img
            :src="'https://image.tmdb.org/t/p/w500/' + poster.file_path"
            alt="img movie"
            class="details__img details__img-wallpaper"
          />
        </a>
      </li>
      <li class="details__item">
        <button
          v-if="wallpappers.posters.length !== posters.length"
          class="details__btn details__btn-actor"
          @click="emits('incPagePoster')"
        >
          Afficher plus
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/details";
</style>
