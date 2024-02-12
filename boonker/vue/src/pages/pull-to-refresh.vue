<template>
  <t4-page ptr :ptr-mousewheel="true" @ptr:refresh="loadMore">
    <t4-navbar title="Pull To Refresh" back-link="Back"></t4-navbar>
    <t4-list media-list>
      <t4-list-item
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :subtitle="item.author"
      >
        <template #media>
          <img :src="item.cover" width="44" />
        </template>
      </t4-list-item>

      <t4-block-footer>
        <p>
          Just pull page down to let the magic happen.<br />Note that pull-to-refresh feature is
          optimised for touch and native scrolling so it may not work on desktop browser.
        </p>
      </t4-block-footer>
    </t4-list>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4List, t4ListItem, t4BlockFooter } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4List,
    t4ListItem,
    t4BlockFooter,
  },
  data() {
    return {
      items: [
        {
          title: 'Yellow Submarine',
          author: 'Beatles',
          cover: 'https://cdn.techno4.io/placeholder/abstract-88x88-1.jpg',
        },
        {
          title: "Don't Stop Me Now",
          author: 'Queen',
          cover: 'https://cdn.techno4.io/placeholder/abstract-88x88-2.jpg',
        },
        {
          title: 'Billie Jean',
          author: 'Michael Jackson',
          cover: 'https://cdn.techno4.io/placeholder/abstract-88x88-3.jpg',
        },
      ],
      songs: ['Yellow Submarine', "Don't Stop Me Now", 'Billie Jean', 'Californication'],
      authors: ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'],
    };
  },
  methods: {
    loadMore(done) {
      const self = this;

      setTimeout(() => {
        const picURL = `https://cdn.techno4.io/placeholder/abstract-88x88-${
          Math.floor(Math.random() * 10) + 1
        }.jpg`;
        const song = self.songs[Math.floor(Math.random() * self.songs.length)];
        const author = self.authors[Math.floor(Math.random() * self.authors.length)];

        self.items.push({
          title: song,
          author,
          cover: picURL,
        });

        done();
      }, 1000);
    },
  },
};
</script>
