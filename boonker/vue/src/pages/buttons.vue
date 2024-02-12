<template>
  <t4-page>
    <t4-navbar title="Buttons" back-link="Back"></t4-navbar>

    <t4-block-title>Usual Buttons</t4-block-title>
    <t4-block strong>
      <t4-row>
        <t4-col>
          <t4-button>Button</t4-button>
        </t4-col>
        <t4-col>
          <t4-button>Button</t4-button>
        </t4-col>
        <t4-col>
          <t4-button round>Round</t4-button>
        </t4-col>
      </t4-row>
    </t4-block>

    <t4-block-title>Fill Buttons</t4-block-title>
    <t4-block strong>
      <t4-row>
        <t4-col>
          <t4-button fill>Button</t4-button>
        </t4-col>
        <t4-col>
          <t4-button fill>Button</t4-button>
        </t4-col>
        <t4-col>
          <t4-button fill round>Round</t4-button>
        </t4-col>
      </t4-row>
    </t4-block>

    <t4-block-title>Outline Buttons</t4-block-title>
    <t4-block strong>
      <t4-row>
        <t4-col>
          <t4-button outline>Button</t4-button>
        </t4-col>
        <t4-col>
          <t4-button outline>Button</t4-button>
        </t4-col>
        <t4-col>
          <t4-button outline round>Round</t4-button>
        </t4-col>
      </t4-row>
    </t4-block>

    <t4-block-title>Raised Buttons</t4-block-title>
    <t4-block strong>
      <t4-row tag="p">
        <t4-col tag="span">
          <t4-button raised>Button</t4-button>
        </t4-col>
        <t4-col tag="span">
          <t4-button raised fill>Fill</t4-button>
        </t4-col>
        <t4-col tag="span">
          <t4-button raised outline>Outline</t4-button>
        </t4-col>
      </t4-row>
      <t4-row tag="p">
        <t4-col tag="span">
          <t4-button raised round>Round</t4-button>
        </t4-col>
        <t4-col tag="span">
          <t4-button raised fill round>Fill</t4-button>
        </t4-col>
        <t4-col tag="span">
          <t4-button raised outline round>Outline</t4-button>
        </t4-col>
      </t4-row>
    </t4-block>

    <t4-block-title>Segmented</t4-block-title>
    <t4-block strong>
      <t4-segmented tag="p">
        <t4-button>Button</t4-button>
        <t4-button>Button</t4-button>
        <t4-button active>Active</t4-button>
      </t4-segmented>
      <t4-segmented strong tag="p">
        <t4-button :active="activeStrongButton === 0" @click="activeStrongButton = 0"
          >Button</t4-button
        >
        <t4-button :active="activeStrongButton === 1" @click="activeStrongButton = 1"
          >Button</t4-button
        >
        <t4-button :active="activeStrongButton === 2" @click="activeStrongButton = 2"
          >Button</t4-button
        >
      </t4-segmented>
      <t4-segmented raised tag="p">
        <t4-button>Button</t4-button>
        <t4-button>Button</t4-button>
        <t4-button active>Active</t4-button>
      </t4-segmented>
      <t4-segmented tag="p">
        <t4-button outline>Outline</t4-button>
        <t4-button outline>Outline</t4-button>
        <t4-button outline active>Active</t4-button>
      </t4-segmented>
      <t4-segmented raised round tag="p">
        <t4-button round>Button</t4-button>
        <t4-button round>Button</t4-button>
        <t4-button round active>Active</t4-button>
      </t4-segmented>
      <t4-segmented round tag="p">
        <t4-button round outline>Outline</t4-button>
        <t4-button round outline>Outline</t4-button>
        <t4-button round outline active>Active</t4-button>
      </t4-segmented>
    </t4-block>

    <t4-block-title>Large Buttons</t4-block-title>
    <t4-block strong>
      <t4-row tag="p">
        <t4-col tag="span">
          <t4-button large>Button</t4-button>
        </t4-col>
        <t4-col tag="span">
          <t4-button large fill>Fill</t4-button>
        </t4-col>
      </t4-row>
      <t4-row tag="p">
        <t4-col tag="span">
          <t4-button large raised>Raised</t4-button>
        </t4-col>
        <t4-col tag="span">
          <t4-button large raised fill>Raised Fill</t4-button>
        </t4-col>
      </t4-row>
    </t4-block>

    <t4-block-title>Small Buttons</t4-block-title>
    <t4-block strong>
      <t4-row tag="p">
        <t4-col tag="span">
          <t4-button small>Button</t4-button>
        </t4-col>
        <t4-col tag="span">
          <t4-button small outline>Outline</t4-button>
        </t4-col>
        <t4-col tag="span">
          <t4-button small fill>Fill</t4-button>
        </t4-col>
      </t4-row>
      <t4-row tag="p">
        <t4-col tag="span">
          <t4-button small round>Button</t4-button>
        </t4-col>
        <t4-col tag="span">
          <t4-button small outline round>Outline</t4-button>
        </t4-col>
        <t4-col tag="span">
          <t4-button small fill round>Fill</t4-button>
        </t4-col>
      </t4-row>
    </t4-block>

    <t4-block-title>Preloader Buttons</t4-block-title>
    <t4-block strong>
      <t4-row tag="p">
        <t4-col tag="span">
          <t4-button preloader :loading="isLoading1" large @click="load1"> Load </t4-button>
        </t4-col>
        <t4-col tag="span">
          <t4-button preloader :loading="isLoading2" large fill @click="load2"> Load </t4-button>
        </t4-col>
      </t4-row>
    </t4-block>

    <t4-block-title>Color Buttons</t4-block-title>
    <t4-block strong>
      <t4-row>
        <t4-col>
          <t4-button color="red">Red</t4-button>
        </t4-col>
        <t4-col>
          <t4-button color="green">Green</t4-button>
        </t4-col>
        <t4-col>
          <t4-button color="blue">Blue</t4-button>
        </t4-col>
      </t4-row>
    </t4-block>

    <t4-block-title>Color Fill Buttons</t4-block-title>
    <t4-block strong>
      <t4-row>
        <t4-col>
          <t4-button fill color="red">Red</t4-button>
        </t4-col>
        <t4-col>
          <t4-button fill color="green">Green</t4-button>
        </t4-col>
        <t4-col>
          <t4-button fill color="blue">Blue</t4-button>
        </t4-col>
      </t4-row>
    </t4-block>

    <t4-block-title>List-Block Buttons</t4-block-title>
    <t4-list inset>
      <t4-list-button title="List Button 1"></t4-list-button>
      <t4-list-button title="List Button 2"></t4-list-button>
      <t4-list-button title="List Button 3"></t4-list-button>
    </t4-list>
    <t4-list inset>
      <t4-list-button title="Large Red Button" color="red"></t4-list-button>
    </t4-list>
  </t4-page>
</template>
<script>
import { ref } from 'vue';
import {
  t4Navbar,
  t4Page,
  t4BlockTitle,
  t4Block,
  t4List,
  t4Row,
  t4Col,
  t4ListButton,
  t4Button,
  t4Segmented,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4Block,
    t4List,
    t4Row,
    t4Col,
    t4ListButton,
    t4Button,
    t4Segmented,
  },
  setup() {
    const activeStrongButton = ref(0);
    const isLoading1 = ref(false);
    const isLoading2 = ref(false);

    const load1 = () => {
      if (isLoading1.value) return;
      isLoading1.value = true;
      setTimeout(() => {
        isLoading1.value = false;
      }, 4000);
    };

    const load2 = () => {
      if (isLoading2.value) return;
      isLoading2.value = true;
      setTimeout(() => {
        isLoading2.value = false;
      }, 4000);
    };

    return {
      activeStrongButton,
      isLoading1,
      isLoading2,
      load1,
      load2,
    };
  },
};
</script>
