<script>
  import { Navbar, Page, List, ListItem } from 'techno4-svelte';
</script>

<Page>
  <Navbar title="Timeline" backLink="Back" />
  <List>
    <ListItem link="/timeline-vertical/" title="Vertical Timeline" />
    <ListItem link="/timeline-horizontal/" title="Horizontal Timeline" />
    <ListItem link="/timeline-horizontal-calendar/" title="Calendar Timeline" />
  </List>
</Page>
