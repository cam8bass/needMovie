<script setup lang="ts"></script>

<template>
  <section class="search">
    <h1 class="search__title">
      Des films classiques aux dernières sorties, explorez l’univers du cinéma
      et trouvez le film parfait pour chaque humeur et occasion
    </h1>
    <input type="text" class="search__input" placeholder="Rechercher..." />
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/mixins" as m;

.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 25rem;
  background-image: url("@/assets/images/background/background-1-tab.png");
  background-position: center;
  background-size: cover;
  padding: 0 1rem;
  @include m.md {
    height: 40rem;
  }

  @include m.lg {
    background-image: url("@/assets/images/background/background-1-desk.png");
  }

  &__title {
    font-family: var(--fontTitle);
    font-size: 1.6rem;
    font-weight: bold;
    color: #fff;
    z-index: 2;
    max-width: 50rem;

    @include m.md {
      max-width: 70rem;
      font-size: 2.5rem;
    }

    @include m.xl {
      max-width: 100rem;
      font-size: 3.5rem;
    }
  }

  &__input {
    margin-top: 2rem;
    padding-left: 2rem;
    font-size: 1.8rem;
    height: 3.5rem;
    border-radius: 20px;
    border: none;
    color: var(--textColor-2);
    box-shadow: var(--boxShadow-1);
    @include m.xs {
      width: 60%;
    }

    @include m.md {
      height: 4rem;
      width: 50rem;
    }
  }
}
</style>
