<script>
  import { t4, Navbar, Page, BlockTitle, Block, Button, Row } from 'techno4-svelte';

  function openAlert() {
    t4.dialog.alert('Hello!');
  }
  function openConfirm() {
    t4.dialog.confirm('Are you feel good today?', () => {
      t4.dialog.alert('Great!');
    });
  }
  function openPrompt() {
    t4.dialog.prompt('What is your name?', (name) => {
      t4.dialog.confirm(`Are you sure that your name is ${name}?`, () => {
        t4.dialog.alert(`Ok, your name is ${name}`);
      });
    });
  }
  function openLogin() {
    t4.dialog.login('Enter your username and password', (username, password) => {
      t4.dialog.alert(`Thank you!<br>Username:${username}<br>Password:${password}`);
    });
  }
  function openPassword() {
    t4.dialog.password('Enter your password', (password) => {
      t4.dialog.alert(`Thank you!<br>Password:${password}`);
    });
  }
  function openAlerts() {
    t4.dialog.alert('Alert 1');
    t4.dialog.alert('Alert 2');
    t4.dialog.alert('Alert 3');
    t4.dialog.alert('Alert 4');
    t4.dialog.alert('Alert 5');
  }
  function openVerticalButtons() {
    t4.dialog
      .create({
        title: 'Vertical Buttons',
        buttons: [
          {
            text: 'Button 1',
          },
          {
            text: 'Button 2',
          },
          {
            text: 'Button 3',
          },
        ],
        verticalButtons: true,
      })
      .open();
  }
  function openPreloader() {
    t4.dialog.preloader();
    setTimeout(() => {
      t4.dialog.close();
    }, 3000);
  }
  function openCustomPreloader() {
    t4.dialog.preloader('My text...');
    setTimeout(() => {
      t4.dialog.close();
    }, 3000);
  }
  function openInfiniteProgress() {
    t4.dialog.progress();
    setTimeout(() => {
      t4.dialog.close();
    }, 3000);
  }
  function openDeterminedProgress() {
    let progress = 0;
    const dialog = t4.dialog.progress('Loading assets', progress);
    dialog.setText('Image 1 of 10');
    const interval = setInterval(() => {
      progress += 10;
      dialog.setProgress(progress);
      dialog.setText(`Image ${progress / 10} of 10`);
      if (progress === 100) {
        clearInterval(interval);
        dialog.close();
      }
    }, 300);
  }
</script>

<Page>
  <Navbar title="Dialog" backLink="Back" />
  <Block strong>
    <p>
      There are 1:1 replacements of native Alert, Prompt and Confirm modals. They support callbacks,
      have very easy api and can be combined with each other. Check these examples:
    </p>
    <Row tag="p">
      <Button fill class="col" onClick={openAlert}>Alert</Button>
      <Button fill class="col" onClick={openConfirm}>Confirm</Button>
      <Button fill class="col" onClick={openPrompt}>Prompt</Button>
    </Row>
    <Row tag="p">
      <Button fill class="col" onClick={openLogin}>Login</Button>
      <Button fill class="col" onClick={openPassword}>Password</Button>
    </Row>
  </Block>
  <BlockTitle>Vertical Buttons</BlockTitle>
  <Block strong>
    <p>
      <Button fill onClick={openVerticalButtons}>Vertical Buttons</Button>
    </p>
  </Block>
  <BlockTitle>Preloader Dialog</BlockTitle>
  <Block strong>
    <Row tag="p">
      <Button fill class="col" onClick={openPreloader}>Preloader</Button>
      <Button fill class="col" onClick={openCustomPreloader}>Custom Text</Button>
    </Row>
  </Block>
  <BlockTitle>Progress Dialog</BlockTitle>
  <Block strong>
    <Row tag="p">
      <Button fill class="col" onClick={openInfiniteProgress}>Infinite</Button>
      <Button fill class="col" onClick={openDeterminedProgress}>Determined</Button>
    </Row>
  </Block>
  <BlockTitle>Dialogs Stack</BlockTitle>
  <Block strong>
    <p>
      This feature doesn't allow to open multiple dialogs at the same time, and will automatically
      open next dialog when you close the current one. Such behavior is similar to browser native
      dialogs:
    </p>
    <p>
      <Button fill onClick={openAlerts}>Open Multiple Alerts</Button>
    </p>
  </Block>
</Page>
