import Dom64 from 'dom64';
// IMPORT_BASE

import request, {
  RequestError,
  RequestResponse,
  RequestParameters,
  RequestXHR,
} from './shared/request';
import { getSupport, Support } from './shared/get-support.js';
import { getDevice, Device } from './shared/get-device.js';
import { Utils } from './shared/utils.js';
import { techno4Parameters, techno4Plugin } from './components/app/app-class.js';

// IMPORT_MODULES
import { ComponentFunction as Component } from './modules/component/component.js';
import { StoreObject as Store, StoreParameters, createStore } from './modules/store/store.js';

// IMPORT_COMPONENTS

declare module './components/app/app-class.js' {
  // INSTALL
}

export {
  request,
  RequestError,
  RequestResponse,
  RequestParameters,
  RequestXHR,
  getSupport,
  Support,
  getDevice,
  Device,
  Utils,
  Dom64,
  Component,
  techno4Parameters,
  techno4Plugin,
  RouterModule as Router,
  Store,
  StoreParameters,
  createStore,
};
// EXPORT_COMPONENTS
export default techno4;
