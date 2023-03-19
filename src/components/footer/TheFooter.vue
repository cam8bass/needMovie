<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <span class="footer__copy">Copyright @cam-2023</span>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  z-index: 2;
  background-image: linear-gradient(
    to right bottom,
    var(--backgroundColor-secondary-1),
    var(--backgroundColor-secondary-2)
  );
  &__copy {
    color: #fff;
    font-family: var(--fontText);
    font-weight: 100;
    font-size: 1.6rem;
  }
}
</style>
