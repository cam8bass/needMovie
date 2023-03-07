<script setup lang="ts">
import type {
  CastInterface,
  CreditsInterface,
  CrewInterface,
} from "@/shared/interfaces/searchInterfaces/credits.interface";
import type { navCredits } from "@/shared/types";
import { ref } from "vue";

defineProps<{
  crews: CrewInterface[];
  casts: CastInterface[];
  credits: CreditsInterface;
}>();

const emits = defineEmits<{
  (e: "incPageCast"): void;
  (e: "incPageCrew"): void;
  (e: "getCast"): void;
  (e: "getCrew"): void;
}>();

const btnNavCredits = ref<navCredits>("cast");
</script>

<template>
  <div class="details">
    <nav class="details__nav">
      <ul class="details__nav-list">
        <li class="details__nav-item">
          <button
            class="details__nav-btn"
            @click="btnNavCredits = 'cast'"
            :class="btnNavCredits === 'cast' ? 'details__nav-btn--active' : ''"
          >
            Acteurs
          </button>
        </li>
        <li class="details__nav-item">
          <button
            class="details__nav-btn"
            @click="btnNavCredits = 'crew'"
            :class="btnNavCredits === 'crew' ? 'details__nav-btn--active' : ''"
          >
            Équipe technique
          </button>
        </li>
      </ul>
    </nav>
    <ul v-if="btnNavCredits === 'cast'" class="details__list">
      <li v-for="cast in casts" :key="cast.id" class="details__item">
        <RouterLink :to="'/actor/' + cast.id" class="details__link">
          <img
            v-if="cast.profile_path"
            :src="'https://image.tmdb.org/t/p/w300' + cast.profile_path"
            alt="img details"
            class="details__img details__img-actor"
          />
          <img
            v-else
            src="@/assets/images/icon/icon-no-pictures.png"
            alt="icon no picture"
            class="details__img details__img-actor"
          />
          <span class="details__name">{{ cast.name }}</span>
        </RouterLink>
      </li>
      <li class="details__item">
        <button
          v-if="credits.cast.length !== casts.length"
          class="details__btn"
          @click="emits('incPageCast')"
        >
          Afficher plus
        </button>
      </li>
    </ul>

    <ul v-if="btnNavCredits === 'crew'" class="details__list">
      <li v-for="crew in crews" :key="crew.id" class="details__item">
        <RouterLink :to="'/actor/' + crew.id" class="details__link">
          <img
            v-if="crew.profile_path"
            :src="'https://image.tmdb.org/t/p/w300' + crew.profile_path"
            alt="img details"
            class="details__img details__img-actor"
          />
          <img
            v-else
            src="@/assets/images/icon/icon-no-pictures.png"
            alt="icon no picture"
            class="details__img details__img-actor"
          />
          <span class="details__name">{{ crew.name }}</span>
          <span class="details__job">{{ crew.job }}</span>
        </RouterLink>
      </li>
      <li class="details__item">
        <button
          v-if="credits.crew.length !== crews.length"
          class="details__btn"
          @click="emits('incPageCrew')"
        >
          Afficher plus
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/details";
</style>
