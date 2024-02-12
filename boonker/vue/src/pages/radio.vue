<template>
  <t4-page>
    <t4-navbar title="Radio" back-link="Back"></t4-navbar>
    <t4-block-title>Inline</t4-block-title>

    <t4-block strong>
      <p>
        Lorem <t4-radio name="demo-radio-inline" /> ipsum dolor sit amet, consectetur adipisicing
        elit. Alias beatae illo nihil aut eius commodi sint eveniet aliquid eligendi
        <t4-radio name="demo-radio-inline" checked /> ad delectus impedit tempore nemo, enim vel
        praesentium consequatur nulla mollitia!
      </p>
    </t4-block>

    <t4-block-title>Radio Group</t4-block-title>
    <t4-list>
      <t4-list-item radio radio-icon="start" title="Books" name="demo-radio-start" checked />
      <t4-list-item radio radio-icon="start" title="Movies" name="demo-radio-start" />
      <t4-list-item radio radio-icon="start" title="Food" name="demo-radio-start" />
      <t4-list-item radio radio-icon="start" title="Drinks" name="demo-radio-start" />
    </t4-list>

    <t4-list>
      <t4-list-item radio radio-icon="end" title="Books" name="demo-radio-end" checked />
      <t4-list-item radio radio-icon="end" title="Movies" name="demo-radio-end" />
      <t4-list-item radio radio-icon="end" title="Food" name="demo-radio-end" />
      <t4-list-item radio radio-icon="end" title="Drinks" name="demo-radio-end" />
    </t4-list>

    <t4-block-title>With Media Lists</t4-block-title>
    <t4-list media-list>
      <t4-list-item
        radio
        radio-icon="start"
        checked
        name="demo-media-radio"
        value="1"
        title="Facebook"
        after="17:14"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <t4-list-item
        radio
        radio-icon="start"
        name="demo-media-radio"
        value="2"
        title="John Doe (via Twitter)"
        after="17:11"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <t4-list-item
        radio
        radio-icon="start"
        name="demo-media-radio"
        value="3"
        title="Facebook"
        after="16:48"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <t4-list-item
        radio
        radio-icon="start"
        name="demo-media-radio"
        value="4"
        title="John Doe (via Twitter)"
        after="15:32"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
    </t4-list>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4BlockTitle,
  t4Block,
  t4List,
  t4ListItem,
  t4Radio,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4Block,
    t4List,
    t4ListItem,
    t4Radio,
  },
};
</script>
