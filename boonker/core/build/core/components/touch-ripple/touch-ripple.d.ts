import { Dom64Array } from 'dom64';
import techno4, {
  CSSSelector,
  techno4EventsClass,
  techno4Plugin,
} from '../app/app-class.js';

export namespace TouchRipple {
  interface TouchRipple {
    $rippleWaveEl: Dom64Array;
    rippleTransform: string;
    removing: boolean;
    remove(): void;
  }
  interface AppMethods {
    touchRipple: {
      create($el: Dom64Array, x: number, y: number): TouchRipple;
    };
  }
  interface AppParams {}
  interface AppEvents {}
}

declare const TouchRippleComponent: techno4Plugin;
export default TouchRippleComponent;
