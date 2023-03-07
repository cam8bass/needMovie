<script setup lang="ts"></script>

<template>
  <section class="tools">
    <h4 class="tools__title">Les outils utilisés</h4>
    <div class="tools__block">
      <img
        src="@/assets/images/logo/logo-sass.png"
        alt="icon sass"
        class="tools__img"
      />

      <img
        src="@/assets/images/logo/logo-vuejs.png"
        alt="icon vuejs"
        class="tools__img"
      />

      <img
        src="@/assets/images/logo/logo-tmdb.png"
        alt="icon tmdb"
        class="tools__img"
      />

      <img
        src="@/assets/images/logo/logo-pinia.png"
        alt="icon pinia"
        class="tools__img"
      />

      <img
        src="@/assets/images/logo/logo-vee-validate.png"
        alt="icon vee-validate"
        class="tools__img"
      />

      <img
        src="@/assets/images/logo/logo-zod.png"
        alt="icon zod"
        class="tools__img"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/mixins" as m;
.tools {
  margin: 2rem 2rem;
  width: 90vw; // a voir
  &__title {
    font-size: 1.8rem;
    color: var(--textColor-2);
    font-family: var(--fontSubtitle);
    margin-bottom: 2rem;

    @include m.sm {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    @include m.md {
      font-size: 2.5rem;
    }
  }

  &__block {
    display: flex;
    justify-content: center;
    align-items: center;
    @include m.xs {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min-content, 6rem));
      gap: 2rem;
    }
  }

  &__img {
    width: 100%;
    max-width: 8rem;
    &:not(:last-of-type) {
      margin-right: 2rem;
    }

    @include m.md {
      &:not(:last-of-type) {
        margin-right: 4rem;
      }
    }
    @include m.xl {
      &:not(:last-of-type) {
        margin-right: 6rem;
      }
    }
  }
}
</style>
