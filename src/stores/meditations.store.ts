import { API_ROUTES, client } from '@/api';
import type { Meditation, MeditationsResponse } from '@/interfaces/meditation.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMeditationStore = defineStore('meditations', () => {
  const meditations = ref<Meditation[]>([]);

  async function fetchMeditations() {
    const { data } = await client().get<MeditationsResponse>(API_ROUTES.meditations);
    meditations.value = data.data.meditations;
  }
  return { meditations, fetchMeditations };
});
