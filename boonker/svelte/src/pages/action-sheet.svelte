<script>
  import { onDestroy } from 'svelte';
  import {
    t4,
    Navbar,
    Page,
    BlockTitle,
    Block,
    Button,
    Actions,
    ActionsGroup,
    ActionsLabel,
    ActionsButton,
  } from 'techno4-svelte';

  let actionsOneGroupOpened = false;
  let actionGridOpened = false;

  let actionsToPopover;
  let buttonToPopoverWrapper;

  function openActionsPopover() {
    if (!actionsToPopover) {
      actionsToPopover = t4.actions.create({
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
        targetEl: buttonToPopoverWrapper.querySelector('.button-to-popover'),
      });
    }

    // Open
    actionsToPopover.open();
  }

  onDestroy(() => {
    if (actionsToPopover) {
      actionsToPopover.destroy();
    }
  });
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<Page>
  <Navbar title="Action Sheet" backLink="Back" />
  <Block strong>
    <p class="row">
      <!-- One group, open by direct accessing instance .open() method -->
      <Button
        class="col"
        fill
        onClick={() => {
          actionsOneGroupOpened = true;
        }}>
        One group
      </Button>
      <!--  Two groups, open by "actionsOpen" attribute -->
      <Button class="col" fill actionsOpen="#actions-two-groups">Two groups</Button>
    </p>
    <p>
      <!-- Actions Grid, open by changing actionGridOpened state property -->
      <Button
        fill
        onClick={() => {
          actionGridOpened = true;
        }}>
        Action Grid
      </Button>
    </p>
  </Block>

  <BlockTitle>Action Sheet To Popover</BlockTitle>
  <Block strong>
    <p bind:this={buttonToPopoverWrapper}>
      Action Sheet can be automatically converted to Popover (for tablets). This button will open
      Popover on tablets and Action Sheet on phones:
      <Button style="display: inline-block" class="button-to-popover" onClick={openActionsPopover}>
        Actions
      </Button>
    </p>
  </Block>

  <!-- One Group -->
  <Actions bind:opened={actionsOneGroupOpened}>
    <ActionsGroup>
      <ActionsLabel>Do something</ActionsLabel>
      <ActionsButton bold>Button 1</ActionsButton>
      <ActionsButton>Button 2</ActionsButton>
      <ActionsButton color="red">Cancel</ActionsButton>
    </ActionsGroup>
  </Actions>

  <!-- Two Groups -->
  <Actions id="actions-two-groups">
    <ActionsGroup>
      <ActionsLabel>Do something</ActionsLabel>
      <ActionsButton bold>Button 1</ActionsButton>
      <ActionsButton>Button 2</ActionsButton>
    </ActionsGroup>
    <ActionsGroup>
      <ActionsButton color="red">Cancel</ActionsButton>
    </ActionsGroup>
  </Actions>

  <!-- Grid -->
  <Actions grid={true} bind:opened={actionGridOpened}>
    <ActionsGroup>
      <ActionsButton>
        <img
          slot="media"
          src="https://cdn.techno4.io/placeholder/people-96x96-1.jpg"
          width="48"
          style="max-width: 100%" />
        <span>Button 1</span>
      </ActionsButton>
      <ActionsButton>
        <img
          slot="media"
          src="https://cdn.techno4.io/placeholder/people-96x96-2.jpg"
          width="48"
          style="max-width: 100%" />
        <span>Button 2</span>
      </ActionsButton>
      <ActionsButton>
        <img
          slot="media"
          src="https://cdn.techno4.io/placeholder/people-96x96-3.jpg"
          width="48"
          style="max-width: 100%" />
        <span>Button 3</span>
      </ActionsButton>
    </ActionsGroup>
    <ActionsGroup>
      <ActionsButton>
        <img
          slot="media"
          src="https://cdn.techno4.io/placeholder/fashion-96x96-4.jpg"
          width="48"
          style="max-width: 100%" />
        <span>Button 4</span>
      </ActionsButton>
      <ActionsButton>
        <img
          slot="media"
          src="https://cdn.techno4.io/placeholder/fashion-96x96-5.jpg"
          width="48"
          style="max-width: 100%" />
        <span>Button 5</span>
      </ActionsButton>
      <ActionsButton>
        <img
          slot="media"
          src="https://cdn.techno4.io/placeholder/fashion-96x96-6.jpg"
          width="48"
          style="max-width: 100%" />
        <span>Button 6</span>
      </ActionsButton>
    </ActionsGroup>
  </Actions>
</Page>
