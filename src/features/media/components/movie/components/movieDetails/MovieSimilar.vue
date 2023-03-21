<script setup lang="ts">
import type { MovieSimilarInterface } from "@/shared/interfaces";

defineProps<{
  similars: MovieSimilarInterface;
}>();
</script>

<template>
  <div class="sectionDetail" v-if="similars.results.length">
    <h5 class="sectionDetail__title">Recommandations</h5>
    <ul class="landscapeList">
      <li
        v-for="similar of similars.results"
        :key="similar.id"
        class="landscapeList__item"
      >
        <RouterLink :to="'/movie/' + similar.id" class="landscapeList__link">
          <img
            v-if="similar.poster_path"
            :src="'https://image.tmdb.org/t/p/w500/' + similar.poster_path"
            alt="img movie"
            class="similar__img similar__img-similar"
          />
          <img
            v-else
            src="@/assets/images/icon/icon-no-pictures.png"
            alt="img movie"
            class="similar__img similar__img-similar"
          />
          <span class="landscapeList__name">{{ similar.title }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/details/sectionDetail";
@import "@/assets/sass/components/landscapeList";

@import "@/assets/sass/components/details/similar";
</style>
