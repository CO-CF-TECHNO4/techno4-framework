<template>
  <t4-page>
    <t4-navbar title="Stepper" back-link="Back"></t4-navbar>
    <t4-block-title>Shape and size</t4-block-title>
    <t4-block strong class="text-align-center">
      <t4-row>
        <t4-col>
          <small class="display-block">Default</small>
          <t4-stepper />
        </t4-col>
        <t4-col>
          <small class="display-block">Round</small>
          <t4-stepper round />
        </t4-col>
      </t4-row>

      <t4-row class="margin-top">
        <t4-col>
          <small class="display-block">Fill</small>
          <t4-stepper fill />
        </t4-col>
        <t4-col>
          <small class="display-block">Round Fill</small>
          <t4-stepper fill round />
        </t4-col>
      </t4-row>

      <t4-row class="margin-top">
        <t4-col>
          <small class="display-block">Small</small>
          <t4-stepper small />
        </t4-col>
        <t4-col>
          <small class="display-block">Small Round</small>
          <t4-stepper small round />
        </t4-col>
      </t4-row>

      <t4-row class="margin-top">
        <t4-col>
          <small class="display-block">Small Fill</small>
          <t4-stepper small fill />
        </t4-col>
        <t4-col>
          <small class="display-block">Small Round Fill</small>
          <t4-stepper small round fill />
        </t4-col>
      </t4-row>

      <t4-row class="margin-top">
        <t4-col>
          <small class="display-block">Large</small>
          <t4-stepper large />
        </t4-col>
        <t4-col>
          <small class="display-block">Large Round</small>
          <t4-stepper large round />
        </t4-col>
      </t4-row>

      <t4-row class="margin-top">
        <t4-col>
          <small class="display-block">Large Fill</small>
          <t4-stepper large fill />
        </t4-col>
        <t4-col>
          <small class="display-block">Large Round Fill</small>
          <t4-stepper large round fill />
        </t4-col>
      </t4-row>
    </t4-block>

    <t4-block-title>Raised</t4-block-title>
    <t4-block strong class="text-align-center">
      <t4-row>
        <t4-col>
          <small class="display-block">Default</small>
          <t4-stepper raised />
        </t4-col>
        <t4-col>
          <small class="display-block">Round</small>
          <t4-stepper raised round />
        </t4-col>
      </t4-row>

      <t4-row class="margin-top">
        <t4-col>
          <small class="display-block">Fill</small>
          <t4-stepper raised fill />
        </t4-col>
        <t4-col>
          <small class="display-block">Round Fill</small>
          <t4-stepper raised fill round />
        </t4-col>
      </t4-row>

      <t4-row class="margin-top">
        <t4-col>
          <small class="display-block">Small</small>
          <t4-stepper raised small />
        </t4-col>
        <t4-col>
          <small class="display-block">Small Round</small>
          <t4-stepper raised small round />
        </t4-col>
      </t4-row>

      <t4-row class="margin-top">
        <t4-col>
          <small class="display-block">Small Fill</small>
          <t4-stepper raised small fill />
        </t4-col>
        <t4-col>
          <small class="display-block">Small Round Fill</small>
          <t4-stepper raised small round fill />
        </t4-col>
      </t4-row>

      <t4-row class="margin-top">
        <t4-col>
          <small class="display-block">Large</small>
          <t4-stepper raised large />
        </t4-col>
        <t4-col>
          <small class="display-block">Large Round</small>
          <t4-stepper raised large round />
        </t4-col>
      </t4-row>

      <t4-row class="margin-top">
        <t4-col>
          <small class="display-block">Large Fill</small>
          <t4-stepper raised large fill />
        </t4-col>
        <t4-col>
          <small class="display-block">Large Round Fill</small>
          <t4-stepper raised large round fill />
        </t4-col>
      </t4-row>
    </t4-block>
    <t4-block-title>Colors</t4-block-title>
    <t4-block strong class="text-align-center">
      <t4-row>
        <t4-col>
          <t4-stepper fill color="red" />
        </t4-col>
        <t4-col>
          <t4-stepper fill round color="green" />
        </t4-col>
      </t4-row>

      <t4-row class="margin-top">
        <t4-col>
          <t4-stepper fill color="blue" />
        </t4-col>
        <t4-col>
          <t4-stepper fill round color="pink" />
        </t4-col>
      </t4-row>

      <t4-row class="margin-top">
        <t4-col>
          <t4-stepper fill small color="yellow" />
        </t4-col>
        <t4-col>
          <t4-stepper fill small round color="orange" />
        </t4-col>
      </t4-row>

      <t4-row class="margin-top">
        <t4-col>
          <t4-stepper fill small color="gray" />
        </t4-col>
        <t4-col>
          <t4-stepper fill small round color="black" />
        </t4-col>
      </t4-row>
    </t4-block>
    <t4-block-title>Without input element</t4-block-title>
    <t4-block strong class="text-align-center">
      <t4-row>
        <t4-col>
          <t4-stepper :input="false" />
        </t4-col>
        <t4-col>
          <t4-stepper :input="false" round />
        </t4-col>
      </t4-row>
    </t4-block>
    <t4-block-title>Min, max, step</t4-block-title>
    <t4-block strong class="text-align-center">
      <t4-row>
        <t4-col>
          <t4-stepper fill :value="100" :min="0" :max="1000" :step="100" />
        </t4-col>
        <t4-col>
          <t4-stepper fill :input="false" :value="5" :min="0" :max="10" :step="0.5" />
        </t4-col>
      </t4-row>
    </t4-block>

    <t4-block-title>Autorepeat (Tap & hold)</t4-block-title>
    <t4-block-header
      >Pressing and holding one of its buttons increments or decrements the stepper’s value
      repeatedly. With dynamic autorepeat, the rate of change depends on how long the user continues
      pressing the control.</t4-block-header
    >
    <t4-block strong class="text-align-center">
      <t4-row>
        <t4-col>
          <small class="display-block">Default</small>
          <t4-stepper fill :value="0" :min="0" :max="100" :step="1" :autorepeat="true" />
        </t4-col>
        <t4-col>
          <small class="display-block">Dynamic</small>
          <t4-stepper
            fill
            :value="0"
            :min="0"
            :max="100"
            :step="1"
            :autorepeat="true"
            :autorepeat-dynamic="true"
          />
        </t4-col>
      </t4-row>
    </t4-block>

    <t4-block-title>Wraps</t4-block-title>
    <t4-block-header
      >In wraps mode incrementing beyond maximum value sets value to minimum value, likewise,
      decrementing below minimum value sets value to maximum value</t4-block-header
    >
    <t4-block strong class="text-align-center">
      <t4-row>
        <t4-col>
          <t4-stepper
            fill
            :value="0"
            :min="0"
            :max="10"
            :step="1"
            :autorepeat="true"
            :wraps="true"
          />
        </t4-col>
      </t4-row>
    </t4-block>

    <t4-block-title>Custom value element</t4-block-title>
    <t4-list>
      <t4-list-item :title="`Apples ${applesCount}`">
        <template #after>
          <t4-stepper :buttons-only="true" small raised @stepper:change="setApples" />
        </template>
      </t4-list-item>
      <t4-list-item :title="`Oranges ${orangesCount}`">
        <template #after>
          <t4-stepper :buttons-only="true" small raised @stepper:change="setOranges" />
        </template>
      </t4-list-item>
    </t4-list>

    <t4-block-title>Custom value format</t4-block-title>
    <t4-list>
      <t4-list-item header="Meeting starts in" :title="meetingTimeComputed">
        <template #after>
          <t4-stepper
            :min="15"
            :max="240"
            :step="15"
            :value="meetingTime"
            :buttons-only="true"
            small
            fill
            raised
            @stepper:change="setMeetingTime"
          />
        </template>
      </t4-list-item>
    </t4-list>

    <t4-block-title>Manual input</t4-block-title>
    <t4-block-header
      >It is possible to enter value manually from keyboard or mobile keypad. When click on input
      field, stepper enter into manual input mode, which allow type value from keyboar and check
      fractional part with defined accurancy. Click outside or enter Return key, ending manual
      mode.</t4-block-header
    >
    <t4-block strong class="text-align-center">
      <t4-row>
        <t4-col>
          <t4-stepper
            fill
            :value="0"
            :min="0"
            :max="1000"
            :step="1"
            :autorepeat="true"
            :wraps="true"
            :manual-input-mode="true"
            :decimal-point="2"
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
  t4BlockHeader,
  t4Row,
  t4Col,
  t4List,
  t4ListItem,
  t4Stepper,
} from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4BlockTitle,
    t4Block,
    t4BlockHeader,
    t4Row,
    t4Col,
    t4List,
    t4ListItem,
    t4Stepper,
  },
  data() {
    return {
      applesCount: 0,
      orangesCount: 0,
      meetingTime: 15,
    };
  },
  computed: {
    meetingTimeComputed() {
      const self = this;
      const value = self.meetingTime;

      const hours = Math.floor(value / 60);
      const minutes = value - hours * 60;
      const formatted = [];
      if (hours > 0) {
        formatted.push(`${hours} ${hours > 1 ? 'hours' : 'hour'}`);
      }
      if (minutes > 0) {
        formatted.push(`${minutes} minutes`);
      }
      return formatted.join(' ');
    },
  },
  methods: {
    setApples(value) {
      this.applesCount = value;
    },
    setOranges(value) {
      this.orangesCount = value;
    },
    setMeetingTime(value) {
      this.meetingTime = value;
    },
  },
};
</script>
