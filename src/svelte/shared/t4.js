/* eslint-disable import/no-mutable-exports */
// eslint-disable-next-line
import { extend, unsetRouterIds } from './utils.js';

let t4;
const theme = {};

/* eslint-disable no-restricted-globals */
const app =
  typeof window !== 'undefined' && window.techno4ComponentsApp
    ? window.techno4ComponentsApp
    : {
        techno4: undefined,
        t4: undefined,
        t4events: undefined,
        theme: {},
        t4routers: {
          views: [],
          tabs: [],
          modals: null,
        },
      };
if (typeof window !== 'undefined') {
  window.techno4ComponentsApp = app;
}
/* eslint-enable no-restricted-globals */

app.setInstance = (instance) => {
  t4 = instance;
};

const setTheme = () => {
  if (!app.t4) return;
  app.theme.ios = app.t4.theme === 'ios';
  theme.ios = app.t4.theme === 'ios';
  app.theme.md = app.t4.theme === 'md';
  theme.md = app.t4.theme === 'md';
  app.theme.aurora = app.t4.theme === 'aurora';
  theme.aurora = app.t4.theme === 'aurora';
};

const cleanup = () => {
  unsetRouterIds();
  delete app.theme.ios;
  delete theme.ios;
  delete app.theme.md;
  delete theme.md;
  delete app.theme.aurora;
  delete theme.aurora;
  app.t4routers.views = [];
  app.t4routers.tabs = [];
  app.t4routers.modals = null;
};

const t4initEvents = () => {
  app.t4events = new app.techno4.Events();
};

const t4init = (rootEl, params = {}, init = true) => {
  const t4Params = extend({}, params, {
    el: rootEl,
    init,
  });
  if (typeof params.store !== 'undefined') t4Params.store = params.store;
  if (!t4Params.routes) t4Params.routes = [];

  if (t4Params.userAgent && (t4Params.theme === 'auto' || !t4Params.theme)) {
    const device = app.techno4.getDevice({ userAgent: t4Params.userAgent }, true);
    app.theme.ios = !!device.ios;
    app.theme.aurora = device.desktop && device.electron;
    app.theme.md = !app.theme.ios && !app.theme.aurora;
  }
  // eslint-disable-next-line
  if (app.t4 && typeof window !== 'undefined') return;

  // eslint-disable-next-line
  if (typeof window === 'undefined') cleanup();

  const instance = new app.techno4(t4Params);
  app.t4 = instance;
  t4 = instance;
  app.setInstance(instance);
  setTheme();

  if (instance.initialized) {
    app.t4 = instance;
    t4 = instance;
    app.setInstance(instance);
    app.t4events.emit('ready', app.t4);
  } else {
    instance.on('init', () => {
      app.t4 = instance;
      t4 = instance;
      app.setInstance(instance);
      app.t4events.emit('ready', app.t4);
    });
  }
};

const t4ready = (callback) => {
  if (!callback) return;
  if (app.t4 && app.t4.initialized) callback(app.t4);
  else {
    app.t4events.once('ready', callback);
  }
};

export { t4, theme, app, t4ready, t4init, t4initEvents, setTheme };
