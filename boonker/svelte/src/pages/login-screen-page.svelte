<script>
  import {
    t4,
    Page,
    LoginScreenTitle,
    List,
    ListInput,
    ListButton,
    BlockFooter,
  } from 'techno4-svelte';

  export let t4router;

  let username = '';
  let password = '';

  function signIn() {
    t4.dialog.alert(`Username: ${username}<br>Password: ${password}`, () => {
      t4router.back();
    });
  }
</script>

<Page noToolbar noNavbar noSwipeback loginScreen>
  <LoginScreenTitle>techno4</LoginScreenTitle>
  <List form>
    <ListInput
      label="Username"
      type="text"
      placeholder="Your username"
      value={username}
      onInput={(e) => (username = e.target.value)} />
    <ListInput
      label="Password"
      type="password"
      placeholder="Your password"
      value={password}
      onInput={(e) => (password = e.target.value)} />
  </List>
  <List>
    <ListButton onClick={signIn}>Sign In</ListButton>
  </List>
  <BlockFooter>
    Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </BlockFooter>
</Page>
