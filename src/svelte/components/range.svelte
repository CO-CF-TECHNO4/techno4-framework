<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { colorClasses } from '../shared/mixins.js';
  import { classNames, noUndefinedProps, createEmitter } from '../shared/utils.js';
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
  export let label = false;
  export let dual = false;
  export let vertical = false;
  export let verticalReversed = false;
  export let draggableBar = true;
  export let formatLabel = undefined;
  export let scale = false;
  export let scaleSteps = 5;
  export let scaleSubSteps = 0;
  export let formatScaleLabel = undefined;
  export let limitKnobPosition = undefined;
  export let name = undefined;
  export let input = false;
  export let inputId = undefined;
  export let disabled = false;

  let el;
  let t4Range;

  export function instance() {
    return t4Range;
  }

  $: classes = classNames(
    className,
    'range-slider',
    {
      'range-slider-horizontal': !vertical,
      'range-slider-vertical': vertical,
      'range-slider-vertical-reversed': vertical && verticalReversed,
      disabled,
    },
    colorClasses($$props),
  );

  function watchValue(newValue) {
    if (!t4Range) return;
    t4Range.setValue(newValue);
  }

  $: watchValue(value);

  onMount(() => {
    if (!init) return;
    t4ready(() => {
      t4Range = app.t4.range.create(
        noUndefinedProps({
          el,
          value,
          min,
          max,
          step,
          label,
          dual,
          draggableBar,
          vertical,
          verticalReversed,
          formatLabel,
          scale,
          scaleSteps,
          scaleSubSteps,
          formatScaleLabel,
          limitKnobPosition,
          on: {
            change(range, val) {
              emit('rangeChange', [val]);
            },
            changed(range, val) {
              emit('rangeChanged', [val]);
              value = val;
            },
          },
        }),
      );
    });
  });

  onDestroy(() => {
    if (t4Range && t4Range.destroy) {
      t4Range.destroy();
      t4Range = null;
    }
  });
</script>

<div bind:this={el} class={classes} {...restProps($$restProps)}>
  {#if input}<input type="range" {name} id={inputId} />{/if}
  <slot range={t4Range} />
</div>
