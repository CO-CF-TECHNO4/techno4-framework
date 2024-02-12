<template>
  <t4-page>
    <t4-navbar title="Routable Modals" back-link="Back"></t4-navbar>
    <t4-block>
      <p>In addition to pages, techno4 router allows to load modal components:</p>
    </t4-block>
    <t4-list>
      <t4-list-item title="Popup" link="popup/" />
      <t4-list-item title="Action Sheet" link="actions/" />
    </t4-list>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4List, t4ListItem, t4Block } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4List,
    t4ListItem,
    t4Block,
  },
};
</script>
