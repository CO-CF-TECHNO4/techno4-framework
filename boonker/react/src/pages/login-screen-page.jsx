import React, { useState } from 'react';
import {
  Page,
  LoginScreenTitle,
  List,
  ListInput,
  ListButton,
  BlockFooter,
  t4,
} from 'techno4-react';

export default ({ t4router }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () => {
    t4.dialog.alert(`Username: ${username}<br>Password: ${password}`, () => {
      t4router.back();
    });
  };
  return (
    <Page noToolbar noNavbar noSwipeback loginScreen>
      <LoginScreenTitle>techno4</LoginScreenTitle>
      <List form>
        <ListInput
          label="Username"
          type="text"
          placeholder="Your username"
          value={username}
          onInput={(e) => {
            setUsername(e.target.value);
          }}
        />
        <ListInput
          label="Password"
          type="password"
          placeholder="Your password"
          value={password}
          onInput={(e) => {
            setPassword(e.target.value);
          }}
        />
      </List>
      <List>
        <ListButton onClick={signIn}>Sign In</ListButton>
        <BlockFooter>
          Some text about login information.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </BlockFooter>
      </List>
    </Page>
  );
};
