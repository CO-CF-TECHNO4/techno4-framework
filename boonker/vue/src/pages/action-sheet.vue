<template>
  <t4-page @page:beforeremove="onPageBeforeRemove">
    <t4-navbar title="Action Sheet" back-link="Back"></t4-navbar>
    <t4-block strong>
      <p class="row">
        <!-- One group, open by direct accessing instance .open() method -->
        <t4-button class="col" fill actions-open="#actions-one-group">One group</t4-button>
        <!-- Two groups, open by "actions-open" attribute -->
        <t4-button class="col" fill actions-open="#actions-two-groups">Two groups</t4-button>
      </p>
      <p>
        <!-- Actions Grid, open by changing actionGridOpened prop -->
        <t4-button fill @click="actionGridOpened = true">Action Grid</t4-button>
      </p>
    </t4-block>

    <t4-block-title>Action Sheet To Popover</t4-block-title>
    <t4-block strong>
      <p>
        Action Sheet can be automatically converted to Popover (for tablets). This button will open
        Popover on tablets and Action Sheet on phones:
        <t4-button
          style="display: inline-block"
          class="button-to-popover"
          @click="openActionsPopover"
          >Actions</t4-button
        >
      </p>
    </t4-block>

    <!-- One Group -->
    <t4-actions id="actions-one-group">
      <t4-actions-group>
        <t4-actions-label>Do something</t4-actions-label>
        <t4-actions-button bold>Button 1</t4-actions-button>
        <t4-actions-button>Button 2</t4-actions-button>
        <t4-actions-button color="red">Cancel</t4-actions-button>
      </t4-actions-group>
    </t4-actions>

    <!-- Two Groups -->
    <t4-actions id="actions-two-groups">
      <t4-actions-group>
        <t4-actions-label>Do something</t4-actions-label>
        <t4-actions-button bold>Button 1</t4-actions-button>
        <t4-actions-button>Button 2</t4-actions-button>
      </t4-actions-group>
      <t4-actions-group>
        <t4-actions-button color="red">Cancel</t4-actions-button>
      </t4-actions-group>
    </t4-actions>

    <!-- Grid -->
    <t4-actions v-model:opened="actionGridOpened" :grid="true">
      <t4-actions-group>
        <t4-actions-button>
          <template #media>
            <img
              src="https://cdn.techno4.io/placeholder/people-96x96-1.jpg"
              width="48"
              style="max-width: 100%"
            />
          </template>
          <span>Button 1</span>
        </t4-actions-button>
        <t4-actions-button>
          <template #media>
            <img
              src="https://cdn.techno4.io/placeholder/people-96x96-2.jpg"
              width="48"
              style="max-width: 100%"
            />
          </template>
          <span>Button 2</span>
        </t4-actions-button>
        <t4-actions-button>
          <template #media>
            <img
              src="https://cdn.techno4.io/placeholder/people-96x96-3.jpg"
              width="48"
              style="max-width: 100%"
            />
          </template>
          <span>Button 3</span>
        </t4-actions-button>
      </t4-actions-group>
      <t4-actions-group>
        <t4-actions-button>
          <template #media>
            <img
              src="https://cdn.techno4.io/placeholder/fashion-96x96-4.jpg"
              width="48"
              style="max-width: 100%"
            />
          </template>
          <span>Button 4</span>
        </t4-actions-button>
        <t4-actions-button>
          <template #media>
            <img
              src="https://cdn.techno4.io/placeholder/fashion-96x96-5.jpg"
              width="48"
              style="max-width: 100%"
            />
          </template>
          <span>Button 5</span>
        </t4-actions-button>
        <t4-actions-button>
          <template #media>
            <img
              src="https://cdn.techno4.io/placeholder/fashion-96x96-6.jpg"
              width="48"
              style="max-width: 100%"
            />
          </template>
          <span>Button 6</span>
        </t4-actions-button>
      </t4-actions-group>
    </t4-actions>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4BlockTitle,
  t4Block,
  t4Button,
  t4Actions,
  t4ActionsGroup,
  t4ActionsLabel,
  t4ActionsButton,
  t4,
} from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4BlockTitle,
    t4Block,
    t4Button,
    t4Actions,
    t4ActionsGroup,
    t4ActionsLabel,
    t4ActionsButton,
  },
  props: {
    id: String,
  },
  data() {
    return {
      actionGridOpened: false,
    };
  },
  methods: {
    openActionsPopover() {
      const self = this;
      if (!self.actionsToPopover) {
        self.actionsToPopover = t4.actions.create({
          buttons: [
            {
              text: 'Do something',
              label: true,
            },
            {
              text: 'Button 1',
              bold: true,
            },
            {
              text: 'Button 2',
            },
            {
              text: 'Cancel',
              color: 'red',
            },
          ],
          // Need to specify popover target
          targetEl: self.$el.querySelector('.button-to-popover'),
        });
      }

      // Open
      self.actionsToPopover.open();
    },
    onPageBeforeRemove() {
      const self = this;
      if (self.actionsToPopover) {
        self.actionsToPopover.destroy();
      }
    },
  },
};
</script>
