<template>
  <t4-page id="panel-page">
    <t4-navbar title="Panel / Side panels" back-link="Back"></t4-navbar>
    <t4-panel id="panel-nested" left cover container-el="#panel-page">
      <t4-page>
        <t4-block strong>
          <p>This is page-nested Panel.</p>
          <p>
            <t4-link panel-close>Close me</t4-link>
          </p>
        </t4-block>
      </t4-page>
    </t4-panel>
    <t4-block>
      <p>
        techno4 comes with 2 panels (on left and on right), both are optional. They have two
        different layouts/effects - <b>cover</b> above the content (like left panel here) and
        <b>reveal</b> (like right panel). You can put absolutely anything inside: data lists, forms,
        custom content, and even other isolated app view (like in right panel now) with its own
        dynamic navbar. Checkout panels:
      </p>
    </t4-block>
    <t4-block>
      <t4-row tag="p">
        <t4-col tag="span">
          <t4-button raised fill panel-open="left"> Open left panel </t4-button>
        </t4-col>
        <t4-col tag="span">
          <t4-button raised fill panel-open="right"> Open right panel </t4-button>
        </t4-col>
      </t4-row>
      <t4-row tag="p">
        <t4-col tag="span">
          <t4-button raised fill panel-open="#panel-nested"> Open nested panel </t4-button>
        </t4-col>
      </t4-row>
    </t4-block>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4Block, t4Col, t4Button, t4Link, t4Panel, t4Row } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Block,
    t4Col,
    t4Button,
    t4Link,
    t4Panel,
    t4Row,
  },
};
</script>
