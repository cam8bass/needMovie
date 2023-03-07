<script setup lang="ts">
import type { MovieSimilarInterface } from "@/shared/interfaces";

defineProps<{
  similars: MovieSimilarInterface;
}>();
</script>

<template>
  <div class="details" v-if="similars.results.length">
    <h5 class="details__title">Recommandations</h5>
    <ul class="details__list">
      <li
        v-for="similar of similars.results"
        :key="similar.id"
        class="details__item"
      >
        <RouterLink :to="'/movie/' + similar.id" class="details__link">
          <img
            v-if="similar.poster_path"
            :src="'https://image.tmdb.org/t/p/w500/' + similar.poster_path"
            alt="img movie"
            class="details__img details__img-similar"
          />
          <img
            v-else
            src="@/assets/images/icon/icon-no-pictures.png"
            alt="img movie"
            class="details__img details__img-similar"
          />
          <span class="details__name">{{ similar.title }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/details";
</style>
