import { useState } from 'react';
import { t4, t4ready, theme } from './t4.js';

export const useTheme = () => {
  const [t, setTheme] = useState(t4 ? theme : null);
  if (!t4) {
    t4ready(() => {
      setTheme(theme);
    });
  }
  return t;
};
