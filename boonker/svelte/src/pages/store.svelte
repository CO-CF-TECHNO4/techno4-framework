<script>
  import {
    t4,
    useStore,
    Page,
    Navbar,
    Block,
    Button,
    Preloader,
    List,
    ListItem,
  } from 'techno4-svelte';

  // Subscribe to store getters
  let users = useStore('users', (value) => (users = value));
  let loading = useStore('usersLoading', (value) => (loading = value));

  // Call store action
  const load = () => t4.store.dispatch('loadUsers');
</script>

<Page>
  <Navbar title="Store" backLink="Back" />
  <Block strong>
    <p>
      techno4 comes with a built-in lightweight application state management library - Store. It
      serves as a centralized Store for all the components in an application.
    </p>
  </Block>
  {#if !users}
    <Block strong class="text-align-center">
      {#if !loading}
        <Button on:click={load}>Load Users</Button>
      {/if}
      {#if loading}
        <Preloader />
      {/if}
    </Block>
  {/if}

  {#if users}
    <List simpleList>
      {#each users as user}
        <ListItem title={user} />
      {/each}
    </List>
  {/if}
</Page>
