<script setup lang="ts"></script>

<template>
  <div class="loading">
    <img
      src="@/assets/images/icon/icon-loading.png"
      alt="icon loading"
      class="loading__img"
    />
  </div>
</template>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  &__img {
    width: 8rem;
    height: 8rem;
    animation: loading infinite 1.5s;
  }
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
