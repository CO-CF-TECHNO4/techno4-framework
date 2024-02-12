<template>
  <div ref="elRef" :class="classes" @click="onClick">
    <div v-if="hasMedia" class="actions-button-media">
      <slot name="media" />
    </div>
    <div class="actions-button-text">
      <slot />
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { t4 } from '../shared/t4.js';

export default {
  name: 't4-actions-button',
  props: {
    bold: Boolean,
    close: {
      type: Boolean,
      default: true,
    },
    ...colorProps,
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const elRef = ref(null);

    const onClick = (e) => {
      if (elRef.value && props.close && t4) {
        t4.actions.close(t4.$(elRef.value).parents('.actions-modal'));
      }
      emit('click', e);
    };

    const hasMedia = computed(() => slots && !!slots.media);

    const classes = computed(() =>
      classNames(
        {
          'actions-button': true,
          'actions-button-bold': props.bold,
        },
        colorClasses(props),
      ),
    );
    return { classes, elRef, hasMedia, onClick };
  },
};
</script>
