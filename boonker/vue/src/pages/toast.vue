<template>
  <t4-page @page:beforeremove="onPageBeforeRemove" @page:beforeout="onPageBeforeOut">
    <t4-navbar title="Toast" back-link="Back"></t4-navbar>
    <t4-block strong>
      <p>Toasts provide brief feedback about an operation through a message on the screen.</p>
      <p>
        <t4-button fill @click="showToastBottom">Toast on Bottom</t4-button>
      </p>
      <p>
        <t4-button fill @click="showToastTop">Toast on Top</t4-button>
      </p>
      <p>
        <t4-button fill @click="showToastCenter">Toast on Center</t4-button>
      </p>
      <p>
        <t4-button fill @click="showToastIcon">Toast with icon</t4-button>
      </p>
      <p>
        <t4-button fill @click="showToastLargeMessage">Toast with large message</t4-button>
      </p>
      <p>
        <t4-button fill @click="showToastWithButton">Toast with close button</t4-button>
      </p>
      <p>
        <t4-button fill @click="showToastWithCustomButton">Toast with custom button</t4-button>
      </p>
      <p>
        <t4-button fill @click="showToastWithCallback">Toast with callback on close</t4-button>
      </p>
    </t4-block>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4Block, t4Button, t4, theme } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Block,
    t4Button,
  },
  methods: {
    showToastBottom() {
      const self = this;
      // Create toast
      if (!self.toastBottom) {
        self.toastBottom = t4.toast.create({
          text: 'This is default bottom positioned toast',
          closeTimeout: 2000,
        });
      }
      // Open it
      self.toastBottom.open();
    },
    showToastTop() {
      const self = this;
      // Create toast
      if (!self.toastTop) {
        self.toastTop = t4.toast.create({
          text: 'Top positioned toast',
          position: 'top',
          closeTimeout: 2000,
        });
      }
      // Open it
      self.toastTop.open();
    },
    showToastCenter() {
      const self = this;
      // Create toast
      if (!self.toastCenter) {
        self.toastCenter = t4.toast.create({
          text: "I'm on center",
          position: 'center',
          closeTimeout: 2000,
        });
      }
      // Open it
      self.toastCenter.open();
    },
    showToastIcon() {
      const self = this;
      // Create toast
      if (!self.toastIcon) {
        self.toastIcon = t4.toast.create({
          icon:
            theme.ios || theme.aurora
              ? '<i class="t4-icons">star_fill</i>'
              : '<i class="material-icons">star</i>',
          text: "I'm on center",
          position: 'center',
          closeTimeout: 2000,
        });
      }
      // Open it
      self.toastIcon.open();
    },
    showToastLargeMessage() {
      const self = this;
      // Create toast
      if (!self.toastLargeMessage) {
        self.toastLargeMessage = t4.toast.create({
          text: 'This toast contains a lot of text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quae, ab. Delectus amet optio facere autem sapiente quisquam beatae culpa dolore.',
          closeTimeout: 2000,
        });
      }
      // Open it
      self.toastLargeMessage.open();
    },
    showToastWithButton() {
      const self = this;
      // Create toast
      if (!self.toastWithButton) {
        self.toastWithButton = t4.toast.create({
          text: 'Toast with additional close button',
          closeButton: true,
        });
      }
      // Open it
      self.toastWithButton.open();
    },
    showToastWithCustomButton() {
      const self = this;
      // Create toast
      if (!self.toastWithCustomButton) {
        self.toastWithCustomButton = t4.toast.create({
          text: 'Custom close button',
          closeButton: true,
          closeButtonText: 'Close Me',
          closeButtonColor: 'red',
        });
      }
      // Open it
      self.toastWithCustomButton.open();
    },
    showToastWithCallback() {
      const self = this;
      // Create toast
      if (!self.toastWithCallback) {
        self.toastWithCallback = t4.toast.create({
          text: 'Callback on close',
          closeButton: true,
          on: {
            close() {
              t4.dialog.alert('Toast closed');
            },
          },
        });
      }
      // Open it
      self.toastWithCallback.open();
    },
    onPageBeforeOut() {
      t4.toast.close();
    },
    onPageBeforeRemove() {
      const self = this;
      // Destroy toasts when page removed
      if (self.toastBottom) self.toastBottom.destroy();
      if (self.toastTop) self.toastTop.destroy();
      if (self.toastCenter) self.toastCenter.destroy();
      if (self.toastIcon) self.toastIcon.destroy();
      if (self.toastLargeMessage) self.toastLargeMessage.destroy();
      if (self.toastWithButton) self.toastWithButton.destroy();
      if (self.toastWithCustomButton) self.toastWithCustomButton.destroy();
      if (self.toastWithCallback) self.toastWithCallback.destroy();
    },
  },
};
</script>
