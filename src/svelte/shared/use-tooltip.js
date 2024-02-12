import { app, t4ready } from './t4.js';

export const useTooltip = (el, props) => {
  let t4Tooltip = null;
  const { tooltip, tooltipTrigger } = props;

  if (el && tooltip) {
    t4ready(() => {
      t4Tooltip = app.t4.tooltip.create({
        targetEl: el,
        text: tooltip,
        trigger: tooltipTrigger,
      });
    });
  }

  return {
    update({ tooltip: value } = {}) {
      if (!value && t4Tooltip) {
        t4Tooltip.destroy();
        t4Tooltip = null;
        return;
      }
      if (value && !t4Tooltip && app.t4) {
        t4Tooltip = app.t4.tooltip.create({
          targetEl: el,
          text: value,
          trigger: tooltipTrigger,
        });
        return;
      }
      if (!value || !t4Tooltip) return;
      t4Tooltip.setText(value);
    },
    destroy() {
      if (t4Tooltip && t4Tooltip.destroy) {
        t4Tooltip.destroy();
        t4Tooltip = null;
      }
    },
  };
};
