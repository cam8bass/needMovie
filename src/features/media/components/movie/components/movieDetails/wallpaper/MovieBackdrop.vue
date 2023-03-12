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
    <li
      class="landscapeList__item"
      v-if="
        wallpapers.backdrops.length > 10 &&
        wallpapers.backdrops.length !== backdrops.length
      "
    >
      <button
        class="wallpaper__btn wallpaper__btn-actor"
        @click="emits('incPageBackdrop')"
      >
        Afficher plus
      </button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/landscapeList";

@import "@/assets/sass/components/wallpaper";
</style>
