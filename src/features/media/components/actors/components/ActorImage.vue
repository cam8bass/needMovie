<script setup lang="ts">
import type { ActorImgagesProfilesInterface } from "@/shared/interfaces";

defineProps<{
  images: ActorImgagesProfilesInterface[];
}>();
</script>

<template>
  <div class="sectionDetail">
    <h3 class="sectionDetail__title">Images</h3>
    <ul class="landscapeList">
      <li
        class="landscapeList__item"
        v-for="image in images"
        :key="image.file_path"
      >
        <a
          target="_blank"
          :href="'https://image.tmdb.org/t/p/original/' + image.file_path"
          class="landscapeList__link"
        >
          <img
            :src="'https://image.tmdb.org/t/p/original/' + image.file_path"
            alt="img actor"
            class="wallpaper__img"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/details/sectionDetail";

@import "@/assets/sass/components/landscapeList";
@import "@/assets/sass/components/details/wallpaper";
</style>
