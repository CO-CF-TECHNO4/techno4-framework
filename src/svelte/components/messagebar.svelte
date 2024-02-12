<script>
  import { createEventDispatcher, onMount, onDestroy, afterUpdate } from 'svelte';
  import { colorClasses } from '../shared/mixins.js';
  import { classNames, noUndefinedProps, createEmitter } from '../shared/utils.js';
  import { restProps } from '../shared/rest-props.js';
  import { app, t4ready } from '../shared/t4.js';

  import Link from './link.svelte';
  import Input from './input.svelte';

  const emit = createEmitter(createEventDispatcher, $$props);

  let className = undefined;
  export { className as class };

  export let sheetVisible = false;
  export let attachmentsVisible = false;
  export let top = false;
  export let resizable = true;
  export let bottomOffset = 0;
  export let topOffset = 0;
  export let maxHeight = undefined;
  export let resizePage = true;
  export let sendLink = undefined;
  export let value = undefined;
  export let disabled = false;
  export let readonly = false;
  export let textareaId = undefined;
  export let name = undefined;
  export let placeholder = 'Message';

  export let init = true;

  export let t4Slot = 'fixed';

  let el;
  let t4Messagebar;
  let updateSheetVisible;
  let updateAttachmentsVisible;

  export function instance() {
    return t4Messagebar;
  }

  $: classes = classNames(
    className,
    'toolbar',
    'messagebar',
    {
      'messagebar-attachments-visible': attachmentsVisible,
      'messagebar-sheet-visible': sheetVisible,
    },
    colorClasses($$props),
  );

  $: hasSendLinkSlots = $$slots['send-link'];

  let initialWatchedSheet = false;
  function watchSheetVisible() {
    if (!initialWatchedSheet) {
      initialWatchedSheet = true;
      return;
    }
    if (!resizable || !t4Messagebar) return;
    updateSheetVisible = true;
  }
  let initialWatchedAttachments;
  function watchAttachmentsVisible() {
    if (!initialWatchedAttachments) {
      initialWatchedAttachments = true;
      return;
    }
    if (!resizable || !t4Messagebar) return;
    updateAttachmentsVisible = true;
  }

  $: watchSheetVisible(sheetVisible);
  $: watchAttachmentsVisible(attachmentsVisible);

  function onChange(event) {
    emit('change', [...event.detail]);
  }

  function onInput(event) {
    emit('input', [...event.detail]);
    value = event.detail[0].target.value;
  }

  function onFocus(event) {
    emit('focus', [...event.detail]);
  }

  function onBlur(event) {
    emit('blur', [...event.detail]);
  }

  function onClick(event) {
    const inputValue = el.querySelector('textarea');
    const clear = t4Messagebar
      ? () => {
          t4Messagebar.clear();
        }
      : () => {};

    emit('submit', [inputValue, clear]);
    emit('send', [inputValue, clear]);
    emit('click', [event]);
  }

  function onAttachmentDelete(inst, attachmentEl, attachmentElIndex) {
    emit('messagebarAttachmentDelete', [inst, attachmentEl, attachmentElIndex]);
  }

  function onAttachmentClick(inst, attachmentEl, attachmentElIndex) {
    emit('messagebarAttachmentClick', [inst, attachmentEl, attachmentElIndex]);
  }

  function onResizePage(inst) {
    emit('messagebarResizePage', [inst]);
  }

  onMount(() => {
    if (!init || !el) return;
    t4ready(() => {
      if (el) {
        const dom64 = app.t4.$;
        const attachmentsEl = dom64(el).find('.toolbar-inner > .messagebar-attachments');
        if (attachmentsEl.length) dom64(el).find('.messagebar-area').prepend(attachmentsEl);

        const sheetEl = dom64(el).find('.toolbar-inner > .messagebar-sheet');
        if (sheetEl.length) dom64(el).append(sheetEl);
      }
      t4Messagebar = app.t4.messagebar.create(
        noUndefinedProps({
          el,
          top,
          resizePage,
          bottomOffset,
          topOffset,
          maxHeight,
          on: {
            attachmentDelete: onAttachmentDelete,
            attachmentClick: onAttachmentClick,
            resizePage: onResizePage,
          },
        }),
      );
    });
  });

  afterUpdate(() => {
    if (!t4Messagebar) return;
    if (el && app.t4) {
      const dom64 = app.t4.$;
      const attachmentsEl = dom64(el).find('.toolbar-inner > .messagebar-attachments');
      if (attachmentsEl.length) dom64(el).find('.messagebar-area').prepend(attachmentsEl);

      const sheetEl = dom64(el).find('.toolbar-inner > .messagebar-sheet');
      if (sheetEl.length) dom64(el).append(sheetEl);
    }
    if (updateSheetVisible) {
      updateSheetVisible = false;
      t4Messagebar.sheetVisible = sheetVisible;
      t4Messagebar.resizePage();
    }
    if (updateAttachmentsVisible) {
      updateAttachmentsVisible = false;
      t4Messagebar.attachmentsVisible = attachmentsVisible;
      t4Messagebar.resizePage();
    }
  });

  onDestroy(() => {
    if (t4Messagebar && t4Messagebar.destroy) {
      t4Messagebar.destroy();
      t4Messagebar = null;
    }
  });
</script>

<div bind:this={el} class={classes} data-t4-slot={t4Slot} {...restProps($$restProps)}>
  <slot messagebar={t4Messagebar} name="before-inner" />
  <div class="toolbar-inner">
    <slot messagebar={t4Messagebar} name="inner-start" />
    <div class="messagebar-area">
      <slot messagebar={t4Messagebar} name="before-area" />
      <Input
        id={textareaId}
        type="textarea"
        wrap={false}
        {placeholder}
        {disabled}
        {name}
        {readonly}
        {resizable}
        value={typeof value === 'undefined' ? '' : value}
        on:input={onInput}
        on:change={onChange}
        on:focus={onFocus}
        on:blur={onBlur}
      />
      <slot messagebar={t4Messagebar} name="after-inner" />
    </div>
    {#if (sendLink && sendLink.length > 0) || hasSendLinkSlots}
      <Link {onClick}>
        <slot messagebar={t4Messagebar} name="send-link" />
        {sendLink}
      </Link>
    {/if}
    <slot messagebar={t4Messagebar} name="inner-end" />
    <slot messagebar={t4Messagebar} />
  </div>
  <slot messagebar={t4Messagebar} name="after-inner" />
</div>
