<template>
  <t4-page>
    <t4-navbar title="Toolbar & Tabbar" back-link="Back"></t4-navbar>
    <t4-toolbar :position="toolbarPosition">
      <t4-link>Left Link</t4-link>
      <t4-link>Right Link</t4-link>
    </t4-toolbar>
    <t4-list>
      <t4-list-item link="./tabbar/" title="Tabbar" />
      <t4-list-item link="./tabbar-labels/" title="Tabbar With Labels" />
      <t4-list-item link="./tabbar-scrollable/" title="Tabbar Scrollable" />
      <t4-list-item link="./toolbar-hide-scroll/" title="Hide Toolbar On Scroll" />
    </t4-list>
    <t4-block-title>Toolbar Position</t4-block-title>
    <t4-block>
      <p>
        Toolbar supports both top and bottom positions. Click the following button to change its
        position.
      </p>
      <p>
        <t4-button fill @click="toggleToolbarPosition">Toggle Toolbar Position</t4-button>
      </p>
    </t4-block>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4Toolbar,
  t4List,
  t4ListItem,
  t4Button,
  t4Link,
  t4BlockTitle,
  t4Block,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Toolbar,
    t4List,
    t4ListItem,
    t4Button,
    t4Link,
    t4BlockTitle,
    t4Block,
  },
  data() {
    return {
      toolbarPosition: 'bottom',
    };
  },
  methods: {
    toggleToolbarPosition() {
      this.toolbarPosition = this.toolbarPosition === 'top' ? 'bottom' : 'top';
    },
  },
};
</script>
