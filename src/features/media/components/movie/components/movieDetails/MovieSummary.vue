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
        :href="'https://image.tmdb.org/t/p/original/' + summary.poster_path"
        target="_blank"
        class="summary__poster-link"
      >
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + summary.poster_path"
          alt="img movie"
          class="summary__poster-img"
        />
      </a>
      <div class="summary__score" v-if="summary.vote_average">
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
        <span class="summary__title-date" v-if="summary.release_date"
          >({{ new Date(summary.release_date).getFullYear() }})</span
        >
      </h1>

      <ul class="summary__list">
        <li class="summary__item" v-if="summary.genres.length">
          Genre:
          <span class="summary__text"
            >{{ summary.genres.map((el) => el.name).join(", ") }}
          </span>
        </li>
        <li class="summary__item" v-if="summary.runtime">
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
        <li class="summary__item" v-if="director.length">
          Réalisateur:
          <span class="summary__text">
            {{ director.map((el) => el.original_name).join("") }}</span
          >
        </li>
        <li class="summary__item" v-if="summary.overview">
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
@import "@/assets/sass/components/summary";
</style>
