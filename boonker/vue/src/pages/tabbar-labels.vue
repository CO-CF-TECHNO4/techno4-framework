<template>
  <t4-page :page-content="false">
    <t4-navbar title="Tabbar Labels" back-link="Back">
      <t4-nav-right>
        <t4-link
          icon-md="material:compare_arrows"
          icon-ios="t4:arrow_up_arrow_down_circle_fill"
          icon-aurora="t4:arrow_up_arrow_down_circle_fill"
          @click="toggleToolbarPosition"
        />
      </t4-nav-right>
    </t4-navbar>
    <t4-toolbar :position="toolbarPosition" tabbar labels>
      <t4-link
        tab-link="#tab-1"
        tab-link-active
        text="Tab 1"
        icon-ios="t4:envelope_fill"
        icon-aurora="t4:envelope_fill"
        icon-md="material:email"
      />
      <t4-link
        tab-link="#tab-2"
        text="Tab 2"
        icon-ios="t4:calendar_fill"
        icon-aurora="t4:calendar_fill"
        icon-md="material:today"
      />
      <t4-link
        tab-link="#tab-3"
        text="Tab 3"
        icon-ios="t4:cloud_upload_fill"
        icon-aurora="t4:cloud_upload_fill"
        icon-md="material:file_upload"
      />
    </t4-toolbar>

    <t4-tabs>
      <t4-tab id="tab-1" class="page-content" tab-active>
        <t4-block>
          <p>Tab 1 content</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
            facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
            suscipit temporibus sequi iure ad laboriosam accusamus?
          </p>
          <p>
            Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit
            blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed,
            sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur
            deleniti.
          </p>
          <p>
            Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque,
            est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde
            delectus a maiores nihil dolores? Natus, perferendis.
          </p>
          <p>
            Atque quis totam repellendus omnis alias magnam corrupti, possimus aspernatur
            perspiciatis quae provident consequatur minima doloremque blanditiis nihil maxime
            ducimus earum autem. Magni animi blanditiis similique iusto, repellat sed quisquam!
          </p>
          <p>
            Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus
            ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia
            explicabo, unde aliquid impedit! Adipisci!
          </p>
          <p>
            Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste
            fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro
            accusantium, officiis veniam nostrum cum cumque impedit.
          </p>
          <p>
            Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad
            praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque
            provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.
          </p>
        </t4-block>
      </t4-tab>
      <t4-tab id="tab-2" class="page-content">
        <t4-block>
          <p>Tab 2 content</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
            facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
            suscipit temporibus sequi iure ad laboriosam accusamus?
          </p>
          <p>
            Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit
            blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed,
            sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur
            deleniti.
          </p>
          <p>
            Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque,
            est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde
            delectus a maiores nihil dolores? Natus, perferendis.
          </p>
          <p>
            Atque quis totam repellendus omnis alias magnam corrupti, possimus aspernatur
            perspiciatis quae provident consequatur minima doloremque blanditiis nihil maxime
            ducimus earum autem. Magni animi blanditiis similique iusto, repellat sed quisquam!
          </p>
          <p>
            Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus
            ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia
            explicabo, unde aliquid impedit! Adipisci!
          </p>
          <p>
            Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste
            fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro
            accusantium, officiis veniam nostrum cum cumque impedit.
          </p>
          <p>
            Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad
            praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque
            provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.
          </p>
        </t4-block>
      </t4-tab>
      <t4-tab id="tab-3" class="page-content">
        <t4-block>
          <p>Tab 3 content</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
            facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
            suscipit temporibus sequi iure ad laboriosam accusamus?
          </p>
          <p>
            Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit
            blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed,
            sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur
            deleniti.
          </p>
          <p>
            Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque,
            est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde
            delectus a maiores nihil dolores? Natus, perferendis.
          </p>
          <p>
            Atque quis totam repellendus omnis alias magnam corrupti, possimus aspernatur
            perspiciatis quae provident consequatur minima doloremque blanditiis nihil maxime
            ducimus earum autem. Magni animi blanditiis similique iusto, repellat sed quisquam!
          </p>
          <p>
            Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus
            ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia
            explicabo, unde aliquid impedit! Adipisci!
          </p>
          <p>
            Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste
            fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro
            accusantium, officiis veniam nostrum cum cumque impedit.
          </p>
          <p>
            Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad
            praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque
            provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.
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
