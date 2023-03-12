<script setup lang="ts">
import headerNavigation from "@/components/header/HeaderNavigation.vue";
</script>

<template>
  <header class="header">
    <headerNavigation class="header__nav" />
    <RouterLink to="/home" class="header__logo">
      <img
        src="@/assets/images/logo/logo-vuejs.png"
        alt="logo needMovie"
        class="header__logo-icone"
      />
    </RouterLink>
  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/mixins" as m;

.header {
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  height: 6rem;
  padding: 0 1rem;

  background-image: linear-gradient(
    to right bottom,
    var(--backgroundColor-secondary-1),
    var(--backgroundColor-secondary-2)
  );
  &__logo {
    grid-column: 2/-1;
    grid-row: 1/2;
    justify-self: center;
    display: flex;

    &-icone {
      width: 5rem;
    }

    @include m.md {
      justify-self: start;
      margin-left: 2rem;
    }

    @include m.lg {
      grid-column: 1/2;
      margin-left: 0;
    }
  }

  &__nav {
    grid-column: 1/2;
    grid-row: 1/2;

    @include m.lg {
      grid-column: 2/-1;
      grid-row: 1/2;
    }
  }
}
</style>
