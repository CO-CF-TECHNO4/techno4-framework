<template>
  <div ref="elRef" :class="classes">
    <slot />
  </div>
</template>
<script>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';
import { modalStateClasses } from '../shared/modal-state-classes.js';

export default {
  name: 't4-popup',
  props: {
    tabletFullscreen: Boolean,
    opened: Boolean,
    animate: {
      type: Boolean,
      default: undefined,
    },
    backdrop: {
      type: Boolean,
      default: undefined,
    },
    backdropEl: {
      type: [String, Object],
      default: undefined,
    },
    closeByBackdropClick: {
      type: Boolean,
      default: undefined,
    },
    closeOnEscape: {
      type: Boolean,
      default: undefined,
    },
    swipeToClose: {
      type: [Boolean, String],
      default: false,
    },
    swipeHandler: {
      type: [String, Object],
      default: undefined,
    },
    push: Boolean,
    containerEl: {
      type: [String, Object],
      default: undefined,
    },
    ...colorProps,
  },
  emits: [
    'popup:swipestart',
    'popup:swipemove',
    'popup:swipeend',
    'popup:swipeclose',
    'popup:open',
    'popup:opened',
    'popup:close',
    'popup:closed',
    'update:opened',
  ],
  setup(props, { emit }) {
    const t4Popup = ref(null);
    // eslint-disable-next-line
    let isOpened = props.opened;
    let isClosing = false;
    const elRef = ref(null);

    const onSwipeStart = (instance) => {
      emit('popup:swipestart', instance);
    };
    const onSwipeMove = (instance) => {
      emit('popup:swipemove', instance);
    };
    const onSwipeEnd = (instance) => {
      emit('popup:swipeend', instance);
    };
    const onSwipeClose = (instance) => {
      emit('popup:swipeclose', instance);
    };
    const onOpen = (instance) => {
      isOpened = true;
      isClosing = false;
      emit('popup:open', instance);
      emit('update:opened', true);
    };
    const onOpened = (instance) => {
      emit('popup:opened', instance);
    };
    const onClose = (instance) => {
      isOpened = false;
      isClosing = true;
      emit('popup:close', instance);
    };
    const onClosed = (instance) => {
      isClosing = false;
      emit('popup:closed', instance);
      emit('update:opened', false);
    };

    watch(
      () => props.opened,
      (value) => {
        if (!t4Popup.value) return;
        if (value) {
          t4Popup.value.open();
        } else {
          t4Popup.value.close();
        }
      },
    );

    onMounted(() => {
      if (!elRef.value) return;
      const popupParams = {
        el: elRef.value,
        on: {
          swipeStart: onSwipeStart,
          swipeMove: onSwipeMove,
          swipeEnd: onSwipeEnd,
          swipeClose: onSwipeClose,
          open: onOpen,
          opened: onOpened,
          close: onClose,
          closed: onClosed,
        },
      };
      const {
        closeByBackdropClick,
        closeOnEscape,
        animate,
        backdrop,
        backdropEl,
        swipeToClose,
        swipeHandler,
        containerEl,
      } = props;

      if (typeof closeByBackdropClick !== 'undefined')
        popupParams.closeByBackdropClick = closeByBackdropClick;
      if (typeof closeOnEscape !== 'undefined') popupParams.closeOnEscape = closeOnEscape;
      if (typeof animate !== 'undefined') popupParams.animate = animate;
      if (typeof backdrop !== 'undefined') popupParams.backdrop = backdrop;
      if (typeof backdropEl !== 'undefined') popupParams.backdropEl = backdropEl;
      if (typeof swipeToClose !== 'undefined') popupParams.swipeToClose = swipeToClose;
      if (typeof swipeHandler !== 'undefined') popupParams.swipeHandler = swipeHandler;
      if (typeof containerEl !== 'undefined') popupParams.containerEl = containerEl;

      t4ready(() => {
        t4Popup.value = t4.popup.create(popupParams);
        if (props.opened) {
          t4Popup.value.open(false);
        }
      });
    });

    onBeforeUnmount(() => {
      if (t4Popup.value) {
        t4Popup.value.destroy();
      }
      t4Popup.value = null;
    });

    const classes = computed(() =>
      classNames(
        'popup',
        {
          'popup-tablet-fullscreen': props.tabletFullscreen,
          'popup-push': props.push,
        },
        modalStateClasses({ isOpened, isClosing }),
        colorClasses(props),
      ),
    );

    return {
      elRef,
      classes,
    };
  },
};
</script>
