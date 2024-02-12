import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect.js';
import { t4, t4ready } from './t4.js';
import { emit } from './utils.js';

export const useTab = (elRef, props) => {
  const onTabShow = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'tabShow', el);
  };
  const onTabHide = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'tabHide', el);
  };
  const attachEvents = () => {
    if (!elRef.current) return;
    t4ready(() => {
      t4.on('tabShow', onTabShow);
      t4.on('tabHide', onTabHide);
    });
  };
  const detachEvents = () => {
    if (!t4) return;
    t4.off('tabShow', onTabShow);
    t4.off('tabHide', onTabHide);
  };

  useIsomorphicLayoutEffect(() => {
    attachEvents();
    return detachEvents;
  });
};
