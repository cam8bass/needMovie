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
  <div class="nav">
    <button
      @click="emits('navigationMovie', true, false, false)"
      class="nav__btn"
      :class="btnNav.btnPopularMovie ? 'nav__btn--active' : ''"
    >
      Populaires
    </button>
    <button
      @click="
        emits('navigationMovie', false, true, false),
          emits('fetchTopRatedMovie')
      "
      class="nav__btn"
      :class="btnNav.btnTopRatedMovie ? 'nav__btn--active' : ''"
    >
      Mieux notés
    </button>
    <button
      @click="
        emits('navigationMovie', false, false, true),
          emits('fetchUpcomingMovie')
      "
      class="nav__btn"
      :class="btnNav.btnUpcomingMovie ? 'nav__btn--active' : ''"
    >
      À venir
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/mixins" as m;
.nav {
  margin: 3rem 0;

  &__btn {
    font-size: 1.8rem;
    font-family: var(--fontSubtitle);
    background-color: transparent;
    color: var(--textColor-2);
    transition: color 0.2s;

    &:hover,
    &:active {
      color: var(--backgroundColor-primary-2);
    }

    &:not(:last-of-type) {
      margin-right: 2rem;
    }
    @include m.md {
      font-size: 2rem;
      &:not(:last-of-type) {
        margin-right: 4rem;
      }
    }

    @include m.xl {
      &:not(:last-of-type) {
        margin-right: 6rem;
      }
    }

    &--active {
      color: var(--backgroundColor-primary-2);
    }
  }
}
</style>
