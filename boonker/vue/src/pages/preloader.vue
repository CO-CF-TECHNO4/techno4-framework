<template>
  <t4-page>
    <t4-navbar title="Preloader" back-link="Back"></t4-navbar>
    <t4-block>
      <p>
        How about an activity indicator? techno4 has a nice one. The t4 Preloader is made with
        SVG and animated with CSS so it can be easily resized.
      </p>
    </t4-block>

    <t4-block-title>Default</t4-block-title>
    <t4-block strong class="row demo-preloaders align-items-stretch text-align-center">
      <t4-col>
        <t4-preloader />
      </t4-col>
      <t4-col style="background: #000">
        <t4-preloader color="white" />
      </t4-col>
      <t4-col>
        <t4-preloader :size="42" />
      </t4-col>
      <t4-col style="background: #000">
        <t4-preloader :size="42" color="white" />
      </t4-col>
    </t4-block>

    <t4-block-title>Color Preloaders</t4-block-title>
    <t4-block strong class="row text-align-center">
      <t4-col>
        <t4-preloader color="red" />
      </t4-col>
      <t4-col>
        <t4-preloader color="green" />
      </t4-col>
      <t4-col>
        <t4-preloader color="orange" />
      </t4-col>
      <t4-col>
        <t4-preloader color="blue" />
      </t4-col>
    </t4-block>

    <t4-block-title>Multi-color</t4-block-title>
    <t4-block strong class="text-align-center">
      <t4-preloader color="multi" />
    </t4-block>

    <t4-block-title>Preloader Modals</t4-block-title>
    <t4-block strong>
      <p>With <b>app.preloader.show()</b> you can show small overlay with preloader indicator.</p>
      <p>
        <a class="button button-fill" @click="openIndicator">Open Small Indicator</a>
      </p>
      <p>With <b>app.dialog.preloader()</b> you can show dialog modal with preloader indicator.</p>
      <p>
        <a class="button button-fill" @click="openDialog">Open Dialog Preloader</a>
      </p>
      <p>
        With <b>app.dialog.preloader('My text...')</b> you can show dialog preloader modal with
        custom title.
      </p>
      <p>
        <a class="button button-fill" @click="openCustomDialog">Open Dialog Preloader</a>
      </p>
    </t4-block>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4BlockTitle, t4Block, t4Preloader, t4Col, t4 } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4Block,
    t4Preloader,
    t4Col,
  },
  methods: {
    openIndicator() {
      t4.preloader.show();
      setTimeout(() => {
        t4.preloader.hide();
      }, 2000);
    },
    openDialog() {
      t4.dialog.preloader();
      setTimeout(() => {
        t4.dialog.close();
      }, 2000);
    },
    openCustomDialog() {
      t4.dialog.preloader('My text...');
      setTimeout(() => {
        t4.dialog.close();
      }, 2000);
    },
  },
};
</script>
