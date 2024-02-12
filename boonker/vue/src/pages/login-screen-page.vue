<template>
  <t4-page no-toolbar no-navbar no-swipeback login-screen>
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
        >Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.</t4-block-footer
      >
    </t4-list>
  </t4-page>
</template>
<script>
import {
  t4Page,
  t4LoginScreenTitle,
  t4List,
  t4ListButton,
  t4BlockFooter,
  t4ListInput,
  t4,
} from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4LoginScreenTitle,
    t4List,
    t4ListButton,
    t4BlockFooter,
    t4ListInput,
  },
  props: {
    t4router: Object,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    signIn() {
      const self = this;
      t4.dialog.alert(`Username: ${self.username}<br>Password: ${self.password}`, () => {
        this.t4router.back();
      });
    },
  },
};
</script>
