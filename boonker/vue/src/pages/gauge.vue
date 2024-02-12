<template>
  <t4-page>
    <t4-navbar title="Gauge" back-link="Back"></t4-navbar>
    <t4-block strong>
      <p>
        techno4 comes with Gauge component. It produces nice looking fully responsive SVG gauges.
      </p>
    </t4-block>
    <t4-block strong class="text-align-center">
      <t4-gauge
        type="circle"
        :value="gaugeValue"
        :size="250"
        border-color="#2196f3"
        :border-width="10"
        :value-text="`${gaugeValue * 100}%`"
        :value-font-size="41"
        value-text-color="#2196f3"
        label-text="amount of something"
      />
      <t4-segmented tag="p" raised>
        <t4-button :active="gaugeValue === 0" @click="() => (gaugeValue = 0)">0%</t4-button>
        <t4-button :active="gaugeValue === 0.25" @click="() => (gaugeValue = 0.25)">25%</t4-button>
        <t4-button :active="gaugeValue === 0.5" @click="() => (gaugeValue = 0.5)">50%</t4-button>
        <t4-button :active="gaugeValue === 0.75" @click="() => (gaugeValue = 0.75)">75%</t4-button>
        <t4-button :active="gaugeValue === 1" @click="() => (gaugeValue = 1)">100%</t4-button>
      </t4-segmented>
    </t4-block>

    <t4-block-title>Circle Gauges</t4-block-title>
    <t4-block strong>
      <t4-row>
        <t4-col class="text-align-center">
          <t4-gauge
            type="circle"
            :value="0.44"
            value-text="44%"
            value-text-color="#ff9800"
            border-color="#ff9800"
          />
        </t4-col>
        <t4-col class="text-align-center">
          <t4-gauge
            type="circle"
            :value="0.12"
            value-text="$120"
            value-text-color="#4caf50"
            border-color="#4caf50"
            label-text="of $1000 budget"
            label-text-color="#f44336"
            :label-font-weight="700"
          />
        </t4-col>
      </t4-row>
    </t4-block>
    <t4-block-title>Semicircle Gauges</t4-block-title>
    <t4-block strong>
      <t4-row>
        <t4-col class="text-align-center">
          <t4-gauge
            type="semicircle"
            :value="0.3"
            value-text="30%"
            value-text-color="#f44336"
            border-color="#f44336"
          />
        </t4-col>
        <t4-col class="text-align-center">
          <t4-gauge
            type="semicircle"
            :value="0.5"
            value-text="30kg"
            value-text-color="#e91e63"
            border-color="#e91e63"
            label-text="of 60kg total"
            label-text-color="#333"
          />
        </t4-col>
      </t4-row>
    </t4-block>
    <t4-block-title>Customization</t4-block-title>
    <t4-block strong>
      <t4-row>
        <t4-col class="text-align-center">
          <t4-gauge
            type="circle"
            :value="0.35"
            value-text="35%"
            value-text-color="#4caf50"
            :value-font-size="51"
            :value-font-weight="700"
            :border-width="20"
            border-color="#4caf50"
            border-bg-color="#ffeb3b"
            bg-color="#ffeb3b"
          />
        </t4-col>
        <t4-col class="text-align-center">
          <t4-gauge
            type="circle"
            :value="0.67"
            value-text="$670"
            value-text-color="#000"
            border-color="#ff9800"
            label-text="of $1000 spent"
            label-text-color="#4caf50"
            :label-font-weight="800"
            :label-font-size="12"
            :border-width="30"
          />
        </t4-col>
      </t4-row>
      <br />
      <t4-row>
        <t4-col class="text-align-center">
          <t4-gauge
            type="semicircle"
            :value="0.5"
            value-text="50%"
            value-text-color="#ffeb3b"
            :value-font-size="41"
            :value-font-weight="700"
            :border-width="10"
            border-color="#ffeb3b"
            border-bg-color="transparent"
          />
        </t4-col>
        <t4-col class="text-align-center">
          <t4-gauge
            type="semicircle"
            :value="0.77"
            border-color="#ff9800"
            label-text="$770 spent so far"
            label-text-color="#ff9800"
            :label-font-weight="800"
            :label-font-size="12"
            :border-width="10"
          />
        </t4-col>
      </t4-row>
    </t4-block>
  </t4-page>
</template>
<script>
import {
  t4Page,
  t4Navbar,
  t4BlockTitle,
  t4Block,
  t4Row,
  t4Col,
  t4Segmented,
  t4Button,
  t4Gauge,
} from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4BlockTitle,
    t4Block,
    t4Row,
    t4Col,
    t4Segmented,
    t4Button,
    t4Gauge,
  },
  data() {
    return {
      gaugeValue: 0.5,
    };
  },
};
</script>
