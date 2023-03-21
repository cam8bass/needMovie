<script setup lang="ts">
import type {
  ActorCreditCrewInterface,
  ActorCreditsInterface,
} from "@/shared/interfaces";
import { ERROR_EMPTY_DETAIL } from "@/shared/messages/index";

defineProps<{
  crews: ActorCreditCrewInterface[];
  credits: ActorCreditsInterface;
}>();
</script>

<template>
  <ul class="cast">
    <li v-for="crew in crews" :key="crew.id" class="cast__item">
      <RouterLink :to="'/movie/' + crew.id" class="cast__link">
        <ul class="cast__description">
          <li class="cast__description-item">
            Sortie:
            <span class="cast__description-text">{{
              crew.release_date
                ? new Date(crew.release_date).toLocaleDateString()
                : ERROR_EMPTY_DETAIL
            }}</span>
          </li>
          <li class="cast__description-item">
            Film:
            <span class="cast__description-text">{{
              crew.original_title ? crew.original_title : ERROR_EMPTY_DETAIL
            }}</span>
          </li>
          <li class="cast__description-item">
            Rôle:
            <span class="cast__description-text">{{
              crew.job ? crew.job : ERROR_EMPTY_DETAIL
            }}</span>
          </li>
        </ul>
      </RouterLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/components/actor/cast&crew";
</style>
