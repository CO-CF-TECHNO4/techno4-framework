<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { colorClasses } from '../shared/mixins.js';
  import { classNames, createEmitter } from '../shared/utils.js';
  import { restProps } from '../shared/rest-props.js';
  import { app, t4ready } from '../shared/t4.js';
  import { useTooltip } from '../shared/use-tooltip.js';

  const emit = createEmitter(createEventDispatcher, $$props);

  let className = undefined;
  export { className as class };

  export let init = true;
  export let checked = undefined;
  export let disabled = undefined;
  export let readonly = undefined;
  export let name = undefined;
  export let value = undefined;

  export let tooltip = undefined;
  export let tooltipTrigger = undefined;

  let el;
  let inputEl;
  let t4Toggle;

  export function instance() {
    return t4Toggle;
  }

  $: classes = classNames(
    'toggle',
    className,
    {
      disabled,
    },
    colorClasses($$props),
  );

  let initialWatched = false;
  function watchChecked(isChecked) {
    if (!initialWatched) {
      initialWatched = true;
      return;
    }
    if (!t4Toggle) return;
    t4Toggle.checked = isChecked;
  }

  $: watchChecked(checked);

  function onChange(event) {
    emit('change', [event]);
  }

  onMount(() => {
    if (!init) return;
    t4ready(() => {
      t4Toggle = app.t4.toggle.create({
        el,
        on: {
          change(toggle) {
            emit('toggleChange', [toggle.checked]);
            checked = toggle.checked;
          },
        },
      });
    });
  });

  onDestroy(() => {
    if (t4Toggle && t4Toggle.destroy && t4Toggle.$el) {
      t4Toggle.destroy();
      t4Toggle = null;
    }
  });
</script>

<label
  bind:this={el}
  class={classes}
  {...restProps($$restProps)}
  use:useTooltip={{ tooltip, tooltipTrigger }}
>
  <input
    bind:this={inputEl}
    type="checkbox"
    {name}
    {disabled}
    {readonly}
    {checked}
    value={typeof value === 'undefined' ? '' : value}
    on:change={onChange}
  />
  <span class="toggle-icon" />
</label>
