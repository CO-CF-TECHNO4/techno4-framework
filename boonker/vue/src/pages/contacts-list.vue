<template>
  <t4-page>
    <t4-navbar title="Contacts List" back-link="Back"></t4-navbar>
    <t4-list contacts-list>
      <t4-list-group>
        <t4-list-item title="A" group-title />
        <t4-list-item title="Aaron " />
        <t4-list-item title="Abbie" />
        <t4-list-item title="Adam" />
        <t4-list-item title="Adele" />
        <t4-list-item title="Agatha" />
        <t4-list-item title="Agnes" />
        <t4-list-item title="Albert" />
        <t4-list-item title="Alexander" />
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="B" group-title />
        <t4-list-item title="Bailey" />
        <t4-list-item title="Barclay" />
        <t4-list-item title="Bartolo" />
        <t4-list-item title="Bellamy" />
        <t4-list-item title="Belle" />
        <t4-list-item title="Benjamin" />
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="C" group-title />
        <t4-list-item title="Caiden" />
        <t4-list-item title="Calvin" />
        <t4-list-item title="Candy" />
        <t4-list-item title="Carl" />
        <t4-list-item title="Cherilyn" />
        <t4-list-item title="Chester" />
        <t4-list-item title="Chloe" />
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="V" group-title />
        <t4-list-item title="Vladimir" />
      </t4-list-group>
    </t4-list>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4List, t4ListGroup, t4ListItem } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4List,
    t4ListGroup,
    t4ListItem,
  },
};
</script>
