import { Utils } from '../../shared/utils.js';
import Techno4, { Techno4Plugin } from '../../components/app/app-class.js';

export namespace Utils {
  interface AppMethods {
    /** Object with set of helper methods */
    utils: Utils;
  }
  interface AppParams {}
  interface AppEvents {}
}

declare const UtilsModule: Techno4Plugin;

export default UtilsModule;
