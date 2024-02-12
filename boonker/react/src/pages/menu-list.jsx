import React, { useState } from 'react';
import { Page, Navbar, Block, List, ListItem, Icon } from 'techno4-react';

export default () => {
  const [selected, setSelected] = useState('home');
  const [selectedMedia, setSelectedMedia] = useState('home');
  return (
    <Page>
      <Navbar title="Menu List" backLink="Back"></Navbar>

      <Block strong>
        <p>
          Menu list unlike usual links list is designed to indicate currently active screen (or
          section) of your app. Think about it like a Tabbar but in a form of a list.
        </p>
      </Block>

      <List menuList>
        <ListItem
          link
          title="Home"
          selected={selected === 'home'}
          onClick={() => setSelected('home')}
        >
          <Icon md="material:home" aurora="t4:house_fill" ios="t4:house_fill" slot="media" />
        </ListItem>
        <ListItem
          link
          title="Profile"
          selected={selected === 'profile'}
          onClick={() => setSelected('profile')}
        >
          <Icon md="material:person" aurora="t4:person_fill" ios="t4:person_fill" slot="media" />
        </ListItem>
        <ListItem
          link
          title="Settings"
          selected={selected === 'settings'}
          onClick={() => setSelected('settings')}
        >
          <Icon
            md="material:settings"
            aurora="t4:gear_alt_fill"
            ios="t4:gear_alt_fill"
            slot="media"
          />
        </ListItem>
      </List>

      <List menuList mediaList>
        <ListItem
          link
          title="Home"
          subtitle="Home subtitle"
          selected={selectedMedia === 'home'}
          onClick={() => setSelectedMedia('home')}
        >
          <Icon md="material:home" aurora="t4:house_fill" ios="t4:house_fill" slot="media" />
        </ListItem>
        <ListItem
          link
          title="Profile"
          subtitle="Profile subtitle"
          selected={selectedMedia === 'profile'}
          onClick={() => setSelectedMedia('profile')}
        >
          <Icon md="material:person" aurora="t4:person_fill" ios="t4:person_fill" slot="media" />
        </ListItem>
        <ListItem
          link
          title="Settings"
          subtitle="Settings subtitle"
          selected={selectedMedia === 'settings'}
          onClick={() => setSelectedMedia('settings')}
        >
          <Icon
            md="material:settings"
            aurora="t4:gear_alt_fill"
            ios="t4:gear_alt_fill"
            slot="media"
          />
        </ListItem>
      </List>
    </Page>
  );
};
