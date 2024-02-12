<script>
  import { createEventDispatcher } from 'svelte';

  import { colorClasses } from '../shared/mixins.js';
  import { classNames, createEmitter } from '../shared/utils.js';
  import { restProps } from '../shared/rest-props.js';
  import { app } from '../shared/t4.js';

  const emit = createEmitter(createEventDispatcher, $$props);

  let className = undefined;
  export { className as class };

  export let bold = false;
  export let close = true;

  let el;

  // eslint-disable-next-line
  $: hasMediaSlots = $$slots.media;

  $: classes = classNames(
    className,
    {
      'actions-button': true,
      'actions-button-bold': bold,
    },
    colorClasses($$props),
  );

  function onClick() {
    if (close && app.t4) {
      const dom64 = app.t4.$;
      app.t4.actions.close(dom64(el).parents('.actions-modal'));
    }
    emit('click');
  }
</script>

<div class={classes} on:click={onClick} bind:this={el} {...restProps($$restProps)}>
  {#if hasMediaSlots}
    <div class="actions-button-media">
      <slot name="media" />
    </div>
  {/if}
  <div class="actions-button-text">
    <slot />
  </div>
</div>
