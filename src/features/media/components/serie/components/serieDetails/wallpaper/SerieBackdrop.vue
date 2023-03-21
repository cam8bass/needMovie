<script setup lang="ts">
import type {
  WallpapperBackdropsInterface,
  WallpapperInterface,
} from "@/shared/interfaces";

defineProps<{
  backdrops: WallpapperBackdropsInterface[];
  wallpapers: WallpapperInterface;
}>();

const emits = defineEmits<{
  (e: "incPageBackdrop"): void;
}>();
</script>

<template>
  <ul class="landscapeList">
    <li
      v-for="backdrop in backdrops"
      :key="backdrop.file_path"
      class="landscapeList__item"
    >
      <a
        :href="'https://image.tmdb.org/t/p/original/' + backdrop.file_path"
        class="landscapeList__link"
        target="_blank"
      >
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + backdrop.file_path"
          alt="img movie"
          class="wallpaper__img"
        />
      </a>
    </li>
    <li class="landscapeList__item">
      <button
        v-if="wallpapers.backdrops.length !== backdrops.length"
        class="wallpaper__btn"
        @click="emits('incPageBackdrop')"
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
