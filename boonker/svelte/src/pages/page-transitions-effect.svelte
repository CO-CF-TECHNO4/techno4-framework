<script>
  import { Page, Navbar, Block } from 'techno4-svelte';

  export let effect = '';
</script>

<Page>
  <Navbar title={effect} backLink="Back" />

  <Block strong class="text-align-center">
    <p>This page was loaded with <b>{effect}</b> transition.</p>
  </Block>
</Page>
