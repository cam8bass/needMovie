<script setup lang="ts"></script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <RouterLink class="nav__link nav__link-movies" to="/movie">
          <span class="nav__link-text">Films</span>
        </RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink class="nav__link nav__link-series" to="/serie">
          <span class="nav__link-text">Séries</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/mixins" as m;

.nav {
  margin: 4rem 0;
  @include m.md {
    margin: 6rem 0;
  }

  @include m.lg {
    margin: 8rem 0;
  }

  &__list {
    @include m.md {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__item {
    display: flex;
    justify-content: center;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    @include m.md {
      &:not(:last-child) {
        margin-bottom: 0rem;
        margin-right: 4rem;
      }
    }

    @include m.xl {
      &:not(:last-child) {
        margin-right: 8rem;
      }
    }
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    border: none;
    box-shadow: var(--boxShadow-1);
    padding: 2rem 1.5rem;
    width: 60%;
    transition: all 0.2s;
    min-width: 20rem;
    max-width: 25rem;
    @include m.md {
      height: 15rem;
    }

    @include m.lg {
      height: 18rem;
      min-width: 28rem;
    }
    @include m.xl {
      min-width: 30rem;
    }

    &:hover,
    &:active {
      transform: scale(1.1);
    }

    &-movies {
      background-image: url("@/assets/images/background/background-movies-mob.png");
      @include m.md {
        background-image: url("@/assets/images/background/background-movies.png");
      }
    }

    &-series {
      background-image: url("@/assets/images/background/background-series-mob.png");
      @include m.md {
        background-image: url("@/assets/images/background/background-series.png");
      }
    }

    &-documentary {
      background-image: url("@/assets/images/background/background-documentary-mob.png");
      @include m.md {
        background-image: url("@/assets/images/background/background-documentary.png");
      }
    }

    &-text {
      color: #fff;
      font-size: 2.5rem;
      font-family: var(--fontSubtitle);
    }
  }
}
</style>
