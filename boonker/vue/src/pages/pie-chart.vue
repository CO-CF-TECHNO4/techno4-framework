<template>
  <t4-page>
    <t4-navbar title="Pie Chart" back-link="Back" />
    <t4-block strong>
      <p>techno4 comes with simple to use and fully responsive Pie Chart component.</p>
      <p>
        Pie Chart generates SVG layout which makes it also compatible with SSR (server side
        rendering).
      </p>
    </t4-block>
    <t4-block-title>Simple Pie Chart</t4-block-title>
    <t4-block strong>
      <t4-pie-chart
        :datasets="[
          {
            value: 100,
            color: '#f00',
          },
          {
            value: 200,
            color: '#0f0',
          },
          {
            value: 300,
            color: '#00f',
          },
        ]"
      />
    </t4-block>

    <t4-block-title>With Tooltip</t4-block-title>
    <t4-block strong>
      <t4-pie-chart
        tooltip
        :datasets="[
          {
            label: 'JavaScript',
            value: 150,
            color: '#ff0',
          },
          {
            label: 'Vue.js',
            value: 150,
            color: '#0f0',
          },
          {
            label: 'TypeScript',
            value: 400,
            color: '#00f',
          },
        ]"
      />
    </t4-block>

    <t4-block-title>Custom Format Tooltip</t4-block-title>
    <t4-block strong>
      <t4-pie-chart
        tooltip
        :datasets="[
          {
            label: 'JavaScript',
            value: 1000,
            color: '#ff0',
          },
          {
            label: 'Vue.js',
            value: 100,
            color: '#0f0',
          },
          {
            label: 'TypeScript',
            value: 200,
            color: '#00f',
          },
        ]"
        :format-tooltip="
          ({ color, value, label }) =>
            `You have <span style='color: ${color}'>${value} points</span> for ${label}`
        "
      />
    </t4-block>
  </t4-page>
</template>
<script>
import { t4Page, t4Navbar, t4BlockTitle, t4Block, t4PieChart } from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4BlockTitle,
    t4Block,
    t4PieChart,
  },
};
</script>
