<template>
  <t4-page>
    <t4-navbar title="Chips" back-link="Back"></t4-navbar>
    <t4-block-title>Chips With Text</t4-block-title>
    <t4-block strong>
      <t4-chip text="Example Chip"></t4-chip>
      <t4-chip text="Another Chip"></t4-chip>
      <t4-chip text="One More Chip"></t4-chip>
      <t4-chip text="Fourth Chip"></t4-chip>
      <t4-chip text="Last One"></t4-chip>
    </t4-block>
    <t4-block-title>Outline Chips</t4-block-title>
    <t4-block strong>
      <t4-chip outline text="Example Chip"></t4-chip>
      <t4-chip outline text="Another Chip"></t4-chip>
      <t4-chip outline text="One More Chip"></t4-chip>
      <t4-chip outline text="Fourth Chip"></t4-chip>
      <t4-chip outline text="Last One"></t4-chip>
    </t4-block>
    <t4-block-title>Icon Chips</t4-block-title>
    <t4-block strong>
      <t4-chip text="Add Contact" media-bg-color="blue">
        <template #media>
          <t4-icon ios="t4:plus_circle" aurora="t4:plus_circle" md="material:add_circle" />
        </template>
      </t4-chip>
      <t4-chip text="London" media-bg-color="green">
        <template #media>
          <t4-icon ios="t4:compass" aurora="t4:compass" md="material:location_on" />
        </template>
      </t4-chip>
      <t4-chip text="John Doe" media-bg-color="red">
        <template #media>
          <t4-icon ios="t4:person" aurora="t4:person" md="material:person" />
        </template>
      </t4-chip>
    </t4-block>
    <t4-block-title>Contact Chips</t4-block-title>
    <t4-block strong>
      <t4-chip text="Jane Doe">
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/people-100x100-9.jpg" />
        </template>
      </t4-chip>
      <t4-chip text="John Doe">
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/people-100x100-3.jpg" />
        </template>
      </t4-chip>
      <t4-chip text="Adam Smith">
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/people-100x100-7.jpg" />
        </template>
      </t4-chip>
      <t4-chip text="Jennifer" media-bg-color="pink" media="J"></t4-chip>
      <t4-chip text="Chris" media-bg-color="yellow" media-text-color="black" media="C"></t4-chip>
      <t4-chip text="Kate" media-bg-color="red" media="K"></t4-chip>
    </t4-block>
    <t4-block-title>Deletable Chips / Tags</t4-block-title>
    <t4-block strong>
      <t4-chip text="Example Chip" deleteable @delete="deleteChip"></t4-chip>
      <t4-chip
        text="Chris"
        media="C"
        media-bg-color="orange"
        text-color="black"
        deleteable
        @delete="deleteChip"
      ></t4-chip>
      <t4-chip text="Jane Doe" deleteable @delete="deleteChip">
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/people-100x100-9.jpg" />
        </template>
      </t4-chip>
      <t4-chip text="One More Chip" deleteable @delete="deleteChip"></t4-chip>
      <t4-chip
        text="Jennifer"
        media-bg-color="pink"
        media="J"
        deleteable
        @delete="deleteChip"
      ></t4-chip>
      <t4-chip text="Adam Smith" deleteable @delete="deleteChip">
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/people-100x100-7.jpg" />
        </template>
      </t4-chip>
    </t4-block>
    <t4-block-title>Color Chips</t4-block-title>
    <t4-block strong>
      <t4-chip text="Red Chip" color="red"></t4-chip>
      <t4-chip text="Green Chip" color="green"></t4-chip>
      <t4-chip text="Blue Chip" color="blue"></t4-chip>
      <t4-chip text="Orange Chip" color="orange"></t4-chip>
      <t4-chip text="Pink Chip" color="pink"></t4-chip>
      <t4-chip outline text="Red Chip" color="red"></t4-chip>
      <t4-chip outline text="Green Chip" color="green"></t4-chip>
      <t4-chip outline text="Blue Chip" color="blue"></t4-chip>
      <t4-chip outline text="Orange Chip" color="orange"></t4-chip>
      <t4-chip outline text="Pink Chip" color="pink"></t4-chip>
    </t4-block>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4BlockTitle, t4Chip, t4Block, t4Icon, t4 } from 'techno4-vue';
import $ from 'dom64';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4Chip,
    t4Block,
    t4Icon,
  },
  methods: {
    deleteChip(e) {
      const target = e.target;
      t4.dialog.confirm('Do you want to delete this tiny demo Chip?', () => {
        $(target).parents('.chip').remove();
      });
    },
  },
};
</script>
