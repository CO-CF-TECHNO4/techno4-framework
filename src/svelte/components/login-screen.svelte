<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { colorClasses } from '../shared/mixins.js';
  import { classNames, createEmitter } from '../shared/utils.js';
  import { restProps } from '../shared/rest-props.js';
  import { app, t4ready } from '../shared/t4.js';
  import { modalStateClasses } from '../shared/modal-state-classes.js';

  const emit = createEmitter(createEventDispatcher, $$props);

  let className = undefined;
  export { className as class };

  export let opened = undefined;
  export let animate = undefined;
  export let containerEl = undefined;

  let el;
  let t4LoginScreen;

  const state = {
    isOpened: opened,
    isClosing: false,
  };

  export function instance() {
    return t4LoginScreen;
  }

  $: classes = classNames(
    className,
    'login-screen',
    modalStateClasses(state),
    colorClasses($$props),
  );

  function onOpen(instance) {
    Object.assign(state, {
      isOpened: true,
      isClosing: false,
    });
    emit('loginscreenOpen loginScreenOpen', [instance]);
    opened = true;
  }
  function onOpened(instance) {
    emit('loginscreenOpened loginScreenOpened', [instance]);
  }
  function onClose(instance) {
    Object.assign(state, {
      isOpened: false,
      isClosing: true,
    });
    emit('loginscreenClose loginScreenClose', [instance]);
  }
  function onClosed(instance) {
    Object.assign(state, {
      isClosing: false,
    });
    emit('loginscreenClosed loginScreenClosed', [instance]);
    opened = false;
  }

  let initialWatched = false;
  function watchOpened(openedPassed) {
    if (!initialWatched) {
      initialWatched = true;
      return;
    }
    if (!t4LoginScreen) return;
    if (openedPassed) t4LoginScreen.open();
    else t4LoginScreen.close();
  }

  $: watchOpened(opened);

  onMount(() => {
    const params = {
      el,
      on: {
        open: onOpen,
        opened: onOpened,
        close: onClose,
        closed: onClosed,
      },
    };
    if (typeof animate !== 'undefined') params.animate = animate;
    if (typeof containerEl !== 'undefined') params.containerEl = animate;

    t4ready(() => {
      t4LoginScreen = app.t4.loginScreen.create(params);
      if (opened) {
        t4LoginScreen.open(false);
      }
    });
  });
  onDestroy(() => {
    if (t4LoginScreen) t4LoginScreen.destroy();
    t4LoginScreen = null;
  });
</script>

<div class={classes} bind:this={el} {...restProps($$restProps)}>
  <slot loginScreen={t4LoginScreen} />
</div>
