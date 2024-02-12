<template>
  <t4-page class="grid-demo">
    <t4-navbar title="Grid / Layout" back-link="Back"></t4-navbar>
    <t4-block>
      <p>
        Columns within a row are automatically set to have equal width. Otherwise you can define
        your column with pourcentage of screen you want.
      </p>
    </t4-block>
    <t4-block-title>Columns with gap</t4-block-title>
    <t4-block>
      <t4-row>
        <t4-col>50% (.col)</t4-col>
        <t4-col>50% (.col)</t4-col>
      </t4-row>
      <t4-row>
        <t4-col>25% (.col)</t4-col>
        <t4-col>25% (.col)</t4-col>
        <t4-col>25% (.col)</t4-col>
        <t4-col>25% (.col)</t4-col>
      </t4-row>
      <t4-row>
        <t4-col>33% (.col)</t4-col>
        <t4-col>33% (.col)</t4-col>
        <t4-col>33% (.col)</t4-col>
      </t4-row>
      <t4-row>
        <t4-col>20% (.col)</t4-col>
        <t4-col>20% (.col)</t4-col>
        <t4-col>20% (.col)</t4-col>
        <t4-col>20% (.col)</t4-col>
        <t4-col>20% (.col)</t4-col>
      </t4-row>
      <t4-row>
        <t4-col width="33">33% (.col-33)</t4-col>
        <t4-col width="66">66% (.col-66)</t4-col>
      </t4-row>
      <t4-row>
        <t4-col width="25">25% (.col-25)</t4-col>
        <t4-col width="25">25% (.col-25)</t4-col>
        <t4-col width="50">50% (.col-50)</t4-col>
      </t4-row>
      <t4-row>
        <t4-col width="75">75% (.col-75)</t4-col>
        <t4-col width="25">25% (.col-25)</t4-col>
      </t4-row>
      <t4-row>
        <t4-col width="80">80% (.col-80)</t4-col>
        <t4-col width="20">20% (.col-20)</t4-col>
      </t4-row>
    </t4-block>
    <t4-block-title>No gap between columns</t4-block-title>
    <t4-block>
      <t4-row no-gap>
        <t4-col>50% (.col)</t4-col>
        <t4-col>50% (.col)</t4-col>
      </t4-row>
      <t4-row no-gap>
        <t4-col>25% (.col)</t4-col>
        <t4-col>25% (.col)</t4-col>
        <t4-col>25% (.col)</t4-col>
        <t4-col>25% (.col)</t4-col>
      </t4-row>
      <t4-row no-gap>
        <t4-col>33% (.col)</t4-col>
        <t4-col>33% (.col)</t4-col>
        <t4-col>33% (.col)</t4-col>
      </t4-row>
      <t4-row no-gap>
        <t4-col>20% (.col)</t4-col>
        <t4-col>20% (.col)</t4-col>
        <t4-col>20% (.col)</t4-col>
        <t4-col>20% (.col)</t4-col>
        <t4-col>20% (.col)</t4-col>
      </t4-row>
      <t4-row no-gap>
        <t4-col width="33">33% (.col-33)</t4-col>
        <t4-col width="66">66% (.col-66)</t4-col>
      </t4-row>
      <t4-row no-gap>
        <t4-col width="25">25% (.col-25)</t4-col>
        <t4-col width="25">25% (.col-25)</t4-col>
        <t4-col width="50">50% (.col-50)</t4-col>
      </t4-row>
      <t4-row no-gap>
        <t4-col width="75">75% (.col-75)</t4-col>
        <t4-col width="25">25% (.col-25)</t4-col>
      </t4-row>
      <t4-row no-gap>
        <t4-col width="80">80% (.col-80)</t4-col>
        <t4-col width="20">20% (.col-20)</t4-col>
      </t4-row>
    </t4-block>

    <t4-block-title>Nested</t4-block-title>
    <t4-block>
      <t4-row>
        <t4-col
          >50% (.col)
          <t4-row>
            <t4-col>50% (.col)</t4-col>
            <t4-col>50% (.col)</t4-col>
          </t4-row>
        </t4-col>
        <t4-col
          >50% (.col)
          <t4-row>
            <t4-col width="33">33% (.col-33)</t4-col>
            <t4-col width="66">66% (.col-66)</t4-col>
          </t4-row>
        </t4-col>
      </t4-row>
    </t4-block>

    <t4-block-title>Responsive Grid</t4-block-title>
    <t4-block>
      <p>Grid cells have different size on Phone/Tablet</p>
      <t4-row>
        <t4-col width="100" medium="50">.col-100.medium-50</t4-col>
        <t4-col width="100" medium="50">.col-100.medium-50</t4-col>
      </t4-row>
      <t4-row>
        <t4-col width="50" medium="25">.col-50.medium-25</t4-col>
        <t4-col width="50" medium="25">.col-50.medium-25</t4-col>
        <t4-col width="50" medium="25">.col-50.medium-25</t4-col>
        <t4-col width="50" medium="25">.col-50.medium-25</t4-col>
      </t4-row>
      <t4-row>
        <t4-col width="100" medium="40">.col-100.medium-40</t4-col>
        <t4-col width="50" medium="60">.col-50.medium-60</t4-col>
        <t4-col width="50" medium="66">.col-50.medium-66</t4-col>
        <t4-col width="100" medium="33">.col-100.medium-33</t4-col>
      </t4-row>
    </t4-block>

    <t4-block-title>Resizable Grid</t4-block-title>
    <t4-block class="grid-resizable-demo">
      <t4-row class="align-items-stretch" style="height: 300px">
        <t4-col resizable class="demo-col-center-content" style="min-width: 80px">Left</t4-col>
        <t4-col
          resizable
          class="display-flex flex-direction-column"
          style="padding: 0px; border: none; min-width: 80px; background-color: transparent"
        >
          <t4-row resizable style="height: 50%; min-height: 50px">
            <t4-col class="demo-col-center-content" style="height: 100%">Center Top</t4-col>
          </t4-row>
          <t4-row resizable style="height: 50%; min-height: 50px">
            <t4-col class="demo-col-center-content" style="height: 100%">Center Bottom</t4-col>
          </t4-row>
        </t4-col>
        <t4-col resizable class="demo-col-center-content" style="min-width: 80px">Right</t4-col>
      </t4-row>
    </t4-block>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4BlockTitle, t4Row, t4Col, t4Block } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4Row,
    t4Col,
    t4Block,
  },
};
</script>
