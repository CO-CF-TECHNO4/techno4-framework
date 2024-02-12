<template>
  <t4-page
    infinite
    :infinite-distance="50"
    :infinite-preloader="showPreloader"
    @infinite="loadMore"
  >
    <t4-navbar title="Infinite Scroll" back-link="Back"></t4-navbar>
    <t4-block-title>Scroll bottom</t4-block-title>
    <t4-list>
      <t4-list-item
        v-for="(item, index) in items"
        :key="index"
        :title="`Item ${item}`"
      ></t4-list-item>
    </t4-list>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4BlockTitle, t4List, t4ListItem } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4List,
    t4ListItem,
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      allowInfinite: true,
      showPreloader: true,
    };
  },
  methods: {
    loadMore() {
      const self = this;
      if (!self.allowInfinite) return;
      self.allowInfinite = false;

      setTimeout(() => {
        if (self.items.length >= 200) {
          self.showPreloader = false;
          return;
        }

        const itemsLength = self.items.length;

        for (let i = 1; i <= 20; i += 1) {
          self.items.push(itemsLength + i);
        }

        self.allowInfinite = true;
      }, 1000);
    },
  },
};
</script>
