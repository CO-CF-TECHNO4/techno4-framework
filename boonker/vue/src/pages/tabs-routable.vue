<template>
  <t4-page :page-content="false">
    <t4-navbar title="Tabs Routable" back-link="Back"></t4-navbar>
    <t4-toolbar bottom tabbar>
      <t4-link tab-link href="./" route-tab-id="tab1">Tab 1</t4-link>
      <t4-link tab-link href="tab2/" route-tab-id="tab2">Tab 2</t4-link>
      <t4-link tab-link href="tab3/" route-tab-id="tab3">Tab 3</t4-link>
    </t4-toolbar>
    <t4-tabs routable>
      <t4-tab id="tab1" class="page-content"></t4-tab>
      <t4-tab id="tab2" class="page-content"></t4-tab>
      <t4-tab id="tab3" class="page-content"></t4-tab>
    </t4-tabs>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4Tabs, t4Tab, t4Link, t4Toolbar } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Tabs,
    t4Tab,
    t4Link,
    t4Toolbar,
  },
};
</script>
