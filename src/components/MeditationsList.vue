<script setup lang="ts">
import { useMeditationStore } from '@/stores/meditations.store';
import { onMounted } from 'vue';
import ButtonStart from './ButtonStart.vue';
import IconsStart from './icons/IconsStart.vue';

const store = useMeditationStore();

onMounted(() => {
  store.fetchMeditations();
});
</script>

<template>
  <ul class="meditations-list">
    <li class="meditations-list__item" v-for="item in store.meditations" :key="item.id">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <div class="meditations-list__wrap-button">
        <ButtonStart>Начать<IconsStart /></ButtonStart>
        <span>{{ item.duration_min }} мин</span>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.meditations-list {
  min-width: 700px;
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.meditations-list__item {
  max-width: 339px;
  display: flex;
  flex-direction: column;
  padding: 22px 30px;
  background-color: var(--color-light-bg);
  border-radius: 20px;
}

.meditations-list__item h3 {
  font-family: var(--font-alegreya);
  font-weight: 500;
  font-size: 25px;
  line-height: 34px;
  color: var(--color-default-dark);
}

.meditations-list__item p {
  font-weight: 500;
  line-height: 18px;
  color: var(--color-default-dark);
}

.meditations-list__wrap-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}

.meditations-list__wrap-button span {
  font-weight: 500;
  line-height: 18px;
  color: var(--color-default-dark);
  opacity: 0.75;
}
</style>
