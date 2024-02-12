import { Request } from '../../shared/request.js';
import techno4, { techno4Plugin } from '../../components/app/app-class.js';

export namespace Request {
  interface AppMethods {
    /** Object with properties about supported features */
    request: Request;
  }
  interface AppParams {}
  interface AppEvents {}
}

declare const RequestModule: techno4Plugin;

export default RequestModule;
