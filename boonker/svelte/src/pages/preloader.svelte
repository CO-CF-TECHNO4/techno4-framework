<script>
  import { t4, Navbar, Page, BlockTitle, Block, Preloader, Col } from 'techno4-svelte';

  function openIndicator() {
    t4.preloader.show();
    setTimeout(() => {
      t4.preloader.hide();
    }, 2000);
  }
  function openDialog() {
    t4.dialog.preloader();
    setTimeout(() => {
      t4.dialog.close();
    }, 2000);
  }
  function openCustomDialog() {
    t4.dialog.preloader('My text...');
    setTimeout(() => {
      t4.dialog.close();
    }, 2000);
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<Page>
  <Navbar title="Preloader" backLink="Back" />
  <Block>
    <p>
      How about an activity indicator? techno4 has a nice one. The t4 Preloader is made with SVG
      and animated with CSS so it can be easily resized.
    </p>
  </Block>

  <BlockTitle>Default</BlockTitle>
  <Block strong class="row demo-preloaders align-items-stretch text-align-center">
    <Col>
      <Preloader />
    </Col>
    <Col style="background: #000">
      <Preloader color="white" />
    </Col>
    <Col>
      <Preloader size={42} />
    </Col>
    <Col style="background: #000">
      <Preloader size={42} color="white" />
    </Col>
  </Block>

  <BlockTitle>Color Preloaders</BlockTitle>
  <Block strong class="row text-align-center">
    <Col>
      <Preloader color="red" />
    </Col>
    <Col>
      <Preloader color="green" />
    </Col>
    <Col>
      <Preloader color="orange" />
    </Col>
    <Col>
      <Preloader color="blue" />
    </Col>
  </Block>

  <BlockTitle>Multi-color</BlockTitle>
  <Block strong class="text-align-center">
    <Preloader color="multi" />
  </Block>

  <BlockTitle>Preloader Modals</BlockTitle>
  <Block strong>
    <p>With <b>app.preloader.show()</b> you can show small overlay with preloader indicator.</p>
    <p><a class="button button-fill" on:click={openIndicator}>Open Small Indicator</a></p>
    <p>With <b>app.dialog.preloader()</b> you can show dialog modal with preloader indicator.</p>
    <p><a class="button button-fill" on:click={openDialog}>Open Dialog Preloader</a></p>
    <p>
      With
      <b>app.dialog.preloader('My text...')</b>
      you can show dialog preloader modal with custom title.
    </p>
    <p><a class="button button-fill" on:click={openCustomDialog}>Open Dialog Preloader</a></p>
  </Block>
</Page>
