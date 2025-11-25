<script setup lang="ts">
const data = defineModel<string>();
</script>

<template>
  <input class="input-string" v-model="data" />
</template>

<style scoped>
.input-string {
  border: none;
  border-bottom: 1px solid var(--color-default-light);
  background-color: transparent;
  color: var(--color-default-light);
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  min-width: 305px;
  padding: 10px;
}

.input-string::placeholder {
  color: var(--color-auth-input);
}
</style>
