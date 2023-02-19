<script setup lang="ts">
async function fetchMovie() {
  const ajax = await fetch(
    "https://api.themoviedb.org/3/search/tv?api_key=47accfeff32353d2ff47a97c0ed7c4ef&language=fr-FR&query=breaking-bad"
  );
  const res = await ajax.json();
  console.log(res);
}

fetchMovie();
</script>

<template>
  <div class="container">test</div>
</template>

<style lang="scss">
@import "@/assets/sass/base.scss";
@import "@/assets/sass/debug";
</style>
