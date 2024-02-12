<template>
  <t4-page>
    <t4-navbar title="Tabs" back-link="Back"></t4-navbar>
    <t4-list>
      <t4-list-item link="/tabs-static/" title="Static Tabs"></t4-list-item>
      <t4-list-item link="/tabs-animated/" title="Animated Tabs"></t4-list-item>
      <t4-list-item link="/tabs-swipeable/" title="Swipeable Tabs"></t4-list-item>
      <t4-list-item link="/tabs-routable/" title="Routable Tabs"></t4-list-item>
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
