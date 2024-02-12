<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { colorClasses } from '../shared/mixins.js';
  import { classNames, plainText, createEmitter } from '../shared/utils.js';
  import { restProps } from '../shared/rest-props.js';
  import { app, t4ready } from '../shared/t4.js';

  import CardHeader from './card-header.svelte';
  import CardContent from './card-content.svelte';
  import CardFooter from './card-footer.svelte';

  const emit = createEmitter(createEventDispatcher, $$props);

  let className = undefined;
  export { className as class };

  export let title = undefined;
  export let content = undefined;
  export let footer = undefined;
  export let outline = false;
  export let expandable = false;
  export let expandableAnimateWidth = false;
  export let expandableOpened = false;
  export let animate = undefined;
  export let hideNavbarOnOpen = undefined;
  export let hideToolbarOnOpen = undefined;
  export let hideStatusbarOnOpen = undefined;
  export let scrollableEl = undefined;
  export let swipeToClose = undefined;
  export let closeByBackdropClick = undefined;
  export let backdrop = undefined;
  export let backdropEl = undefined;
  export let noShadow = false;
  export let noBorder = false;
  export let padding = true;

  let el;

  $: classes = classNames(
    className,
    'card',
    {
      'card-outline': outline,
      'card-expandable': expandable,
      'card-expandable-animate-width': expandableAnimateWidth,
      'no-shadow': noShadow,
      'no-border': noBorder,
    },
    colorClasses($$props),
  );

  /* eslint-disable no-undef */
  $: hasHeaderSlots = $$slots.header;
  $: hasContentSlots = $$slots.content;
  $: hasFooterSlots = $$slots.footer;
  /* eslint-enable no-undef */

  function open() {
    app.t4.card.open(el);
  }

  function close() {
    app.t4.card.close(el);
  }

  let initialWatched = false;
  function watchOpened(openedPassed) {
    if (!initialWatched) {
      initialWatched = true;
      return;
    }
    if (openedPassed) {
      open();
    } else {
      close();
    }
  }

  $: watchOpened(expandableOpened);

  function onBeforeOpen(cardEl, prevent) {
    if (cardEl !== el) return;
    emit('cardBeforeOpen', [el, prevent]);
  }
  function onOpen(cardEl) {
    if (cardEl !== el) return;
    emit('cardOpen', [el]);
    expandableOpened = true;
  }
  function onOpened(cardEl, pageEl) {
    if (cardEl !== el) return;
    emit('cardOpened', [el, pageEl]);
  }
  function onClose(cardEl) {
    if (cardEl !== el) return;
    emit('cardClose', [el]);
  }
  function onClosed(cardEl, pageEl) {
    if (cardEl !== el) return;
    emit('cardClosed', [el, pageEl]);
    expandableOpened = false;
  }

  onMount(() => {
    if (!expandable) return;
    t4ready(() => {
      app.t4.on('cardBeforeOpen', onBeforeOpen);
      app.t4.on('cardOpen', onOpen);
      app.t4.on('cardOpened', onOpened);
      app.t4.on('cardClose', onClose);
      app.t4.on('cardClosed', onClosed);
      if (expandable && expandableOpened && el) {
        app.t4.card.open(el, false);
      }
    });
  });

  onDestroy(() => {
    if (!expandable) return;
    if (!app.t4 || !el) return;
    app.t4.off('cardBeforeOpen', onBeforeOpen);
    app.t4.off('cardOpen', onOpen);
    app.t4.off('cardOpened', onOpened);
    app.t4.off('cardClose', onClose);
    app.t4.off('cardClosed', onClosed);
  });
</script>

<div
  bind:this={el}
  class={classes}
  data-animate={typeof animate === 'undefined' ? animate : animate.toString()}
  data-hide-navbar-on-open={typeof hideNavbarOnOpen === 'undefined'
    ? hideNavbarOnOpen
    : hideNavbarOnOpen.toString()}
  data-hide-toolbar-on-open={typeof hideToolbarOnOpen === 'undefined'
    ? hideToolbarOnOpen
    : hideToolbarOnOpen.toString()}
  data-hide-statusbar-on-open={typeof hideStatusbarOnOpen === 'undefined'
    ? hideStatusbarOnOpen
    : hideStatusbarOnOpen.toString()}
  data-scrollable-el={scrollableEl}
  data-swipe-to-close={typeof swipeToClose === 'undefined' ? swipeToClose : swipeToClose.toString()}
  data-close-by-backdrop-click={typeof closeByBackdropClick === 'undefined'
    ? closeByBackdropClick
    : closeByBackdropClick.toString()}
  data-backdrop={typeof backdrop === 'undefined' ? backdrop : backdrop.toString()}
  data-backdrop-el={backdropEl}
  {...restProps($$restProps)}
>
  {#if typeof title !== 'undefined' || hasHeaderSlots}
    <CardHeader>
      {plainText(title)}
      <slot name="header" />
    </CardHeader>
  {/if}
  {#if typeof content !== 'undefined' || hasContentSlots}
    <CardContent {padding}>
      {plainText(content)}
      <slot name="content" />
    </CardContent>
  {/if}
  {#if typeof footer !== 'undefined' || hasFooterSlots}
    <CardFooter>
      {plainText(footer)}
      <slot name="footer" />
    </CardFooter>
  {/if}
  <slot />
</div>
