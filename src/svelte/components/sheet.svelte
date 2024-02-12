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
  export let top = undefined;
  export let bottom = undefined;
  export let position = undefined;
  export let backdrop = undefined;
  export let backdropEl = undefined;
  export let closeByBackdropClick = undefined;
  export let closeByOutsideClick = undefined;
  export let closeOnEscape = undefined;
  export let push = undefined;
  export let swipeToClose = undefined;
  export let swipeToStep = undefined;
  export let swipeHandler = undefined;
  export let containerEl = undefined;

  let el;
  let innerEl;
  let t4Sheet;

  const state = {
    isOpened: opened,
    isClosing: false,
    swipeStep: false,
  };

  export function instance() {
    return t4Sheet;
  }

  $: positionComputed = (() => {
    if (position) return position;
    if (top) return 'top';
    if (bottom) return 'bottom';
    return 'bottom';
  })();

  $: classes = classNames(
    className,
    'sheet-modal',
    `sheet-modal-${positionComputed}`,
    {
      'sheet-modal-push': push,
      'modal-in-swipe-step': state.swipeStep,
    },

    modalStateClasses(state),
    colorClasses($$props),
  );

  function onOpen(instance) {
    Object.assign(state, {
      isOpened: true,
      isClosing: false,
    });
    emit('sheetOpen', [instance]);
    opened = true;
  }
  function onOpened(instance) {
    emit('sheetOpened', [instance]);
  }
  function onClose(instance) {
    Object.assign(state, {
      isOpened: false,
      isClosing: true,
    });
    emit('sheetClose', [instance]);
  }
  function onClosed(instance) {
    Object.assign(state, {
      isClosing: false,
    });
    emit('sheetClosed', [instance]);
    opened = false;
  }
  function onStepProgress(instance, progress) {
    emit('sheetStepProgress', [instance, progress]);
  }
  function onStepOpen(instance) {
    emit('sheetStepOpen', [instance]);
  }
  function onStepClose(instance) {
    emit('sheetStepClose', [instance]);
  }

  let initialWatched = false;
  function watchOpened(openedPassed) {
    if (!initialWatched) {
      initialWatched = true;
      return;
    }
    if (!t4Sheet) return;
    if (openedPassed) t4Sheet.open();
    else t4Sheet.close();
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
        stepOpen: onStepOpen,
        stepClose: onStepClose,
        stepProgress: onStepProgress,
        // eslint-disable-next-line
        _swipeStep(isSwipeStep) {
          state.swipeStep = isSwipeStep;
        },
      },
    };
    if (typeof backdrop !== 'undefined') params.backdrop = backdrop;
    if (typeof animate !== 'undefined') params.animate = animate;
    if (typeof backdropEl !== 'undefined') params.backdropEl = backdropEl;
    if (typeof closeByBackdropClick !== 'undefined')
      params.closeByBackdropClick = closeByBackdropClick;
    if (typeof closeByOutsideClick !== 'undefined')
      params.closeByOutsideClick = closeByOutsideClick;
    if (typeof closeOnEscape !== 'undefined') params.closeOnEscape = closeOnEscape;
    if (typeof swipeToClose !== 'undefined') params.swipeToClose = swipeToClose;
    if (typeof swipeToStep !== 'undefined') params.swipeToStep = swipeToStep;
    if (typeof swipeHandler !== 'undefined') params.swipeHandler = swipeHandler;
    if (typeof containerEl !== 'undefined') params.containerEl = containerEl;

    t4ready(() => {
      if (el && innerEl) {
        const dom64 = app.t4.$;
        const fixedEls = dom64(innerEl).children('.navbar, .toolbar, .tabbar, .searchbar');
        if (fixedEls.length) {
          dom64(el).prepend(fixedEls);
        }
      }
      t4Sheet = app.t4.sheet.create(params);
      if (opened) {
        t4Sheet.open(false);
      }
    });
  });

  onDestroy(() => {
    if (t4Sheet) t4Sheet.destroy();
    t4Sheet = null;
  });
</script>

<div class={classes} bind:this={el} {...restProps($$restProps)}>
  <slot sheet={t4Sheet} name="fixed" />
  <div class="sheet-modal-inner" bind:this={innerEl}>
    <slot sheet={t4Sheet} />
    <slot sheet={t4Sheet} name="static" />
  </div>
</div>
