import { Support } from '../../shared/get-support.js';
import Techno4, { Techno4Plugin } from '../../components/app/app-class.js';

export namespace Support {
  interface AppMethods {
    /** Object with properties about supported features */
    support: Support;
  }
  interface AppParams {}
  interface AppEvents {}
}

declare const SupportModule: Techno4Plugin;

export default SupportModule;
