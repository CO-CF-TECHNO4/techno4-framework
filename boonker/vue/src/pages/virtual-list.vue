<template>
  <t4-page>
    <t4-navbar title="Virtual List" back-link="Back">
      <t4-subnavbar :inner="false">
        <t4-searchbar
          search-container=".virtual-list"
          search-item="li"
          search-in=".item-title"
          :disable-button="!theme.aurora"
        ></t4-searchbar>
      </t4-subnavbar>
    </t4-navbar>
    <t4-block>
      <p>
        Virtual List allows to render lists with huge amount of elements without loss of
        performance. And it is fully compatible with all techno4 list components such as Search
        Bar, Infinite Scroll, Pull To Refresh, Swipeouts (swipe-to-delete) and Sortable.
      </p>
      <p>Here is the example of virtual list with 10 000 items:</p>
    </t4-block>
    <t4-list class="searchbar-not-found">
      <t4-list-item title="Nothing found"></t4-list-item>
    </t4-list>
    <t4-list
      class="searchbar-found"
      medial-list
      virtual-list
      :virtual-list-params="{
        items,
        searchAll,
        renderExternal,
        height: theme.ios ? 63 : theme.md ? 73 : 77,
      }"
    >
      <ul>
        <t4-list-item
          v-for="(item, index) in vlData.items"
          :key="index"
          media-item
          link="#"
          :title="item.title"
          :subtitle="item.subtitle"
          :style="`top: ${vlData.topPosition}px`"
          :virtual-list-index="item.index"
        ></t4-list-item>
      </ul>
    </t4-list>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4List,
  t4ListItem,
  t4Subnavbar,
  t4Searchbar,
  t4Block,
  theme,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4List,
    t4ListItem,
    t4Subnavbar,
    t4Searchbar,
    t4Block,
  },
  data() {
    const items = [];
    for (let i = 1; i <= 10000; i += 1) {
      items.push({
        title: `Item ${i}`,
        subtitle: `Subtitle ${i}`,
        index: i,
      });
    }
    return {
      theme,
      items,
      vlData: {
        items: [],
      },
    };
  },
  methods: {
    searchAll(query, items) {
      const found = [];
      for (let i = 0; i < items.length; i += 1) {
        if (items[i].title.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === '')
          found.push(i);
      }
      return found; // return array with mathced indexes
    },
    renderExternal(vl, vlData) {
      this.vlData = vlData;
    },
  },
};
</script>
