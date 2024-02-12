<template>
  <label ref="elRef" :class="classes">
    <input
      type="checkbox"
      :name="name"
      :disabled="disabled"
      :readonly="readonly"
      :checked="checked"
      :value="value"
      @change="onChange"
    />
    <span class="toggle-icon" />
  </label>
</template>
<script>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';
import { useTooltip } from '../shared/use-tooltip.js';

export default {
  name: 't4-toggle',
  props: {
    init: {
      type: Boolean,
      default: true,
    },
    checked: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    name: String,
    value: [String, Number, Array],
    tooltip: String,
    tooltipTrigger: String,
    ...colorProps,
  },
  emits: ['change', 'toggle:change', 'update:checked'],
  setup(props, { emit }) {
    let t4Toggle = null;
    const elRef = ref(null);

    useTooltip(elRef, props);

    const onChange = (event) => {
      emit('change', event);
    };

    watch(
      () => props.checked,
      (newValue) => {
        if (!t4Toggle) return;
        t4Toggle.checked = newValue;
      },
    );

    onMounted(() => {
      t4ready(() => {
        if (!props.init || !elRef.value) return;
        t4Toggle = t4.toggle.create({
          el: elRef.value,
          on: {
            change(toggleInstance) {
              emit('toggle:change', toggleInstance.checked);
              emit('update:checked', toggleInstance.checked);
            },
          },
        });
      });
    });

    onBeforeUnmount(() => {
      if (t4Toggle && t4Toggle.destroy && t4Toggle.$el) {
        t4Toggle.destroy();
      }
      t4Toggle = null;
    });

    const classes = computed(() =>
      classNames(
        'toggle',
        {
          disabled: props.disabled,
        },
        colorClasses(props),
      ),
    );
    return {
      classes,
      elRef,
      t4Toggle,
      onChange,
    };
  },
};
</script>
