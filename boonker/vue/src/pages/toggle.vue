<template>
  <t4-page>
    <t4-navbar title="Toggle" back-link="Back"></t4-navbar>
    <t4-block-title>Super Heroes</t4-block-title>
    <t4-list simple-list>
      <t4-list-item>
        <span>Batman</span>
        <t4-toggle checked></t4-toggle>
      </t4-list-item>
      <t4-list-item>
        <span>Aquaman</span>
        <t4-toggle checked color="blue"></t4-toggle>
      </t4-list-item>
      <t4-list-item>
        <span>Superman</span>
        <t4-toggle checked color="red"></t4-toggle>
      </t4-list-item>
      <t4-list-item>
        <span>Hulk</span>
        <t4-toggle color="green"></t4-toggle>
      </t4-list-item>
      <t4-list-item>
        <span>Spiderman (Disabled)</span>
        <t4-toggle disabled></t4-toggle>
      </t4-list-item>
      <t4-list-item>
        <span>Ironman (Disabled)</span>
        <t4-toggle checked disabled></t4-toggle>
      </t4-list-item>
      <t4-list-item>
        <span>Thor</span>
        <t4-toggle checked color="orange"></t4-toggle>
      </t4-list-item>
      <t4-list-item>
        <span>Wonder Woman</span>
        <t4-toggle color="pink"></t4-toggle>
      </t4-list-item>
    </t4-list>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4BlockTitle, t4List, t4ListItem, t4Toggle } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4List,
    t4ListItem,
    t4Toggle,
  },
};
</script>
