import React from 'react';
// eslint-disable-next-line
import { createRoot } from 'react-dom/client';

import techno4 from 'techno4/lite/bundle';
import techno4React from 'techno4-react';
import App from './app.jsx';

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

techno4.use(techno4React);

const root = createRoot(document.getElementById('app'));
root.render(React.createElement(App));
