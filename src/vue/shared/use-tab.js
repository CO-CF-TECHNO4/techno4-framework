import { onMounted, onBeforeUnmount } from 'vue';
import { t4, t4ready } from './t4.js';

export const useTab = (elRef, emit) => {
  const onTabShow = (el) => {
    if (elRef.value !== el) return;
    emit('tab:show', el);
  };
  const onTabHide = (el) => {
    if (elRef.value !== el) return;
    emit('tab:hide', el);
  };
  onMounted(() => {
    if (!elRef.value) return;
    t4ready(() => {
      t4.on('tabShow', onTabShow);
      t4.on('tabHide', onTabHide);
    });
  });
  onBeforeUnmount(() => {
    if (!t4) return;
    t4.off('tabShow', onTabShow);
    t4.off('tabHide', onTabHide);
  });
};
