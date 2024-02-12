<template>
  <t4-page>
    <t4-navbar :title="`Detail Page ${t4route.params.id}`" back-link="Back"></t4-navbar>
    <t4-block strong>
      <p>
        <b>Detail Page {{ t4route.params.id }}</b>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue turpis et risus
        fringilla condimentum. Aliquam vestibulum est tempor, sagittis massa nec, dictum massa.
        Phasellus non viverra dui, eget aliquam sem. Donec eleifend dolor id arcu ultrices, vel
        ultrices dolor fringilla. Phasellus feugiat consectetur libero, eget luctus felis rhoncus
        at. Duis scelerisque ligula sit amet purus congue pulvinar. Proin a risus id nibh fermentum
        auctor. Vestibulum at sem a risus mollis iaculis. In vestibulum malesuada arcu id
        consectetur.
      </p>
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
  props: {
    t4route: Object,
  },
};
</script>
