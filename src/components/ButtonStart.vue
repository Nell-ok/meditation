<script setup lang="ts"></script>

<template>
  <button class="button-start">
    <slot />
  </button>
</template>

<style scoped>
.button-start {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  min-width: 111px;
  padding: 13px 17px;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: var(--color-default-light);
  background-color: var(--color-dark-bg);
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.button-start:hover {
  background-color: var(--color-hover-button);
}
</style>
