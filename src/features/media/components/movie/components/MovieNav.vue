<script setup lang="ts">
const emits = defineEmits<{
  (
    e: "navigationMovie",
    btnPopular: boolean,
    btnTopRated: boolean,
    btnUpcoming: boolean
  ): void;

  (e: "fetchTopRatedMovie"): void;
  (e: "fetchUpcomingMovie"): void;
}>();

defineProps<{
  btnNav: {
    btnPopularMovie: boolean;
    btnTopRatedMovie: boolean;
    btnUpcomingMovie: boolean;
  };
}>();
</script>

<template>
  <div class="categories">
    <button
      @click="emits('navigationMovie', true, false, false)"
      class="categories__btn"
      :class="btnNav.btnPopularMovie ? 'categories__btn--active' : ''"
    >
      Populaires
    </button>
    <button
      @click="
        emits('navigationMovie', false, true, false),
          emits('fetchTopRatedMovie')
      "
      class="categories__btn"
      :class="btnNav.btnTopRatedMovie ? 'categories__btn--active' : ''"
    >
      Mieux notés
    </button>
    <button
      @click="
        emits('navigationMovie', false, false, true),
          emits('fetchUpcomingMovie')
      "
      class="categories__btn"
      :class="btnNav.btnUpcomingMovie ? 'categories__btn--active' : ''"
    >
      À venir
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/movie&serie/categories";
</style>
