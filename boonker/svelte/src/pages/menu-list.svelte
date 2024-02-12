<script>
  import { Page, Navbar, Block, List, ListItem, Icon } from 'techno4-svelte';

  let selected = 'home';
  let selectedMedia = 'home';
</script>

<Page>
  <Navbar title="Menu List" backLink="Back" />

  <Block strong>
    <p>
      Menu list unlike usual links list is designed to indicate currently active screen (or section)
      of your app. Think about it like a Tabbar but in a form of a list.
    </p>
  </Block>

  <List menuList>
    <ListItem link title="Home" selected={selected === 'home'} onClick={() => (selected = 'home')}>
      <span slot="media">
        <Icon md="material:home" aurora="t4:house_fill" ios="t4:house_fill" />
      </span>
    </ListItem>
    <ListItem
      link
      title="Profile"
      selected={selected === 'profile'}
      onClick={() => (selected = 'profile')}>
      <span slot="media">
        <Icon md="material:person" aurora="t4:person_fill" ios="t4:person_fill" />
      </span>
    </ListItem>
    <ListItem
      link
      title="Settings"
      selected={selected === 'settings'}
      onClick={() => (selected = 'settings')}>
      <span slot="media">
        <Icon md="material:settings" aurora="t4:gear_alt_fill" ios="t4:gear_alt_fill" />
      </span>
    </ListItem>
  </List>

  <List menuList mediaList>
    <ListItem
      link
      title="Home"
      subtitle="Home subtitle"
      selected={selectedMedia === 'home'}
      onClick={() => (selectedMedia = 'home')}>
      <span slot="media">
        <Icon md="material:home" aurora="t4:house_fill" ios="t4:house_fill" />
      </span>
    </ListItem>
    <ListItem
      link
      title="Profile"
      subtitle="Profile subtitle"
      selected={selectedMedia === 'profile'}
      onClick={() => (selectedMedia = 'profile')}>
      <span slot="media">
        <Icon md="material:person" aurora="t4:person_fill" ios="t4:person_fill" />
      </span>
    </ListItem>
    <ListItem
      link
      title="Settings"
      subtitle="Settings subtitle"
      selected={selectedMedia === 'settings'}
      onClick={() => (selectedMedia = 'settings')}>
      <span slot="media">
        <Icon md="material:settings" aurora="t4:gear_alt_fill" ios="t4:gear_alt_fill" />
      </span>
    </ListItem>
  </List>
</Page>
