import { ref } from 'vue';
import { t4, t4ready, theme } from './t4.js';

export const useTheme = () => {
  const t = ref(t4 ? theme : null);
  if (!t4) {
    t4ready(() => {
      t.value = theme;
    });
  }
  return t;
};
