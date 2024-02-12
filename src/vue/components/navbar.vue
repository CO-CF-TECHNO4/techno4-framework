<template>
  <div ref="elRef" :class="classes">
    <div class="navbar-bg" />
    <slot name="before-inner" />
    <div :class="innerClasses">
      <t4-nav-left
        v-if="hasLeft"
        :back-link="backLink"
        :back-link-url="backLinkUrl"
        :back-link-force="backLinkForce"
        :back-link-show-text="backLinkShowText"
        @back:click="onBackClick"
      >
        <slot name="nav-left" />
        <slot name="left" />
      </t4-nav-left>
      <t4-nav-title v-if="hasTitle" :title="title" :subtitle="subtitle">
        <slot name="title" />
      </t4-nav-title>
      <t4-nav-right v-if="hasRight">
        <slot name="nav-right" />
        <slot name="right" />
      </t4-nav-right>
      <div v-if="hasLargeTitle" className="title-large">
        <div className="title-large-text">
          {{ largeTitle }}
          <slot name="title-large" />
        </div>
      </div>
      <slot />
    </div>
    <slot name="after-inner" />
  </div>
</template>
<script>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';
import { useTheme } from '../shared/use-theme.js';

import t4NavLeft from './nav-left.js';
import t4NavTitle from './nav-title.js';
import t4NavRight from './nav-right.js';

