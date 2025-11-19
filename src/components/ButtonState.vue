<script setup lang="ts"></script>

<template>
  <button class="states-list__button">
    <slot />
  </button>
</template>

<style scoped>
.states-list__button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 62px;
  height: 65px;
  background-color: var(--color-light-bg);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0/5;
}

.states-list__button:hover {
  background-color: var(--color-hover-icon);
}
</style>
