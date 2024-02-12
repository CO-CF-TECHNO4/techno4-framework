<template>
  <div ref="elRef" :class="classes">
    <slot />
  </div>
</template>
<script>
import { ref, computed, onBeforeUnmount, onMounted } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { t4, t4ready } from '../shared/t4.js';

export default {
  name: 't4-accordion-item',
  props: {
    opened: Boolean,
    ...colorProps,
  },
  emits: [
    'accordion:beforeopen',
    'accordion:open',
    'accordion:opened',
    'accordion:beforeclose',
    'accordion:close',
    'accordion:closed',
  ],
  setup(props, { emit }) {
    const elRef = ref(null);

    const onBeforeOpen = (el, prevent) => {
      if (elRef.value !== el) return;
      emit('accordion:beforeopen', prevent);
    };
    const onOpen = (el) => {
      if (elRef.value !== el) return;
      emit('accordion:open');
    };
    const onOpened = (el) => {
      if (elRef.value !== el) return;
      emit('accordion:opened');
    };
    const onBeforeClose = (el, prevent) => {
      if (elRef.value !== el) return;
      emit('accordion:beforeclose', prevent);
    };
    const onClose = (el) => {
      if (elRef.value !== el) return;
      emit('accordion:close');
    };
    const onClosed = (el) => {
      if (elRef.value !== el) return;
      emit('accordion:closed');
    };

    const attachEvents = () => {
      t4ready(() => {
        t4.on('accordionBeforeOpen', onBeforeOpen);
        t4.on('accordionOpen', onOpen);
        t4.on('accordionOpened', onOpened);
        t4.on('accordionBeforeClose', onBeforeClose);
        t4.on('accordionClose', onClose);
        t4.on('accordionClosed', onClosed);
      });
    };

    const detachEvents = () => {
      t4.off('accordionBeforeOpen', onBeforeOpen);
      t4.off('accordionOpen', onOpen);
      t4.off('accordionOpened', onOpened);
      t4.off('accordionBeforeClose', onBeforeClose);
      t4.off('accordionClose', onClose);
      t4.off('accordionClosed', onClosed);
    };

    onMounted(() => attachEvents());
    onBeforeUnmount(() => detachEvents());

    const classes = computed(() =>
      classNames(
        'accordion-item',
        {
          'accordion-item-opened': props.opened,
        },
        colorClasses(props),
      ),
    );
    return { elRef, classes };
  },
};
</script>
