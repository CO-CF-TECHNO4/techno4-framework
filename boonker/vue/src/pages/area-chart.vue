<template>
  <t4-page>
    <t4-navbar title="Area Chart" back-link="Back" />
    <t4-block strong>
      <p>techno4 comes with simple to use and fully responsive Area Chart component.</p>
      <p>
        Area Chart generates SVG layout which makes it also compatible with SSR (server side
        rendering).
      </p>
    </t4-block>
    <t4-block-title>Simple Area Chart</t4-block-title>
    <t4-block strong>
      <t4-area-chart
        :datasets="[
          {
            color: '#f00',
            values: [0, 100, 250, 300, 175, 400],
          },
          {
            color: '#00f',
            values: [100, 75, 133, 237, 40, 200],
          },
          {
            color: '#ff0',
            values: [100, 300, 127, 40, 250, 80],
          },
        ]"
      />
    </t4-block>
    <t4-block-title>Area Chart With Tooltip</t4-block-title>
    <t4-block strong>
      <t4-area-chart
        tooltip
        :datasets="[
          {
            label: 'Red data',
            color: '#f00',
            values: [100, 75, 133, 237, 40, 200],
          },
          {
            label: 'Blue data',
            color: '#00f',
            values: [100, 300, 127, 40, 250, 80],
          },
          {
            label: 'Yellow data',
            color: '#ff0',
            values: [0, 100, 250, 300, 175, 400],
          },
        ]"
      />
    </t4-block>
    <t4-block-title>Area Chart With Axis</t4-block-title>
    <t4-block strong>
      <t4-area-chart
        tooltip
        axis
        :axis-labels="dates"
        :format-axis-label="(date) => axisDateFormat.format(date)"
        :format-tooltip-axis-label="(date) => tooltipDateFormat.format(date)"
        :datasets="[
          {
            label: 'Green data',
            color: '#0f0',
            values: [100, 75, 133, 237],
          },
          {
            label: 'Red data',
            color: '#f00',
            values: [100, 300, 127, 47],
          },
          {
            label: 'Yellow data',
            color: '#ff0',
            values: [0, 100, 250, 307],
          },
        ]"
      />
    </t4-block>
    <t4-block-title>Area Chart With Legend</t4-block-title>
    <t4-block strong>
      <t4-area-chart
        tooltip
        axis
        :axis-labels="dates"
        legend
        toggle-datasets
        :format-axis-label="(date) => axisDateFormat.format(date)"
        :format-tooltip-axis-label="(date) => tooltipDateFormat.format(date)"
        :datasets="[
          {
            label: 'Red data',
            color: '#f00',
            values: [100, 300, 127, 47],
          },
          {
            label: 'Blue data',
            color: '#00f',
            values: [100, 75, 133, 237],
          },
          {
            label: 'Yellow data',
            color: '#ff0',
            values: [0, 100, 250, 307],
          },
        ]"
      />
    </t4-block>
    <t4-block-title>Lines Chart</t4-block-title>
    <t4-block strong>
      <t4-area-chart
        tooltip
        axis
        :axis-labels="dates"
        legend
        toggle-datasets
        line-chart
        :format-axis-label="(date) => axisDateFormat.format(date)"
        :format-tooltip-axis-label="(date) => tooltipDateFormat.format(date)"
        :datasets="[
          {
            label: 'Red data',
            color: '#f00',
            values: [0, 300, 127, 47],
          },
          {
            label: 'Blue data',
            color: '#00f',
            values: [0, 75, 133, 237],
          },
          {
            label: 'Green data',
            color: '#0f0',
            values: [0, 100, 250, 307],
          },
        ]"
      />
    </t4-block>
  </t4-page>
</template>
<script>
import { t4Page, t4Navbar, t4BlockTitle, t4Block, t4AreaChart } from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4BlockTitle,
    t4Block,
    t4AreaChart,
  },
  setup() {
    // helpers data for axis
    const dates = [];
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    for (let i = 0; i < 4; i += 1) {
      dates.push(new Date(year, month - (3 - i)));
    }
    const axisDateFormat = Intl.DateTimeFormat(undefined, { month: 'short', year: 'numeric' });
    const tooltipDateFormat = Intl.DateTimeFormat(undefined, { month: 'long', year: 'numeric' });
    return {
      dates,
      axisDateFormat,
      tooltipDateFormat,
    };
  },
};
</script>
