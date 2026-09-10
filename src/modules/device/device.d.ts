import { Device } from '../../shared/get-device.js';
import Techno4, { Techno4Plugin } from '../../components/app/app-class.js';

export namespace Device {
  interface AppMethods {
    /** Object with properties about device */
    device: Device;
  }
  interface AppParams {}
  interface AppEvents {}
}
declare const DeviceModule: Techno4Plugin;

export default DeviceModule;
