import techno4 from 'techno4/lite/bundle';
import techno4Svelte from 'techno4-svelte';
import App from './app.svelte';

import 'techno4/css/bundle';
import './css/app.css';

// Demo
if (window.parent && window.parent !== window) {
  const html = document.documentElement;
  if (html) {
    html.style.setProperty('--t4-safe-area-top', '44px');
    html.style.setProperty('--t4-safe-area-bottom', '34px');
  }
}

techno4.use(techno4Svelte);

// Init Svelte App
const app = new App({
  target: document.getElementById('app'),
});

export default app;
