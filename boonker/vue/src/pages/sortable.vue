<template>
  <t4-page>
    <t4-navbar title="Sortable List" back-link="Back">
      <t4-nav-right>
        <t4-link sortable-toggle=".sortable">Toggle</t4-link>
      </t4-nav-right>
    </t4-navbar>

    <t4-block>
      <p>Just click "Toggle" button on navigation bar to enable/disable sorting</p>
    </t4-block>
    <t4-list sortable>
      <t4-list-item title="1 Jenna Smith" after="CEO">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="2 John Doe" after="Director">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="3 John Doe" after="Developer">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="4 Aaron Darling" after="Manager">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="5 Calvin Johnson" after="Accounter">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="6 John Smith" after="SEO">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="7 Chloe" after="Manager">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
    </t4-list>
    <t4-list media-list sortable>
      <t4-list-item
        title="Yellow Submarine"
        after="$15"
        subtitle="Beatles"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/people-160x160-1.jpg" width="80" />
        </template>
      </t4-list-item>
      <t4-list-item
        title="Don't Stop Me Now"
        after="$22"
        subtitle="Queen"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/people-160x160-2.jpg" width="80" />
        </template>
      </t4-list-item>
      <t4-list-item
        title="Billie Jean"
        after="$16"
        subtitle="Michael Jackson"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/people-160x160-3.jpg" width="80" />
        </template>
      </t4-list-item>
    </t4-list>

    <t4-block-title>Opposite Side</t4-block-title>
    <t4-list sortable sortable-opposite>
      <t4-list-item title="1 Jenna Smith" after="CEO">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="2 John Doe" after="Director">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="3 John Doe" after="Developer">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="4 Aaron Darling" after="Manager">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="5 Calvin Johnson" after="Accounter">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="6 John Smith" after="SEO">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="7 Chloe" after="Manager">
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
  t4Page,
  t4Block,
  t4List,
  t4ListItem,
  t4NavRight,
  t4Link,
  t4Icon,
  t4BlockTitle,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Block,
    t4List,
    t4ListItem,
    t4NavRight,
    t4Link,
    t4Icon,
    t4BlockTitle,
  },
};
</script>
