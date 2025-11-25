import { API_ROUTES, client } from '@/api';
import type { LoginResponse, RegisterResponse } from '@/interfaces/auth.interface';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const TOKEN_STORE_KEY = 'token-store';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>();

  const initialValue = localStorage.getItem(TOKEN_STORE_KEY);
  if (initialValue) {
    token.value = initialValue;
  }

  function setToken(newtoken: string) {
    token.value = newtoken;
    localStorage.setItem(TOKEN_STORE_KEY, newtoken);
  }

  function clearToken() {
    token.value = undefined;
    localStorage.removeItem(TOKEN_STORE_KEY);
  }

  const getToken = computed(() => token.value);

  async function sendLogin(username: string, password: string): Promise<boolean> {
    try {
      const { data } = await client().post<LoginResponse>(API_ROUTES.auth.login, {
        username,
        password,
      });
      setToken(data.data.token);
      return true;
    } catch {
      clearToken();
      return false;
    }
  }

  async function sendRegister(username: string, password: string, email: string): Promise<boolean> {
    try {
      await client().post<RegisterResponse>(API_ROUTES.auth.register, {
        username,
        password,
        email,
      });

      const loginSuccess = await sendLogin(username, password);
      return loginSuccess;
    } catch {
      clearToken();
      return false;
    }
  }
  return { getToken, sendLogin, sendRegister, setToken, clearToken };
});
