<script setup lang="ts"></script>

<template>
  <button class="button-auth">
    <slot />
  </button>
</template>

<style scoped>
.button-auth {
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 321px;
  padding: 15px;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  color: var(--color-default-light);
  background-color: var(--color-auth-button);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0/5;
}
.button-auth:hover {
  background-color: var(--color-hover-icon);
}
</style>
