import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('./pages/WelcomPage.vue'),
      name: 'Welcom',
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
