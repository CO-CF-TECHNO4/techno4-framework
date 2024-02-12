<template>
  <t4-page @page:beforeremove="onPageBeforeRemove" @page:init="onPageInit">
    <t4-navbar title="Swipeout" back-link="Back"></t4-navbar>

    <t4-block>
      <p>
        Swipe out actions on list elements is one of the most awesome t4 features. It allows you to
        call hidden menu for each list element where you can put default ready-to use delete button
        or any other buttons for some required actions.
      </p>
    </t4-block>

    <t4-block-title>Swipe to delete with confirm modal</t4-block-title>
    <t4-list>
      <t4-list-item swipeout title="Swipe left on me please">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
        <t4-swipeout-actions right>
          <t4-swipeout-button delete confirm-text="Are you sure you want to delete this item?"
            >Delete</t4-swipeout-button
          >
        </t4-swipeout-actions>
      </t4-list-item>
      <t4-list-item swipeout title="Swipe left on me too">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
        <t4-swipeout-actions right>
          <t4-swipeout-button delete confirm-text="Are you sure you want to delete this item?"
            >Delete</t4-swipeout-button
          >
        </t4-swipeout-actions>
      </t4-list-item>
      <t4-list-item title="I am not removable">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
    </t4-list>

    <t4-block-title>Swipe to delete without confirm</t4-block-title>
    <t4-list>
      <t4-list-item swipeout title="Swipe left on me please">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
        <t4-swipeout-actions right>
          <t4-swipeout-button delete>Delete</t4-swipeout-button>
        </t4-swipeout-actions>
      </t4-list-item>
      <t4-list-item swipeout title="Swipe left on me too">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
        <t4-swipeout-actions right>
          <t4-swipeout-button delete>Delete</t4-swipeout-button>
        </t4-swipeout-actions>
      </t4-list-item>
      <t4-list-item title="I am not removable">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
    </t4-list>

    <t4-block-title>Swipe for actions</t4-block-title>
    <t4-list>
      <t4-list-item swipeout title="Swipe left on me please">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
        <t4-swipeout-actions right>
          <t4-swipeout-button @click="more">More</t4-swipeout-button>
          <t4-swipeout-button delete>Delete</t4-swipeout-button>
        </t4-swipeout-actions>
      </t4-list-item>
      <t4-list-item swipeout title="Swipe left on me too">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
        <t4-swipeout-actions right>
          <t4-swipeout-button @click="more">More</t4-swipeout-button>
          <t4-swipeout-button delete>Delete</t4-swipeout-button>
        </t4-swipeout-actions>
      </t4-list-item>
      <t4-list-item swipeout title="You can't delete me">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
        <t4-swipeout-actions right>
          <t4-swipeout-button @click="more">More</t4-swipeout-button>
        </t4-swipeout-actions>
      </t4-list-item>
    </t4-list>

    <t4-block-title>With callback on remove</t4-block-title>
    <t4-list>
      <t4-list-item swipeout title="Swipe left on me please" @swipeout:deleted="onDeleted">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
        <t4-swipeout-actions right>
          <t4-swipeout-button delete>Delete</t4-swipeout-button>
        </t4-swipeout-actions>
      </t4-list-item>
      <t4-list-item swipeout title="Swipe left on me too" @swipeout:deleted="onDeleted">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
        <t4-swipeout-actions right>
          <t4-swipeout-button delete>Delete</t4-swipeout-button>
        </t4-swipeout-actions>
      </t4-list-item>
      <t4-list-item title="I am not removable">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
    </t4-list>

    <t4-block-title>With actions on left side (swipe to right)</t4-block-title>
    <t4-list>
      <t4-list-item swipeout title="Swipe right on me please">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
        <t4-swipeout-actions left>
          <t4-swipeout-button color="green" @click="reply">Reply</t4-swipeout-button>
          <t4-swipeout-button color="blue" @click="forward">Forward</t4-swipeout-button>
        </t4-swipeout-actions>
      </t4-list-item>
      <t4-list-item swipeout title="Swipe right on me too">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
        <t4-swipeout-actions left>
          <t4-swipeout-button color="green" @click="reply">Reply</t4-swipeout-button>
          <t4-swipeout-button color="blue" @click="forward">Forward</t4-swipeout-button>
        </t4-swipeout-actions>
      </t4-list-item>
    </t4-list>

    <t4-block-title>On both sides with overswipes</t4-block-title>
    <t4-list media-list>
      <t4-list-item
        swipeout
        title="Facebook"
        after="17:14"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <t4-swipeout-actions left>
          <t4-swipeout-button overswipe color="green" @click="reply">Reply</t4-swipeout-button>
          <t4-swipeout-button color="blue" @click="forward">Forward</t4-swipeout-button>
        </t4-swipeout-actions>
        <t4-swipeout-actions right>
          <t4-swipeout-button @click="more">More</t4-swipeout-button>
          <t4-swipeout-button color="orange" @click="mark">Mark</t4-swipeout-button>
          <t4-swipeout-button
            delete
            overswipe
            confirm-text="Are you sure you want to delete this item?"
            >Delete</t4-swipeout-button
          >
        </t4-swipeout-actions>
      </t4-list-item>
      <t4-list-item
        swipeout
        title="John Doe (via Twitter)"
        after="17:11"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <t4-swipeout-actions left>
          <t4-swipeout-button overswipe color="green" @click="reply">Reply</t4-swipeout-button>
          <t4-swipeout-button color="blue" @click="forward">Forward</t4-swipeout-button>
        </t4-swipeout-actions>
        <t4-swipeout-actions right>
          <t4-swipeout-button @click="more">More</t4-swipeout-button>
          <t4-swipeout-button color="orange" @click="mark">Mark</t4-swipeout-button>
          <t4-swipeout-button
            delete
            overswipe
            confirm-text="Are you sure you want to delete this item?"
            >Delete</t4-swipeout-button
          >
        </t4-swipeout-actions>
      </t4-list-item>
      <t4-list-item
        swipeout
        title="Facebook"
        after="16:48"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <t4-swipeout-actions left>
          <t4-swipeout-button overswipe color="green" @click="reply">Reply</t4-swipeout-button>
          <t4-swipeout-button color="blue" @click="forward">Forward</t4-swipeout-button>
        </t4-swipeout-actions>
        <t4-swipeout-actions right>
          <t4-swipeout-button @click="more">More</t4-swipeout-button>
          <t4-swipeout-button color="orange" @click="mark">Mark</t4-swipeout-button>
          <t4-swipeout-button
            delete
            overswipe
            confirm-text="Are you sure you want to delete this item?"
            >Delete</t4-swipeout-button
          >
        </t4-swipeout-actions>
      </t4-list-item>
      <t4-list-item
        swipeout
        title="John Doe (via Twitter)"
        after="15:32"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <t4-swipeout-actions left>
          <t4-swipeout-button overswipe color="green" @click="reply">Reply</t4-swipeout-button>
          <t4-swipeout-button color="blue" @click="forward">Forward</t4-swipeout-button>
        </t4-swipeout-actions>
        <t4-swipeout-actions right>
          <t4-swipeout-button @click="more">More</t4-swipeout-button>
          <t4-swipeout-button color="orange" @click="mark">Mark</t4-swipeout-button>
          <t4-swipeout-button
            delete
            overswipe
            confirm-text="Are you sure you want to delete this item?"
            >Delete</t4-swipeout-button
          >
        </t4-swipeout-actions>
      </t4-list-item>
    </t4-list>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4BlockTitle,
  t4List,
  t4ListItem,
  t4Icon,
  t4SwipeoutActions,
  t4SwipeoutButton,
  t4Block,
  t4,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4List,
    t4ListItem,
    t4Icon,
    t4SwipeoutActions,
    t4SwipeoutButton,
    t4Block,
  },
  methods: {
    more() {
      const self = this;
      self.actions.open();
    },
    mark() {
      t4.dialog.alert('Mark');
    },
    reply() {
      t4.dialog.alert('Reply');
    },
    forward() {
      t4.dialog.alert('Forward');
    },
    onDeleted() {
      t4.dialog.alert('Thanks, item removed!');
    },
    onPageBeforeRemove() {
      const self = this;
      self.actions.destroy();
    },
    onPageInit() {
      const self = this;
      self.actions = t4.actions.create({
        buttons: [
          [
            {
              text: 'Here comes some optional description or warning for actions below',
              label: true,
            },
            {
              text: 'Action 1',
            },
            {
              text: 'Action 2',
            },
          ],
          [
            {
              text: 'Cancel',
              bold: true,
            },
          ],
        ],
      });
    },
  },
};
</script>
