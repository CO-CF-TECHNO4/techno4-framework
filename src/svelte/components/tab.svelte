<script>
  import { onMount, onDestroy, afterUpdate, createEventDispatcher, tick, getContext } from 'svelte';

  import { restProps } from '../shared/rest-props.js';
  import { colorClasses } from '../shared/mixins.js';
  import { classNames, createEmitter, getComponentId } from '../shared/utils.js';
  import { t4ready, app } from '../shared/t4.js';
  import { useTab } from '../shared/use-tab.js';

  const emit = createEmitter(createEventDispatcher, $$props);

  let className = undefined;
  export { className as class };
  export let tabActive = false;
  export let id = undefined;

  const RouterContext = getContext('RouterContext') || {};

  let el;
  let routerData = null;
  let initialTabContent = null;

  if (
    !routerData &&
    RouterContext &&
    RouterContext.route &&
    RouterContext.route.route &&
    RouterContext.route.route.tab &&
    RouterContext.route.route.tab.id === id
  ) {
    const { component, asyncComponent, options: tabRouteOptions } = RouterContext.route.route.tab;
    if (component || asyncComponent) {
      const parentProps =
        RouterContext.route.route.options && RouterContext.route.route.options.props;
      initialTabContent = {
        id: getComponentId(),
        component: component || asyncComponent,
        isAsync: !!asyncComponent,
        props: {
          ...(parentProps || {}),
          ...((tabRouteOptions && tabRouteOptions.props) || {}),
          t4router: RouterContext.router,
          t4route: RouterContext.route,
          ...RouterContext.route.params,
        },
      };
    }
  }
  let tabContent = initialTabContent || null;

  $: classes = classNames(className, 'tab', tabActive && 'tab-active', colorClasses($$props));

  useTab(() => el, emit);

  onMount(() => {
    if (el && initialTabContent) {
      el.t4RouterTabLoaded = true;
    }
    t4ready(() => {
      if (!routerData) {
        routerData = {
          el,
          setTabContent(tc) {
            tick().then(() => {
              tabContent = tc;
            });
          },
        };
        app.t4routers.tabs.push(routerData);
      } else {
        routerData.el = el;
      }
    });
  });
  afterUpdate(() => {
    if (!routerData) return;
    app.t4events.emit('tabRouterDidUpdate', routerData);
  });
  onDestroy(() => {
    if (!routerData) return;
    app.t4routers.tabs.splice(app.t4routers.tabs.indexOf(routerData), 1);
    routerData = null;
  });
</script>

<div {id} class={classes} bind:this={el} {...restProps($$restProps)}>
  {#if tabContent}
    <svelte:component this={tabContent.component} {...tabContent.props} />
  {/if}
  <slot />
</div>
