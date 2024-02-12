<template>
  <t4-page>
    <t4-navbar title="Not found" back-link="Back"></t4-navbar>
    <t4-block strong>
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </t4-block>
  </t4-page>
</template>

<script>
import { t4Page, t4Navbar, t4Block } from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4Block,
  },
};
</script>
