<script>
  import { onMount, onDestroy, afterUpdate, tick } from 'svelte'; // eslint-disable-line
  import { app } from '../shared/t4.js';

  let modals = [];
  let el;
  let routerData;

  onMount(() => {
    routerData = {
      el,
      modals,
      setModals(m) {
        tick().then(() => {
          modals = m;
        });
      },
    };
    app.t4routers.modals = routerData;
  });
  afterUpdate(() => {
    if (!routerData) return;
    app.t4events.emit('modalsRouterDidUpdate', routerData);
  });
  onDestroy(() => {
    if (!routerData) return;
    app.t4routers.modals = null;
    routerData = null;
  });
</script>

<div class="techno4-modals" bind:this={el}>
  {#each modals as modal (modal.id)}
    <svelte:component this={modal.component} {...modal.props} />
  {/each}
</div>
