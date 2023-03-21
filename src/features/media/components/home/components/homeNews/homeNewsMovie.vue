<script setup lang="ts">
import type { MovieResultsInterface } from "@/shared/interfaces";

defineProps<{
  popularMovies: MovieResultsInterface[];
  totalResultsMovie: number;
}>();

const emits = defineEmits<{
  (e: "incPageMovie"): void;
}>();
</script>

<template>
  <div class="news__block">
    <h3 class="news__title">Films populaires</h3>
    <ul class="news__list">
      <li
        v-for="popularMovie in popularMovies"
        :key="popularMovie.id"
        class="news__item"
      >
        <RouterLink :to="'/movie/' + popularMovie.id" class="news__link">
          <img
            v-if="popularMovie.poster_path"
            :src="'https://image.tmdb.org/t/p/w500/' + popularMovie.poster_path"
            alt="img serie"
            class="news__link-img"
          />
          <img
            v-else
            src="@/assets/images/icon/icon-no-pictures.png"
            alt="img no picture"
            class="news__link-img news__link-img--icon"
          />
          <span class="news__link-title">{{ popularMovie.title }}</span>
        </RouterLink>
      </li>
      <li class="news__item">
        <button
          v-if="popularMovies.length < totalResultsMovie"
          class="news__btnMore"
          @click="emits('incPageMovie')"
        >
          Afficher plus
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/home/homeNews";
</style>
