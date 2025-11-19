<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconLogo from './icons/IconLogo.vue';
import IconNavExit from './icons/IconNavExit.vue';
import IconNavMeditation from './icons/IconNavMeditation.vue';
import IconNavStatistics from './icons/IconNavStatistics.vue';
</script>

<template>
  <a class="logo">
    <IconLogo />
  </a>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <RouterLink active-class="active-link" :to="{ name: 'Медитация' }">
          <div>
            <IconNavMeditation />
          </div>
          Медитация
        </RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink active-class="active-link" :to="{ name: 'Статистика' }">
          <div>
            <IconNavStatistics />
          </div>
          Статистика
        </RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink active-class="active-link" :to="{ name: 'Welcom' }">
          <div>
            <IconNavExit />
          </div>
          Выход
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.logo {
  filter: drop-shadow(0 4px 30px var(--color-default-light));
  display: flex;
  cursor: pointer;
}

.nav__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__item {
  padding: 0 55px;
}

.nav__item:not(:last-child) {
  border-right: 3px solid var(--color-border);
}

.nav__item a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-inactive);
  text-decoration: none;
  transition: all 0/5;
}

.nav__item a:hover {
  color: var(--color-default-light);
}

.nav__item a.active-link {
  color: var(--color-default-light);
}
</style>
