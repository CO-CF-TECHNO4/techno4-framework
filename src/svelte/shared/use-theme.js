import { t4ready, app } from './t4.js';

export const useTheme = (set) => {
  const t = app.t4 ? app.theme : null;
  if (!app.t4) {
    t4ready(() => {
      set(app.theme);
    });
  }
  return t;
};
