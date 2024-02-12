<template>
  <div ref="elRef" :class="classes">
    <slot name="before-inner" />
    <div v-if="inner" className="toolbar-inner"><slot /></div>
    <slot v-else />
    <slot name="after-inner" />
  </div>
</template>
<script>
import { computed, ref, provide, onMounted, onBeforeUnmount } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { t4 } from '../shared/t4.js';
import { useTheme } from '../shared/use-theme.js';

export default {
  name: 't4-toolbar',
  props: {
    tabbar: Boolean,
    labels: Boolean,
    scrollable: Boolean,
    hidden: Boolean,
    noShadow: Boolean,
    noHairline: Boolean,
    noBorder: Boolean,
    position: {
      type: String,
      default: undefined,
    },
    topMd: {
      type: Boolean,
      default: undefined,
    },
    topIos: {
      type: Boolean,
      default: undefined,
    },
    topAurora: {
      type: Boolean,
      default: undefined,
    },
    top: {
      type: Boolean,
      default: undefined,
    },
    bottomMd: {
      type: Boolean,
      default: undefined,
    },
    bottomIos: {
      type: Boolean,
      default: undefined,
    },
    bottomAurora: {
      type: Boolean,
      default: undefined,
    },
    bottom: {
      type: Boolean,
      default: undefined,
    },
    inner: {
      type: Boolean,
      default: true,
    },
    ...colorProps,
  },
  emits: ['toolbar:hide', 'toolbar:show'],
  setup(props, { emit }) {
    const elRef = ref(null);
    const theme = useTheme();

    const onHide = (toolbarEl) => {
      if (elRef.value !== toolbarEl) return;
      emit('toolbar:hide');
    };
    const onShow = (toolbarEl) => {
      if (elRef.value !== toolbarEl) return;
      emit('toolbar:show');
    };
    const hide = (animate) => {
      if (!t4) return;
      t4.toolbar.hide(elRef.value, animate);
    };
    const show = (animate) => {
      if (!t4) return;
      t4.toolbar.show(elRef.value, animate);
    };

    onMounted(() => {
      if (props.tabbar && t4 && elRef.value) {
        t4.toolbar.setHighlight(elRef.value);
      }
      t4.on('toolbarShow', onShow);
      t4.on('toolbarHide', onHide);
    });

    onBeforeUnmount(() => {
      t4.off('toolbarShow', onShow);
      t4.off('toolbarHide', onHide);
    });

    const TabbarContext = computed(() => ({
      tabbarHasLabels: props.labels,
    }));

    provide('TabbarContext', TabbarContext);

    const classes = computed(() => {
      const {
        tabbar,
        bottomMd,
        bottomIos,
        bottomAurora,
        bottom,
        position,
        topMd,
        topIos,
        topAurora,
        top,
        labels,
        scrollable,
        hidden,
        noShadow,
        noHairline,
        noBorder,
      } = props;
      return classNames(
        'toolbar',
        {
          tabbar,
          'toolbar-bottom':
            (theme.value && theme.value.md && bottomMd) ||
            (theme.value && theme.value.ios && bottomIos) ||
            (theme.value && theme.value.aurora && bottomAurora) ||
            bottom ||
            position === 'bottom',
          'toolbar-top':
            (theme.value && theme.value.md && topMd) ||
            (theme.value && theme.value.ios && topIos) ||
            (theme.value && theme.value.aurora && topAurora) ||
            top ||
            position === 'top',
          'tabbar-labels': labels,
          'tabbar-scrollable': scrollable,
          'toolbar-hidden': hidden,
          'no-shadow': noShadow,
          'no-hairline': noHairline || noBorder,
        },
        colorClasses(props),
      );
    });

    return {
      classes,
      elRef,
      hide,
      show,
    };
  },
};
</script>
