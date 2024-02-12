import techno4, { techno4Plugin } from '../../components/app/app-class';

export namespace Clicks {
  interface AppMethods {}
  interface AppParams {
    /** Object with clicks-module related parameters */
    clicks?:
      | {
          /** CSS selector for links that should be treated as external and shouldn't be handled by techno4. For example such '.external' value will match to links like <a href="somepage.html" class="external"> (with class "external") (default '.external') */
          externalLinks?: string;
        }
      | undefined;
  }
  interface AppEvents {}
}

declare const ClicksModule: techno4Plugin;

export default ClicksModule;
