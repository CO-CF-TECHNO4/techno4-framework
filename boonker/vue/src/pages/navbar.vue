<template>
  <t4-page>
    <t4-navbar title="Navbar" subtitle="Subtitle" back-link="Back">
      <t4-nav-right>
        <t4-link>Right</t4-link>
      </t4-nav-right>
    </t4-navbar>
    <t4-block>
      <p>
        Navbar is a fixed (with Fixed and Through layout types) area at the top of a screen that
        contains Page title and navigation elements.
      </p>
      <p>Navbar has 3 main parts: Left, Title and Right. Each part may contain any HTML content.</p>
    </t4-block>
    <t4-list>
      <t4-list-item link="/navbar-hide-scroll/" title="Hide Navbar On Scroll"></t4-list-item>
    </t4-list>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4Block, t4List, t4ListItem, t4NavRight, t4Link } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Block,
    t4List,
    t4ListItem,
    t4NavRight,
    t4Link,
  },
};
</script>
