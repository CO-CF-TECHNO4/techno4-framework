<template>
  <t4-page>
    <t4-navbar title="Timeline" back-link="Back"></t4-navbar>
    <t4-list>
      <t4-list-item link="/timeline-vertical/" title="Vertical Timeline" />
      <t4-list-item link="/timeline-horizontal/" title="Horizontal Timeline" />
      <t4-list-item link="/timeline-horizontal-calendar/" title="Calendar Timeline" />
    </t4-list>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4List, t4ListItem } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4List,
    t4ListItem,
  },
};
</script>
