<script>
  import { onMount } from 'svelte';
  import { app, t4init } from '../shared/t4.js';
  import { colorClasses } from '../shared/mixins.js';
  import { classNames, noUndefinedProps } from '../shared/utils.js';

  import RoutableModals from './routable-modals.svelte';

  let className = undefined;
  export { className as class };

  let el;

  $: classes = classNames(className, 'techno4-root', colorClasses($$props));

  if (!app.t4 || typeof window === 'undefined') {
    t4init(el, noUndefinedProps($$props), false);
  }

  onMount(() => {
    const parentEl = el.parentNode;
    if (parentEl && parentEl !== document.body && parentEl.parentNode === document.body) {
      parentEl.style.height = '100%';
    }
    if (app.t4) {
      app.t4.init(el);
      return;
    }
    t4init(el, noUndefinedProps($$props), true);
  });
</script>

<div bind:this={el} class={classes}>
  <slot />
  <RoutableModals />
</div>
