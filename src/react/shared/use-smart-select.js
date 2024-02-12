import { useEffect } from 'react';
import { t4ready, t4 } from './t4.js';
import { extend } from './utils.js';

export const useSmartSelect = (smartSelect, smartSelectParams, t4SmartSelect, getEl) => {
  const onMount = () => {
    t4ready(() => {
      if (smartSelect) {
        const ssParams = extend({ el: getEl() }, smartSelectParams || {});
        t4SmartSelect.current = t4.smartSelect.create(ssParams);
      }
    });
  };
  const onDestroy = () => {
    if (t4SmartSelect.current && t4SmartSelect.current.destroy) {
      t4SmartSelect.current.destroy();
    }
    t4SmartSelect.current = null;
  };
  useEffect(() => {
    onMount();
    return onDestroy;
  }, []);
};
