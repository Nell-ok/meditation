<script setup lang="ts">
import MeditationList from './components/MeditationList.vue';
</script>

<template>
  <main class="main">
    <div class="main__wrap-title">
      <p>Добро пожаловать, Наталья!</p>
    </div>
    <div class="main__wrap-list">
      <MeditationList />
    </div>
  </main>
</template>

<style scoped>
.main {
  max-width: 1170px;
  margin: 48px auto 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr min-content;
  gap: 100px;
}
.main__wrap-title p {
  font-family: var(--font-alegreya);
  font-size: 30px;
  font-weight: 500;
  line-height: 41px;
}
</style>
