<script setup lang="ts">
import type { ActorDetailsInterface } from "@/shared/interfaces";
import { useRouter } from "vue-router";
import { ERROR_EMPTY_DETAIL, ERROR_EMPTY_BIOGRAPHIE } from "@/shared/messages";
const router = useRouter();

defineProps<{
  summary: ActorDetailsInterface;
}>();

function calcAge(birthYear: number, deathBirth?: number): number {
  const yearsNow = new Date().getFullYear();
  if (deathBirth) {
    return deathBirth - birthYear;
  } else {
    return yearsNow - birthYear;
  }
}
</script>

<template>
  <div class="summary">
    <button class="summary__btn" @click="router.back()">
      <img
        src="@/assets/images/icon/icon-close.png"
        alt="icon arrow left "
        class="summary__btn-icon"
      />
    </button>

    <div class="summary__background">&nbsp;</div>
    <a
      :href="'https://image.tmdb.org/t/p/original/' + summary.profile_path"
      target="_blank"
      class="summary__link"
    >
      <img
        v-if="summary.profile_path"
        :src="'https://image.tmdb.org/t/p/w500/' + summary.profile_path"
        alt="img actor"
        class="summary__img"
      />
      <img
        v-else
        src="@/assets/images/icon/icon-no-pictures.png"
        alt="img movie"
        class="summary__poster-img"
      />
    </a>

    <div class="summary__description">
      <h1 class="summary__description-name">
        {{ summary.name ? summary.name : ERROR_EMPTY_DETAIL }}
      </h1>

      <ul class="summary__description-list">
        <li class="summary__description-item">
          Genre:
          <span class="summary__description-text">
            {{
              summary.gender
                ? summary.gender === 1
                  ? "Femme"
                  : "Homme"
                : ERROR_EMPTY_DETAIL
            }}
          </span>
        </li>
        <li class="summary__description-item">
          Date de naissance:
          <span class="summary__description-text">
            {{
              summary.birthday
                ? new Date(summary.birthday).toLocaleDateString()
                : ERROR_EMPTY_DETAIL
            }}
            (
            {{
              summary.birthday
                ? summary.deathday
                  ? calcAge(
                      parseInt(summary.birthday.split("-")[0]),
                      parseInt(summary.deathday.split("-")[0])
                    )
                  : calcAge(parseInt(summary.birthday.split("-")[0]))
                : ERROR_EMPTY_DETAIL
            }}
            ans )
          </span>
        </li>
        <li class="summary__description-item" v-if="summary.deathday">
          Décédé le:
          <span class="summary__description-text" v-if="summary.deathday">
            {{ new Date(summary.deathday).toLocaleDateString() }}
          </span>
        </li>
        <li class="summary__description-item">
          Lieu de naissance:
          <span class="summary__description-text">{{
            summary.place_of_birth ? summary.place_of_birth : ERROR_EMPTY_DETAIL
          }}</span>
        </li>
        <li class="summary__description-item">
          Biographie:
          <span class="summary__description-text summary__description-overview">
            {{ summary.biography ? summary.biography : ERROR_EMPTY_BIOGRAPHIE }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/mixins" as m;

.summary {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, min-content);
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  min-height: 40rem;
  width: 100%;

  @include m.md {
    grid-template-columns: minmax(min-content, 30rem) minmax(min-content, 80rem);
    grid-template-rows: min-content;
    column-gap: 6rem;
    padding: 4rem;
  }

  &__btn {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 1%;
    right: 4%;
    z-index: 2;
    background-color: var(--backgroundColor-secondary-1);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    transition: all 0.2s;

    @include m.xs {
      top: 1%;
    }

    @include m.lg {
      width: 4rem;
      height: 4rem;
      top: 3%;
    }
    &:hover,
    &:active {
      transform: scale(1.1);
      background-color: rgba(35, 53, 65, 0.8);
    }

    &-icon {
      width: 1.5rem;
      @include m.lg {
        width: 2rem;
      }
    }
  }

  &__background {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
    background-color: var(--backgroundColor-secondary-1);
    filter: opacity(0.3) blur(5px);
  }
  &__link {
    z-index: 1;
    justify-self: center;

    @include m.md {
      grid-column: 1/2;
    }
  }

  &__img {
    width: 20rem;
    border-radius: 10px;
    box-shadow: var(--boxShadow-1);
    object-position: center;
    object-fit: cover;
    @include m.md {
      width: 100%;
      max-width: 30rem;
    }
  }

  &__description {
    margin: 0 1rem;

    @include m.md {
      grid-column: 2/-1;
      max-width: 80rem;
    }
    &-name {
      text-align: center;
      font-family: var(--fontText);
      color: var(--textColor-2);
      font-weight: 400;
      font-size: 2.5rem;
      margin-bottom: 2rem;

      @include m.md {
        text-align: start;
        font-size: 3.5rem;
        margin-bottom: 1rem;
      }

      @include m.lg {
        font-size: 4.5rem;
      }
    }

    &-list {
    }

    &-item {
      font-size: 1.6rem;
      font-weight: 600;
      font-family: var(--fontSubtitle);
      color: var(--textColor-2);

      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }
    }

    &-text {
      font-weight: 300;
    }

    &-overview {
      margin-top: 0.5rem;
      display: block;
    }
  }
}
</style>
