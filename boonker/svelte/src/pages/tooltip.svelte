<script>
  import {
    t4,
    Navbar,
    NavRight,
    Page,
    Link,
    Icon,
    Block,
    BlockTitle,
    Button,
  } from 'techno4-svelte';

  let iconTooltip;
  let navbarTooltip;

  function onPageInit() {
    iconTooltip = t4.tooltip.create({
      targetEl: '.icon-tooltip',
      text: 'Tooltip text',
    });
    navbarTooltip = t4.tooltip.create({
      targetEl: '.navbar-tooltip',
      text: 'One more tooltip<br>with more text<br><em>and custom formatting</em>',
    });
  }

  function onPageBeforeRemove() {
    if (iconTooltip) iconTooltip.destroy();
    if (navbarTooltip) navbarTooltip.destroy();
  }
</script>

<Page {onPageInit} {onPageBeforeRemove}>
  <Navbar title="Tooltip" backLink="Back">
    <NavRight>
      <Link class="navbar-tooltip">
        <Icon ios="t4:info_circle_fill" aurora="t4:info_circle_fill" md="material:info_outline" />
      </Link>
    </NavRight>
  </Navbar>
  <Block strong>
    <p>Tooltips display informative text when users hover over, or tap an target element..</p>
    <p>Tooltip can be positioned around any element with any HTML content inside.</p>
  </Block>
  <Block strong>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia augue urna, in
      tincidunt augue hendrerit ut. In nulla massa, facilisis non consectetur a, tempus semper ex.
      Proin eget volutpat nisl. Integer lacinia maximus nunc molestie viverra.
      <Icon
        class="icon-tooltip"
        ios="t4:info_circle_fill"
        aurora="t4:info_circle_fill"
        md="material:info"
        size={20} />
      Etiam ullamcorper ultricies ipsum, ut congue tortor rutrum at. Vestibulum rutrum risus a orci
      dictum, in placerat leo finibus. Sed a congue enim, ut dictum felis. Aliquam erat volutpat.
      Etiam id nisi in magna egestas malesuada. Sed vitae orci sollicitudin, accumsan nisi a,
      bibendum felis. Maecenas risus libero, gravida ut tincidunt auctor,
      <Icon
        class="icon-tooltip"
        ios="t4:info_circle_fill"
        aurora="t4:info_circle_fill"
        md="material:info"
        size={20} />
      aliquam non lectus. Nam laoreet turpis erat, eget bibendum leo suscipit nec.
    </p>
    <p>
      Vestibulum
      <Icon
        class="icon-tooltip"
        ios="t4:info_circle_fill"
        aurora="t4:info_circle_fill"
        md="material:info"
        size={20} />
      gravida dui magna, eget pulvinar ligula molestie hendrerit. Mauris vitae facilisis justo. Nam
      velit mi, pharetra sit amet luctus quis, consectetur a tellus. Maecenas ac magna sit amet eros
      aliquam rhoncus. Ut dapibus vehicula lectus, ac blandit felis ultricies at. In sollicitudin,
      lorem eget volutpat viverra, magna
      <Icon
        class="icon-tooltip"
        ios="t4:info_circle_fill"
        aurora="t4:info_circle_fill"
        md="material:info"
        size={20} />
      felis tempus nisl, porta consectetur nunc neque eget risus. Phasellus vestibulum leo at ante
      ornare, vel congue justo tincidunt.
    </p>
    <p>
      Praesent tempus enim id lectus porta, at rutrum purus imperdiet. Donec eget sem vulputate,
      scelerisque diam nec, consequat turpis. Ut vel convallis felis. Integer
      <Icon
        class="icon-tooltip"
        ios="t4:info_circle_fill"
        aurora="t4:info_circle_fill"
        md="material:info"
        size={20} />
      neque ex, sollicitudin vitae magna eget, ultrices volutpat dui. Sed placerat odio hendrerit
      consequat lobortis. Fusce pulvinar facilisis rhoncus. Sed erat ipsum, consequat molestie
      suscipit vitae, malesuada a
      <Icon
        class="icon-tooltip"
        ios="t4:info_circle_fill"
        aurora="t4:info_circle_fill"
        md="material:info"
        size={20} />
      massa.
    </p>
  </Block>

  <BlockTitle>Auto Initialization</BlockTitle>
  <Block strong>
    <p>
      For simple cases when you don't need a lot of control over the Tooltip, it can be set on
      buttons and links automatically with
      <code>tooltip</code>
      prop:
      <Button round outline small style="display: inline-block" tooltip="Button tooltip text">
        Button with Tooltip
      </Button>
    </p>
  </Block>
</Page>
