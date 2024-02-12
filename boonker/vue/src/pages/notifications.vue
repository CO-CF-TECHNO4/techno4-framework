<template>
  <t4-page @page:beforeremove="onPageBeforeRemove" @page:beforeout="onPageBeforeOut">
    <t4-navbar title="Notifications" back-link="Back"></t4-navbar>
    <t4-block>
      <p>
        techno4 comes with simple Notifications component that allows you to show some useful
        messages to user and request basic actions.
      </p>
      <p><t4-button fill @click="showNotificationFull">Full layout notification</t4-button></p>
      <p><t4-button fill @click="showNotificationWithButton">With close button</t4-button></p>
      <p><t4-button fill @click="showNotificationCloseOnClick">Click to close</t4-button></p>
      <p><t4-button fill @click="showNotificationCallbackOnClose">Callback on close</t4-button></p>
    </t4-block>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4Block, t4Button, t4 } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Button,
    t4Block,
  },
  methods: {
    showNotificationFull() {
      const self = this;
      // Create toast
      if (!self.notificationFull) {
        self.notificationFull = t4.notification.create({
          icon: '<i class="icon icon-t4"></i>',
          title: 'techno4',
          titleRightText: 'now',
          subtitle: 'This is a subtitle',
          text: 'This is a simple notification message',
          closeTimeout: 3000,
        });
      }
      // Open it
      self.notificationFull.open();
    },
    showNotificationWithButton() {
      const self = this;
      // Create toast
      if (!self.notificationWithButton) {
        self.notificationWithButton = t4.notification.create({
          icon: '<i class="icon icon-t4"></i>',
          title: 'techno4',
          subtitle: 'Notification with close button',
          text: 'Click (x) button to close me',
          closeButton: true,
        });
      }
      // Open it
      self.notificationWithButton.open();
    },
    showNotificationCloseOnClick() {
      const self = this;
      // Create toast
      if (!self.notificationCloseOnClick) {
        self.notificationCloseOnClick = t4.notification.create({
          icon: '<i class="icon icon-t4"></i>',
          title: 'techno4',
          titleRightText: 'now',
          subtitle: 'Notification with close on click',
          text: 'Click me to close',
          closeOnClick: true,
        });
      }
      // Open it
      self.notificationCloseOnClick.open();
    },
    showNotificationCallbackOnClose() {
      const self = this;
      // Create toast
      if (!self.notificationCallbackOnClose) {
        self.notificationCallbackOnClose = t4.notification.create({
          icon: '<i class="icon icon-t4"></i>',
          title: 'techno4',
          titleRightText: 'now',
          subtitle: 'Notification with close on click',
          text: 'Click me to close',
          closeOnClick: true,
          on: {
            close() {
              t4.dialog.alert('Notification closed');
            },
          },
        });
      }
      // Open it
      self.notificationCallbackOnClose.open();
    },
    onPageBeforeOut() {
      t4.notification.close();
    },
    onPageBeforeRemove() {
      const self = this;
      // Destroy toasts when page removed
      if (self.notificationFull) self.notificationFull.destroy();
      if (self.notificationWithButton) self.notificationWithButton.destroy();
      if (self.notificationCloseOnClick) self.notificationCloseOnClick.destroy();
      if (self.notificationCallbackOnClose) self.notificationCallbackOnClose.destroy();
    },
  },
};
</script>
