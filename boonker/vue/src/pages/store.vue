<template>
  <t4-page>
    <t4-navbar title="Store" back-link="Back" />
    <t4-block strong>
      <p>
        techno4 comes with a built-in lightweight application state management library - Store.
        It serves as a centralized Store for all the components in an application.
      </p>
    </t4-block>
    <t4-block v-if="!users" strong class="text-align-center">
      <t4-button v-if="!loading" @click="load">Load Users</t4-button>
      <t4-preloader v-else />
    </t4-block>
    <t4-list v-if="users" simple-list>
      <t4-list-item v-for="user in users" :key="user" :title="user" />
    </t4-list>
  </t4-page>
</template>
<script>
import {
  t4,
  useStore,
  t4Page,
  t4Navbar,
  t4Block,
  t4Button,
  t4Preloader,
  t4List,
  t4ListItem,
} from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4Block,
    t4Button,
    t4Preloader,
    t4List,
    t4ListItem,
  },
  setup() {
    // Subscribe to store getters
    const users = useStore('users');
    const loading = useStore('usersLoading');

    // Call store action
    const load = () => t4.store.dispatch('loadUsers');

    return {
      users,
      loading,
      load,
    };
  },
};
</script>
