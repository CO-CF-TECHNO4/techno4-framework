import React from 'react';
import {
  Navbar,
  Page,
  Subnavbar,
  Segmented,
  Button,
  Block,
  List,
  ListItem,
} from 'techno4-react';

export default () => (
  <Page>
    <Navbar title="Subnavbar" backLink="Back">
      <Subnavbar>
        <Segmented strong>
          <Button active>Link 1</Button>
          <Button>Link 2</Button>
          <Button>Link 3</Button>
        </Segmented>
      </Subnavbar>
    </Navbar>
    <Block>
      <p>
        Subnavbar is useful when you need to put any additional elements into Navbar, like Tab Links
        or Search Bar. It also remains visible when Navbar hidden.
      </p>
    </Block>
    <List>
      <ListItem link="/subnavbar-title/" title="Subnavbar Title" />
    </List>
  </Page>
);
