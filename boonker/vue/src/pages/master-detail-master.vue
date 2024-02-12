<template>
  <t4-page>
    <t4-navbar title="Master Detail" back-link="Back"></t4-navbar>
    <t4-block strong>
      <p>
        Master-Detail pattern oftenly used on wide enough screens and tablets, and consists of two
        views. Master - is an area in the UI where you have a list of something. Detail - is the
        area that shows the relevant information of a selection in the master.
      </p>
      <p>To see Master Detail view make sure the window width is larger than 800px.</p>
      <p>
        When collapsed (on narrow screen) navigation between such pages will behave as usual
        routing.
      </p>
      <p>Navigation to/from Master-Detail view happens without transition.</p>
    </t4-block>

    <t4-list>
      <t4-list-item :reload-detail="true" link="/master-detail/1/">Detail Page 1</t4-list-item>
      <t4-list-item :reload-detail="true" link="/master-detail/2/">Detail Page 2</t4-list-item>
      <t4-list-item :reload-detail="true" link="/master-detail/3/">Detail Page 3</t4-list-item>
    </t4-list>
  </t4-page>
</template>
<script>
import { t4Page, t4Navbar, t4Block, t4List, t4ListItem } from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4Block,
    t4List,
    t4ListItem,
  },
};
</script>
