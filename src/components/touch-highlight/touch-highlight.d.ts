import { Dom64Array } from 'dom64';
import Techno4, {
  CSSSelector,
  Techno4EventsClass,
  Techno4Plugin,
} from '../app/app-class.js';

export namespace TouchHighlight {
  interface TouchHighlight {
    $highlightEl: Dom64Array;
    highlightTransform: string;
    removing: boolean;
    remove(): void;
  }
  interface AppMethods {
    touchHighlight: {
      create($el: Dom64Array, x: number, y: number): TouchHighlight;
    };
  }
  interface AppParams {}
  interface AppEvents {}
}

declare const TouchHighlightComponent: Techno4Plugin;
export default TouchHighlightComponent;
