<script setup lang="ts">
import type {
  WallpapperInterface,
  WallpapperPostersInterface,
} from "@/shared/interfaces";

defineProps<{
  posters: WallpapperPostersInterface[];
  wallpapers: WallpapperInterface;
}>();

const emits = defineEmits<{
  (e: "incPagePoster"): void;
}>();
</script>

<template>
  <ul class="landscapeList">
    <li
      v-for="poster in posters"
      :key="poster.file_path"
      class="landscapeList__item"
    >
      <a
        :href="'https://image.tmdb.org/t/p/original/' + poster.file_path"
        class="landscapeList__link"
        target="_blank"
      >
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + poster.file_path"
          alt="img movie"
          class="wallpaper__img"
        />
      </a>
    </li>
    <li class="landscapeList__item">
      <button
        v-if="wallpapers.posters.length !== posters.length"
        class="wallpaper__btn"
        @click="emits('incPagePoster')"
      >
        Afficher plus
      </button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/landscapeList";
@import "@/assets/sass/components/details/wallpaper";
</style>
