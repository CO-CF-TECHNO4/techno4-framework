<template>
  <component :is="tag" ref="elRef" :class="classes">
    <slot />
    <span v-if="resizable && resizableHandler" class="resize-handler" />
  </component>
</template>
<script>
import { ref, computed, onBeforeUnmount, onMounted } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';

export default {
  name: 't4-col',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    width: {
      type: [Number, String],
      default: 'auto',
    },
    xsmall: { type: [Number, String] },
    small: { type: [Number, String] },
    medium: { type: [Number, String] },
    large: { type: [Number, String] },
    xlarge: { type: [Number, String] },
    resizable: Boolean,
    resizableFixed: Boolean,
    resizableAbsolute: Boolean,
    resizableHandler: {
      type: Boolean,
      default: true,
    },
    ...colorProps,
  },
  emits: ['grid:resize'],
  setup(props, { emit }) {
    const elRef = ref(null);

    const onResize = (el) => {
      if (el === elRef.value) {
        emit('grid:resize');
      }
    };

    onMounted(() => {
      t4ready(() => {
        t4.on('gridResize', onResize);
      });
    });
    onBeforeUnmount(() => {
      t4.off('gridResize', onResize);
    });

    const classes = computed(() =>
      classNames(
        {
          col: props.width === 'auto',
          [`col-${props.width}`]: props.width !== 'auto',
          [`xsmall-${props.xsmall}`]: props.xsmall,
          [`small-${props.small}`]: props.small,
          [`medium-${props.medium}`]: props.medium,
          [`large-${props.large}`]: props.large,
          [`xlarge-${props.xlarge}`]: props.xlarge,
          resizable: props.resizable,
          'resizable-fixed': props.resizableFixed,
          'resizable-absolute': props.resizableAbsolute,
        },
        colorClasses(props),
      ),
    );
    return { classes, elRef };
  },
};
</script>
