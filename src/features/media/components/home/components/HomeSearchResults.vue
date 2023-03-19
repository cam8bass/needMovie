<script setup lang="ts">
import type {
  yourSeachResultActorInterface,
  yourSeachResultMovieInterface,
  yourSeachResultSerieInterface,
} from "@/shared/interfaces";

defineProps<{
  openResult: boolean;
  searchMovieResults: yourSeachResultMovieInterface[];
  searchSerieResults: yourSeachResultSerieInterface[];
  searchActorResults: yourSeachResultActorInterface[];
}>();

const emits = defineEmits<{
  (e: "toogleOpenResult"): void;
  (e: "resetInput"): void;
}>();
</script>

<template>
  <div
    v-if="openResult"
    @click="emits('toogleOpenResult'), emits('resetInput')"
    class="results__background"
  >
    &nbsp;
  </div>

  <Transition mode="out-in">
    <div class="results" v-if="openResult">
      <!-- movie -->
      <ul class="results__list" v-if="searchMovieResults.length">
        <span class="results__categorie">Film(s):</span>
        <li
          class="results__item"
          v-for="searchMovieResult in (searchMovieResults as yourSeachResultMovieInterface[])"
          :key="searchMovieResult.id"
        >
          <RouterLink
            :to="'/movie/' + searchMovieResult.id"
            class="results__link"
            v-if="searchMovieResult.media_type === 'movie'"
          >
            <img
              v-if="searchMovieResult.poster_path"
              class="results__link-img"
              :src="
                'https://image.tmdb.org/t/p/w200/' +
                searchMovieResult.poster_path
              "
              alt="img movie"
            />
            <img
              v-else
              class="results__link-img"
              src="@/assets/images/icon/icon-no-pictures.png"
              alt="img movie"
            />

            <span class="results__link-title">
              {{ searchMovieResult.title }}
            </span>
          </RouterLink>
        </li>
      </ul>
      <!-- serie -->
      <ul class="results__list" v-if="searchSerieResults.length">
        <span class="results__categorie">Serie(s):</span>
        <li
          class="results__item"
          v-for="searchSerieResult in (searchSerieResults as yourSeachResultSerieInterface[])"
          :key="searchSerieResult.id"
        >
          <RouterLink
            :to="'/serie/' + searchSerieResult.id"
            href=""
            class="results__link"
            v-if="searchSerieResult.media_type === 'tv'"
          >
            <img
              v-if="searchSerieResult.poster_path"
              class="results__link-img"
              :src="
                'https://image.tmdb.org/t/p/w200/' +
                searchSerieResult.poster_path
              "
              alt="img serie"
            />
            <img
              v-else
              class="results__link-img"
              src="@/assets/images/icon/icon-no-pictures.png"
              alt="img serie"
            />

            <span class="results__link-title">
              {{ searchSerieResult.original_name }}
            </span>
          </RouterLink>
        </li>
      </ul>
      <!-- actor -->
      <ul class="results__list" v-if="searchActorResults.length">
        <span class="results__categorie">Acteur(s):</span>
        <li
          class="results__item"
          v-for="searchActorResult in (searchActorResults as yourSeachResultActorInterface[] )"
          :key="searchActorResult.id"
        >
          <RouterLink
            :to="'/actor/' + searchActorResult.id"
            href=""
            class="results__link"
            v-if="searchActorResult.media_type === 'person'"
          >
            <img
              v-if="searchActorResult.profile_path"
              class="results__link-img"
              :src="
                'https://image.tmdb.org/t/p/w200/' +
                searchActorResult.profile_path
              "
              alt="img actor"
            />
            <img
              v-else
              class="results__link-img"
              src="@/assets/images/icon/icon-no-pictures.png"
              alt="img actor"
            />

            <span class="results__link-title">
              {{ searchActorResult.name }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/mixins" as m;

.results {
  position: absolute;
  background-color: var(--backgroundColor-secondary-1);
  width: 100%;
  max-height: 50rem;
  z-index: 2;
  overflow-y: scroll;
  padding: 2rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  @include m.xs {
    width: 90%;
  }

  &__background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(35, 53, 65, 0.8);
  }

  &__list {
    font-size: 1.6rem;
    color: #fff;
  }

  &__item {
    margin-bottom: 1rem;

    &:first-of-type {
      margin-top: 1rem;
    }

    &:last-of-type {
      margin-bottom: 1rem;
    }
  }

  &__categorie {
    font-size: 1.8rem;
    font-weight: 600;
    text-decoration: underline;
  }

  &__link {
    display: flex;
    align-items: center;
    color: var(--textColor-1);
    transition: color 0.2s;

    &-img {
      border-radius: 10px;
      object-fit: cover;
      object-position: center;
      display: none;
      width: 8rem;
      margin-right: 1rem;
      @include m.md {
        display: block;
      }
    }

    &:hover,
    &:active {
      color: var(--backgroundColor-primary-2);
    }
  }
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  height: 0;
}

.v-enter-active,
.v-leave-active {
  transition: height 0.4s;
  transition: opacity 0.2s;
}
</style>
