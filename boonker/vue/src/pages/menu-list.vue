<template>
  <t4-page>
    <t4-navbar title="Menu List" back-link="Back"></t4-navbar>

    <t4-block strong>
      <p>
        Menu list unlike usual links list is designed to indicate currently active screen (or
        section) of your app. Think about it like a Tabbar but in a form of a list.
      </p>
    </t4-block>

    <t4-list menu-list>
      <t4-list-item
        link
        title="Home"
        :selected="selected === 'home'"
        @click="() => (selected = 'home')"
      >
        <template #media>
          <t4-icon md="material:home" aurora="t4:house_fill" ios="t4:house_fill" />
        </template>
      </t4-list-item>
      <t4-list-item
        link
        title="Profile"
        :selected="selected === 'profile'"
        @click="() => (selected = 'profile')"
      >
        <template #media>
          <t4-icon md="material:person" aurora="t4:person_fill" ios="t4:person_fill" />
        </template>
      </t4-list-item>
      <t4-list-item
        link
        title="Settings"
        :selected="selected === 'settings'"
        @click="() => (selected = 'settings')"
      >
        <template #media>
          <t4-icon md="material:settings" aurora="t4:gear_alt_fill" ios="t4:gear_alt_fill" />
        </template>
      </t4-list-item>
    </t4-list>

    <t4-list menu-list media-list>
      <t4-list-item
        link
        title="Home"
        subtitle="Home subtitle"
        :selected="selectedMedia === 'home'"
        @click="() => (selectedMedia = 'home')"
      >
        <template #media>
          <t4-icon md="material:home" aurora="t4:house_fill" ios="t4:house_fill" />
        </template>
      </t4-list-item>
      <t4-list-item
        link
        title="Profile"
        subtitle="Profile subtitle"
        :selected="selectedMedia === 'profile'"
        @click="() => (selectedMedia = 'profile')"
      >
        <template #media>
          <t4-icon md="material:person" aurora="t4:person_fill" ios="t4:person_fill" />
        </template>
      </t4-list-item>
      <t4-list-item
        link
        title="Settings"
        subtitle="Settings subtitle"
        :selected="selectedMedia === 'settings'"
        @click="() => (selectedMedia = 'settings')"
      >
        <template #media>
          <t4-icon md="material:settings" aurora="t4:gear_alt_fill" ios="t4:gear_alt_fill" />
        </template>
      </t4-list-item>
    </t4-list>
  </t4-page>
</template>
<script>
import { ref } from 'vue';
import { t4Navbar, t4Page, t4Block, t4List, t4ListItem, t4Icon } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Block,
    t4List,
    t4ListItem,
    t4Icon,
  },
  setup() {
    const selected = ref('home');
    const selectedMedia = ref('home');
    return {
      selected,
      selectedMedia,
    };
  },
};
</script>
