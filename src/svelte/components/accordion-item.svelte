<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { colorClasses } from '../shared/mixins.js';
  import { classNames, createEmitter } from '../shared/utils.js';
  import { restProps } from '../shared/rest-props.js';
  import { app, t4ready } from '../shared/t4.js';

  const emit = createEmitter(createEventDispatcher, $$props);

  let className = undefined;
  export { className as class };

  export let opened = undefined;

  let el;

  $: classes = classNames(
    className,
    'accordion-item',
    {
      'accordion-item-opened': opened,
    },
    colorClasses($$props),
  );

  function onBeforeOpen(accEl, prevent) {
    if (accEl !== el) return;
    emit('accordionBeforeOpen', [prevent]);
  }
  function onOpen(accEl) {
    if (accEl !== el) return;
    emit('accordionOpen');
  }
  function onOpened(accEl) {
    if (accEl !== el) return;
    emit('accordionOpened');
  }
  function onBeforeClose(accEl, prevent) {
    if (accEl !== el) return;
    emit('accordionBeforeClose', [prevent]);
  }
  function onClose(accEl) {
    if (accEl !== el) return;
    emit('accordionClose');
  }
  function onClosed(accEl) {
    if (accEl !== el) return;
    emit('accordionClosed');
  }

  onMount(() => {
    t4ready(() => {
      app.t4.on('accordionBeforeOpen', onBeforeOpen);
      app.t4.on('accordionOpen', onOpen);
      app.t4.on('accordionOpened', onOpened);
      app.t4.on('accordionBeforeClose', onBeforeClose);
      app.t4.on('accordionClose', onClose);
      app.t4.on('accordionClosed', onClosed);
    });
  });

  onDestroy(() => {
    if (!app.t4 || !el) return;
    app.t4.off('accordionBeforeOpen', onBeforeOpen);
    app.t4.off('accordionOpen', onOpen);
    app.t4.off('accordionOpened', onOpened);
    app.t4.off('accordionBeforeClose', onBeforeClose);
    app.t4.off('accordionClose', onClose);
    app.t4.off('accordionClosed', onClosed);
  });
</script>

<div bind:this={el} class={classes} {...restProps($$restProps)}>
  <slot />
</div>
