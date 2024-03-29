<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { colorClasses } from '../shared/mixins.js';
  import { classNames, noUndefinedProps, plainText, createEmitter } from '../shared/utils.js';
  import { restProps } from '../shared/rest-props.js';
  import { app, t4ready } from '../shared/t4.js';

  const emit = createEmitter(createEventDispatcher, $$props);

  let className = undefined;
  export { className as class };

  export let init = true;
  export let value = 0;
  export let min = 0;
  export let max = 100;
  export let step = 1;
  export let formatValue = undefined;
  export let name = undefined;
  export let inputId = undefined;
  export let input = true;
  export let inputType = 'text';
  export let inputReadonly = false;
  export let autorepeat = false;
  export let autorepeatDynamic = false;
  export let wraps = false;
  export let manualInputMode = false;
  export let decimalPoint = 4;
  export let buttonsEndInputMode = true;
  export let disabled = undefined;
  export let buttonsOnly = undefined;

  export let round = false;
  export let roundMd = false;
  export let roundIos = false;
  export let roundAurora = false;
  export let fill = false;
  export let fillMd = false;
  export let fillIos = false;
  export let fillAurora = false;
  export let large = false;
  export let largeMd = false;
  export let largeIos = false;
  export let largeAurora = false;
  export let small = false;
  export let smallMd = false;
  export let smallIos = false;
  export let smallAurora = false;
  export let raised = false;
  export let raisedMd = false;
  export let raisedIos = false;
  export let raisedAurora = false;

  let el;
  let t4Stepper;

  export function instance() {
    return t4Stepper;
  }

  $: classes = classNames(
    className,
    'stepper',
    {
      disabled,
      'stepper-round': round,
      'stepper-round-ios': roundIos,
      'stepper-round-md': roundMd,
      'stepper-round-aurora': roundAurora,
      'stepper-fill': fill,
      'stepper-fill-ios': fillIos,
      'stepper-fill-md': fillMd,
      'stepper-fill-aurora': fillAurora,
      'stepper-large': large,
      'stepper-large-ios': largeIos,
      'stepper-large-md': largeMd,
      'stepper-large-aurora': largeAurora,
      'stepper-small': small,
      'stepper-small-ios': smallIos,
      'stepper-small-md': smallMd,
      'stepper-small-aurora': smallAurora,
      'stepper-raised': raised,
      'stepper-raised-ios': raisedIos,
      'stepper-raised-md': raisedMd,
      'stepper-raised-aurora': raisedAurora,
    },
    colorClasses($$props),
  );

  function watchValue(newValue) {
    if (!t4Stepper) return;
    t4Stepper.setValue(newValue);
  }

  $: watchValue(value);

  function onInput(event) {
    emit('input', [event, t4Stepper]);
  }

  function onChange(event) {
    emit('change', [event, t4Stepper]);
  }

  function onMinusClick(event) {
    emit('stepperMinusClick', [event, t4Stepper]);
  }

  function onPlusClick(event) {
    emit('stepperPlusClick', [event, t4Stepper]);
  }

  onMount(() => {
    if (!init) return;
    t4ready(() => {
      t4Stepper = app.t4.stepper.create(
        noUndefinedProps({
          el,
          min,
          max,
          value,
          step,
          formatValue,
          autorepeat,
          autorepeatDynamic,
          wraps,
          manualInputMode,
          decimalPoint,
          buttonsEndInputMode,
          on: {
            change(stepper, newValue) {
              emit('stepperChange', [newValue]);
              value = newValue;
            },
          },
        }),
      );
    });
  });

  onDestroy(() => {
    if (t4Stepper && t4Stepper.destroy) {
      t4Stepper.destroy();
      t4Stepper = null;
    }
  });
</script>

<div bind:this={el} class={classes} {...restProps($$restProps)}>
  <div on:click={onMinusClick} class="stepper-button-minus" />
  {#if input && !buttonsOnly}
    <div class="stepper-input-wrap">
      <input
        {name}
        id={inputId}
        type={inputType}
        min={inputType === 'number' ? min : undefined}
        max={inputType === 'number' ? max : undefined}
        step={inputType === 'number' ? step : undefined}
        on:input={onInput}
        on:change={onChange}
        value={typeof value === 'undefined' ? '' : value}
        readonly={inputReadonly}
      />
    </div>
  {/if}
  {#if !input && !buttonsOnly}
    <div class="stepper-value">{plainText(value)}</div>
  {/if}
  <div on:click={onPlusClick} class="stepper-button-plus" />
</div>
