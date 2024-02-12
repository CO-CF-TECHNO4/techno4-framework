<template>
  <div
    ref="elRef"
    :class="classes"
    :data-animate="typeof animate === 'undefined' ? animate : animate.toString()"
    :data-hide-navbar-on-open="
      typeof hideNavbarOnOpen === 'undefined' ? hideNavbarOnOpen : hideNavbarOnOpen.toString()
    "
    :data-hide-toolbar-on-open="
      typeof hideToolbarOnOpen === 'undefined' ? hideToolbarOnOpen : hideToolbarOnOpen.toString()
    "
    :data-hide-statusbar-on-open="
      typeof hideStatusbarOnOpen === 'undefined'
        ? hideStatusbarOnOpen
        : hideStatusbarOnOpen.toString()
    "
    :data-scrollable-el="scrollableEl"
    :data-swipe-to-close="
      typeof swipeToClose === 'undefined' ? swipeToClose : swipeToClose.toString()
    "
    :data-close-by-backdrop-click="
      typeof closeByBackdropClick === 'undefined'
        ? closeByBackdropClick
        : closeByBackdropClick.toString()
    "
    :data-backdrop="typeof backdrop === 'undefined' ? backdrop : backdrop.toString()"
    :data-backdrop-el="backdropEl"
  >
    <t4-card-header v-if="hasHeader">
      {{ title }}
      <slot name="header" />
    </t4-card-header>
    <t4-card-content v-if="hasContent" :padding="padding">
      {{ content }}
      <slot name="content" />
    </t4-card-content>
    <t4-card-footer v-if="hasFooter">
      {{ footer }}
      <slot name="footer" />
    </t4-card-footer>
    <slot />
  </div>
</template>
<script>
import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { t4, t4ready } from '../shared/t4.js';

import t4CardHeader from './card-header.js';
import t4CardContent from './card-content.js';
import t4CardFooter from './card-footer.js';

export default {
  name: 't4-card',
  components: {
    t4CardHeader,
    t4CardContent,
    t4CardFooter,
  },
  props: {
    title: [String, Number],
    content: [String, Number],
    footer: [String, Number],
    outline: Boolean,
    expandable: Boolean,
    expandableAnimateWidth: Boolean,
    expandableOpened: Boolean,
    animate: {
      type: Boolean,
      default: undefined,
    },
    hideNavbarOnOpen: {
      type: Boolean,
      default: undefined,
    },
    hideToolbarOnOpen: {
      type: Boolean,
      default: undefined,
    },
    hideStatusbarOnOpen: {
      type: Boolean,
      default: undefined,
    },
    scrollableEl: {
      type: String,
      default: undefined,
    },
    swipeToClose: {
      type: Boolean,
      default: undefined,
    },
    closeByBackdropClick: {
      type: Boolean,
      default: undefined,
    },
    backdrop: {
      type: Boolean,
      default: undefined,
    },
    backdropEl: {
      type: String,
      default: undefined,
    },
    noShadow: Boolean,
    noBorder: Boolean,
    padding: {
      type: Boolean,
      default: true,
    },
    ...colorProps,
  },
  emits: [
    'card:beforeopen',
    'card:open',
    'card:opened',
    'card:close',
    'card:closed',
    'update:expandableOpened',
  ],
  setup(props, { emit, slots }) {
    const elRef = ref(null);

    const open = () => {
      if (!elRef.value) return;
      t4.card.open(elRef.value);
    };
    const close = () => {
      if (!elRef.value) return;
      t4.card.close(elRef.value);
    };
    const onBeforeOpen = (el, prevent) => {
      if (elRef.value !== el) return;
      emit('card:beforeopen', el, prevent);
    };
    const onOpen = (el) => {
      if (elRef.value !== el) return;
      emit('card:open', el);
      emit('update:expandableOpened', true);
    };
    const onOpened = (el, pageEl) => {
      if (elRef.value !== el) return;
      emit('card:opened', el, pageEl);
    };
    const onClose = (el) => {
      if (elRef.value !== el) return;
      emit('card:close', el);
    };
    const onClosed = (el, pageEl) => {
      if (elRef.value !== el) return;
      emit('card:closed', el, pageEl);
      emit('update:expandableOpened', false);
    };

    onMounted(() => {
      if (!props.expandable || !elRef.value) return;
      t4ready(() => {
        if (props.expandable && props.expandableOpened) {
          t4.card.open(elRef.value, false);
        }
        t4.on('cardBeforeOpen', onBeforeOpen);
        t4.on('cardOpen', onOpen);
        t4.on('cardOpened', onOpened);
        t4.on('cardClose', onClose);
        t4.on('cardClosed', onClosed);
      });
    });

    onBeforeUnmount(() => {
      t4.off('cardBeforeOpen', onBeforeOpen);
      t4.off('cardOpen', onOpen);
      t4.off('cardOpened', onOpened);
      t4.off('cardClose', onClose);
      t4.off('cardClosed', onClosed);
    });

    watch(
      () => props.expandableOpened,
      (value) => {
        if (value) {
          open();
        } else {
          close();
        }
      },
    );

    const hasHeader = computed(() => props.title || slots.header);
    const hasContent = computed(() => props.content || slots.content);
    const hasFooter = computed(() => props.footer || slots.footer);

    const classes = computed(() =>
      classNames(
        'card',
        {
          'card-outline': props.outline,
          'card-expandable': props.expandable,
          'card-expandable-animate-width': props.expandableAnimateWidth,
          'no-shadow': props.noShadow,
          'no-border': props.noBorder,
        },
        colorClasses(props),
      ),
    );
    return {
      elRef,
      classes,
      hasHeader,
      hasContent,
      hasFooter,
    };
  },
};
</script>
