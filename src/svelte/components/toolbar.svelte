<script>
  import { createEventDispatcher, onMount, onDestroy, afterUpdate } from 'svelte';
  import { colorClasses } from '../shared/mixins.js';
  import { classNames, createEmitter } from '../shared/utils.js';
  import { restProps } from '../shared/rest-props.js';
  import { app, t4ready } from '../shared/t4.js';
  import { useTheme } from '../shared/use-theme.js';
  import { setReactiveContext } from '../shared/set-reactive-context.js';

  const emit = createEmitter(createEventDispatcher, $$props);

  let className = undefined;
  export { className as class };

  export let tabbar = false;
  export let labels = false;
  export let scrollable = false;
  export let hidden = false;
  export let noShadow = false;
  export let noHairline = false;
  export let noBorder = false;
  export let position = undefined;
  export let topMd = undefined;
  export let topIos = undefined;
  export let topAurora = undefined;
  export let top = undefined;
  export let bottomMd = undefined;
  export let bottomIos = undefined;
  export let bottomAurora = undefined;
  export let bottom = undefined;
  export let inner = true;

  export let t4Slot = 'fixed';

  let el;
  let theme = useTheme((t) => {
    theme = t;
  });

  setReactiveContext('TabbarContext', () => ({
    tabbarHasLabels: labels,
  }));

  $: classes = classNames(
    className,
    'toolbar',
    {
      tabbar,
      'toolbar-bottom':
        (theme && theme.md && bottomMd) ||
        (theme && theme.ios && bottomIos) ||
        (theme && theme.aurora && bottomAurora) ||
        bottom ||
        position === 'bottom',
      'toolbar-top':
        (theme && theme.md && topMd) ||
        (theme && theme.ios && topIos) ||
        (theme && theme.aurora && topAurora) ||
        top ||
        position === 'top',
      'tabbar-labels': labels,
      'tabbar-scrollable': scrollable,
      'toolbar-hidden': hidden,
      'no-shadow': noShadow,
      'no-hairline': noHairline || noBorder,
    },
    colorClasses($$props),
  );

  function onShow(toolbarEl) {
    if (el !== toolbarEl) return;
    emit('toolbarShow');
  }
  function onHide(toolbarEl) {
    if (el !== toolbarEl) return;
    emit('toolbarHide');
  }

  onMount(() => {
    t4ready(() => {
      if (tabbar) app.t4.toolbar.setHighlight(el);
      app.t4.on('toolbarShow', onShow);
      app.t4.on('toolbarHide', onHide);
    });
  });

  afterUpdate(() => {
    if (tabbar && app.t4 && el) {
      app.t4.toolbar.setHighlight(el);
    }
  });

  onDestroy(() => {
    if (!app.t4) return;
    app.t4.off('toolbarShow', onShow);
    app.t4.off('toolbarHide', onHide);
  });
</script>

<div bind:this={el} class={classes} data-t4-slot={t4Slot} {...restProps($$restProps)}>
  <slot name="before-inner" />
  {#if inner}
    <div class="toolbar-inner">
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
  <slot name="after-inner" />
</div>
