import { useEffect, useRef } from 'react';
import { watchProp } from './watch-prop.js';
import { t4, t4ready } from './t4.js';

export const useTooltip = (elRef, props) => {
  const t4Tooltip = useRef(null);
  const { tooltip, tooltipTrigger } = props;

  const onMount = () => {
    if (!elRef.current) return;
    if (!tooltip) return;

    t4ready(() => {
      t4Tooltip.current = t4.tooltip.create({
        targetEl: elRef.current,
        text: tooltip,
        trigger: tooltipTrigger,
      });
    });
  };

  const onDestroy = () => {
    if (t4Tooltip.current && t4Tooltip.current.destroy) {
      t4Tooltip.current.destroy();
      t4Tooltip.current = null;
    }
  };

  useEffect(() => {
    onMount();
    return onDestroy;
  }, []);

  watchProp(tooltip, (value) => {
    if (!value && t4Tooltip.current) {
      t4Tooltip.current.destroy();
      t4Tooltip.current = null;
      return;
    }
    if (value && !t4Tooltip.current && t4) {
      t4Tooltip.current = t4.tooltip.create({
        targetEl: elRef.current,
        text: value,
        trigger: tooltipTrigger,
      });
      return;
    }
    if (!value || !t4Tooltip.current) return;
    t4Tooltip.current.setText(value);
  });
};
