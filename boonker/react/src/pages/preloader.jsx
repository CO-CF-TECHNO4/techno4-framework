import React from 'react';
import { Navbar, Page, BlockTitle, Block, Preloader, Col, t4 } from 'techno4-react';

export default () => {
  const openIndicator = () => {
    t4.preloader.show();
    setTimeout(() => {
      t4.preloader.hide();
    }, 2000);
  };
  const openDialog = () => {
    t4.dialog.preloader();
    setTimeout(() => {
      t4.dialog.close();
    }, 2000);
  };
  const openCustomDialog = () => {
    t4.dialog.preloader('My text...');
    setTimeout(() => {
      t4.dialog.close();
    }, 2000);
  };
  return (
    <Page>
      <Navbar title="Preloader" backLink="Back"></Navbar>
      <Block>
        <p>
          How about an activity indicator? techno4 has a nice one. The t4 Preloader is made with
          SVG and animated with CSS so it can be easily resized.
        </p>
      </Block>

      <BlockTitle>Default</BlockTitle>
      <Block strong className="row demo-preloaders align-items-stretch text-align-center">
        <Col>
          <Preloader />
        </Col>
        <Col style={{ background: '#000' }}>
          <Preloader color="white" />
        </Col>
        <Col>
          <Preloader size={42} />
        </Col>
        <Col style={{ background: '#000' }}>
          <Preloader size={42} color="white" />
        </Col>
      </Block>

      <BlockTitle>Color Preloaders</BlockTitle>
      <Block strong className="row text-align-center">
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
      <Block strong className="text-align-center">
        <Preloader color="multi" />
      </Block>

      <BlockTitle>Preloader Modals</BlockTitle>
      <Block strong>
        <p>
          With <b>app.preloader.show()</b> you can show small overlay with preloader indicator.
        </p>
        <p>
          <a className="button button-fill" onClick={openIndicator}>
            Open Small Indicator
          </a>
        </p>
        <p>
          With <b>app.dialog.preloader()</b> you can show dialog modal with preloader indicator.
        </p>
        <p>
          <a className="button button-fill" onClick={openDialog}>
            Open Dialog Preloader
          </a>
        </p>
        <p>
          With <b>app.dialog.preloader('My text...')</b> you can show dialog preloader modal with
          custom title.
        </p>
        <p>
          <a className="button button-fill" onClick={openCustomDialog}>
            Open Dialog Preloader
          </a>
        </p>
      </Block>
    </Page>
  );
};
