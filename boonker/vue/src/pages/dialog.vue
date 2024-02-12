<template>
  <t4-page>
    <t4-navbar title="Dialog" back-link="Back"></t4-navbar>
    <t4-block strong>
      <p>
        There are 1:1 replacements of native Alert, Prompt and Confirm modals. They support
        callbacks, have very easy api and can be combined with each other. Check these examples:
      </p>
      <t4-row tag="p">
        <t4-button fill class="col" @click="openAlert">Alert</t4-button>
        <t4-button fill class="col" @click="openConfirm">Confirm</t4-button>
        <t4-button fill class="col" @click="openPrompt">Prompt</t4-button>
      </t4-row>
      <t4-row tag="p">
        <t4-button fill class="col" @click="openLogin">Login</t4-button>
        <t4-button fill class="col" @click="openPassword">Password</t4-button>
      </t4-row>
    </t4-block>
    <t4-block-title>Vertical Buttons</t4-block-title>
    <t4-block strong>
      <p>
        <t4-button fill @click="openVerticalButtons">Vertical Buttons</t4-button>
      </p>
    </t4-block>
    <t4-block-title>Preloader Dialog</t4-block-title>
    <t4-block strong>
      <t4-row tag="p">
        <t4-button fill class="col" @click="openPreloader">Preloader</t4-button>
        <t4-button fill class="col" @click="openCustomPreloader">Custom Text</t4-button>
      </t4-row>
    </t4-block>
    <t4-block-title>Progress Dialog</t4-block-title>
    <t4-block strong>
      <t4-row tag="p">
        <t4-button fill class="col" @click="openInfiniteProgress">Infinite</t4-button>
        <t4-button fill class="col" @click="openDeterminedProgress">Determined</t4-button>
      </t4-row>
    </t4-block>
    <t4-block-title>Dialogs Stack</t4-block-title>
    <t4-block strong>
      <p>
        This feature doesn't allow to open multiple dialogs at the same time, and will automatically
        open next dialog when you close the current one. Such behavior is similar to browser native
        dialogs:
      </p>
      <p>
        <t4-button fill @click="openAlerts">Open Multiple Alerts</t4-button>
      </p>
    </t4-block>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4BlockTitle, t4Block, t4Button, t4Row, t4 } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4Block,
    t4Button,
    t4Row,
  },
  methods: {
    openAlert() {
      t4.dialog.alert('Hello!');
    },
    openConfirm() {
      t4.dialog.confirm('Are you feel good today?', () => {
        t4.dialog.alert('Great!');
      });
    },
    openPrompt() {
      t4.dialog.prompt('What is your name?', (name) => {
        t4.dialog.confirm(`Are you sure that your name is ${name}?`, () => {
          t4.dialog.alert(`Ok, your name is ${name}`);
        });
      });
    },
    openLogin() {
      t4.dialog.login('Enter your username and password', (username, password) => {
        t4.dialog.alert(`Thank you!<br>Username:${username}<br>Password:${password}`);
      });
    },
    openPassword() {
      t4.dialog.password('Enter your password', (password) => {
        t4.dialog.alert(`Thank you!<br>Password:${password}`);
      });
    },
    openAlerts() {
      t4.dialog.alert('Alert 1');
      t4.dialog.alert('Alert 2');
      t4.dialog.alert('Alert 3');
      t4.dialog.alert('Alert 4');
      t4.dialog.alert('Alert 5');
    },
    openVerticalButtons() {
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
    },
    openPreloader() {
      t4.dialog.preloader();
      setTimeout(() => {
        t4.dialog.close();
      }, 3000);
    },
    openCustomPreloader() {
      t4.dialog.preloader('My text...');
      setTimeout(() => {
        t4.dialog.close();
      }, 3000);
    },
    openInfiniteProgress() {
      t4.dialog.progress();
      setTimeout(() => {
        t4.dialog.close();
      }, 3000);
    },
    openDeterminedProgress() {
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
    },
  },
};
</script>
