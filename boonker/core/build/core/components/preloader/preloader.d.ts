import techno4, {
  CSSSelector,
  techno4EventsClass,
  techno4Plugin,
} from '../app/app-class.js';

export namespace Preloader {
  interface AppMethods {
    preloader: {
      /** Show Preloader overlay */
      show(color?: string | 'white'): void;
      /** Show Preloader overlay in specified element */
      showIn(el: HTMLElement | CSSSelector, color?: string): void;
      /** Hide Preloader overlay */
      hide(): void;
      /** Hide Preloader overlay in specified element */
      hideIn(el: HTMLElement | CSSSelector): void;
    };
  }
  interface AppParams {}
  interface AppEvents {}
}

declare const PreloaderComponent: techno4Plugin;

export default PreloaderComponent;
