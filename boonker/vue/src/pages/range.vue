<template>
  <t4-page>
    <t4-navbar title="Range Slider" back-link="Back"></t4-navbar>

    <t4-block-title>Volume</t4-block-title>
    <t4-list simple-list>
      <t4-list-item>
        <t4-list-item-cell class="width-auto flex-shrink-0">
          <t4-icon ios="t4:speaker_fill" aurora="t4:speaker_fill" md="material:volume_mute" />
        </t4-list-item-cell>
        <t4-list-item-cell class="flex-shrink-3">
          <t4-range :min="0" :max="100" :step="1" :value="10" />
        </t4-list-item-cell>
        <t4-list-item-cell class="width-auto flex-shrink-0">
          <t4-icon ios="t4:speaker_3_fill" aurora="t4:speaker_3_fill" md="material:volume_up" />
        </t4-list-item-cell>
      </t4-list-item>
    </t4-list>

    <t4-block-title>Brightness</t4-block-title>
    <t4-list simple-list>
      <t4-list-item>
        <t4-list-item-cell class="width-auto flex-shrink-0">
          <t4-icon ios="t4:sun_min" aurora="t4:sun_min" md="material:brightness_low" />
        </t4-list-item-cell>
        <t4-list-item-cell class="flex-shrink-3">
          <t4-range :min="0" :max="100" :step="1" :value="50" :label="true" color="orange" />
        </t4-list-item-cell>
        <t4-list-item-cell class="width-auto flex-shrink-0">
          <t4-icon ios="t4:sun_max_fill" aurora="t4:sun_max_fill" md="material:brightness_high" />
        </t4-list-item-cell>
      </t4-list-item>
    </t4-list>

    <t4-block-title class="display-flex justify-content-space-between"
      >Price Filter <span>${{ priceMin }} - ${{ priceMax }}</span></t4-block-title
    >
    <t4-list simple-list>
      <t4-list-item>
        <t4-list-item-cell class="width-auto flex-shrink-0">
          <t4-icon
            ios="t4:money_dollar_circle"
            aurora="t4:money_dollar_circle"
            md="material:attach_money"
          />
        </t4-list-item-cell>
        <t4-list-item-cell class="flex-shrink-3">
          <t4-range
            :min="0"
            :max="500"
            :step="1"
            :value="[priceMin, priceMax]"
            :label="true"
            :dual="true"
            color="green"
            @range:change="onPriceChange"
          />
        </t4-list-item-cell>
        <t4-list-item-cell class="width-auto flex-shrink-0">
          <t4-icon
            ios="t4:money_dollar_circle_fill"
            aurora="t4:money_dollar_circle_fill"
            md="material:monetization_on"
          />
        </t4-list-item-cell>
      </t4-list-item>
    </t4-list>

    <t4-block-title>With Scale</t4-block-title>
    <t4-block strong>
      <t4-range
        :min="0"
        :max="100"
        :label="true"
        :step="5"
        :value="25"
        :scale="true"
        :scale-steps="5"
        :scale-sub-steps="4"
      />
    </t4-block>

    <t4-block-title>Vertical</t4-block-title>
    <t4-block strong class="display-flex justify-content-center">
      <t4-range
        class="margin-right"
        style="height: 160px"
        :vertical="true"
        :min="0"
        :max="100"
        :label="true"
        :step="1"
        :value="25"
      />
      <t4-range
        class="margin-horizontal"
        style="height: 160px"
        :vertical="true"
        :min="0"
        :max="100"
        :label="true"
        :step="1"
        :value="50"
      />
      <t4-range
        class="margin-horizontal"
        style="height: 160px"
        :vertical="true"
        :min="0"
        :max="100"
        :label="true"
        :step="1"
        :value="75"
      />
      <t4-range
        class="margin-left"
        style="height: 160px"
        :dual="true"
        :vertical="true"
        :min="0"
        :max="100"
        :label="true"
        :step="1"
        :value="[25, 75]"
      />
    </t4-block>

    <t4-block-title>Vertical Reversed</t4-block-title>
    <t4-block strong class="display-flex justify-content-center">
      <t4-range
        class="margin-right"
        color="red"
        style="height: 160px"
        :vertical="true"
        :vertical-reversed="true"
        :min="0"
        :max="100"
        :label="true"
        :step="1"
        :value="25"
      />
      <t4-range
        class="margin-horizontal"
        color="red"
        style="height: 160px"
        :vertical="true"
        :vertical-reversed="true"
        :min="0"
        :max="100"
        :label="true"
        :step="1"
        :value="50"
      />
      <t4-range
        class="margin-horizontal"
        color="red"
        style="height: 160px"
        :vertical="true"
        :vertical-reversed="true"
        :min="0"
        :max="100"
        :label="true"
        :step="1"
        :value="75"
      />
      <t4-range
        class="margin-left"
        color="red"
        style="height: 160px"
        :dual="true"
        :vertical="true"
        :vertical-reversed="true"
        :min="0"
        :max="100"
        :label="true"
        :step="1"
        :value="[25, 75]"
      />
    </t4-block>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4BlockTitle,
  t4Range,
  t4List,
  t4ListItem,
  t4ListItemCell,
  t4Icon,
  t4Block,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4Range,
    t4List,
    t4ListItem,
    t4ListItemCell,
    t4Icon,
    t4Block,
  },
  data() {
    return {
      priceMin: 200,
      priceMax: 400,
    };
  },
  methods: {
    onPriceChange(values) {
      this.priceMin = values[0];
      this.priceMax = values[1];
    },
  },
};
</script>
