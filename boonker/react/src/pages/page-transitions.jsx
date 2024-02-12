import React from 'react';
import { Page, Navbar, Block, List, ListItem } from 'techno4-react';

const effects = [
  't4-circle',
  't4-cover',
  't4-cover-v',
  't4-dive',
  't4-fade',
  't4-flip',
  't4-parallax',
  't4-push',
];
export default () => (
  <Page>
    <Navbar title="Page Transitions" backLink="Back"></Navbar>

    <Block strong>
      <p>
        In addition to default theme-specific page transition it is possible to create custom page
        transition or use one of the additional transition effects:
      </p>
    </Block>

    <List>
      {effects.map((effect) => (
        <ListItem
          key={effect}
          link={`/page-transitions/${effect}/`}
          title={effect}
          transition={effect}
        />
      ))}
    </List>
  </Page>
);
