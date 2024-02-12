import { Device } from '../../shared/get-device.js';
import techno4, { techno4Plugin } from '../../components/app/app-class.js';

export namespace Device {
  interface AppMethods {
    /** Object with properties about device */
    device: Device;
  }
  interface AppParams {}
  interface AppEvents {}
}
declare const DeviceModule: techno4Plugin;

export default DeviceModule;
