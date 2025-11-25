<script setup lang="ts">
import ButtonAuth from '@/components/ButtonAuth.vue';
import InputString from '@/components/InputString.vue';
import { useAuthStore } from '@/stores/auth.store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const form = ref<{ email?: string; username?: string; password?: string }>({});

const onRegistr = async (event: Event) => {
  event.preventDefault();
  if (!form.value.username || !form.value.password || !form.value.email) {
    return;
  }
  const success = await authStore.sendRegister(
    form.value.username,
    form.value.password,
    form.value.email,
  );
  if (success) {
    router.push({ name: 'Медитация' });
  } else {
    router.push({ name: 'auth' });
  }
  form.value = {};
};
</script>

<template>
  <form class="registr-page__form" @submit="onRegistr">
    <InputString v-model="form.email" placeholder="Электронная почта" />
    <InputString v-model="form.username" placeholder="Имя" />
    <InputString v-model="form.password" placeholder="Пароль" />
    <ButtonAuth type="submit">Создать аккаунт</ButtonAuth>
  </form>
</template>

<style scoped>
.registr-page__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
