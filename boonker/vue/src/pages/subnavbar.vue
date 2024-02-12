<template>
  <t4-page>
    <t4-navbar title="Subnavbar" back-link="Back">
      <t4-subnavbar>
        <t4-segmented strong>
          <t4-button active>Link 1</t4-button>
          <t4-button>Link 2</t4-button>
          <t4-button>Link 3</t4-button>
        </t4-segmented>
      </t4-subnavbar>
    </t4-navbar>
    <t4-block>
      <p>
        Subnavbar is useful when you need to put any additional elements into Navbar, like Tab Links
        or Search Bar. It also remains visible when Navbar hidden.
      </p>
    </t4-block>
    <t4-list>
      <t4-list-item link="/subnavbar-title/" title="Subnavbar Title"></t4-list-item>
    </t4-list>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4Subnavbar,
  t4Segmented,
  t4Button,
  t4Block,
  t4List,
  t4ListItem,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Subnavbar,
    t4Segmented,
    t4Button,
    t4Block,
    t4List,
    t4ListItem,
  },
};
</script>
