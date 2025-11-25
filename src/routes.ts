import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './stores/auth.store';

const PUBLIC_PAGES = ['welcome', 'auth', 'registr'];

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('./pages/WelcomPage.vue'),
      name: 'welcome',
      children: [
        {
          path: 'auth',
          component: () => import('./pages/AuthPage.vue'),
          name: 'auth',
        },
        {
          path: 'registr',
          component: () => import('./pages/RegistrPage.vue'),
          name: 'registr',
        },
      ],
    },
    {
      path: '/main',
      component: () => import('./pages/MainPage.vue'),
      children: [
        {
          path: 'meditation',
          component: () => import('./pages/MeditationPage.vue'),
          name: 'Медитация',
        },
        {
          path: 'statistics',
          component: () => import('./pages/StatisticsPage.vue'),
          name: 'Статистика',
        },
      ],
    },
  ],

  history: createWebHistory(),
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  const isPublic = PUBLIC_PAGES.includes(to.name as string);
  const isLoggedIn = !!authStore.getToken;

  if (!isLoggedIn && !isPublic) {
    return { name: 'registr' };
  }

  if (isLoggedIn && (to.name === 'auth' || to.name === 'registr')) {
    return { name: 'Медитация' };
  }
});
