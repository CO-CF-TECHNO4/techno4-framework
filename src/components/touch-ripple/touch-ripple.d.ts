import { Dom64Array } from 'dom64';
import Techno4, {
  CSSSelector,
  Techno4EventsClass,
  Techno4Plugin,
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

declare const TouchRippleComponent: Techno4Plugin;
export default TouchRippleComponent;
