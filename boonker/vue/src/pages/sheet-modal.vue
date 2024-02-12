<template>
  <t4-page @page:beforeremove="onPageBeforeRemove" @page:beforeout="onPageBeforeOut">
    <t4-navbar title="Sheet Modal" back-link="Back"></t4-navbar>
    <t4-block strong>
      <p>
        Sheet Modals slide up from the bottom of the screen to reveal more content. Such modals
        allow to create custom overlays with custom content.
      </p>
      <t4-row tag="p">
        <t4-button class="col" fill sheet-open=".demo-sheet">Open Sheet</t4-button>
        <t4-button class="col" fill @click="createSheet">Create Dynamic Sheet</t4-button>
      </t4-row>
      <p>
        <t4-button class="col" fill sheet-open=".demo-sheet-top">Top Sheet</t4-button>
      </p>
      <p>
        <t4-button class="col" fill @click="sheetOpened = true">Open Via Prop Change</t4-button>
      </p>
    </t4-block>

    <t4-block-title>Push View</t4-block-title>
    <t4-block strong>
      <p>
        Sheet can push view behind on open. By default it has effect only when `safe-area-inset-top`
        is more than zero (iOS fullscreen webapp or iOS cordova app)
      </p>
      <p>
        <t4-button fill sheet-open=".demo-sheet-push">Sheet Push</t4-button>
      </p>
    </t4-block>

    <t4-block-title>Swipeable Sheet</t4-block-title>
    <t4-block strong>
      <p>
        Sheet modal can be closed with swipe to top (for top Sheet) or bottom (for default Bottom
        sheet):
      </p>
      <p>
        <t4-button fill sheet-open=".demo-sheet-swipe-to-close">Swipe To Close</t4-button>
      </p>
      <p>Also there is swipe-step that can be set on Sheet modal to expand it with swipe:</p>
      <p>
        <t4-button fill sheet-open=".demo-sheet-swipe-to-step">Swipe To Step</t4-button>
      </p>
    </t4-block>

    <t4-sheet v-model:opened="sheetOpened" class="demo-sheet">
      <t4-toolbar>
        <div class="left"></div>
        <div class="right">
          <t4-link sheet-close>Close</t4-link>
        </div>
      </t4-toolbar>
      <!-- Scrollable sheet content -->
      <t4-page-content>
        <t4-block>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ducimus dolorum ipsa
            aliquid accusamus perferendis laboriosam delectus numquam minima animi, libero illo in
            tempora harum sequi corporis alias ex adipisci.
          </p>
          <p>
            Sunt magni enim saepe quasi aspernatur delectus consectetur fugiat necessitatibus qui
            sed, similique quis facere tempora, laudantium quae expedita ea, aperiam dolores. Aut
            deserunt soluta alias magnam. Consequatur, nisi, enim.
          </p>
          <p>
            Eaque maiores ducimus, impedit unde culpa qui, explicabo accusamus, non vero corporis
            voluptatibus similique odit ab. Quaerat quasi consectetur quidem libero? Repudiandae
            adipisci vel voluptatum, autem libero minus dignissimos repellat.
          </p>
          <p>
            Iusto, est corrupti! Totam minus voluptas natus esse possimus nobis, delectus veniam
            expedita sapiente ut cum reprehenderit aliquid odio amet praesentium vero temporibus
            obcaecati beatae aspernatur incidunt, perferendis voluptates doloribus?
          </p>
          <p>
            Illum id laborum tempore, doloribus culpa labore ex iusto odit. Quibusdam consequuntur
            totam nam obcaecati, enim cumque nobis, accusamus, quos voluptates, voluptatibus
            sapiente repellendus nesciunt praesentium velit ipsa illo iusto.
          </p>
        </t4-block>
      </t4-page-content>
    </t4-sheet>

    <t4-sheet top class="demo-sheet-top">
      <t4-toolbar bottom>
        <div class="left"></div>
        <div class="right">
          <t4-link sheet-close>Close</t4-link>
        </div>
      </t4-toolbar>
      <!-- Scrollable sheet content -->
      <t4-page-content>
        <t4-block>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ducimus dolorum ipsa
            aliquid accusamus perferendis laboriosam delectus numquam minima animi, libero illo in
            tempora harum sequi corporis alias ex adipisci.
          </p>
          <p>
            Sunt magni enim saepe quasi aspernatur delectus consectetur fugiat necessitatibus qui
            sed, similique quis facere tempora, laudantium quae expedita ea, aperiam dolores. Aut
            deserunt soluta alias magnam. Consequatur, nisi, enim.
          </p>
          <p>
            Eaque maiores ducimus, impedit unde culpa qui, explicabo accusamus, non vero corporis
            voluptatibus similique odit ab. Quaerat quasi consectetur quidem libero? Repudiandae
            adipisci vel voluptatum, autem libero minus dignissimos repellat.
          </p>
          <p>
            Iusto, est corrupti! Totam minus voluptas natus esse possimus nobis, delectus veniam
            expedita sapiente ut cum reprehenderit aliquid odio amet praesentium vero temporibus
            obcaecati beatae aspernatur incidunt, perferendis voluptates doloribus?
          </p>
          <p>
            Illum id laborum tempore, doloribus culpa labore ex iusto odit. Quibusdam consequuntur
            totam nam obcaecati, enim cumque nobis, accusamus, quos voluptates, voluptatibus
            sapiente repellendus nesciunt praesentium velit ipsa illo iusto.
          </p>
        </t4-block>
      </t4-page-content>
    </t4-sheet>

    <t4-sheet class="demo-sheet-push" push>
      <t4-toolbar>
        <div class="left"></div>
        <div class="right">
          <t4-link sheet-close>Close</t4-link>
        </div>
      </t4-toolbar>
      <!-- Scrollable sheet content -->
      <t4-page-content>
        <t4-block>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ducimus dolorum ipsa
            aliquid accusamus perferendis laboriosam delectus numquam minima animi, libero illo in
            tempora harum sequi corporis alias ex adipisci.
          </p>
          <p>
            Sunt magni enim saepe quasi aspernatur delectus consectetur fugiat necessitatibus qui
            sed, similique quis facere tempora, laudantium quae expedita ea, aperiam dolores. Aut
            deserunt soluta alias magnam. Consequatur, nisi, enim.
          </p>
          <p>
            Eaque maiores ducimus, impedit unde culpa qui, explicabo accusamus, non vero corporis
            voluptatibus similique odit ab. Quaerat quasi consectetur quidem libero? Repudiandae
            adipisci vel voluptatum, autem libero minus dignissimos repellat.
          </p>
          <p>
            Iusto, est corrupti! Totam minus voluptas natus esse possimus nobis, delectus veniam
            expedita sapiente ut cum reprehenderit aliquid odio amet praesentium vero temporibus
            obcaecati beatae aspernatur incidunt, perferendis voluptates doloribus?
          </p>
          <p>
            Illum id laborum tempore, doloribus culpa labore ex iusto odit. Quibusdam consequuntur
            totam nam obcaecati, enim cumque nobis, accusamus, quos voluptates, voluptatibus
            sapiente repellendus nesciunt praesentium velit ipsa illo iusto.
          </p>
        </t4-block>
      </t4-page-content>
    </t4-sheet>

    <t4-sheet class="demo-sheet-swipe-to-close" style="height: auto" swipe-to-close push backdrop>
      <div class="swipe-handler"></div>

      <t4-page-content>
        <t4-block-title large>Hello!</t4-block-title>
        <t4-block>
          <p>
            Eaque maiores ducimus, impedit unde culpa qui, explicabo accusamus, non vero corporis
            voluptatibus similique odit ab. Quaerat quasi consectetur quidem libero? Repudiandae
            adipisci vel voluptatum, autem libero minus dignissimos repellat.
          </p>
          <p>
            Iusto, est corrupti! Totam minus voluptas natus esse possimus nobis, delectus veniam
            expedita sapiente ut cum reprehenderit aliquid odio amet praesentium vero temporibus
            obcaecati beatae aspernatur incidunt, perferendis voluptates doloribus?
          </p>
        </t4-block>
      </t4-page-content>
    </t4-sheet>

    <t4-sheet
      class="demo-sheet-swipe-to-step"
      style="height: auto"
      swipe-to-close
      swipe-to-step
      push
      backdrop
    >
      <div class="swipe-handler" @click="toggleSwipeStep"></div>
      <div class="sheet-modal-swipe-step">
        <div class="display-flex padding justify-content-space-between align-items-center">
          <div style="font-size: 18px"><b>Total:</b></div>
          <div style="font-size: 22px"><b>$500</b></div>
        </div>
        <div class="padding-horizontal padding-bottom">
          <t4-button large fill>Make Payment</t4-button>
          <div class="margin-top text-align-center">Swipe up for more details</div>
        </div>
      </div>
      <t4-block-title medium class="margin-top">Your order:</t4-block-title>
      <t4-list no-hairlines>
        <t4-list-item title="Item 1">
          <template #after>
            <b class="text-color-black">$200</b>
          </template>
        </t4-list-item>
        <t4-list-item title="Item 2">
          <template #after>
            <b class="text-color-black">$180</b>
          </template>
        </t4-list-item>
        <t4-list-item title="Delivery">
          <template #after>
            <b class="text-color-black">$120</b>
          </template>
        </t4-list-item>
      </t4-list>
    </t4-sheet>
  </t4-page>
