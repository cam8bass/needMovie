<script setup lang="ts">
import type {
  ActorCreditCrewInterface,
  ActorCreditsInterface,
} from "@/shared/interfaces";

defineProps<{
  crews: ActorCreditCrewInterface[];
  credits: ActorCreditsInterface;
}>();

const emits = defineEmits<{
  (e: "incPageCrew"): void;
}>();
</script>

<template>
  <ul class="landscapeList">
    <li v-for="crew in crews" :key="crew.id" class="landscapeList__item">
      <RouterLink :to="'/movie/' + crew.id" class="landscapeList__link">
        <img
          v-if="crew.backdrop_path"
          :src="'https://image.tmdb.org/t/p/w300' + crew.backdrop_path"
          alt="img actor"
          class="actor__img"
        />
        <img
          v-else
          src="@/assets/images/icon/icon-no-pictures.png"
          alt="icon no picture"
          class="actor__img"
        />
        <span class="landscapeList__name">{{ crew.title }}</span>
        <span class="landscapeList__job">{{ crew.job }}</span>
      </RouterLink>
    </li>
    <li class="landscapeList__item">
      <button
        v-if="credits.crew.length !== crews.length"
        class="actor__btn"
        @click="emits('incPageCrew')"
      >
        Afficher plus
      </button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/landscapeList";

@import "@/assets/sass/components/actor";
</style>
