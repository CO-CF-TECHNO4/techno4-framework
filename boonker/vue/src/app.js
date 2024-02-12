/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
import techno4 from 'techno4/lite/bundle';
import techno4Vue from 'techno4-vue';
import App from './app.vue';

import 'techno4/css/bundle';
import './css/app.css';

// Demo
/* eslint-disable */
if (window.parent && window.parent !== window) {
  const html = document.documentElement;
  if (html) {
    html.style.setProperty('--t4-safe-area-top', '44px');
    html.style.setProperty('--t4-safe-area-bottom', '34px');
  }
}
/* eslint-enable */

techno4.use(techno4Vue);

// Init Vue App
const app = createApp(App);

app.mount('#app');
