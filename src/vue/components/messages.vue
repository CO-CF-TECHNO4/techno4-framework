<template>
  <div ref="elRef" :class="classes">
    <slot />
  </div>
</template>
<script>
import { computed, ref, onMounted, onBeforeUnmount, onBeforeUpdate, onUpdated, watch } from 'vue';
import { classNames, getChildren, noUndefinedProps } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';

export default {
  name: 't4-messages',
  props: {
    autoLayout: {
      type: Boolean,
      default: false,
    },
    messages: {
      type: Array,
      default() {
        return [];
      },
    },
    newMessagesFirst: {
      type: Boolean,
      default: false,
    },
    scrollMessages: {
      type: Boolean,
      default: true,
    },
    scrollMessagesOnEdge: {
      type: Boolean,
      default: true,
    },
    typing: {
      type: Boolean,
      default: false,
    },
    firstMessageRule: Function,
    lastMessageRule: Function,
    tailMessageRule: Function,
    sameNameMessageRule: Function,
    sameHeaderMessageRule: Function,
    sameFooterMessageRule: Function,
    sameAvatarMessageRule: Function,
    customClassMessageRule: Function,
    renderMessage: Function,

    init: {
      type: Boolean,
      default: true,
    },
    ...colorProps,
  },
  setup(props, { slots }) {
    let t4Messages = null;
    let childrenBeforeUpdated = null;
    const elRef = ref(null);

    onMounted(() => {
      if (!props.init) return;

      t4ready(() => {
        t4Messages = t4.messages.create(
          noUndefinedProps({
            el: elRef.value,
            autoLayout: props.autoLayout,
            messages: props.messages,
            newMessagesFirst: props.newMessagesFirst,
            scrollMessages: props.scrollMessages,
            scrollMessagesOnEdge: props.scrollMessagesOnEdge,
            firstMessageRule: props.firstMessageRule,
            lastMessageRule: props.lastMessageRule,
            tailMessageRule: props.tailMessageRule,
            sameNameMessageRule: props.sameNameMessageRule,
            sameHeaderMessageRule: props.sameHeaderMessageRule,
            sameFooterMessageRule: props.sameFooterMessageRule,
            sameAvatarMessageRule: props.sameAvatarMessageRule,
            customClassMessageRule: props.customClassMessageRule,
            renderMessage: props.renderMessage,
          }),
        );
        if (t4Messages && props.typing) {
          t4Messages.showTyping();
        }
      });
    });

    onBeforeUpdate(() => {
      if (!props.init || !elRef.value) return;
      const children = elRef.value.children;
      if (!children) return;
      childrenBeforeUpdated = children.length;

      for (let i = 0; i < children.length; i += 1) {
        children[i].classList.add('message-appeared');
      }
      const childrenAfterUpdate = getChildren(slots);
      if (t4Messages && props.scrollMessages && childrenBeforeUpdated !== childrenAfterUpdate) {
        t4Messages.setScrollData();
      }
    });

    onUpdated(() => {
      if (!props.init) return;
      if (!elRef.value) return;

      const children = elRef.value.children;
      if (!children) return;
      const childerAftterUpdated = children.length;

      for (let i = 0; i < children.length; i += 1) {
        if (!children[i].classList.contains('message-appeared')) {
          children[i].classList.add('message-appear-from-bottom');
        }
      }

      if (t4Messages && t4Messages.layout && props.autoLayout) {
        t4Messages.layout();
      }
      if (
        childerAftterUpdated !== childrenBeforeUpdated &&
        t4Messages &&
        t4Messages.scroll &&
        t4Messages.scrollData &&
        props.scrollMessages
      ) {
        t4Messages.scrollWithEdgeCheck(true);
      }
    });

    onBeforeUnmount(() => {
      if (t4Messages && t4Messages.destroy) t4Messages.destroy();
      t4Messages = null;
    });

    watch(
      () => props.typing,
      (newValue) => {
        if (!t4Messages) return;
        if (newValue) t4Messages.showTyping();
        else t4Messages.hideTyping();
      },
    );

    const classes = computed(() => classNames('messages', colorClasses(props)));

    return {
      elRef,
      classes,
    };
  },
};
</script>
