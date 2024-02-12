<template>
  <t4-actions>
    <t4-actions-group>
      <t4-actions-label>This Action Sheet was loaded as standalone component</t4-actions-label>
      <t4-actions-button>Action 1</t4-actions-button>
      <t4-actions-button>Action 2</t4-actions-button>
    </t4-actions-group>
    <t4-actions-group>
      <t4-actions-button color="red">Cancel</t4-actions-button>
    </t4-actions-group>
  </t4-actions>
</template>
<script>
import { t4Actions, t4ActionsLabel, t4ActionsGroup, t4ActionsButton } from 'techno4-vue';

export default {
  components: {
    t4Actions,
    t4ActionsLabel,
    t4ActionsGroup,
    t4ActionsButton,
  },
};
</script>
