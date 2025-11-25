<script setup lang="ts">
import ButtonAuth from '@/components/ButtonAuth.vue';
import IconLogo from '@/components/icons/IconLogo.vue';
import { computed } from 'vue';
import { RouterView, useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const showWelcomeBlock = computed(() => route.name === 'welcome');

function redirectToAuth() {
  router.push({ name: 'auth' });
}
</script>

<template>
  <div class="welcom-page">
    <div class="welcom-page__logo">
      <IconLogo width="202" height="213" />
    </div>
    <main>
      <div class="welcom-page__title" v-if="showWelcomeBlock">
        <div class="welcom-page__text">
          <h1>Добро пожаловать!</h1>
          <h2>Медитируй и оставайся в фокусе, чтобы быть счастливым.</h2>
        </div>
        <ButtonAuth @click="redirectToAuth">Войти в приложение</ButtonAuth>
      </div>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.welcom-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 49px;
  background-image: url('../public/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.welcom-page__title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.welcom-page__text {
  max-width: 320px;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.welcom-page__text h1 {
  font-family: var(--font-alegreya);
  font-weight: 700;
  font-size: 34px;
  line-height: 46px;
}

.welcom-page__text h2 {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}
</style>
