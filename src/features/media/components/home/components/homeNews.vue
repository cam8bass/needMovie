<script setup lang="ts">
import type {
  MovieResultsInterface,
  SerieResultsInterface,
} from "@/shared/interfaces";

const props = defineProps<{
  cinemaMovies: MovieResultsInterface[];
  popularMovies: MovieResultsInterface[];
  popularSeries: SerieResultsInterface[];
}>();
</script>

<template>
  <section class="news">
    <div class="news__block">
      <h2 class="news__title">Actuellement au Cinéma</h2>

      <ul class="news__list">
        <li
          v-for="cinemaMovie in props.cinemaMovies"
          :key="cinemaMovie.id"
          class="news__item"
        >
          <RouterLink :to="'/movie/' + cinemaMovie.id" class="news__link">
            <img
              :src="
                'https://image.tmdb.org/t/p/w500/' + cinemaMovie.poster_path
              "
              alt="img movie"
              class="news__link-img"
            />

            <span class="news__link-title">{{ cinemaMovie.title }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="news__block">
      <h3 class="news__title">Films populaires</h3>
      <ul class="news__list">
        <li
          v-for="popularMovie in popularMovies"
          :key="popularMovie.id"
          class="news__item"
        >
          <RouterLink :to="'/movie/' + popularMovie.id" class="news__link">
            <img
              :src="
                'https://image.tmdb.org/t/p/w500/' + popularMovie.poster_path
              "
              alt="img serie"
              class="news__link-img"
            />
            <span class="news__link-title">{{ popularMovie.title }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="news__block">
      <h3 class="news__title">Série populaires</h3>
      <ul class="news__list">
        <li
          v-for="popularSerie in popularSeries"
          :key="popularSerie.id"
          class="news__item"
        >
          <RouterLink :to="'/serie/' + popularSerie.id" class="news__link">
            <img
              :src="
                'https://image.tmdb.org/t/p/w500/' + popularSerie.poster_path
              "
              alt="img serie"
              class="news__link-img"
            />
            <span class="news__link-title">{{ popularSerie.name }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/mixins" as m;

.news {
  &__title {
    font-size: 1.8rem;
    color: var(--textColor-2);
    font-family: var(--fontSubtitle);
    margin-bottom: 1rem;

    @include m.sm {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    @include m.md {
      font-size: 2.5rem;
    }
  }

  &__list {
    display: flex;
    width: 90vw;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 2rem;
      margin-right: 1rem;
    }

    @include m.md {
      &:not(:last-child) {
        margin-bottom: 4rem;
      }
    }

    @include m.xl {
      &:not(:last-child) {
        margin-bottom: 6rem;
      }
    }
  }

  &__link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-img {
      box-shadow: var(--boxShadow-1);
      height: 10rem;
      border-radius: 10px;
      object-fit: cover;
      object-position: center;
      @include m.md {
        height: 15rem;
      }

      @include m.lg {
        height: 20rem;
      }
    }

    &-title {
      font-size: 1.6rem;
      font-family: vat(--fontText);
      color: var(--textColor-2);
      margin-top: 1rem;
    }
  }
}
</style>
