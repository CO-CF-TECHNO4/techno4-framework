<template>
  <div ref="elRef" :class="classes">
    <slot />
  </div>
</template>
<script>
import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';

export default {
  name: 't4-list-index',
  props: {
    init: {
      type: Boolean,
      default: true,
    },
    listEl: [String, Object],
    indexes: {
      type: [String, Array],
      default: 'auto',
    },
    scrollList: {
      type: Boolean,
      default: true,
    },
    label: {
      type: Boolean,
      default: false,
    },
    iosItemHeight: {
      type: Number,
      default: 14,
    },
    mdItemHeight: {
      type: Number,
      default: 14,
    },
    auroraItemHeight: {
      type: Number,
      default: 14,
    },
    ...colorProps,
  },
  emits: ['listindex:select'],
  setup(props, { emit }) {
    let t4ListIndex = null;
    const elRef = ref(null);

    const update = () => {
      if (!t4ListIndex) return;
      t4ListIndex.update();
    };
    const scrollListToIndex = (indexContent) => {
      if (!t4ListIndex) return;
      t4ListIndex.scrollListToIndex(indexContent);
    };

    watch(
      () => props.indexes,
      (newValue) => {
        if (!t4ListIndex) return;
        t4ListIndex.params.indexes = newValue;
        update();
      },
    );

    onMounted(() => {
      if (!props.init) return;
      t4ready(() => {
        t4ListIndex = t4.listIndex.create({
          el: elRef.value,
          listEl: props.listEl,
          indexes: props.indexes,
          iosItemHeight: props.iosItemHeight,
          mdItemHeight: props.mdItemHeight,
          auroraItemHeight: props.auroraItemHeight,
          scrollList: props.scrollList,
          label: props.label,
          on: {
            select(index, itemContent, itemIndex) {
              emit('listindex:select', itemContent, itemIndex);
            },
          },
        });
      });
    });

    onBeforeUnmount(() => {
      if (t4ListIndex && t4ListIndex.destroy) {
        t4ListIndex.destroy();
      }
      t4ListIndex = null;
    });

    const classes = computed(() => classNames('list-index', colorClasses(props)));
    return { elRef, classes, update, scrollListToIndex };
  },
};
</script>
