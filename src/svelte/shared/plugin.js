// eslint-disable-next-line
import componentsRouter from './components-router.js';
import { t4ready, theme, app, t4initEvents, setTheme } from './t4.js';

const techno4Svelte = {
  name: 'sveltePlugin',
  installed: false,
  install(params = {}) {
    const techno4 = this;
    app.techno4 = techno4;

    if (techno4Svelte.installed) return;
    techno4Svelte.installed = true;

    t4initEvents();

    const { theme: paramsTheme, userAgent } = params;

    if (paramsTheme === 'md') {
      app.theme.md = true;
      theme.md = true;
    }
    if (paramsTheme === 'ios') {
      app.theme.md = true;
      theme.ios = true;
    }
    if (paramsTheme === 'aurora') {
      app.theme.md = true;
      theme.aurora = true;
    }

    // eslint-disable-next-line
    const needThemeCalc = typeof window === 'undefined' ? !!userAgent : true;
    if (needThemeCalc && (!paramsTheme || paramsTheme === 'auto')) {
      const device = techno4.getDevice({ userAgent }, true);
      app.theme.ios = !!device.ios;
      theme.ios = app.theme.ios;
      app.theme.aurora = device.desktop && device.electron;
      theme.aurora = app.theme.aurora;
      app.theme.md = !app.theme.ios && !app.theme.aurora;
      theme.md = app.theme.md;
    }
    t4ready(() => {
      setTheme();
    });

    techno4.Router.use(componentsRouter);
  },
};

export default techno4Svelte;
