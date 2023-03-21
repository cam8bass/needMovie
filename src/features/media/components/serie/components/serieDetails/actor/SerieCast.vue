<script setup lang="ts">
import type {
  SerieCastInterface,
  SerieCreditsInterface,
} from "@/shared/interfaces";

defineProps<{
  casts: SerieCastInterface[];
  credits: SerieCreditsInterface;
}>();

const emits = defineEmits<{
  (e: "incPageCast"): void;
}>();
</script>

<template>
  <ul class="landscapeList">
    <li v-for="cast in casts" :key="cast.id" class="landscapeList__item">
      <RouterLink :to="'/actor/' + cast.id" class="landscapeList__link">
        <img
          v-if="cast.profile_path"
          :src="'https://image.tmdb.org/t/p/w300' + cast.profile_path"
          alt="img actor"
          class="actor__img"
        />
        <img
          v-else
          src="@/assets/images/icon/icon-no-pictures.png"
          alt="icon no picture"
          class="actor__img"
        />
        <span class="landscapeList__name"> {{ cast.name }}</span>
        <span class="landscapeList__job">Rôle: {{ cast.roles[0].character }}</span>
      </RouterLink>
    </li>
    <li class="landscapeList__item">
      <button
        v-if="credits.cast.length !== casts.length"
        class="actor__btn"
        @click="emits('incPageCast')"
      >
        Afficher plus
      </button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/landscapeList";

@import "@/assets/sass/components/details/actor";
</style>
