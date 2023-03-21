<script setup lang="ts">
import type {
  ActorCreditsCastInterface,
  ActorCreditsInterface,
} from "@/shared/interfaces";

import { ERROR_EMPTY_DETAIL } from "@/shared/messages/index";
defineProps<{
  casts: ActorCreditsCastInterface[];
  credits: ActorCreditsInterface;
}>();
</script>

<template>
  <ul class="cast">
    <li v-for="cast in casts" :key="cast.id" class="cast__item">
      <RouterLink :to="'/movie/' + cast.id" class="cast__link">
        <ul class="cast__description">
          <li class="cast__description-item">
            Sortie:
            <span class="cast__description-text">
              {{
                cast.release_date
                  ? new Date(cast.release_date).toLocaleDateString()
                  : ERROR_EMPTY_DETAIL
              }}</span
            >
          </li>
          <li class="cast__description-item">
            Film:
            <span class="cast__description-text">
              {{
                cast.original_title ? cast.original_title : ERROR_EMPTY_DETAIL
              }}</span
            >
          </li>

          <li class="cast__description-item">
            Personnage:
            <span class="cast__description-text">
              {{ cast.character ? cast.character : ERROR_EMPTY_DETAIL }}</span
            >
          </li>
        </ul>
      </RouterLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/actor/cast&crew";
</style>