export default {
  name: 't4-navbar',
  components: {
    t4NavLeft,
    t4NavTitle,
    t4NavRight,
  },
  props: {
    backLink: [Boolean, String],
    backLinkUrl: String,
    backLinkForce: Boolean,
    backLinkShowText: {
      type: Boolean,
      default: undefined,
    },
    sliding: {
      type: Boolean,
      default: true,
    },
    title: String,
    subtitle: String,
    hidden: Boolean,
    noShadow: Boolean,
    noHairline: Boolean,
    innerClass: String,
    innerClassName: String,
    large: Boolean,
    largeTransparent: Boolean,
    transparent: Boolean,
    titleLarge: String,
    ...colorProps,
  },
  emits: [
    'navbar:hide',
    'navbar:show',
    'navbar:expand',
    'navbar:collapse',
    'navbar:transparentshow',
    'navbar:transparenthide',
    'click:back',
    'back:click',
  ],
  setup(props, { emit, slots }) {
    let routerPositionClass = '';
    let largeCollapsed = false;
    let routerNavbarRole = null;
    let routerNavbarRoleDetailRoot = false;
    let routerNavbarMasterStack = false;
    let transparentVisible = false;

    const elRef = ref(null);

    const theme = useTheme();

    const onHide = (navbarEl) => {
      if (elRef.value !== navbarEl) return;
      emit('navbar:hide');
    };
    const onShow = (navbarEl) => {
      if (elRef.value !== navbarEl) return;
      emit('navbar:show');
    };
    const onExpand = (navbarEl) => {
      if (elRef.value !== navbarEl) return;
      largeCollapsed = false;
      emit('navbar:expand');
    };
    const onCollapse = (navbarEl) => {
      if (elRef.value !== navbarEl) return;
      largeCollapsed = true;
      emit('navbar:collapse');
    };
    const onNavbarTransparentShow = (navbarEl) => {
      if (elRef.value !== navbarEl) return;
      transparentVisible = true;
      emit('navbar:transparentshow');
    };
    const onNavbarTransparentHide = (navbarEl) => {
      if (elRef.value !== navbarEl) return;
      transparentVisible = false;
      emit('navbar:transparenthide');
    };
    const onNavbarPosition = (navbarEl, position) => {
      if (elRef.value !== navbarEl) return;
      routerPositionClass = position ? `navbar-${position}` : '';
    };
    const onNavbarRole = (navbarEl, rolesData) => {
      if (elRef.value !== navbarEl) return;
      routerNavbarRole = rolesData.role;
      routerNavbarRoleDetailRoot = rolesData.detailRoot;
    };
    const onNavbarMasterStack = (navbarEl) => {
      if (elRef.value !== navbarEl) return;
      routerNavbarMasterStack = true;
    };
    const onNavbarMasterUnstack = (navbarEl) => {
      if (elRef.value !== navbarEl) return;
      routerNavbarMasterStack = false;
    };
    const hide = (animate) => {
      if (!t4) return;
      t4.navbar.hide(elRef.value, animate);
    };
    const show = (animate) => {
      if (!t4) return;
      t4.navbar.show(elRef.value, animate);
    };
    const size = () => {
      if (!t4) return;
      t4.navbar.size(elRef.value);
    };
    const onBackClick = (event) => {
      emit('back:click', event);
      emit('click:back', event);
    };

    onMounted(() => {
      if (!elRef.value) return;
      t4ready(() => {
        t4.navbar.size(elRef.value);
        t4.on('navbarShow', onShow);
        t4.on('navbarHide', onHide);
        t4.on('navbarCollapse', onCollapse);
        t4.on('navbarExpand', onExpand);
        t4.on('navbarPosition', onNavbarPosition);
        t4.on('navbarRole', onNavbarRole);
        t4.on('navbarMasterStack', onNavbarMasterStack);
        t4.on('navbarMasterUnstack', onNavbarMasterUnstack);
        t4.on('navbarTransparentShow', onNavbarTransparentShow);
        t4.on('navbarTransparentHide', onNavbarTransparentHide);
      });
    });

    onBeforeUnmount(() => {
      if (!t4) return;
      t4.off('navbarShow', onShow);
      t4.off('navbarHide', onHide);
      t4.off('navbarCollapse', onCollapse);
      t4.off('navbarExpand', onExpand);
      t4.off('navbarPosition', onNavbarPosition);
      t4.off('navbarRole', onNavbarRole);
      t4.off('navbarMasterStack', onNavbarMasterStack);
      t4.off('navbarMasterUnstack', onNavbarMasterUnstack);
      t4.off('navbarTransparentShow', onNavbarTransparentShow);
      t4.off('navbarTransparentHide', onNavbarTransparentHide);
    });

    const addLeftTitleClass = computed(
      () => theme.value && theme.value.ios && t4 && !t4.params.navbar.iosCenterTitle,
    );

    const addCenterTitleClass = computed(
      () =>
        (theme.value && theme.value.md && t4 && t4.params.navbar.mdCenterTitle) ||
        (theme.value && theme.value.aurora && t4 && t4.params.navbar.auroraCenterTitle),
    );

    const isLarge = computed(() => props.large || props.largeTransparent);
    const isTransparent = computed(
      () => props.transparent || (isLarge.value && props.largeTransparent),
    );
    const isTransparentVisible = computed(() => isTransparent.value && transparentVisible);

    const classes = computed(() =>
      classNames(
        'navbar',
        routerPositionClass,
        {
          'navbar-hidden': props.hidden,
          'navbar-large': isLarge.value,
          'navbar-large-collapsed': isLarge.value && largeCollapsed,
          'navbar-transparent': isTransparent.value,
          'navbar-transparent-visible': isTransparentVisible.value,
          'navbar-master': routerNavbarRole === 'master',
          'navbar-master-detail': routerNavbarRole === 'detail',
          'navbar-master-detail-root': routerNavbarRoleDetailRoot === true,
          'navbar-master-stacked': routerNavbarMasterStack === true,
          'no-shadow': props.noShadow,
          'no-hairline': props.noHairline,
        },
        colorClasses(props),
      ),
    );

    const largeTitle = computed(() => {
      let largeTitleText = props.titleLarge;
      if (!largeTitleText && props.large && props.title) largeTitleText = props.title;
      return largeTitleText;
    });

    const hasLeft = computed(() => {
      return props.backLink || slots['nav-left'] || slots.left;
    });

    const hasTitle = computed(() => {
      return props.title || props.subtitle || slots.title;
    });

    const hasRight = computed(() => {
      return slots['nav-right'] || slots.right;
    });

    const hasLargeTitle = computed(() => {
      return largeTitle.value || slots['title-large'];
    });

    const innerClasses = computed(() => {
      return classNames('navbar-inner', props.innerClass, props.innerClassName, {
        sliding: props.sliding,
        'navbar-inner-left-title': addLeftTitleClass.value,
        'navbar-inner-centered-title': addCenterTitleClass.value,
      });
    });

    return {
      elRef,
      classes,
      innerClasses,
      hide,
      show,
      size,
      largeTitle,
      hasLeft,
      hasTitle,
      hasRight,
      hasLargeTitle,
      onBackClick,
    };
  },
};
</script>
