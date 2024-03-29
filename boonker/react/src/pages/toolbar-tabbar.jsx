import React, { useState } from 'react';
import {
  Navbar,
  Page,
  Toolbar,
  List,
  ListItem,
  Button,
  Link,
  BlockTitle,
  Block,
} from 'techno4-react';

export default () => {
  const [toolbarPosition, setToolbarPosition] = useState('bottom');

  const toggleToolbarPosition = () => {
    setToolbarPosition(toolbarPosition === 'top' ? 'bottom' : 'top');
  };

  return (
    <Page>
      <Navbar title="Toolbar & Tabbar" backLink="Back"></Navbar>
      <Toolbar position={toolbarPosition}>
        <Link>Left Link</Link>
        <Link>Right Link</Link>
      </Toolbar>
      <List>
        <ListItem link="./tabbar/" title="Tabbar" />
        <ListItem link="./tabbar-labels/" title="Tabbar With Labels" />
        <ListItem link="./tabbar-scrollable/" title="Tabbar Scrollable" />
        <ListItem link="./toolbar-hide-scroll/" title="Hide Toolbar On Scroll" />
      </List>
      <BlockTitle>Toolbar Position</BlockTitle>
      <Block>
        <p>
          Toolbar supports both top and bottom positions. Click the following button to change its
          position.
        </p>
        <p>
          <Button
            fill
            onClick={() => {
              toggleToolbarPosition();
            }}
          >
            Toggle Toolbar Position
          </Button>
        </p>
      </Block>
    </Page>
  );
};
