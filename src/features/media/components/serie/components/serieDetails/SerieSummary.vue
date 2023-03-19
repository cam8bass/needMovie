<script setup lang="ts">
import type { SerieCrewInterface } from "@/shared/interfaces";
import type { SerieSummaryInterface } from "@/shared/interfaces/searchSerieInterfaces/serieSummary.interface";
import { ERROR_EMPTY_OVERVIEW, ERROR_EMPTY_DETAIL } from "@/shared/messages";
import { useRouter } from "vue-router";

defineProps<{
  summary: SerieSummaryInterface;
  director: SerieCrewInterface[];
}>();

const router = useRouter();
</script>

<template>
  <section class="summary">
    <button @click="router.back()" class="summary__btn">
      <img
        src="@/assets/images/icon/icon-close.png"
        alt="icon arrow left "
        class="summary__btn-icon"
      />
    </button>

    <img
      v-if="summary.backdrop_path"
      :src="'https://image.tmdb.org/t/p/w500/' + summary.backdrop_path"
      alt="img movie"
      class="summary__background"
    />

    <div v-else class="summary__background-empty">&nbsp;</div>

    <div class="summary__poster">
      <a
        :href="'https://image.tmdb.org/t/p/original/' + summary.poster_path"
        target="_blank"
        class="summary__poster-link"
      >
        <img
          v-if="summary.poster_path"
          :src="'https://image.tmdb.org/t/p/w500/' + summary.poster_path"
          alt="img movie"
          class="summary__poster-img"
        />

        <img
          v-else
          src="@/assets/images/icon/icon-no-pictures.png"
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
        {{ summary.original_name ? summary.original_name : ERROR_EMPTY_DETAIL }}
        <span class="summary__title-date"
          >({{
            summary.first_air_date
              ? new Date(summary.first_air_date).getFullYear()
              : ERROR_EMPTY_DETAIL
          }})</span
        >
      </h1>

      <ul class="summary__list">
        <li class="summary__item">
          Genre:
          <span class="summary__text"
            >{{
              summary.genres.length
                ? summary.genres.map((el) => el.name).join(", ")
                : ERROR_EMPTY_DETAIL
            }}
          </span>
        </li>
        <li class="summary__item">
          Durée:
          <span class="summary__text">
            {{
              summary.episode_run_time[0]
                ? new Date(
                    summary.episode_run_time[0]! * 60 * 1000
                  ).getUTCHours() +
                  " h " +
                  new Date(
                    summary.episode_run_time[0]! * 60 * 1000
                  ).getUTCMinutes() +
                  " min"
                : ERROR_EMPTY_DETAIL
            }}
          </span>
        </li>

        <li class="summary__item">
          {{
            director.map((el) => el.original_name).length < 1 && director.length
              ? "Producteur:"
              : "Producteurs:"
          }}
          <span class="summary__text">
            {{
              director.length
                ? director.map((el) => el.original_name).join(", ") + "."
                : ERROR_EMPTY_DETAIL
            }}</span
          >
        </li>

        <li class="summary__item">
          Synopsis:
          <p class="summary__text">
            {{ summary.overview ? summary.overview : ERROR_EMPTY_OVERVIEW }}
          </p>
        </li>
        <li class="summary__item">
          Nombre de saisons :
          <span class="summary__text">
            {{
              summary.number_of_seasons
                ? summary.number_of_seasons
                : ERROR_EMPTY_DETAIL
            }}
          </span>
        </li>
        <li class="summary__item">
          Nombre d'épisodes :
          <span class="summary__text">
            {{
              summary.number_of_episodes
                ? summary.number_of_episodes
                : ERROR_EMPTY_DETAIL
            }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/summary";
</style>
