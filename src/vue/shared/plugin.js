import techno4 from 'techno4/lite';
import componentsRouter from './components-router.js';
import { t4, t4ready, theme, t4initEvents, setTheme } from './t4.js';

const techno4Vue = {
  name: 'vuePlugin',
  installed: false,
  install(params = {}) {
    if (techno4Vue.installed) return;
    techno4Vue.installed = true;

    t4initEvents();

    const { theme: paramsTheme, userAgent } = params;

    if (paramsTheme === 'md') theme.md = true;
    if (paramsTheme === 'ios') theme.ios = true;
    if (paramsTheme === 'aurora') theme.aurora = true;

    // eslint-disable-next-line
    const needThemeCalc = typeof window === 'undefined' ? !!userAgent : true;
    if (needThemeCalc && (!paramsTheme || paramsTheme === 'auto')) {
      const device = techno4.getDevice({ userAgent }, true);
      theme.ios = !!device.ios;
      theme.aurora = device.desktop && device.electron;
      theme.md = !theme.ios && !theme.aurora;
    }
    t4ready(() => {
      setTheme();
    });

    techno4.Router.use(componentsRouter);
  },
};

export { t4ready, t4, theme };
export default techno4Vue;
