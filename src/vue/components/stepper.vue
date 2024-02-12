<template>
  <div ref="elRef" :class="classes">
    <div class="stepper-button-minus" @click="onMinusClick" />
    <div v-if="input && !buttonsOnly" class="stepper-input-wrap">
      <input
        :id="inputId"
        :name="name"
        :type="inputType"
        :min="inputType === 'number' ? min : undefined"
        :max="inputType === 'number' ? max : undefined"
        :step="inputType === 'number' ? step : undefined"
        :value="value"
        :readonly="inputReadonly"
        @input="onInput"
        @change="onChange"
      />
    </div>
    <div v-if="!input && !buttonsOnly" class="stepper-value">{{ value }}</div>
    <div class="stepper-button-plus" @click="onPlusClick" />
  </div>
</template>
<script>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { classNames, noUndefinedProps } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';

export default {
  name: 't4-stepper',
  props: {
    init: {
      type: Boolean,
      default: true,
    },
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    formatValue: Function,
    name: String,
    inputId: String,
    input: {
      type: Boolean,
      default: true,
    },
    inputType: {
      type: String,
      default: 'text',
    },
    inputReadonly: {
      type: Boolean,
      default: false,
    },
    autorepeat: {
      type: Boolean,
      default: false,
    },
    autorepeatDynamic: {
      type: Boolean,
      default: false,
    },
    wraps: {
      type: Boolean,
      default: false,
    },
    manualInputMode: {
      type: Boolean,
      default: false,
    },
    decimalPoint: {
      type: Number,
      default: 4,
    },
    buttonsEndInputMode: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    buttonsOnly: Boolean,

    round: Boolean,
    roundMd: Boolean,
    roundIos: Boolean,
    roundAurora: Boolean,
    fill: Boolean,
    fillMd: Boolean,
    fillIos: Boolean,
    fillAurora: Boolean,
    large: Boolean,
    largeMd: Boolean,
    largeIos: Boolean,
    largeAurora: Boolean,
    small: Boolean,
    smallMd: Boolean,
    smallIos: Boolean,
    smallAurora: Boolean,
    raised: Boolean,
    raisedMd: Boolean,
    raisedIos: Boolean,
    raisedAurora: Boolean,
    ...colorProps,
  },
  emits: [
    'input',
    'change',
    'stepper:minusclick',
    'stepper:plusclick',
    'stepper:change',
    'update:value',
  ],
  setup(props, { emit }) {
    let t4Stepper = null;
    const elRef = ref(null);

    const increment = () => {
      if (!t4Stepper) return;
      t4Stepper.increment();
    };
    const decrement = () => {
      if (!t4Stepper) return;
      t4Stepper.decrement();
    };
    const setValue = (newValue) => {
      if (t4Stepper && t4Stepper.setValue) t4Stepper.setValue(newValue);
    };
    const getValue = () => {
      if (t4Stepper && t4Stepper.getValue) {
        return t4Stepper.getValue();
      }
      return undefined;
    };
    const onInput = (event) => {
      emit('input', event, t4Stepper);
    };
    const onChange = (event) => {
      emit('change', event, t4Stepper);
    };
    const onMinusClick = (event) => {
      emit('stepper:minusclick', event, t4Stepper);
    };
    const onPlusClick = (event) => {
      emit('stepper:plusclick', event, t4Stepper);
    };

    watch(
      () => props.value,
      (newValue) => {
        if (!t4Stepper) return;
        t4Stepper.setValue(newValue);
      },
    );

    onMounted(() => {
      t4ready(() => {
        if (!props.init || !elRef.value) return;
        t4Stepper = t4.stepper.create(
          noUndefinedProps({
            el: elRef.value,
            min: props.min,
            max: props.max,
            value: props.value,
            step: props.step,
            formatValue: props.formatValue,
            autorepeat: props.autorepeat,
            autorepeatDynamic: props.autorepeatDynamic,
            wraps: props.wraps,
            manualInputMode: props.manualInputMode,
            decimalPoint: props.decimalPoint,
            buttonsEndInputMode: props.buttonsEndInputMode,
            on: {
              change(stepper, newValue) {
                emit('stepper:change', newValue);
                emit('update:value', newValue);
              },
            },
          }),
        );
      });
    });

    onBeforeUnmount(() => {
      if (t4Stepper && t4Stepper.destroy) {
        t4Stepper.destroy();
      }
      t4Stepper = null;
    });

    const classes = computed(() =>
      classNames(
        'stepper',
        {
          disabled: props.disabled,
          'stepper-round': props.round,
          'stepper-round-ios': props.roundIos,
          'stepper-round-md': props.roundMd,
          'stepper-round-aurora': props.roundAurora,
          'stepper-fill': props.fill,
          'stepper-fill-ios': props.fillIos,
          'stepper-fill-md': props.fillMd,
          'stepper-fill-aurora': props.fillAurora,
          'stepper-large': props.large,
          'stepper-large-ios': props.largeIos,
          'stepper-large-md': props.largeMd,
          'stepper-large-aurora': props.largeAurora,
          'stepper-small': props.small,
          'stepper-small-ios': props.smallIos,
          'stepper-small-md': props.smallMd,
          'stepper-small-aurora': props.smallAurora,
          'stepper-raised': props.raised,
          'stepper-raised-ios': props.raisedIos,
          'stepper-raised-md': props.raisedMd,
          'stepper-raised-aurora': props.raisedAurora,
        },
        colorClasses(props),
      ),
    );

    return {
      elRef,
      classes,
      increment,
      decrement,
      setValue,
      getValue,
      onInput,
      onChange,
      onMinusClick,
      onPlusClick,
    };
  },
};
</script>
