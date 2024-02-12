/* eslint-disable import/no-mutable-exports */
import techno4 from 'techno4/lite';
import { extend, unsetRouterIds } from './utils.js';

let t4;
let t4events;

const theme = {};

const t4routers = {
  views: [],
  tabs: [],
  modals: null,
};

const setTheme = () => {
  if (!t4) return;
  theme.ios = t4.theme === 'ios';
  theme.md = t4.theme === 'md';
  theme.aurora = t4.theme === 'aurora';
};

const cleanup = () => {
  unsetRouterIds();
  delete theme.ios;
  delete theme.md;
  delete theme.aurora;
  t4routers.views = [];
  t4routers.tabs = [];
  t4routers.modals = null;
};

const t4initEvents = () => {
  t4events = new techno4.Events();
};

const t4init = (rootEl, params = {}, init = true) => {
  const t4Params = extend({}, params, {
    el: rootEl,
    init,
  });
  if (typeof params.store !== 'undefined') t4Params.store = params.store;
  if (!t4Params.routes) t4Params.routes = [];

  if (t4Params.userAgent && (t4Params.theme === 'auto' || !t4Params.theme)) {
    const device = techno4.getDevice({ userAgent: t4Params.userAgent }, true);
    theme.ios = !!device.ios;
    theme.aurora = device.desktop && device.electron;
    theme.md = !theme.ios && !theme.aurora;
  }
  // eslint-disable-next-line
  if (t4 && typeof window !== 'undefined') return;
  // eslint-disable-next-line
  if (typeof window === 'undefined') cleanup();

  const instance = new techno4(t4Params);
  t4 = instance;
  setTheme();

  if (instance.initialized) {
    t4 = instance;
    t4events.emit('ready', t4);
  } else {
    instance.on('init', () => {
      t4 = instance;
      t4events.emit('ready', t4);
    });
  }
};

const t4ready = (callback) => {
  if (!callback) return;
  if (t4 && t4.initialized) callback(t4);
  else {
    t4events.once('ready', callback);
  }
};

export { t4, theme, t4ready, t4events, t4init, t4routers, t4initEvents, setTheme };
