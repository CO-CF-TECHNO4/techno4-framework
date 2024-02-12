<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import { restProps } from '../shared/rest-props.js';
  import { colorClasses } from '../shared/mixins.js';
  import { classNames, createEmitter } from '../shared/utils.js';
  import { app, t4ready } from '../shared/t4.js';
  import { useTab } from '../shared/use-tab.js';

  import Preloader from './preloader.svelte';

  const emit = createEmitter(createEventDispatcher, $$props);
  export let tab = false;
  export let tabActive = false;
  export let ptr = false;
  export let ptrDistance = undefined;
  export let ptrPreloader = true;
  export let ptrBottom = false;
  export let ptrMousewheel = false;
  export let infinite = false;
  export let infiniteTop = false;
  export let infiniteDistance = undefined;
  export let infinitePreloader = true;
  export let hideBarsOnScroll = false;
  export let hideNavbarOnScroll = false;
  export let hideToolbarOnScroll = false;
  export let messagesContent = false;
  export let loginScreen = false;

  let className = undefined;
  export { className as class };

  let pageContentEl;

  $: pageContentClasses = classNames(
    className,
    'page-content',
    {
      tab,
      'tab-active': tabActive,
      'ptr-content': ptr,
      'ptr-bottom': ptrBottom,
      'infinite-scroll-content': infinite,
      'infinite-scroll-top': infiniteTop,
      'hide-bars-on-scroll': hideBarsOnScroll,
      'hide-navbar-on-scroll': hideNavbarOnScroll,
      'hide-toolbar-on-scroll': hideToolbarOnScroll,
      'messages-content': messagesContent,
      'login-screen-content': loginScreen,
    },
    colorClasses($$props),
  );

  // Event handlers
  function onPtrPullStart(ptrEl) {
    if (ptrEl !== pageContentEl) return;
    emit('ptrPullStart');
  }
  function onPtrPullMove(ptrEl) {
    if (ptrEl !== pageContentEl) return;
    emit('ptrPullMove');
  }
  function onPtrPullEnd(ptrEl) {
    if (ptrEl !== pageContentEl) return;
    emit('ptrPullEnd');
  }
  function onPtrRefresh(ptrEl, done) {
    if (ptrEl !== pageContentEl) return;
    emit('ptrRefresh', [done]);
  }
  function onPtrDone(ptrEl) {
    if (ptrEl !== pageContentEl) return;
    emit('ptrDone');
  }
  function onInfinite(infEl) {
    if (infEl !== pageContentEl) return;
    emit('infinite');
  }

  function mountPageContent() {
    if (ptr) {
      app.t4.on('ptrPullStart', onPtrPullStart);
      app.t4.on('ptrPullMove', onPtrPullMove);
      app.t4.on('ptrPullEnd', onPtrPullEnd);
      app.t4.on('ptrRefresh', onPtrRefresh);
      app.t4.on('ptrDone', onPtrDone);
    }
    if (infinite) {
      app.t4.on('infinite', onInfinite);
    }
  }
  function destroyPageContent() {
    if (ptr) {
      app.t4.off('ptrPullStart', onPtrPullStart);
      app.t4.off('ptrPullMove', onPtrPullMove);
      app.t4.off('ptrPullEnd', onPtrPullEnd);
      app.t4.off('ptrRefresh', onPtrRefresh);
      app.t4.off('ptrDone', onPtrDone);
    }
    if (infinite) {
      app.t4.off('infinite', onInfinite);
    }
  }

  useTab(() => pageContentEl, emit);

  onMount(() => {
    t4ready(() => {
      mountPageContent();
    });
  });
  onDestroy(() => {
    if (!app.t4) return;
    destroyPageContent();
  });
</script>

<div
  class={pageContentClasses}
  bind:this={pageContentEl}
  data-ptr-distance={ptrDistance}
  data-ptr-mousewheel={ptrMousewheel || undefined}
  data-infinite-distance={infiniteDistance || undefined}
  {...restProps($$restProps)}
>
  {#if ptr && ptrPreloader && !ptrBottom}
    <div class="ptr-preloader">
      <Preloader />
      <div class="ptr-arrow" />
    </div>
  {/if}
  {#if infinite && infiniteTop && infinitePreloader}
    <Preloader class="infinite-scroll-preloader" />
  {/if}
  <slot />
  {#if infinite && !infiniteTop && infinitePreloader}
    <Preloader class="infinite-scroll-preloader" />
  {/if}
  {#if ptr && ptrPreloader && ptrBottom}
    <div class="ptr-preloader">
      <Preloader />
      <div class="ptr-arrow" />
    </div>
  {/if}
</div>
