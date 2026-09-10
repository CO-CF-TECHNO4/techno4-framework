/**
 * Techno4 Framework 2 Core
 * Supported and distributed by CO «CF TECHNO4»
 * Licensed under GNU LGPL-3.0-or-later. Original components under MIT License.
 * https://techno4.online
 */

import $ from './shared/dom64.js';

import Techno4 from './components/app/app-class.js';

//IMPORT_HELPERS

import DeviceModule from './modules/device/device.js';
import SupportModule from './modules/support/support.js';
import UtilsModule from './modules/utils/utils.js';
import ResizeModule from './modules/resize/resize.js';
import TouchModule from './modules/touch/touch.js';
import ClicksModule from './modules/clicks/clicks.js';
import RouterModule from './modules/router/router.js';
import RouterComponentLoaderModule from './modules/router/component-loader.js';
import ComponentModule, { Component, $jsx } from './modules/component/component.js';
import HistoryModule from './modules/history/history.js';
import ServiceWorkerModule from './modules/service-worker/service-worker.js';
import StoreModule, { createStore } from './modules/store/store.js';

import Statusbar from './components/statusbar/statusbar.js';
import View from './components/view/view.js';
import Navbar from './components/navbar/navbar.js';
import Toolbar from './components/toolbar/toolbar.js';
import Subnavbar from './components/subnavbar/subnavbar.js';
import TouchRipple from './components/touch-ripple/touch-ripple.js';
import TouchHighlight from './components/touch-highlight/touch-highlight.js';
import Modal from './components/modal/modal.js';
import Router from './modules/router/router-class.js';

//IMPORT_COMPONENTS

// UMD_ONLY_START
if (typeof window !== 'undefined') {
  // Dom64
  if (!window.Dom64) window.Dom64 = $;
  if (!window.techno4) window.techno4 = Techno4;
  if (!window.Techno4) window.Techno4 = Techno4;
}
if (typeof globalThis !== 'undefined') {
  if (!globalThis.Dom64) globalThis.Dom64 = $;
  if (!globalThis.techno4) globalThis.techno4 = Techno4;
  if (!globalThis.Techno4) globalThis.Techno4 = Techno4;
}
// UMD_ONLY_END

Router.use([RouterComponentLoaderModule]);

Techno4.use([
  DeviceModule,
  SupportModule,
  UtilsModule,
  ResizeModule,
  TouchModule,
  ClicksModule,
  RouterModule,
  HistoryModule,
  ComponentModule,
  ServiceWorkerModule,
  StoreModule,
  Statusbar,
  View,
  Navbar,
  Toolbar,
  Subnavbar,
  TouchRipple,
  Modal,
  TouchHighlight,
  //INSTALL_COMPONENTS
]);

//NAMED_EXPORT
export default Techno4;
