<template>
  <t4-page>
    <t4-navbar :title="effect" back-link="Back"></t4-navbar>

    <t4-block strong class="text-align-center">
      <p>
        This page was loaded with <b>{{ effect }}</b> transition.
      </p>
    </t4-block>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4Block } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Block,
  },
  props: {
    effect: String,
  },
};
</script>
