<script>
  import { Navbar, Page, Block, Row, Col, Button, Panel, Link } from 'techno4-svelte';
</script>

<Page id="panel-page">
  <Navbar title="Panel / Side panels" backLink="Back" />
  <Panel left cover containerEl="#panel-page" id="panel-nested">
    <Page>
      <Block strong>
        <p>This is page-nested Panel.</p>
        <p>
          <Link panelClose>Close me</Link>
        </p>
      </Block>
    </Page>
  </Panel>
  <Block>
    <p>
      techno4 comes with 2 panels (on left and on right), both are optional. They have two
      different layouts/effects -
      <b>cover</b>
      above the content (like left panel here) and
      <b> reveal</b>
      (like right panel). You can put absolutely anything inside: data lists, forms, custom content,
      and even other isolated app view (like in right panel now) with its own dynamic navbar.
      Checkout panels:
    </p>
  </Block>
  <Block>
    <Row tag="p">
      <Col tag="span">
        <Button raised fill panelOpen="left">Open left panel</Button>
      </Col>
      <Col tag="span">
        <Button raised fill panelOpen="right">Open right panel</Button>
      </Col>
    </Row>
    <Row tag="p">
      <Col tag="span">
        <Button raised fill panelOpen="#panel-nested">Open nested panel</Button>
      </Col>
    </Row>
  </Block>
</Page>
