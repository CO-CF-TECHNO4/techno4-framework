<script>
  import { Page, Navbar, BlockTitle, Block, PieChart } from 'techno4-svelte';
</script>

<Page>
  <Navbar title="Pie Chart" backLink="Back" />
  <Block strong>
    <p>techno4 comes with simple to use and fully responsive Pie Chart component.</p>
    <p>
      Pie Chart generates SVG layout which makes it also compatible with SSR (server side
      rendering).
    </p>
  </Block>
  <BlockTitle>Simple Pie Chart</BlockTitle>
  <Block strong>
    <!-- prettier-ignore -->
    <PieChart
      datasets={[
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
      ]}
    />
  </Block>

  <BlockTitle>With Tooltip</BlockTitle>
  <Block strong>
    <!-- prettier-ignore -->
    <PieChart
      tooltip
      datasets={[
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
      ]}
    />
  </Block>

  <BlockTitle>Custom Format Tooltip</BlockTitle>
  <Block strong>
    <!-- prettier-ignore -->
    <PieChart
      tooltip
      datasets={[
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
      ]}
      formatTooltip={({ color, value, label }) =>
        `You have <span style="color: ${color}">${value} points</span> for ${label}`
      }
    />
  </Block>
</Page>
