<template>
  <div :class="classes">
    <div class="menu-dropdown-content" :style="{ height: contentHeight }">
      <slot />
    </div>
  </div>
</template>
<script>
import { computed } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';

export default {
  name: 't4-menu-dropdown',
  props: {
    contentHeight: String,
    position: String,
    left: Boolean,
    center: Boolean,
    right: Boolean,
    ...colorProps,
  },
  setup(props) {
    const classes = computed(() => {
      let positionComputed = props.position || 'left';
      if (props.left) positionComputed = 'left';
      if (props.center) positionComputed = 'center';
      if (props.right) positionComputed = 'right';
      return classNames('menu-dropdown', `menu-dropdown-${positionComputed}`, colorClasses(props));
    });

    return { classes };
  },
};
</script>
