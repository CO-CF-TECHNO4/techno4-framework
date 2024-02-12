<template>
  <t4-page :page-content="false">
    <t4-navbar title="Tabbar Scrollable" back-link="Back">
      <t4-nav-right>
        <t4-link
          icon-md="material:compare_arrows"
          icon-ios="t4:arrow_up_arrow_down_circle_fill"
          icon-aurora="t4:arrow_up_arrow_down_circle_fill"
          @click="toggleToolbarPosition"
        />
      </t4-nav-right>
    </t4-navbar>
    <t4-toolbar :position="toolbarPosition" tabbar scrollable>
      <t4-link
        v-for="(tab, index) in tabs"
        :key="tab"
        :tab-link="`#tab-${tab}`"
        :tab-link-active="index === 0"
        >Tab {{ tab }}</t4-link
      >
    </t4-toolbar>
    <t4-tabs>
      <t4-tab
        v-for="(tab, index) in tabs"
        :id="`tab-${tab}`"
        :key="tab"
        class="page-content"
        :tab-active="index === 0"
      >
        <t4-block>
          <p>
            <b>Tab {{ tab }} content</b>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corrupti, quos
            asperiores unde aspernatur illum odio, eveniet. Fugiat magnam perspiciatis ex
            dignissimos, rerum modi ea nesciunt praesentium iusto optio rem?
          </p>
          <p>
            Illo debitis et recusandae, ipsum nisi nostrum vero delectus quasi. Quasi, consequatur!
            Corrupti, explicabo maxime incidunt fugit sint dicta saepe officiis sed expedita, minima
            porro! Ipsa dolores quia, delectus labore!
          </p>
          <p>
            At similique minima placeat magni molestias sunt deleniti repudiandae voluptatibus
            magnam quam esse reprehenderit dolor enim qui sed alias, laboriosam quaerat laborum iure
            repellat praesentium pariatur dolorum possimus veniam! Consectetur.
          </p>
          <p>
            Sunt, sed, magnam! Qui, suscipit. Beatae cum ullam necessitatibus eligendi, culpa rem
            excepturi consequatur quidem totam eum voluptates nihil, enim pariatur incidunt corporis
            sed facere magni earum tenetur rerum ea.
          </p>
          <p>
            Veniam nulla quis molestias voluptatem inventore consectetur iusto voluptatibus
            perferendis quisquam, cupiditate voluptates, tenetur vero magnam nisi animi praesentium
            atque adipisci optio quod aliquid vel delectus ad? Dicta deleniti, recusandae.
          </p>
        </t4-block>
      </t4-tab>
    </t4-tabs>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4Block,
  t4Tabs,
  t4Tab,
  t4Link,
  t4Toolbar,
  t4NavRight,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Block,
    t4Tabs,
    t4Tab,
    t4Link,
    t4Toolbar,
    t4NavRight,
  },
  data() {
    return {
      tabs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      toolbarPosition: 'bottom',
    };
  },
  methods: {
    toggleToolbarPosition() {
      this.toolbarPosition = this.toolbarPosition === 'top' ? 'bottom' : 'top';
    },
  },
};
</script>
