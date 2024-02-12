import { onMounted, onBeforeUnmount } from 'vue';
import { t4ready, t4 } from './t4.js';
import { extend } from './utils.js';

export const useSmartSelect = (props, setInstance, getEl) => {
  let t4SmartSelect;
  onMounted(() => {
    t4ready(() => {
      if (props.smartSelect) {
        const ssParams = extend({ el: getEl() }, props.smartSelectParams || {});
        t4SmartSelect = t4.smartSelect.create(ssParams);
        setInstance(t4SmartSelect);
      }
    });
  });
  onBeforeUnmount(() => {
    if (t4SmartSelect && t4SmartSelect.destroy) {
      t4SmartSelect.destroy();
    }
    t4SmartSelect = null;
    setInstance(t4SmartSelect);
  });
};
