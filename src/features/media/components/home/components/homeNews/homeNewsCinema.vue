<script setup lang="ts">
import type { HomeResultsCinemaInterface } from "@/shared/interfaces";

defineProps<{
  cinemaMovies: HomeResultsCinemaInterface[];
  totalResultsCinema: number;
}>();

const emits = defineEmits<{
  (e: "incPageCinema"): void;
}>();
</script>

<template>
  <div class="news__block">
    <h2 class="news__title">Actuellement au Cinéma</h2>

    <ul class="news__list">
      <li
        v-for="cinemaMovie in cinemaMovies"
        :key="cinemaMovie.id"
        class="news__item"
      >
        <RouterLink :to="'/movie/' + cinemaMovie.id" class="news__link">
          <img
            v-if="cinemaMovie.poster_path"
            :src="'https://image.tmdb.org/t/p/w500/' + cinemaMovie.poster_path"
            alt="img movie"
            class="news__link-img"
          />
          <img
            v-else
            src="@/assets/images/icon/icon-no-pictures.png"
            alt="img no picture"
            class="news__link-img news__link-img--icon"
          />

          <span class="news__link-title">{{ cinemaMovie.title }}</span>
        </RouterLink>
      </li>
      <li class="news__item">
        <button
          v-if="cinemaMovies.length < totalResultsCinema"
          class="news__btnMore"
          @click="emits('incPageCinema')"
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
