<script>
  import {
    t4,
    Navbar,
    Page,
    BlockTitle,
    List,
    ListItem,
    SwipeoutActions,
    SwipeoutButton,
    Block,
  } from 'techno4-svelte';

  let actions;

  function more() {
    actions.open();
  }
  function mark() {
    t4.dialog.alert('Mark');
  }
  function reply() {
    t4.dialog.alert('Reply');
  }
  function forward() {
    t4.dialog.alert('Forward');
  }
  function onDeleted() {
    t4.dialog.alert('Thanks, item removed!');
  }
  function onPageBeforeRemove() {
    actions.destroy();
  }
  function onPageInit() {
    actions = t4.actions.create({
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
  }
</script>

<Page {onPageBeforeRemove} {onPageInit}>
  <Navbar title="Swipeout" backLink="Back" />

  <Block>
    <p>
      Swipe out actions on list elements is one of the most awesome t4 features. It allows you to
      call hidden menu for each list element where you can put default ready-to use delete button or
      any other buttons for some required actions.
    </p>
  </Block>

  <BlockTitle>Swipe to delete with confirm modal</BlockTitle>
  <List>
    <ListItem swipeout title="Swipe left on me please">
      <i slot="media" class="icon icon-t4" />
      <SwipeoutActions right>
        <SwipeoutButton delete confirmText="Are you sure you want to delete this item?">
          Delete
        </SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
    <ListItem swipeout title="Swipe left on me too">
      <i slot="media" class="icon icon-t4" />
      <SwipeoutActions right>
        <SwipeoutButton delete confirmText="Are you sure you want to delete this item?">
          Delete
        </SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
    <ListItem title="I am not removable"><i slot="media" class="icon icon-t4" /></ListItem>
  </List>

  <BlockTitle>Swipe to delete without confirm</BlockTitle>
  <List>
    <ListItem swipeout title="Swipe left on me please">
      <i slot="media" class="icon icon-t4" />
      <SwipeoutActions right>
        <SwipeoutButton delete>Delete</SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
    <ListItem swipeout title="Swipe left on me too">
      <i slot="media" class="icon icon-t4" />
      <SwipeoutActions right>
        <SwipeoutButton delete>Delete</SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
    <ListItem title="I am not removable"><i slot="media" class="icon icon-t4" /></ListItem>
  </List>

  <BlockTitle>Swipe for actions</BlockTitle>
  <List>
    <ListItem swipeout title="Swipe left on me please">
      <i slot="media" class="icon icon-t4" />
      <SwipeoutActions right>
        <SwipeoutButton onClick={more}>More</SwipeoutButton>
        <SwipeoutButton delete>Delete</SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
    <ListItem swipeout title="Swipe left on me too">
      <i slot="media" class="icon icon-t4" />
      <SwipeoutActions right>
        <SwipeoutButton onClick={more}>More</SwipeoutButton>
        <SwipeoutButton delete>Delete</SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
    <ListItem swipeout title="You can't delete me">
      <i slot="media" class="icon icon-t4" />
      <SwipeoutActions right>
        <SwipeoutButton onClick={more}>More</SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
  </List>

  <BlockTitle>With callback on remove</BlockTitle>
  <List>
    <ListItem swipeout onSwipeoutDeleted={onDeleted} title="Swipe left on me please">
      <i slot="media" class="icon icon-t4" />
      <SwipeoutActions right>
        <SwipeoutButton delete>Delete</SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
    <ListItem swipeout onSwipeoutDeleted={onDeleted} title="Swipe left on me too">
      <i slot="media" class="icon icon-t4" />
      <SwipeoutActions right>
        <SwipeoutButton delete>Delete</SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
    <ListItem title="I am not removable"><i slot="media" class="icon icon-t4" /></ListItem>
  </List>

  <BlockTitle>With actions on left side (swipe to right)</BlockTitle>
  <List>
    <ListItem swipeout title="Swipe right on me please">
      <i slot="media" class="icon icon-t4" />
      <SwipeoutActions left>
        <SwipeoutButton color="green" onClick={reply}>Reply</SwipeoutButton>
        <SwipeoutButton color="blue" onClick={forward}>Forward</SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
    <ListItem swipeout title="Swipe right on me too">
      <i slot="media" class="icon icon-t4" />
      <SwipeoutActions left>
        <SwipeoutButton color="green" onClick={reply}>Reply</SwipeoutButton>
        <SwipeoutButton color="blue" onClick={forward}>Forward</SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
  </List>

  <BlockTitle>On both sides with overswipes</BlockTitle>
  <List mediaList>
    <ListItem
      swipeout
      title="Facebook"
      after="17:14"
      subtitle="New messages from John Doe"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.">
      <SwipeoutActions left>
        <SwipeoutButton overswipe color="green" onClick={reply}>Reply</SwipeoutButton>
        <SwipeoutButton color="blue" onClick={forward}>Forward</SwipeoutButton>
      </SwipeoutActions>
      <SwipeoutActions right>
        <SwipeoutButton onClick={more}>More</SwipeoutButton>
        <SwipeoutButton color="orange" onClick={mark}>Mark</SwipeoutButton>
        <SwipeoutButton delete overswipe confirmText="Are you sure you want to delete this item?">
          Delete
        </SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
    <ListItem
      swipeout
      title="John Doe (via Twitter)"
      after="17:11"
      subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.">
      <SwipeoutActions left>
        <SwipeoutButton overswipe color="green" onClick={reply}>Reply</SwipeoutButton>
        <SwipeoutButton color="blue" onClick={forward}>Forward</SwipeoutButton>
      </SwipeoutActions>
      <SwipeoutActions right>
        <SwipeoutButton onClick={more}>More</SwipeoutButton>
        <SwipeoutButton color="orange" onClick={mark}>Mark</SwipeoutButton>
        <SwipeoutButton delete overswipe confirmText="Are you sure you want to delete this item?">
          Delete
        </SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
    <ListItem
      swipeout
      title="Facebook"
      after="16:48"
      subtitle="New messages from John Doe"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.">
      <SwipeoutActions left>
        <SwipeoutButton overswipe color="green" onClick={reply}>Reply</SwipeoutButton>
        <SwipeoutButton color="blue" onClick={forward}>Forward</SwipeoutButton>
      </SwipeoutActions>
      <SwipeoutActions right>
        <SwipeoutButton onClick={more}>More</SwipeoutButton>
        <SwipeoutButton color="orange" onClick={mark}>Mark</SwipeoutButton>
        <SwipeoutButton delete overswipe confirmText="Are you sure you want to delete this item?">
          Delete
        </SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
    <ListItem
      swipeout
      title="John Doe (via Twitter)"
      after="15:32"
      subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.">
      <SwipeoutActions left>
        <SwipeoutButton overswipe color="green" onClick={reply}>Reply</SwipeoutButton>
        <SwipeoutButton color="blue" onClick={forward}>Forward</SwipeoutButton>
      </SwipeoutActions>
      <SwipeoutActions right>
        <SwipeoutButton onClick={more}>More</SwipeoutButton>
        <SwipeoutButton color="orange" onClick={mark}>Mark</SwipeoutButton>
        <SwipeoutButton delete overswipe confirmText="Are you sure you want to delete this item?">
          Delete
        </SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
  </List>
</Page>
