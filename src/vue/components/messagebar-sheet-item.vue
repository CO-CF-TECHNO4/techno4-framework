<template>
  <div :class="classes">
    <slot />
  </div>
</template>
<script>
import { computed } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';

export default {
  name: 't4-messagebar-sheet-item',
  props: {
    ...colorProps,
  },
  setup(props) {
    const classes = computed(() => classNames('messagebar-sheet-item', colorClasses(props)));
    return { classes };
  },
};
</script>
