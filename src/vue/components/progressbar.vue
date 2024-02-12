<template>
  <span ref="elRef" :class="classes" :data-progress="progress">
    <span :style="transformStyle" />
  </span>
</template>
<script>
import { computed, ref } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { t4 } from '../shared/t4.js';

export default {
  name: 't4-progressbar',
  props: {
    progress: Number,
    infinite: Boolean,
    ...colorProps,
  },
  setup(props) {
    const elRef = ref(null);

    const set = (newProgress, speed) => {
      if (!t4) return;
      t4.progressbar.set(elRef.value, newProgress, speed);
    };

    const transformStyle = computed(() => ({
      transform: props.progress ? `translate3d(${-100 + props.progress}%, 0, 0)` : '',
      WebkitTransform: props.progress ? `translate3d(${-100 + props.progress}%, 0, 0)` : '',
    }));

    const classes = computed(() =>
      classNames(
        'progressbar',
        {
          'progressbar-infinite': props.infinite,
        },
        colorClasses(props),
      ),
    );
    return { classes, set, transformStyle, elRef };
  },
};
</script>
