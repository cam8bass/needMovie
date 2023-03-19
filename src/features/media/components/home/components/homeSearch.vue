<script setup lang="ts">
import type {
  yourSeachResultActorInterface,
  yourSeachResultMovieInterface,
  yourSeachResultSerieInterface,
} from "@/shared/interfaces";
import { ref } from "vue";
import HomeSearchResults from "@/features/media/components/home/components/HomeSearchResults.vue";

defineProps<{
  searchMovieResults: yourSeachResultMovieInterface[];
  searchSerieResults: yourSeachResultSerieInterface[];
  searchActorResults: yourSeachResultActorInterface[];
}>();

const emits = defineEmits<{
  (e: "updateSearch", inputValue: string): void;
}>();

const inputSearch = ref<string>("");
const openResult = ref<boolean>(false);
</script>

<template>
  <section class="search">
    <h1 class="search__title">
      Des films classiques aux dernières sorties, explorez l’univers du cinéma
      et trouvez le film parfait pour chaque humeur et occasion
    </h1>
    <div class="search__block">
      <input
        v-model="inputSearch"
        type="text"
        class="search__input"
        placeholder="Rechercher..."
        @input="emits('updateSearch', inputSearch.toLowerCase())"
        @focus="openResult = true"
        :class="inputSearch ? 'borderRadius' : ''"
      />
      <HomeSearchResults
        v-if="openResult && inputSearch"
        :openResult="openResult"
        :searchMovieResults="searchMovieResults"
        :searchSerieResults="searchSerieResults"
        :searchActorResults="searchActorResults"
        @toogleOpenResult="openResult = !openResult"
        @resetInput="inputSearch = ''"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/mixins" as m;

.search {
  position: relative;
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

  &__block {
    position: relative;
  }

  &__input {
    position: relative;
    z-index: 2;
    margin-top: 2rem;
    padding-left: 2rem;
    font-size: 1.8rem;
    min-height: 3.5rem;
    border-radius: 20px;
    border: none;
    color: var(--textColor-2);
    box-shadow: var(--boxShadow-1);

    @include m.xs {
      width: 90%;
    }

    @include m.md {
      height: 4rem;
      width: 50rem;
    }
  }

  .borderRadius {
    border-radius: 0;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
}
</style>
