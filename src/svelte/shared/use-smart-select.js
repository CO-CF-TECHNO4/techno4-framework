// eslint-disable-next-line
import { onMount, onDestroy } from 'svelte';
import { t4ready, app } from './t4.js';
import { extend } from './utils.js';

export const useSmartSelect = (props, setInstance, getEl) => {
  let t4SmartSelect;
  onMount(() => {
    t4ready(() => {
      if (props.smartSelect) {
        const ssParams = extend({ el: getEl() }, props.smartSelectParams || {});
        t4SmartSelect = app.t4.smartSelect.create(ssParams);
        setInstance(t4SmartSelect);
      }
    });
  });
  onDestroy(() => {
    if (t4SmartSelect && t4SmartSelect.destroy) {
      t4SmartSelect.destroy();
    }
    t4SmartSelect = null;
    setInstance(t4SmartSelect);
  });
};
