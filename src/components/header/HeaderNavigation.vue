<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const menu = ref<boolean>(false);
</script>

<template>
  <div class="nav">
    <input
      @click="menu = !menu"
      id="menu"
      type="checkbox"
      class="nav__checkbox"
      :checked="menu"
    />

    <label for="menu" class="nav__btn">
      <span class="nav__icon">&nbsp;</span>
    </label>

    <div class="nav__background">&nbsp;</div>

    <nav class="nav__menu">
      <ul class="nav__menu-list">
        <li class="nav__menu-item">
          <RouterLink to="/movie" @click="menu = false" class="nav__menu-link"
            >Films</RouterLink
          >
        </li>
        <li class="nav__menu-item">
          <RouterLink to="/serie" @click="menu = false" class="nav__menu-link"
            >Séries</RouterLink
          >
        </li>
       
        <li class="nav__menu-item">
          <RouterLink to="/login" @click="menu = false" class="nav__menu-link"
            >Mon compte</RouterLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/mixins" as m;

.nav {
  align-self: center;
  &__checkbox {
    display: none;
  }

  &__btn {
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    z-index: 4;

    @include m.lg {
      display: none;
    }
  }

  &__icon {
    display: block;
    display: flex;
    align-items: center;
    z-index: 4;
    @include m.lg {
      display: none;
    }
    &,
    &::before,
    &::after {
      width: 2.5rem;
      height: 0.4rem;
      border-radius: 10px;
      transition: all 0.4s;
    }

    &::before {
      content: "";
      position: absolute;
      display: block;
      bottom: 1.3rem;
      background-color: #fff;
    }

    &::after {
      content: "";
      position: absolute;
      display: block;
      top: 1.3rem;
      background-color: #fff;
    }
  }

  &__background {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 70%;
    height: 100vh;
    background-image: linear-gradient(
      to right bottom,
      rgba(35, 53, 65, 0.8),
      rgba(31, 27, 41, 0.8)
    );
    transform: translateX(-200rem);
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
    @include m.sm {
      width: 40%;
    }
    @include m.lg {
      display: none;
      width: max-content;
    }
  }

  &__menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    opacity: 0;
    height: 100vh;
    z-index: 3;
    transform: translateX(-200rem);
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);

    @include m.lg {
      position: relative;
      opacity: 1;
      height: auto;
      transform: translateX(0);
      width: 100%;
    }

    &-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100vh;
      margin-left: 2rem;

      @include m.lg {
        display: grid;
        grid-template-columns: repeat(2, min-content) 1fr;
        height: max-content;
      }
    }

    &-item {
      margin-bottom: 2rem;
      @include m.lg {
        margin-right: 2rem;
        margin-bottom: 0;
        &:last-of-type {
          justify-self: flex-end;
        }
      }
    }

    &-link {
      font-family: var(--fontText);
      font-weight: 400;
      font-size: 1.8rem;
      color: #fff;
      transition: color 0.2s;
      &:hover,
      &:active {
        color: var(--textColor-1);
      }

      @include m.lg {
        &:hover,
        &:active {
          color: var(--textColor-1);
        }
      }
    }
  }

  &__checkbox:checked ~ &__menu {
    opacity: 1;
    width: 70%;
    transform: translateX(0);
    @include m.sm {
      width: 40%;
    }
    @include m.lg {
      width: 100%;
    }
  }
  &__checkbox:checked + .nav__btn .nav__icon::after {
    top: 1.8rem;
    transform: rotate(135deg);
  }

  &__checkbox:checked + .nav__btn .nav__icon::before {
    bottom: 1.8rem;
    transform: rotate(-135deg);
  }

  &__checkbox:checked ~ &__background {
    display: block;
    position: fixed;
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
