import { Dom64Array } from 'dom64';
import techno4, {
  CSSSelector,
  techno4EventsClass,
  techno4Plugin,
} from '../app/app-class.js';

export namespace DataTable {
  interface DataTable extends techno4EventsClass<Events> {
    /** Data table HTML element */
    el: HTMLElement;
    /** Dom64 instance with Data table HTML element */
    $el: Dom64Array;
    /** Destroy data table */
    destroy(): void;
  }

  interface Parameters {
    /** Data Table element. Can be useful if you already have Data Table element in your HTML and want to create new instance using this element */
    el: HTMLElement | CSSSelector;

    on?: {
      [event in keyof Events]?: Events[event];
    };
  }

  interface Events {
    /** Event will be triggered data table sort changed. As an argument event handler receives data table instance and new sort order (asc or desc) */
    sort: (dataTable: DataTable, sort: string) => void;
    /** Event will be triggered right before Data Table instance will be destroyed. As an argument event handler receives Data table instance */
    beforeDestroy: (dataTable: DataTable) => void;
  }

  interface AppMethods {
    dataTable: {
      /** create DataTable instance */
      create(parameters: Parameters): DataTable;
      /** destroy DataTable instance */
      destroy(el: HTMLElement | CSSSelector | DataTable): void;
      /** get DataTable instance by HTML element */
      get(el: HTMLElement | CSSSelector): DataTable;
    };
  }
  interface AppParams {}
  interface DomEvents {
    /** Event will be triggered data table sort changed */
    'datatable:sort': () => void;
    /** Event will be triggered right before Data Table instance will be destroyed */
    'datatable:beforedestroy': () => void;
  }
  interface AppEvents {
    /** Event will be triggered data table sort changed. As an argument event handler receives data table instance and new sort order (asc or desc) */
    dataTableSort: (dataTable: DataTable, sort: string) => void;
    /** Event will be triggered right before Data Table instance will be destroyed. As an argument event handler receives Data table instance */
    dataTableBeforeDestroy: (dataTable: DataTable) => void;
  }
}

declare const DataTableComponent: techno4Plugin;

export default DataTableComponent;
