<script setup lang="ts">
import { StatesData } from '@/data/states';
import ButtonState from './ButtonState.vue';
</script>

<template>
  <ul class="states-list">
    <li class="states-list__item" v-for="state in StatesData" :key="state.name">
      <ButtonState><component :is="state.icon" /></ButtonState>
      <span>{{ state.name }}</span>
    </li>
  </ul>
</template>

<style scoped>
.states-list {
  display: flex;
  gap: 22px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.states-list__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.states-list__item span {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
}
</style>
