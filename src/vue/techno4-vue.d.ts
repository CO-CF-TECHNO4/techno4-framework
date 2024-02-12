import techno4, { techno4Plugin } from 'techno4/types';
import { Store } from 'techno4/types';

// IMPORT_COMPONENTS

export interface techno4Theme {
  ios: boolean;
  md: boolean;
  aurora: boolean;
}

/** Object with boolean properties with information about currently used theme (iOS, MD or Aurora) */
declare const theme: techno4Theme;

/** Main techno4's initialized instance. It allows you to use any of techno4 APIs */
declare const t4: techno4;

/** Callback function that will be executed when techno4 fully intialized. Useful to use in components when you need to access techno4 API and to be sure it is ready. So it is safe to put all techno4 related logic into this callback. As an argument it receives initialized techno4 instance */
declare const t4ready: (callback: (t4: techno4) => void) => void;

declare const techno4Vue: techno4Plugin;

declare const registerComponents: (app: any) => void;

interface useStore {
  (store: Store, getter: string): any;
  (getter: string): any;
}

declare const useStore: useStore;

// EXPORT_COMPONENTS
export { t4, t4ready, theme, registerComponents, useStore };
export default techno4Vue;
