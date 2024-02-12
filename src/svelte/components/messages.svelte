<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
  import { colorClasses } from '../shared/mixins.js';
  import { classNames, noUndefinedProps } from '../shared/utils.js';
  import { restProps } from '../shared/rest-props.js';
  import { app, t4ready } from '../shared/t4.js';

  let className = undefined;
  export { className as class };

  export let autoLayout = false;
  export let messages = [];
  export let newMessagesFirst = false;
  export let scrollMessages = true;
  export let scrollMessagesOnEdge = true;
  export let firstMessageRule = undefined;
  export let lastMessageRule = undefined;
  export let tailMessageRule = undefined;
  export let sameNameMessageRule = undefined;
  export let sameHeaderMessageRule = undefined;
  export let sameFooterMessageRule = undefined;
  export let sameAvatarMessageRule = undefined;
  export let customClassMessageRule = undefined;
  export let renderMessage = undefined;
  export let typing = false;

  export let init = true;

  let el;
  let t4Messages;
  let childrenBeforeUpdated = null;

  export function instance() {
    return t4Messages;
  }

  $: classes = classNames(className, 'messages', colorClasses($$props));

  onMount(() => {
    if (!init) return;
    t4ready(() => {
      t4Messages = app.t4.messages.create(
        noUndefinedProps({
          el,
          autoLayout,
          messages,
          newMessagesFirst,
          scrollMessages,
          scrollMessagesOnEdge,
          firstMessageRule,
          lastMessageRule,
          tailMessageRule,
          sameNameMessageRule,
          sameHeaderMessageRule,
          sameFooterMessageRule,
          sameAvatarMessageRule,
          customClassMessageRule,
          renderMessage,
        }),
      );
      if (typing) t4Messages.showTyping();
    });
  });

  beforeUpdate(() => {
    if (!init || !el) return;
    const children = el.children;
    if (!children) return;
    childrenBeforeUpdated = children.length;

    for (let i = 0; i < children.length; i += 1) {
      children[i].classList.add('message-appeared');
    }
  });

  afterUpdate(() => {
    if (!init) return;
    if (!el) return;

    const children = el.children;
    if (!children) return;
    const childrenAfterUpdated = children.length;

    for (let i = 0; i < children.length; i += 1) {
      if (!children[i].classList.contains('message-appeared')) {
        children[i].classList.add('message-appear-from-bottom');
      }
    }

    if (t4Messages && t4Messages.layout && autoLayout) {
      t4Messages.layout();
    }
    if (
      childrenBeforeUpdated !== childrenAfterUpdated &&
      t4Messages &&
      t4Messages.scroll &&
      scrollMessages
    ) {
      t4Messages.scroll();
    }
  });

  onDestroy(() => {
    if (t4Messages && t4Messages.destroy) {
      t4Messages.destroy();
      t4Messages = null;
    }
  });

  let initialWatched = false;
  function watchTyping(typingPassed) {
    if (!initialWatched) {
      initialWatched = true;
      return;
    }
    if (!t4Messages) return;
    if (typingPassed) t4Messages.showTyping();
    else t4Messages.hideTyping();
  }

  $: watchTyping(typing);
</script>

<div bind:this={el} class={classes} {...restProps($$restProps)}>
  <slot messages={t4Messages} />
</div>
