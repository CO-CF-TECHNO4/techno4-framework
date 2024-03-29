import { Dom64Array } from 'dom64';
import techno4, {
  CSSSelector,
  techno4EventsClass,
  techno4Plugin,
} from '../app/app-class.js';

export namespace AreaChart {
  interface AreaChart extends techno4EventsClass<Events> {
    /** Link to global app instance */
    app: techno4;
    /** Area chart HTML element */
    el: HTMLElement;
    /** Dom64 instance with chart HTML element */
    $el: Dom64Array;
    /** Area chart generated SVH HTML element */
    svgEl: HTMLElement;
    /** Dom64 instance with generated SVH HTML element */
    $svgEl: Dom64Array;
    /** Area chart parameters */
    params: Parameters;

    /** Update/rerender chart SVG element according to passed parameters. It accepts object with same parameters required for chart initialization. You can pass only parameters that needs to be updated */
    update(parameters: Parameters): AreaChart;
    /** Destroys chart instance */
    destroy(): void;
  }

  interface Dataset {
    /** Dataset value */
    values: number[];
    /** Dataset HEX color */
    color?: string;
    /** Dataset label */
    label?: any;
  }

  interface Parameters {
    /** Area chart element. HTMLElement or string with CSS selector of chart element. Generated SVG will be inserted into this element. */
    el: HTMLElement | CSSSelector;
    /** Enables lines chart (instead of area chart) */
    lineChart: boolean;
    /** Chart data sets */
    datasets: Dataset[];
    /** Enables chart horizontal (X) axis */
    axis: boolean;
    /** Chart horizontal (X) axis labels. Should have same amount of items as dataset values */
    axisLabels: any[];
    /** Enables tooltip on hover */
    tooltip: boolean;
    /** Enables chart legend */
    legend: boolean;
    /** When enabled it will toggle data sets on legend items click */
    toggleDatasets: boolean;
    /** Generated SVG image width (in px). (default 640) */
    width: number;
    /** Generated SVG image height (in px). (default 320) */
    height: number;
    /** Max numbers of axis labels (ticks) to be visible on axis. (default 8) */
    maxAxisLabels: number;
    /** Custom render function to format axis label text */
    formatAxisLabel: (this: AreaChart, label: any) => string;
    /** Custom render function to format legend label text */
    formatLegendLabel: (this: AreaChart, label: any) => string;
    /** Custom render function that must return tooltip's HTML content */
    formatTooltip?: (
      this: AreaChart,
      data: {
        index: number;
        total: number;
        datasets: {
          color?: string;
          label: any;
          value: number;
        }[];
      },
    ) => string;
    /** Custom render function to format axis label text in Tooltip */
    formatTooltipAxisLabel: (this: AreaChart, label: any) => string;
    /** Custom render function to format total value text in Tooltip */
    formatTooltipTotal: (this: AreaChart, total: number) => string;
    /** Custom render function to format dataset text in Tooltip */
    formatTooltipDataset: (this: AreaChart, label: string, value: number, color: string) => string;
    /** Object with events handlers.. */
    on?: {
      [event in keyof Events]?: Events[event];
    };
  }

  interface Events {
    /** Event will be triggered (when tooltip enabled) on chart hover */
    select: (areaChart: AreaChart, index: number | null) => void;
    /** Event will be triggered right before Area chart instance will be destroyed. As an argument event handler receives Area chart instance */
    beforeDestroy: (areaChart: AreaChart) => void;
  }

  interface DomEvents {
    /** Event will be triggered (when tooltip enabled) on chart hover */
    'areachart:select': () => void;
    /** Event will be triggered right before Area chart instance will be destroyed */
    'areachart:beforedestroy': () => void;
  }
  interface AppMethods {
    areaChart: {
      /** create Area chart instance */
      create(parameters: Parameters): AreaChart;
      /** destroy Area chart instance */
      destroy(el: HTMLElement | CSSSelector | AreaChart): void;
      /** get Area chart instance by HTML element */
      get(el: HTMLElement | CSSSelector): AreaChart;
      /** update/rerender Area chart SVG according to passed parameters */
      update(parameters: Parameters): AreaChart;
    };
  }
  interface AppParams {
    areaChart?: Parameters | undefined;
  }
  interface AppEvents {
    /** Event will be triggered (when tooltip enabled) on chart hover */
    areaChartSelect: (areaChart: AreaChart, index: number | null) => void;
    /** Event will be triggered right before AreaChart instance will be destroyed. As an argument event handler receives Area chart instance */
    areaChartBeforeDestroy: (areaChart: AreaChart) => void;
  }
}

declare const AreaChartComponent: techno4Plugin;

export default AreaChartComponent;
