<template>
  <t4-page>
    <t4-navbar title="Login Screen" back-link="Back"></t4-navbar>
    <t4-block>
      <p>
        techno4 comes with ready to use Login Screen layout. It could be used inside of page or
        inside of popup (Embedded) or as a standalone overlay:
      </p>
    </t4-block>

    <t4-list>
      <t4-list-item link="/login-screen-page/" title="As Separate Page"></t4-list-item>
    </t4-list>

    <t4-block>
      <t4-button raised large fill login-screen-open=".demo-login-screen">As Overlay</t4-button>
    </t4-block>

    <t4-block>
      <t4-button raised large fill @click="loginScreenOpened = true"
        >Open Via Prop Change</t4-button
      >
    </t4-block>

    <t4-login-screen v-model:opened="loginScreenOpened" class="demo-login-screen">
      <t4-page login-screen>
        <t4-login-screen-title>techno4</t4-login-screen-title>
        <t4-list form>
          <t4-list-input
            label="Username"
            type="text"
            placeholder="Your username"
            :value="username"
            @input="username = $event.target.value"
          ></t4-list-input>
          <t4-list-input
            label="Password"
            type="password"
            placeholder="Your password"
            :value="password"
            @input="password = $event.target.value"
          ></t4-list-input>
        </t4-list>
        <t4-list>
          <t4-list-button @click="signIn">Sign In</t4-list-button>
          <t4-block-footer
            >Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.</t4-block-footer
          >
        </t4-list>
      </t4-page>
    </t4-login-screen>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4LoginScreen,
  t4List,
  t4ListItem,
  t4Block,
  t4Button,
  t4LoginScreenTitle,
  t4BlockFooter,
  t4ListButton,
  t4ListInput,
  t4,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4LoginScreen,
    t4List,
    t4ListItem,
    t4Block,
    t4Button,
    t4LoginScreenTitle,
    t4BlockFooter,
    t4ListButton,
    t4ListInput,
  },
  data() {
    return {
      loginScreenOpened: false,
      username: '',
      password: '',
    };
  },
  methods: {
    signIn() {
      const self = this;

      t4.dialog.alert(`Username: ${self.username}<br>Password: ${self.password}`, () => {
        t4.loginScreen.close();
      });
    },
  },
};
</script>
