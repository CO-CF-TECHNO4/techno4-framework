<script>
  import { Navbar, Page, Block, Tabs, Tab, Link, Toolbar, NavRight } from 'techno4-svelte';

  let toolbarPosition = 'bottom';

  function toggleToolbarPosition() {
    toolbarPosition = toolbarPosition === 'top' ? 'bottom' : 'top';
  }
</script>

<Page pageContent={false}>
  <Navbar title="Tabbar Labels" backLink="Back">
    <NavRight>
      <Link
        iconMd="material:compare_arrows"
        iconIos="t4:arrow_up_arrow_down_circle_fill"
        iconAurora="t4:arrow_up_arrow_down_circle_fill"
        onClick={toggleToolbarPosition} />
    </NavRight>
  </Navbar>
  <Toolbar tabbar labels position={toolbarPosition}>
    <Link
      tabLink="#tab-1"
      tabLinkActive
      text="Tab 1"
      iconIos="t4:envelope_fill"
      iconAurora="t4:envelope_fill"
      iconMd="material:email" />
    <Link
      tabLink="#tab-2"
      text="Tab 2"
      iconIos="t4:calendar_fill"
      iconAurora="t4:calendar_fill"
      iconMd="material:today" />
    <Link
      tabLink="#tab-3"
      text="Tab 3"
      iconIos="t4:cloud_upload_fill"
      iconAurora="t4:cloud_upload_fill"
      iconMd="material:file_upload" />
  </Toolbar>

  <Tabs>
    <Tab id="tab-1" class="page-content" tabActive>
      <Block>
        <p>Tab 1 content</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
          facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
          suscipit temporibus sequi iure ad laboriosam accusamus?
        </p>
        <p>
          Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit
          blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed,
          sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.
        </p>
        <p>
          Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est
          animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde
          delectus a maiores nihil dolores? Natus, perferendis.
        </p>
        <p>
          Atque quis totam repellendus omnis alias magnam corrupti, possimus aspernatur perspiciatis
          quae provident consequatur minima doloremque blanditiis nihil maxime ducimus earum autem.
          Magni animi blanditiis similique iusto, repellat sed quisquam!
        </p>
        <p>
          Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus
          ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia
          explicabo, unde aliquid impedit! Adipisci!
        </p>
        <p>
          Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat
          iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium,
          officiis veniam nostrum cum cumque impedit.
        </p>
        <p>
          Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium
          rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi
          quaerat ea soluta doloremque. Iure fugit, minima facere.
        </p>
      </Block>
    </Tab>
    <Tab id="tab-2" class="page-content">
      <Block>
        <p>Tab 2 content</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
          facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
          suscipit temporibus sequi iure ad laboriosam accusamus?
        </p>
        <p>
          Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit
          blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed,
          sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.
        </p>
        <p>
          Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est
          animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde
          delectus a maiores nihil dolores? Natus, perferendis.
        </p>
        <p>
          Atque quis totam repellendus omnis alias magnam corrupti, possimus aspernatur perspiciatis
          quae provident consequatur minima doloremque blanditiis nihil maxime ducimus earum autem.
          Magni animi blanditiis similique iusto, repellat sed quisquam!
        </p>
        <p>
          Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus
          ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia
          explicabo, unde aliquid impedit! Adipisci!
        </p>
        <p>
          Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat
          iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium,
          officiis veniam nostrum cum cumque impedit.
        </p>
        <p>
          Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium
          rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi
          quaerat ea soluta doloremque. Iure fugit, minima facere.
        </p>
      </Block>
    </Tab>
    <Tab id="tab-3" class="page-content">
      <Block>
        <p>Tab 3 content</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
          facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
          suscipit temporibus sequi iure ad laboriosam accusamus?
        </p>
        <p>
          Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit
          blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed,
          sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.
        </p>
        <p>
          Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est
          animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde
          delectus a maiores nihil dolores? Natus, perferendis.
        </p>
        <p>
          Atque quis totam repellendus omnis alias magnam corrupti, possimus aspernatur perspiciatis
          quae provident consequatur minima doloremque blanditiis nihil maxime ducimus earum autem.
          Magni animi blanditiis similique iusto, repellat sed quisquam!
        </p>
        <p>
          Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus
          ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia
          explicabo, unde aliquid impedit! Adipisci!
        </p>
        <p>
          Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat
          iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium,
          officiis veniam nostrum cum cumque impedit.
        </p>
        <p>
          Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium
          rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi
          quaerat ea soluta doloremque. Iure fugit, minima facere.
        </p>
      </Block>
    </Tab>
  </Tabs>
</Page>
