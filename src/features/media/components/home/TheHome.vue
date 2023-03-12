<script setup lang="ts">
import HomeSearch from "@/features/media/components/home/components/homeSearch.vue";
import HomeNav from "@/features/media/components/home/components/homeNav.vue";
import HomeNews from "@/features/media/components/home/components/homeNews.vue";
import HomeTools from "@/features/media/components/home/components/homeTools.vue";
import { useHomeStore } from "../../stores/homeStore";
import TheLoading from "@/shared/components/TheLoading.vue";

const homeStore = useHomeStore();
</script>

<template>
  <TheLoading v-if="homeStore.loading" />
  <div class="home">
    <HomeSearch />
    <HomeNav />
    <HomeNews
      :cinemaMovies="homeStore.cinema.results"
      :popularMovies="homeStore.movie.popular.results"
      :popularSeries="homeStore.serie.popular.results"
    />
    <HomeTools />
    <div class="home__text">
      Toutes les données utilisées dans cette application sont fournies par The
      Movie DB, un site web communautaire gratuit dédié aux films et aux séries
      TV. Il n’a pas de but commercial et vise à offrir aux utilisateurs un
      accès facile aux informations sur leurs films et séries préférés.
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/mixins" as m;
.home {
  // a voir
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100%;
  &__text {
    padding: 0 2rem;
    padding-bottom: 4rem;
    font-size: 1.6rem;
    color: var(--textColor-2);
    max-width: 65rem;
    margin: 0 auto;

    @include m.sm {
      text-align: center;
      font-size: 1.8rem;
    }
  }
}
</style>
