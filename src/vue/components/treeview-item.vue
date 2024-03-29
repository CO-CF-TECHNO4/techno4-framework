<template>
  <div ref="elRef" :class="classes">
    <component :is="itemRootTag" :class="itemRootClasses" v-bind="itemRootAttrs" @click="onClick">
      <slot name="root-start" />
      <div v-if="needToggle" className="treeview-toggle" />
      <div className="treeview-item-content">
        <slot name="content-start" />
        <t4-use-icon v-if="icon" :icon="icon" />
        <slot name="media" />
        <div className="treeview-item-label">
          <slot name="label-start" />
          {{ label }}
          <slot name="label" />
        </div>
        <slot name="content" />
        <slot name="content-end" />
      </div>
      <slot name="root" />
      <slot name="root-end" />
    </component>
    <div v-if="hasChildren" className="treeview-item-children">
      <slot name="children-start" />
      <slot />
      <slot name="children" />
    </div>
  </div>
</template>
<script>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { classNames } from '../shared/utils.js';
import {
  colorClasses,
  colorProps,
  actionsAttrs,
  actionsProps,
  actionsClasses,
  routerAttrs,
  routerProps,
  routerClasses,
  iconProps,
} from '../shared/mixins.js';
import { useIcon } from '../shared/use-icon.js';
import { t4ready, t4 } from '../shared/t4.js';

import t4UseIcon from './use-icon.js';

export default {
  name: 't4-treeview-item',
  components: {
    t4UseIcon,
  },
  props: {
    toggle: {
      type: Boolean,
      default: undefined,
    },
    itemToggle: Boolean,
    selectable: Boolean,
    selected: Boolean,
    opened: Boolean,
    label: String,
    loadChildren: Boolean,
    link: {
      type: [Boolean, String],
      default: undefined,
    },
    ...colorProps,
    ...actionsProps,
    ...iconProps,
    ...routerProps,
  },
  emits: ['click', 'treeview:open', 'treeview:close', 'treeview:loadchildren'],
  setup(props, { slots, emit }) {
    const elRef = ref(null);

    const hasChildren = computed(() => {
      return slots.default || slots.children || slots['children-start'];
    });

    const needToggle = computed(() =>
      typeof props.toggle === 'undefined' ? hasChildren.value : props.toggle,
    );

    const icon = computed(() => useIcon(props));

    const onClick = (event) => {
      emit('click', event);
    };
    const onOpen = (el) => {
      if (elRef.value !== el) return;
      emit('treeview:open', el);
    };
    const onClose = (el) => {
      if (elRef.value !== el) return;
      emit('treeview:close', el);
    };
    const onLoadChildren = (el, done) => {
      if (elRef.value !== el) return;
      emit('treeview:loadchildren', el, done);
    };

    const attachEvents = () => {
      if (!elRef.value) return;
      t4ready(() => {
        t4.on('treeviewOpen', onOpen);
        t4.on('treeviewClose', onClose);
        t4.on('treeviewLoadChildren', onLoadChildren);
      });
    };

    const detachEvents = () => {
      if (!t4) return;
      t4.off('treeviewOpen', onOpen);
      t4.off('treeviewClose', onClose);
      t4.off('treeviewLoadChildren', onLoadChildren);
    };

    onMounted(() => attachEvents());
    onBeforeUnmount(() => detachEvents());

    const classes = computed(() =>
      classNames(
        'treeview-item',
        {
          'treeview-item-opened': props.opened,
          'treeview-load-children': props.loadChildren,
        },
        colorClasses(props),
      ),
    );

    const itemRootClasses = computed(() =>
      classNames(
        'treeview-item-root',
        {
          'treeview-item-selectable': props.selectable,
          'treeview-item-selected': props.selected,
          'treeview-item-toggle': props.itemToggle,
        },
        routerClasses(props),
        actionsClasses(props),
      ),
    );

    const itemRootTag = computed(() => (props.link || props.link === '' ? 'a' : 'div'));

    const itemRootAttrs = computed(() => {
      let href = props.link;
      if (props.link === true) href = '#';
      if (props.link === false) href = undefined; // no href attribute
      return {
        href,
        ...routerAttrs(props),
        ...actionsAttrs(props),
      };
    });

    return {
      itemRootTag,
      itemRootAttrs,
      itemRootClasses,
      classes,
      icon,
      onClick,
      hasChildren,
      needToggle,
      elRef,
    };
  },
};
</script>
