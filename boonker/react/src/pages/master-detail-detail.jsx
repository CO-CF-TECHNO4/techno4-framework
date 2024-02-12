import React from 'react';
import { Page, Navbar, Block } from 'techno4-react';

export default ({ t4route }) => {
  return (
    <Page>
      <Navbar title={`Detail Page ${t4route.params.id}`} backLink="Back"></Navbar>
      <Block strong>
        <p>
          <b>Detail Page {t4route.params.id}</b>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue turpis et
          risus fringilla condimentum. Aliquam vestibulum est tempor, sagittis massa nec, dictum
          massa. Phasellus non viverra dui, eget aliquam sem. Donec eleifend dolor id arcu ultrices,
          vel ultrices dolor fringilla. Phasellus feugiat consectetur libero, eget luctus felis
          rhoncus at. Duis scelerisque ligula sit amet purus congue pulvinar. Proin a risus id nibh
          fermentum auctor. Vestibulum at sem a risus mollis iaculis. In vestibulum malesuada arcu
          id consectetur.
        </p>
      </Block>
    </Page>
  );
};
