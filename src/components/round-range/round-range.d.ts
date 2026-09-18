import Techno4, { Techno4Plugin, Techno4EventsClass, CSSSelector } from '../app/app-class.js';

export namespace RoundRange {
  interface Parameters {
    el?: HTMLElement | CSSSelector;
    mode?: '0+' | '-0+' | '-0';
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    defaultValue?: number;
    snap?: boolean;
    snapValues?: number[];
    snapThreshold?: number;
    size?: number;
    strokeWidth?: number;
    label?: boolean;
    title?: string;
    unit?: string;
    formatValue?: (val: number) => string;
    dragMode?: 'vertical' | 'radial';
    sensitivity?: number;
    disabled?: boolean;
    on?: {
      [event: string]: (...args: any[]) => void;
    };
  }

  interface RoundRange extends Techno4EventsClass<Events> {
    app: Techno4;
    el: HTMLElement;
    $el: any;
    mode: '0+' | '-0+' | '-0';
    min: number;
    max: number;
    step: number;
    value: number;
    defaultValue: number;
    snap: boolean;
    snapValues: number[];
    snapThreshold: number;
    size: number;
    strokeWidth: number;
    isSnapped: boolean;
    params: Parameters;

    getValue(): number;
    setValue(value: number, fireEvents?: boolean): RoundRange;
    reset(fireEvents?: boolean): RoundRange;
    destroy(): void;
  }

  interface Events {
    init: (roundRange: RoundRange) => void;
    change: (roundRange: RoundRange, value: number) => void;
    input: (roundRange: RoundRange, value: number) => void;
    snap: (roundRange: RoundRange, value: number) => void;
    reset: (roundRange: RoundRange, defaultValue: number) => void;
    beforeDestroy: (roundRange: RoundRange) => void;
  }

  interface AppMethods {
    roundRange: {
      create(params: Parameters): RoundRange;
      get(el: HTMLElement | CSSSelector): RoundRange;
      destroy(el: HTMLElement | CSSSelector): void;
      getValue(el?: HTMLElement | CSSSelector): number | undefined;
      setValue(el?: HTMLElement | CSSSelector, value?: number): RoundRange | undefined;
      reset(el?: HTMLElement | CSSSelector): RoundRange | undefined;
    };
    roundRangeSlider: AppMethods['roundRange'];
  }
}

declare const RoundRangeComponent: Techno4Plugin;

export default RoundRangeComponent;
