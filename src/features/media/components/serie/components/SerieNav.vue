<script setup lang="ts">
const emits = defineEmits<{
  (
    e: "navigationSerie",
    btnPopular: boolean,
    btnTopRated: boolean,
    btnCurrentlyAiring: boolean
  ): void;

  (e: "fetchTopRatedSerie"): void;
  (e: "fetchCurrentlyAiringSerie"): void;
}>();

defineProps<{
  btnNav: {
    btnPopularSerie: boolean;
    btnTopRatedSerie: boolean;
    btnCurrentlyAiringSerie: boolean;
  };
}>();
</script>

<template>
  <div class="categories">
    <button
      @click="emits('navigationSerie', true, false, false)"
      class="categories__btn"
      :class="btnNav.btnPopularSerie ? 'categories__btn--active' : ''"
    >
      Populaires
    </button>
    <button
      @click="
        emits('navigationSerie', false, true, false),
          emits('fetchTopRatedSerie')
      "
      class="categories__btn"
      :class="btnNav.btnTopRatedSerie ? 'categories__btn--active' : ''"
    >
      Top séries
    </button>
    <button
      @click="
        emits('navigationSerie', false, false, true),
          emits('fetchCurrentlyAiringSerie')
      "
      class="categories__btn"
      :class="btnNav.btnCurrentlyAiringSerie ? 'categories__btn--active' : ''"
    >
      Diffusées
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/movie&serie/categories";
</style>
