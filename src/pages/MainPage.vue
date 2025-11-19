<script setup lang="ts">
import NavList from '@/components/NavList.vue';
</script>

<template>
  <div class="body-wrap">
    <header class="header">
      <NavList />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.body-wrap {
  min-height: 100vh;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.header {
  min-height: 188px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
