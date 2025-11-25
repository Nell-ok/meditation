<script setup lang="ts">
import MeditationsList from '@/components/MeditationsList.vue';
import StatesList from '@/components/StatesList.vue';
import { useProfileStore } from '@/stores/profile.store';
import { onMounted } from 'vue';

const profileStore = useProfileStore();

onMounted(() => {
  profileStore.fetchProfile();
});
</script>

<template>
  <div class="meditations">
    <aside class="meditations__wrap-title">
      <div class="meditations__wrap-img">
        <img src="/public/avatar.png" alt="изображение пользователя" />
      </div>
      <div class="meditations__wrap-text">
        <h2>Добро пожаловать, {{ profileStore.profile?.data.user.username }}</h2>
        <p>Как вы сегодня себя чувствуете?</p>
      </div>
      <StatesList />
    </aside>
    <div class="meditations__wrap-list">
      <MeditationsList />
    </div>
  </div>
</template>

<style scoped>
.meditations {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr min-content;
  gap: 100px;
}

.meditations__wrap-title {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.meditations__wrap-img {
  display: flex;
  padding-top: 23px;
}

.meditations__wrap-text {
  padding-bottom: 9px;
}

.meditations__wrap-text h2,
p {
  margin: 0;
  padding: 0;
}

.meditations__wrap-text h2 {
  font-weight: 500;
  font-size: 30px;
  line-height: 41px;
  font-family: var(--font-alegreya);
}

.meditations__wrap-text p {
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: var(--color-light);
}
</style>