</template>
<script>
import {
  t4Page,
  t4Navbar,
  t4Sheet,
  t4PageContent,
  t4Toolbar,
  t4BlockTitle,
  t4Block,
  t4Button,
  t4Link,
  t4Row,
  t4List,
  t4ListItem,
  t4,
} from 'techno4-vue';
import $ from 'dom64';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4Sheet,
    t4PageContent,
    t4Toolbar,
    t4BlockTitle,
    t4Block,
    t4Button,
    t4Link,
    t4Row,
    t4List,
    t4ListItem,
  },
  data() {
    return {
      sheetOpened: false,
    };
  },
  methods: {
    toggleSwipeStep() {
      t4.sheet.stepToggle('.demo-sheet-swipe-to-step');
    },
    createSheet() {
      const self = this;
      // Create sheet modal
      if (!self.sheet) {
        self.sheet = t4.sheet.create({
          content: `
            <div class="sheet-modal sheet-modal-bottom">
              <div class="toolbar">
                <div class="toolbar-inner justify-content-flex-end">
                  <a href="#" class="link sheet-close">Close</a>
                </div>
              </div>
              <div class="sheet-modal-inner">
                <div class="page-content">
                  <div class="block">
                    <p>This sheet modal was created dynamically</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
                  </div>
                </div>
              </div>
            </div>
          `.trim(),
        });
      }
      // Close inline sheet
      if ($('.demo-sheet.modal-in').length > 0) t4.sheet.close('.demo-sheet');
      // Open it
      self.sheet.open();
    },
    onPageBeforeOut() {
      // Close opened sheets on page out
      t4.sheet.close();
    },
    onPageBeforeRemove() {
      const self = this;
      // Destroy sheet modal when page removed
      if (self.sheet) self.sheet.destroy();
    },
  },
};
</script>
