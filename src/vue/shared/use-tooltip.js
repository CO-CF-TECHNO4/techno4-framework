import { watch, onMounted, onBeforeUnmount } from 'vue';
import { t4, t4ready } from './t4.js';

export const useTooltip = (elRef, props) => {
  let t4Tooltip = null;
  const { tooltip, tooltipTrigger } = props;

  onMounted(() => {
    if (!elRef.value) return;
    if (!tooltip) return;

    t4ready(() => {
      t4Tooltip = t4.tooltip.create({
        targetEl: elRef.value,
        text: tooltip,
        trigger: tooltipTrigger,
      });
    });
  });

  onBeforeUnmount(() => {
    if (t4Tooltip && t4Tooltip.destroy) {
      t4Tooltip.destroy();
      t4Tooltip = null;
    }
  });

  watch(
    () => props.tooltip,
    (value) => {
      if (!value && t4Tooltip) {
        t4Tooltip.destroy();
        t4Tooltip = null;
        return;
      }
      if (value && !t4Tooltip && t4) {
        t4Tooltip = t4.tooltip.create({
          targetEl: elRef.value,
          text: value,
          trigger: tooltipTrigger,
        });
        return;
      }
      if (!value || !t4Tooltip) return;
      t4Tooltip.setText(value);
    },
  );
};
