import IconStateCalm from '@/components/icons/IconStateCalm.vue';
import IconStateFocus from '@/components/icons/IconStateFocus.vue';
import IconStateRelax from '@/components/icons/IconStateRelax.vue';
import IconStateWorry from '@/components/icons/IconStateWorry.vue';

export const StatesData = [
  { name: 'Спокойно', icon: IconStateCalm, type: 'feeling_calm', value: 1 },
  { name: 'Расслабленно', icon: IconStateRelax, type: 'feeling_relaxed', value: 2 },
  { name: 'Фокусировано', icon: IconStateFocus, type: 'feeling_focused', value: 3 },
  { name: 'Тревожно', icon: IconStateWorry, type: 'feeling_worried', value: 4 },
];
