<template>
  <t4-page @page:beforeremove="onPageBeforeRemove">
    <t4-navbar title="Popup" back-link="Back"></t4-navbar>
    <t4-block strong>
      <p>
        Popup is a modal window with any HTML content that pops up over App's main content. Popup as
        all other overlays is part of so called "Temporary Views".
      </p>
      <p>
        <t4-button fill popup-open=".demo-popup">Open Popup</t4-button>
      </p>
      <p>
        <t4-button fill @click="popupOpened = true">Open Via Prop Change</t4-button>
      </p>
      <p>
        <t4-button fill @click="createPopup">Create Dynamic Popup</t4-button>
      </p>
    </t4-block>

    <t4-block-title>Swipe To Close</t4-block-title>
    <t4-block strong>
      <p>Popup can be closed with swipe to top or bottom:</p>
      <p>
        <t4-button fill popup-open=".demo-popup-swipe">Swipe To Close</t4-button>
      </p>
      <p>
        Or it can be closed with swipe on special swipe handler and, for example, only to bottom:
      </p>
      <p>
        <t4-button fill popup-open=".demo-popup-swipe-handler">With Swipe Handler</t4-button>
      </p>
    </t4-block>

    <t4-block-title>Push View</t4-block-title>
    <t4-block strong>
      <p>
        Popup can push view behind. By default has effect only when `safe-area-inset-top` is more
        than zero (iOS fullscreen webapp or iOS cordova app)
      </p>
      <p>
        <t4-button fill popup-open=".demo-popup-push">Popup Push</t4-button>
      </p>
    </t4-block>

    <t4-popup v-model:opened="popupOpened" class="demo-popup">
      <t4-page>
        <t4-navbar title="Popup Title">
          <t4-nav-right>
            <t4-link popup-close>Close</t4-link>
          </t4-nav-right>
        </t4-navbar>
        <t4-block>
          <p>
            Here comes popup. You can put here anything, even independent view with its own
            navigation. Also not, that by default popup looks a bit different on iPhone/iPod and
            iPad, on iPhone it is fullscreen.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris
            leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac
            urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia
            venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros.
            Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
            pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero
            mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor.
            Suspendisse a faucibus lectus.
          </p>
          <p>
            Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl
            ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed
            quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in
            eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero.
            Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id,
            pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros,
            convallis blandit dui sit amet, gravida adipiscing libero.
          </p>
        </t4-block>
      </t4-page>
    </t4-popup>

    <t4-popup push class="demo-popup-push">
      <t4-view>
        <t4-page>
          <t4-navbar title="Push Popup" large transparent>
            <t4-nav-right>
              <t4-link popup-close>Close</t4-link>
            </t4-nav-right>
          </t4-navbar>
          <t4-block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris
              leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac
              urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia
              venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros.
              Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
              pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero
              mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor.
              Suspendisse a faucibus lectus.
            </p>
            <p>
              Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl
              ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed
              quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est
              in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec
              libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in
              iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus.
              Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris
              leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac
              urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia
              venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros.
              Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
              pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero
              mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor.
              Suspendisse a faucibus lectus.
            </p>
          </t4-block>
        </t4-page>
      </t4-view>
    </t4-popup>

    <t4-popup class="demo-popup-swipe" swipe-to-close>
      <t4-page>
        <t4-navbar title="Swipe To Close">
          <t4-nav-right>
            <t4-link popup-close>Close</t4-link>
          </t4-nav-right>
        </t4-navbar>

        <div style="height: 100%" class="display-flex justify-content-center align-items-center">
          <p>Swipe me up or down</p>
        </div>
      </t4-page>
    </t4-popup>

    <t4-popup
      class="demo-popup-swipe-handler"
      swipe-to-close="to-bottom"
      swipe-handler=".swipe-handler"
    >
      <t4-page>
        <template #fixed>
          <div class="swipe-handler"></div>
        </template>
        <t4-block-title large>Hello!</t4-block-title>
        <t4-block strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris
            leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac
            urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia
            venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros.
            Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
            pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero
            mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor.
            Suspendisse a faucibus lectus.
          </p>
          <p>
            Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl
            ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed
            quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in
            eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero.
            Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id,
            pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros,
            convallis blandit dui sit amet, gravida adipiscing libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris
            leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac
            urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia
            venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros.
            Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
            pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero
            mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor.
            Suspendisse a faucibus lectus.
          </p>
          <p>
            Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl
            ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed
            quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in
            eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero.
            Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id,
            pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros,
            convallis blandit dui sit amet, gravida adipiscing libero.
          </p>
        </t4-block>
      </t4-page>
    </t4-popup>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4Popup,
  t4BlockTitle,
  t4Block,
  t4NavRight,
  t4Link,
  t4Button,
  t4View,
  t4,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Popup,
    t4BlockTitle,
    t4Block,
    t4NavRight,
    t4Link,
    t4Button,
    t4View,
  },
  data() {
    return {
      popupOpened: false,
    };
  },
  methods: {
    createPopup() {
      const self = this;
      // Create popup
      if (!self.popup) {
        self.popup = t4.popup.create({
          content: `
              <div class="popup">
                <div class="page">
                  <div class="navbar">
                    <div class="navbar-bg"></div>
                    <div class="navbar-inner">
                      <div class="title">Dynamic Popup</div>
                      <div class="right"><a href="#" class="link popup-close">Close</a></div>
                    </div>
                  </div>
                  <div class="page-content">
                    <div class="block">
                      <p>This popup was created dynamically</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
                    </div>
                  </div>
                </div>
              </div>
            `.trim(),
        });
      }
      // Open it
      self.popup.open();
    },
    onPageBeforeRemove() {
      const self = this;
      // Destroy popup when page removed
      if (self.popup) self.popup.destroy();
    },
  },
};
</script>
