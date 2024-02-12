// eslint-disable-next-line
import { onMount, onDestroy } from 'svelte';
import { t4, t4ready } from './t4.js';

export const useTab = (getEl, emit) => {
  const onTabShow = (el) => {
    if (getEl() !== el) return;
    emit('tabShow', [el]);
  };
  const onTabHide = (el) => {
    if (getEl() !== el) return;
    emit('tabHide', [el]);
  };
  const attachEvents = () => {
    if (!getEl()) return;
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

  onMount(() => {
    attachEvents();
  });
  onDestroy(() => {
    detachEvents();
  });
};
