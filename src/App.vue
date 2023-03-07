<script setup lang="ts">
import TheHeader from "./components/header/TheHeader.vue";
import TheFooter from "./components/footer/TheFooter.vue";
import TheMain from "./components/main/TheMain.vue";
</script>

<template>
  <div class="container">
    <TheHeader class="header" />
    <TheMain class="main" />
    <TheFooter class="footer" />
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/base.scss";
@import "@/assets/sass/debug";

.container {
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  grid-template-areas:
    "header"
    "main"
    "footer";
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
</style>
