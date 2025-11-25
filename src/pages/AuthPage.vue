<script setup lang="ts">
import ButtonAuth from '@/components/ButtonAuth.vue';
import InputString from '@/components/InputString.vue';
import { useAuthStore } from '@/stores/auth.store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const form = ref<{ username?: string; password?: string }>({});

const onLogin = async (event: Event) => {
  event.preventDefault();
  if (!form.value.username || !form.value.password) {
    return;
  }
  const success = await authStore.sendLogin(form.value.username, form.value.password);
  if (success) {
    router.push({ name: 'Медитация' });
  } else {
    router.push({ name: 'registr' });
  }
  form.value = {};
};
</script>

<template>
  <form class="auth-page__form" @submit="onLogin">
    <InputString v-model="form.username" placeholder="Имя пользователя" />
    <InputString v-model="form.password" placeholder="Пароль" />
    <ButtonAuth type="submit">Войти в приложение</ButtonAuth>
  </form>
</template>

<style scoped>
.auth-page__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
