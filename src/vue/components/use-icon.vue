<template>
  <t4-icon v-bind="icon.props">
    <t4-badge v-if="icon.badge" v-bind="icon.badge.props">{{ icon.badge.content }}</t4-badge>
  </t4-icon>
</template>
<script>
import t4Icon from './icon.js';
import t4Badge from './badge.js';

export default {
  name: 't4-use-icon',
  components: {
    t4Icon,
    t4Badge,
  },
  props: {
    icon: Object,
  },
};
</script>
