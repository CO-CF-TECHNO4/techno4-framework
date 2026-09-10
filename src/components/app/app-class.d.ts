import { Dom64, Dom64Array } from 'dom64';
import { Router } from '../../modules/router/router.js';
import { DeviceParams, Device } from '../../shared/get-device.js';
import { Support } from '../../shared/get-support.js';
import { Utils } from '../../shared/utils.js';
import {
  ComponentClass,
  ComponentFunction as Component,
} from '../../modules/component/component.js';
import { StoreObject, StoreParameters } from '../../modules/store/store.js';

// Css Selector string is an option on many F7 methods
// Giving this alias makes the typename show in the intellisense
// instead of just `string`.
export interface CSSSelector extends String {}

export interface Techno4Class<Events> {
  /** Add event handler */
  on<E extends keyof Events>(event: E, handler: Events[E]): void;
  /** Add event handler that will be removed after it was fired */
  once<E extends keyof Events>(event: E, handler: Events[E]): void;
  /** Remove event handler */
  off<E extends keyof Events>(event: E, handler: Events[E]): void;
  /** Remove all handlers for specified event */
  off<E extends keyof Events>(event: E): void;
  /** Fire event on instance */
  emit<E extends keyof Events>(event: E, ...args: any[]): void;
}

export interface Techno4EventsClass<Events> {
  /** Add event handler */
  on<E extends keyof Events>(event: E, handler: Events[E]): void;
  /** Add event handler that will be removed after it was fired */
  once<E extends keyof Events>(event: E, handler: Events[E]): void;
  /** Remove event handler */
  off<E extends keyof Events>(event: E, handler: Events[E]): void;
  /** Remove all handlers for specified event */
  off<E extends keyof Events>(event: E): void;
  /** Fire event on instance */
  emit<E extends keyof Events>(event: E, ...args: any[]): void;
}

export interface Techno4Parameters {
  /** App root element. If you main app layout is not a direct child of the <body> then it is required to specify root element here. (default body) */
  el?: string;
  /** App name. Can be used by other components, e.g. as the default title for Dialog component.. (default Techno4) */
  name?: string;
  /** App theme. Can be ios, md or auto. In case of auto it will use iOS theme for iOS devices and MD theme for all other devices.. (default 'auto') */
  theme?: string;
  /** Array with default routes to all views.. (default []) */
  routes?: Router.RouteParameters[];
  /** Enables dark mode, can be `false` (disabled), `true` (enabled) or `auto` (based on system preferences) */
  darkMode?: boolean | string;
  /** Lazy modules path */
  lazyModulesPath?: string;
  /** By default Techno4 will be initialized automatically when you call new Techno4(). If you want to prevent this behavior you can disable it with this option and then initialize it manually with init() when you need it.. (default true) */
  init?: boolean;
  /** If automatic initialization is enabled with init: true parameter and app is running under cordova environment then it will be initialized on deviceready event.. (default true) */
  initOnDeviceReady?: boolean;
  /** Enable translucent effect (blur background) on navigation bars for iOS theme (on iOS devices) (by default enabled) */
  iosTranslucentBars?: boolean;
  /** Enable translucent effect (blur background) on modals (Dialog, Popover, Actions) for iOS theme (on iOS devices) (by default enabled) */
  iosTranslucentModals?: boolean;
  /** Object with app colors where `primary` color (key) defines main app color theme */
  colors?: object;
  /** Material color scheme. Can be `default`, `vibrant`, `monochrome` or `monochrome-vibrant` */
  mdColorScheme?: string;
  /** userAgent string. Required for browser/device detection when rendered on server-side */
  userAgent?: string;
  /** Required for current route detection when rendered on server-side */
  url?: string;
  /** Object with events handlers.. (default {}) */
  on?: {
    [event in keyof Techno4Events]?: Techno4Events[event];
  };
}

export interface Techno4Plugin {
  /** Module Name */
  name: string;
  /** Install callback
  It will be executed right after component is installed
  Context of this callback points to Class where it was installed */
  install: () => void;
  /** Create callback
  It will be executed in the very beginning of class initilization (when we create new instance of the class) */
  create(instance: Techno4): () => void;
  /** Object with default class/plugin parameters */
  params?: {
    [plugin_name: string]: {
      [param: string]: any;
    };
  };
  /** proto object extends Class prototype */
  proto?: {
    [name: string]: any;
  };
  /** Extend Class with static props and methods, e.g. Class.myMethod */
  static?: {
    [name: string]: any;
  };
  /** Initialized instance Props & Methods */
  instance?: {
    [name: string]: any;
  };
  /** Event handlers */
  on?: {
    [event: string]: (...params: any[]) => void;
  };
  /** Handle clicks - prop name means CSS selector of element to add click handler */
  clicks?: {
    [selector: string]: ($clickedEl: HTMLElement, data: any) => void;
  };
}

export interface Techno4Events {
  /** Event will be fired on app initialization. Automatically after new Techno4() or after app.init() if you disabled auto init. */
  init: () => void;
  /** Event will be fired on device preferred color scheme change. It has effect only when `darkMode` is set to `auto` */
  darkModeChange: (isDark: boolean) => void;
  /** Event will be fired when app goes online */
  online: () => void;
  /** Event will be fired when app goes offline */
  offline: () => void;
  /** Event will be fired on network state change */
  connection: (isOnline: boolean) => void;
}

interface Techno4 extends Techno4Class<Techno4Events> {
  /** App name passed in parameters */
  name: string;
  /** App routes */
  routes: Router.RouteParameters[];
  /** App root HTML element */
  el: HTMLElement;
  /** Dom64 instance with app root element */
  $el: Dom64Array;
  /** Boolean property indicating app is in RTL layout or not */
  rtl: boolean;
  /** Current app theme. Can be 'md' or 'ios' */
  theme: string;
  /** Indicates whether the dark mode active or not */
  darkMode: boolean;
  /** Object with app root data passed on intialization */
  data: any;
  /** Object with app root methods */
  methods: { [name: string]: () => any };
  /** Boolean property indicating app is initialized or not */
  initialized: boolean;
  /** Boolean property indication app connection state. (`true` if online) */
  online: boolean;
  /** Dom64 alias */
  $: Dom64;
  /** App parameters */
  params: Techno4Parameters;
  /** Object with colors you have passed in params.colors */
  colors: any;
  /** Sets primary color theme */
  setColorTheme(hexColor: string): void;
  /** Enable/disable dark mode, accepts `false`, `true` or `auto` */
  setDarkMode(mode: boolean | string): void;
  /** Initialize app. In case you disabled auto initialization with init: false parameter */
  init(): void;
  /** Load module */
  loadModule(module: string | Function | Techno4Plugin): Promise<any>;
  /** Load modules */
  loadModules(modules: any[]): Promise<any>;
}
interface Events extends Techno4EventsClass<Techno4Events> {}

declare class Techno4 implements Techno4 {
  constructor(parameters?: Techno4Parameters);

  static use(plugin: Techno4Plugin): void;
  static use(plugins: Techno4Plugin[]): void;
  static getDevice: (overrides?: DeviceParams) => Device;
  static getSupport: () => Support;
  static device: Device;
  static support: Support;
  static utils: Utils;
  static Events: Events;
  static Component: ComponentClass;
  /** Register custom component */
  static registerComponent(tagName: string, component: Component): void;
  /** Unregister custom component */
  static unregisterComponent(tagName: string): void;
  /** Create new store */
  createStore: (storeParameters: StoreParameters) => StoreObject;
}

export default Techno4;
