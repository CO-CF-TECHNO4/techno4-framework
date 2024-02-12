<template>
  <t4-page>
    <t4-navbar title="Right Panel"></t4-navbar>
    <t4-block-title>Left Panel</t4-block-title>
    <t4-block>
      <p>
        This is a right side panel. You can close it by clicking outsite or on this link:
        <t4-link panel-close>close me</t4-link>. You can put here anything, even another isolated
        view.
      </p>
    </t4-block>
    <t4-block-title>Panel Navigation</t4-block-title>
    <t4-list>
      <t4-list-item link="/panel-right-1/" title="Right panel page 1" />
      <t4-list-item link="/panel-right-2/" title="Right panel page 2" />
    </t4-list>
  </t4-page>
</template>
<script>
import {
  t4Page,
  t4Navbar,
  t4BlockTitle,
  t4Block,
  t4List,
  t4ListItem,
  t4Link,
} from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4BlockTitle,
    t4Block,
    t4List,
    t4ListItem,
    t4Link,
  },
};
</script>
