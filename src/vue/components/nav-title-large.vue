<template>
  <div :class="classes">
    <div class="title-large-text"><slot /></div>
  </div>
</template>
<script>
import { computed } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';

export default {
  name: 't4-nav-title-large',
  props: {
    ...colorProps,
  },
  setup(props) {
    const classes = computed(() => classNames('title-large', colorClasses(props)));
    return { classes };
  },
};
</script>
