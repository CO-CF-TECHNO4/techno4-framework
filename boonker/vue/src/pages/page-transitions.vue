<template>
  <t4-page>
    <t4-navbar title="Page Transitions" back-link="Back"></t4-navbar>

    <t4-block strong>
      <p>
        In addition to default theme-specific page transition it is possible to create custom page
        transition or use one of the additional transition effects:
      </p>
    </t4-block>

    <t4-list>
      <t4-list-item
        v-for="effect in effects"
        :key="effect"
        :link="`/page-transitions/${effect}/`"
        :title="effect"
        :transition="effect"
      />
    </t4-list>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4Block, t4List, t4ListItem } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Block,
    t4List,
    t4ListItem,
  },
  data() {
    return {
      effects: [
        't4-circle',
        't4-cover',
        't4-cover-v',
        't4-dive',
        't4-fade',
        't4-flip',
        't4-parallax',
        't4-push',
      ],
    };
  },
};
</script>
