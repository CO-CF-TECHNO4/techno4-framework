<template>
  <div ref="elRef" class="breadcrumbs-collapsed">
    <span />
    <slot />
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  name: 't4-breadcrumbs-collapsed',
  props: {},
  setup() {
    const elRef = ref(null);

    return {
      elRef,
    };
  },
};
</script>
