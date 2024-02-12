<script>
  import { Page, Navbar, Block, List, ListItem } from 'techno4-svelte';

  const effects = [
    't4-circle',
    't4-cover',
    't4-cover-v',
    't4-dive',
    't4-fade',
    't4-flip',
    't4-parallax',
    't4-push',
  ];
</script>

<Page>
  <Navbar title="Page Transitions" backLink="Back" />

  <Block strong>
    <p>
      In addition to default theme-specific page transition it is possible to create custom page
      transition or use one of the additional transition effects:
    </p>
  </Block>

  <List>
    {#each effects as effect}
      <ListItem link={`/page-transitions/${effect}/`} title={effect} transition={effect} />
    {/each}
  </List>
</Page>
