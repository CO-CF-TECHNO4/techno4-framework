<template>
  <div
    ref="elRef"
    :class="classes"
    :data-ptr-distance="ptrDistance || undefined"
    :data-ptr-mousewheel="ptrMousewheel || undefined"
    :data-infinite-distance="infiniteDistance || undefined"
  >
    <div v-if="ptr && ptrPreloader && !ptrBottom" class="ptr-preloader">
      <t4-preloader />
      <div class="ptr-arrow" />
    </div>
    <t4-preloader
      v-if="infinite && infinitePreloader && infiniteTop"
      class="infinite-scroll-preloader"
    />
    <slot />
    <t4-preloader
      v-if="infinite && infinitePreloader && !infiniteTop"
      class="infinite-scroll-preloader"
    />
    <div v-if="ptr && ptrPreloader && ptrBottom" class="ptr-preloader">
      <t4-preloader />
      <div class="ptr-arrow" />
    </div>
  </div>
</template>
<script>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';

import t4Preloader from './preloader.js';
import { useTab } from '../shared/use-tab.js';
import { t4ready, t4 } from '../shared/t4.js';

export default {
  name: 't4-page-content',
  components: {
    t4Preloader,
  },
  props: {
    tab: Boolean,
    tabActive: Boolean,
    ptr: Boolean,
    ptrDistance: Number,
    ptrPreloader: {
      type: Boolean,
      default: true,
    },
    ptrBottom: Boolean,
    ptrMousewheel: Boolean,
    infinite: Boolean,
    infiniteTop: Boolean,
    infiniteDistance: Number,
    infinitePreloader: {
      type: Boolean,
      default: true,
    },
    hideBarsOnScroll: Boolean,
    hideNavbarOnScroll: Boolean,
    hideToolbarOnScroll: Boolean,
    messagesContent: Boolean,
    loginScreen: Boolean,
    ...colorProps,
  },
  emits: [
    'ptr:pullstart',
    'ptr:pullmove',
    'ptr:pullend',
    'ptr:refresh',
    'ptr:done',
    'infinite',
    'ptrPullStart',
    'ptrPullMove',
    'ptrPullEnd',
    'ptrRefresh',
    'ptrDone',
    'tab:hide',
    'tab:show',
  ],
  setup(props, { emit }) {
    const elRef = ref(null);

    const onPtrPullStart = (el) => {
      if (elRef.value !== el) return;
      emit('ptr:pullstart');
      emit('ptrPullStart');
    };
    const onPtrPullMove = (el) => {
      if (elRef.value !== el) return;
      emit('ptr:pullmove');
      emit('ptrPullMove');
    };
    const onPtrPullEnd = (el) => {
      if (elRef.value !== el) return;
      emit('ptr:pullend');
      emit('ptrPullEnd');
    };
    const onPtrRefresh = (el, done) => {
      if (elRef.value !== el) return;
      emit('ptr:refresh', done);
      emit('ptrRefresh', done);
    };
    const onPtrDone = (el) => {
      if (elRef.value !== el) return;
      emit('ptr:done');
      emit('ptrDone');
    };
    const onInfinite = (el) => {
      if (elRef.value !== el) return;
      emit('infinite');
    };

    useTab(elRef, emit);

    onMounted(() => {
      t4ready(() => {
        if (props.ptr) {
          t4.on('ptrPullStart', onPtrPullStart);
          t4.on('ptrPullMove', onPtrPullMove);
          t4.on('ptrPullEnd', onPtrPullEnd);
          t4.on('ptrRefresh', onPtrRefresh);
          t4.on('ptrDone', onPtrDone);
        }
        if (props.infinite) {
          t4.on('infinite', onInfinite);
        }
      });
    });

    onBeforeUnmount(() => {
      if (!t4) return;
      t4.off('ptrPullStart', onPtrPullStart);
      t4.off('ptrPullMove', onPtrPullMove);
      t4.off('ptrPullEnd', onPtrPullEnd);
      t4.off('ptrRefresh', onPtrRefresh);
      t4.off('ptrDone', onPtrDone);
      t4.off('infinite', onInfinite);
    });

    const classes = computed(() =>
      classNames(
        'page-content',
        {
          tab: props.tab,
          'tab-active': props.tabActive,
          'ptr-content': props.ptr,
          'ptr-bottom': props.ptrBottom,
          'infinite-scroll-content': props.infinite,
          'infinite-scroll-top': props.infiniteTop,
          'hide-bars-on-scroll': props.hideBarsOnScroll,
          'hide-navbar-on-scroll': props.hideNavbarOnScroll,
          'hide-toolbar-on-scroll': props.hideToolbarOnScroll,
          'messages-content': props.messagesContent,
          'login-screen-content': props.loginScreen,
        },
        colorClasses(props),
      ),
    );

    return {
      elRef,
      classes,
    };
  },
};
</script>
