import { Dom64Array } from 'dom64';
import techno4, {
  CSSSelector,
  techno4EventsClass,
  techno4Plugin,
} from '../app/app-class.js';

export namespace PieChart {
  interface PieChart extends techno4EventsClass<Events> {
    /** Link to global app instance */
    app: techno4;
    /** Pie chart HTML element */
    el: HTMLElement;
    /** Dom64 instance with chart HTML element */
    $el: Dom64Array;
    /** Pie chart generated SVH HTML element */
    svgEl: HTMLElement;
    /** Dom64 instance with generated SVH HTML element */
    $svgEl: Dom64Array;
    /** Pie chart parameters */
    params: Parameters;

    /** Update/rerender chart SVG element according to passed parameters. It accepts object with same parameters required for chart initialization. You can pass only parameters that needs to be updated */
    update(parameters: Parameters): PieChart;
    /** Destroys chart instance */
    destroy(): void;
  }

  interface Dataset {
    /** Dataset value */
    value: number;
    /** Dataset HEX color */
    color?: string;
    /** Dataset label */
    label?: string;
  }

  interface Parameters {
    /** Pie chart element. HTMLElement or string with CSS selector of chart element. Generated SVG will be inserted into this element. */
    el: HTMLElement | CSSSelector;
    /** Chart data sets */
    datasets: Dataset[];
    /** Generated SVG image size (in px). (default 320) */
    size?: number;
    /** Enables tooltip on hover */
    tooltip?: boolean;
    /** Custom render function that must return tooltip's HTML content */
    formatTooltip?: (data: {
      index: number;
      value: number;
      label: string;
      color: string;
      percentage: number;
    }) => string;
    /** Object with events handlers.. */
    on?: {
      [event in keyof Events]?: Events[event];
    };
  }

  interface Events {
    /** Event will be triggered (when tooltip enabled) on chart hover */
    select: (pieChart: PieChart, index: number | null, dataset: Dataset) => void;
    /** Event will be triggered right before Pie chart instance will be destroyed. As an argument event handler receives Pie chart instance */
    beforeDestroy: (pieChart: PieChart) => void;
  }

  interface DomEvents {
    /** Event will be triggered (when tooltip enabled) on chart hover */
    'piechart:select': () => void;
    /** Event will be triggered right before Pie chart instance will be destroyed */
    'piechart:beforedestroy': () => void;
  }
  interface AppMethods {
    pieChart: {
      /** create Pie chart instance */
      create(parameters: Parameters): PieChart;
      /** destroy Pie chart instance */
      destroy(el: HTMLElement | CSSSelector | PieChart): void;
      /** get Pie chart instance by HTML element */
      get(el: HTMLElement | CSSSelector): PieChart;
      /** update/rerender Pie chart SVG according to passed parameters */
      update(parameters: Parameters): PieChart;
    };
  }
  interface AppParams {
    pieChart?: Parameters | undefined;
  }
  interface AppEvents {
    /** Event will be triggered (when tooltip enabled) on chart hover */
    pieChartSelect: (pieChart: PieChart, index: number | null, dataset: Dataset) => void;
    /** Event will be triggered right before PieChart instance will be destroyed. As an argument event handler receives Pie chart instance */
    pieChartBeforeDestroy: (pieChart: PieChart) => void;
  }
}

declare const PieChartComponent: techno4Plugin;

export default PieChartComponent;
