<script>
  import { Actions, ActionsLabel, ActionsGroup, ActionsButton } from 'techno4-svelte';
</script>

<Actions>
  <ActionsGroup>
    <ActionsLabel>This Action Sheet was loaded as standalone component</ActionsLabel>
    <ActionsButton>Action 1</ActionsButton>
    <ActionsButton>Action 2</ActionsButton>
  </ActionsGroup>
  <ActionsGroup>
    <ActionsButton color="red">Cancel</ActionsButton>
  </ActionsGroup>
</Actions>
