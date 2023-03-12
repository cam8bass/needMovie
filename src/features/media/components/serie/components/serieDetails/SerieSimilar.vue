<script setup lang="ts">
import type { SerieSimilarInterface } from "@/shared/interfaces";

defineProps<{
  similars: SerieSimilarInterface;
}>();
</script>

<template>
  <div class="sectionDetails" v-if="similars.results.length">
    <h5 class="sectionDetails__title">Recommandations</h5>
    <ul class="landscapeList">
      <li
        v-for="similar of similars.results"
        :key="similar.id"
        class="landscapeList__item"
      >
        <RouterLink :to="'/serie/' + similar.id" class="landscapeList__link">
          <img
            v-if="similar.poster_path"
            :src="'https://image.tmdb.org/t/p/w500/' + similar.poster_path"
            alt="img serie"
            class="similar__img similar__img-similar"
          />
          <img
            v-else
            src="@/assets/images/icon/icon-no-pictures.png"
            alt="img serie"
            class="similar__img similar__img-similar"
          />
          <span class="landscapeList__name">{{ similar.name }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/sectionDetails";
@import "@/assets/sass/components/landscapeList";
@import "@/assets/sass/components/similar";
</style>
