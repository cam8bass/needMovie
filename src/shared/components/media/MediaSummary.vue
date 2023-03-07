<script setup lang="ts">
import type { CrewInterface, MovieSummaryInterface } from "@/shared/interfaces";
import { useRouter } from "vue-router";

defineProps<{
  summary: MovieSummaryInterface;
  director: CrewInterface[];
}>();

const router = useRouter();
</script>

<template>
  <section class="summary">
    <button @click="router.push('/movie')" class="summary__btn">
      <img
        src="@/assets/images/icon/icon-close.png"
        alt="icon arrow left "
        class="summary__btn-icon"
      />
    </button>

    <img
      :src="'https://image.tmdb.org/t/p/w500/' + summary.backdrop_path"
      alt="img movie"
      class="summary__background"
    />
    <div class="summary__poster">
      <a
        :href="'https://image.tmdb.org/t/p/original/' + summary.backdrop_path"
        target="_blank"
        class="summary__poster-link"
      >
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + summary.poster_path"
          alt="img movie"
          class="summary__poster-img"
        />
      </a>
      <div class="summary__score">
        <span class="summary__score-number"
          >{{ ((summary.vote_average * 100) / 10).toFixed(0) }}%</span
        >
      </div>
    </div>
    <div class="summary__nav">
      <ul class="summary__nav-list">
        <li class="summary__nav-item">
          <button class="summary__nav-btn">
            <img
              src="@/assets/images/icon/icon-watch.png"
              alt="icon watch"
              class="summary__nav-icon"
            />
            <span class="summary__nav-text">Vu</span>
          </button>
        </li>
        <li class="summary__nav-item">
          <button class="summary__nav-btn">
            <img
              src="@/assets/images/icon/icon-seen.png"
              alt="icon seen"
              class="summary__nav-icon"
            />
            <span class="summary__nav-text">À voir</span>
          </button>
        </li>
        <li class="summary__nav-item">
          <button class="summary__nav-btn">
            <img
              src="@/assets/images/icon/icon-favori.png"
              alt="icon favori"
              class="summary__nav-icon"
            />
            <span class="summary__nav-text">Favoris</span>
          </button>
        </li>
        <li class="summary__nav-item">
          <button class="summary__nav-btn">
            <img
              src="@/assets/images/icon/icon-rate.png"
              alt="icon rate"
              class="summary__nav-icon"
            />
            <span class="summary__nav-text">Notez-moi</span>
          </button>
        </li>
      </ul>
    </div>

    <div class="summary__details">
      <h1 class="summary__title">
        {{ summary.title }}
        <span class="summary__title-date"
          >({{ new Date(summary.release_date).getFullYear() }})</span
        >
      </h1>

      <ul class="summary__list">
        <li class="summary__item">
          Genre:
          <span class="summary__text"
            >{{ summary.genres.map((el) => el.name).join(", ") }}
          </span>
        </li>
        <li class="summary__item">
          Durée:
          <span class="summary__text">
            {{
              new Date(summary.runtime! * 60 * 1000).getUTCHours() +
              " h " +
              new Date(summary.runtime! * 60 * 1000).getUTCMinutes() +
              " min"
            }}
          </span>
        </li>
        <li class="summary__item">
          Réalisateur:
          <span class="summary__text">
            {{ director.map((el) => el.original_name).join("") }}</span
          >
        </li>
        <li class="summary__item">
          Synopsis:
          <p class="summary__text">
            {{ summary.overview }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/mixins" as m;

.summary {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, min-content);
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 4rem 0;

  @include m.md {
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }
  @include m.lg {
    padding: 4rem 2rem;
  }

  &__background {
    position: absolute;
    height: 100%;
    width: 100%;
    object-position: center;
    object-fit: cover;
    filter: opacity(0.3) blur(5px);
  }

  &__poster {
    z-index: 1;
    position: relative;
    justify-self: center;
    width: 50%;
    padding: 2rem;
    @include m.xs {
      max-width: 35rem;
      min-width: 25rem;
      width: 80%;
    }

    @include m.md {
      width: 80%;
    }

    @include m.lg {
      max-width: 35rem;
      width: 100%;
    }

    &-link {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-img {
      width: 100%;
      border-radius: 20px;
      box-shadow: var(--boxShadow-1);
    }
  }
  &__score {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    width: 7rem;
    height: 7rem;

    border-radius: 50%;
    background-image: linear-gradient(
      to right bottom,
      rgba(35, 53, 65, 0.8),
      rgba(31, 27, 41, 0.8)
    );

    &-number {
      font-family: var(--fontText);
      font-size: 2.5rem;
      color: #fff;
    }
  }

  &__title {
    text-align: center;
    font-family: var(--fontText);
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 2rem;

    @include m.md {
      text-align: start;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    @include m.lg {
      font-size: 3.5rem;
    }

    &-date {
      font-size: 1.6rem;
      font-weight: 300;
    }
  }

  &__details {
    margin: 0 2rem;
    z-index: 1;
  }

  &__list {
    font-family: var(--fontText);
  }

  &__item {
    font-size: 1.8rem;
    font-weight: 600;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  &__text {
    font-weight: 300;

    &:last-of-type {
      margin-top: 1rem;
      max-width: 80rem;
    }
  }

  &__btn {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 1%;
    right: 4%;
    z-index: 2;
    background-color: var(--backgroundColor-secondary-1);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    transition: all 0.2s;

    @include m.xs {
      top: 1%;
    }

    @include m.lg {
      width: 4rem;
      height: 4rem;
      top: 3%;
    }
    &:hover,
    &:active {
      transform: scale(1.1);
      background-color: rgba(35, 53, 65, 0.8);
    }

    &-icon {
      width: 1.5rem;
      @include m.lg {
        width: 2rem;
      }
    }
  }

  &__nav {
    z-index: 2;
    grid-column: 1/-1;
    grid-row: 3/-1;
    @include m.md {
      margin: 2rem 0;
    }
    &-list {
      display: flex;
      justify-content: space-around;
      @include m.lg {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(4, max-content);
        gap: 6rem;
      }
    }

    &-item {
    }

    &-btn {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: transparent;
    }

    &-icon {
      width: 4rem;
      background-color: var(--backgroundColor-secondary-1);
      padding: 0.5rem;
      border-radius: 50%;
      transition: background-color 0.2s;

      &:hover,
      &:active {
        background-color: rgba(35, 53, 65, 0.6);
      }

      @include m.md {
        width: 5rem;
        padding: 1rem;
      }
    }

    &-text {
      margin-top: 0.5rem;
      font-family: var(--fontSubtitle);
      font-size: 1.6rem;
      color: var(--textColor-2);
      transition: color 0.2s;
      &:hover,
      &:active {
        color: var(--backgroundColor-primary-2);
      }
    }
  }
}
</style>
