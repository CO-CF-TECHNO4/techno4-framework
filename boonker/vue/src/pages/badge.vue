<template>
  <t4-page>
    <t4-navbar sliding back-link="Back" title="Badge">
      <t4-nav-right>
        <t4-link icon-only>
          <t4-icon ios="t4:person_circle_fill" aurora="t4:person_circle_fill" md="material:person">
            <t4-badge color="red">5</t4-badge>
          </t4-icon>
        </t4-link>
      </t4-nav-right>
    </t4-navbar>
    <t4-toolbar bottom tabbar labels>
      <t4-link tab-link="#tab-1" tab-link-active>
        <t4-icon ios="t4:envelope_fill" aurora="t4:envelope_fill" md="material:email">
          <t4-badge color="green">5</t4-badge>
        </t4-icon>
        <span class="tabbar-label">Inbox</span>
      </t4-link>
      <t4-link tab-link="#tab-2">
        <t4-icon ios="t4:calendar_fill" aurora="t4:calendar_fill" md="material:today">
          <t4-badge color="red">7</t4-badge>
        </t4-icon>
        <span class="tabbar-label">Calendar</span>
      </t4-link>
      <t4-link tab-link="#tab-3">
        <t4-icon ios="t4:cloud_upload_fill" aurora="t4:cloud_upload_fill" md="material:file_upload">
          <t4-badge color="red">1</t4-badge>
        </t4-icon>
        <span class="tabbar-label">Upload</span>
      </t4-link>
    </t4-toolbar>

    <t4-list>
      <t4-list-item title="Foo Bar" badge="0">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="Ivan Petrov" badge="CEO" badge-color="blue">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="John Doe" badge="5" badge-color="green">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="Jane Doe" badge="NEW" badge-color="orange">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
    </t4-list>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4NavRight,
  t4Toolbar,
  t4Page,
  t4Link,
  t4Badge,
  t4List,
  t4ListItem,
  t4Icon,
} from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4NavRight,
    t4Toolbar,
    t4Link,
    t4Badge,
    t4List,
    t4ListItem,
    t4Icon,
  },
};
</script>
