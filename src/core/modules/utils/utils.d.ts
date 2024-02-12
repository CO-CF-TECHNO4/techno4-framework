import { Utils } from '../../shared/utils.js';
import techno4, { techno4Plugin } from '../../components/app/app-class.js';

export namespace Utils {
  interface AppMethods {
    /** Object with set of helper methods */
    utils: Utils;
  }
  interface AppParams {}
  interface AppEvents {}
}

declare const UtilsModule: techno4Plugin;

export default UtilsModule;
