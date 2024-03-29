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
  name: 't4-actions',
  props: {
    tabletFullscreen: Boolean,
    opened: Boolean,
    animate: {
      type: Boolean,
      default: undefined,
    },
    grid: Boolean,
    target: {
      type: [String, Object],
      default: undefined,
    },
    convertToPopover: {
      type: Boolean,
      default: undefined,
    },
    forceToPopover: {
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
    closeByOutsideClick: {
      type: Boolean,
      default: undefined,
    },
    closeOnEscape: {
      type: Boolean,
      default: undefined,
    },
    containerEl: {
      type: [String, Object],
      default: undefined,
    },
    ...colorProps,
  },
  emits: ['actions:open', 'actions:opened', 'actions:close', 'actions:closed', 'update:opened'],
  setup(props, { emit }) {
    // eslint-disable-next-line
    let t4Actions = null;
    // eslint-disable-next-line
    let isOpened = props.opened;
    let isClosing = false;
    const elRef = ref(null);

    const onOpen = (instance) => {
      isOpened = true;
      isClosing = false;
      emit('actions:open', instance);
      emit('update:opened', true);
    };
    const onOpened = (instance) => {
      emit('actions:opened', instance);
    };
    const onClose = (instance) => {
      isOpened = false;
      isClosing = true;
      emit('actions:close', instance);
    };
    const onClosed = (instance) => {
      isClosing = false;
      emit('actions:closed', instance);
      emit('update:opened', false);
    };

    watch(
      () => props.opened,
      (value) => {
        if (!t4Actions) return;
        if (value) {
          t4Actions.open();
        } else {
          t4Actions.close();
        }
      },
    );

    onMounted(() => {
      if (!elRef.value) return;
      const {
        target,
        convertToPopover,
        forceToPopover,
        closeByBackdropClick,
        closeByOutsideClick,
        closeOnEscape,
        backdrop,
        backdropEl,
        grid,
        containerEl,
      } = props;

      const params = {
        el: elRef.value,
        grid,
        on: {
          open: onOpen,
          opened: onOpened,
          close: onClose,
          closed: onClosed,
        },
      };
      if (typeof target !== 'undefined') params.target = target;
      if (typeof convertToPopover !== 'undefined') params.convertToPopover = convertToPopover;
      if (typeof forceToPopover !== 'undefined') params.forceToPopover = forceToPopover;
      if (typeof closeByBackdropClick !== 'undefined')
        params.closeByBackdropClick = closeByBackdropClick;
      if (typeof closeByOutsideClick !== 'undefined')
        params.closeByOutsideClick = closeByOutsideClick;
      if (typeof closeOnEscape !== 'undefined') params.closeOnEscape = closeOnEscape;
      if (typeof backdrop !== 'undefined') params.backdrop = backdrop;
      if (typeof backdropEl !== 'undefined') params.backdropEl = backdropEl;
      if (typeof containerEl !== 'undefined') params.containerEl = containerEl;

      t4ready(() => {
        t4Actions = t4.popup.create(params);
        if (props.opened) {
          t4Actions.open(false);
        }
      });
    });

    onBeforeUnmount(() => {
      if (t4Actions) {
        t4Actions.destroy();
      }
      t4Actions = null;
    });

    const classes = computed(() =>
      classNames(
        'actions-modal',
        {
          'actions-grid': props.grid,
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
