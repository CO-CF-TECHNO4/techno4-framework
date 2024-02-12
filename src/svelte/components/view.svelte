<script>
  import { onMount, onDestroy, afterUpdate, createEventDispatcher, tick } from 'svelte';
  import { app, t4ready } from '../shared/t4.js';
  import { colorClasses } from '../shared/mixins.js';
  import { classNames, noUndefinedProps, createEmitter, getRouterId } from '../shared/utils.js';
  import { getRouterInitialComponent } from '../shared/get-router-initial-component.js';
  import { useTab } from '../shared/use-tab.js';

  import RouterContextProvider from './router-context-provider.svelte';

  export let id = undefined;
  export let style = undefined;

  export let init = true;
  export let url = undefined;
  let className = undefined;
  export { className as class };

  const emit = createEmitter(createEventDispatcher, $$props);

  const { main, tab, tabActive, browserHistoryInitialMatch = true, initRouterOnTabShow } = $$props;

  const shouldInitRouter = !(initRouterOnTabShow && tab && !tabActive);

  let initialPage;
  let initialRoute;
  let el;
  let routerData;
  let t4View;

  export function instance() {
    return t4View;
  }

  function onViewInit(view) {
    emit('viewInit', [view]);
    if (!init) {
      t4View = view;
      routerData.instance = view;
    }
  }

  if (app.t4 && !t4View && init) {
    const routerId = getRouterId();
    t4View = app.t4.views.create(el, {
      routerId,
      init: false,
      ...noUndefinedProps($$props),
      browserHistoryInitialMatch,
      on: {
        init: onViewInit,
      },
    });
    routerData = {
      routerId,
      instance: t4View,
    };
    app.t4routers.views.push(routerData);
    if (shouldInitRouter && t4View && t4View.router && (url || main)) {
      const initialData = getRouterInitialComponent(t4View.router);
      initialPage = initialData.initialPage;
      initialRoute = initialData.initialRoute;
      if (initialRoute && initialRoute.route && initialRoute.route.masterRoute) {
        initialPage = undefined;
        initialRoute = undefined;
      }
    }
  }

  let pages = initialPage ? [initialPage] : [];

  function onResize(view, width) {
    emit('viewResize', [width]);
  }
  function onSwipeBackMove(data) {
    emit('swipeBackMove', [data]);
  }
  function onSwipeBackBeforeChange(data) {
    emit('swipeBackBeforeChange', [data]);
  }
  function onSwipeBackAfterChange(data) {
    emit('swipeBackAfterChange', [data]);
  }
  function onSwipeBackBeforeReset(data) {
    emit('swipeBackBeforeReset', [data]);
  }
  function onSwipeBackAfterReset(data) {
    emit('swipeBackAfterReset', [data]);
  }

  $: classes = classNames(
    className,
    'view',
    {
      'view-main': main,
      'tab-active': tabActive,
      tab,
    },
    colorClasses($$props),
  );

  useTab(() => el, emit);

  onMount(() => {
    t4ready(() => {
      if (t4View) {
        routerData.el = el;
        routerData.pages = pages;
        routerData.setPages = (newPages) => {
          tick().then(() => {
            pages = newPages;
          });
        };
        if (initialPage && initialPage.isAsync && !initialPage.initialComponent) {
          initialPage.component().then(() => {
            setTimeout(() => {
              t4View.init(el);
              if (initialPage) {
                initialPage.el = t4View.router.currentPageEl;
                if (initialRoute && initialRoute.route && initialRoute.route.keepAlive) {
                  initialRoute.route.keepAliveData = { pageEl: initialPage.el };
                }
              }
            }, 100);
          });
        } else {
          t4View.init(el);
          if (initialPage) {
            initialPage.el = t4View.router.currentPageEl;
            if (initialRoute && initialRoute.route && initialRoute.route.keepAlive) {
              initialRoute.route.keepAliveData = { pageEl: initialPage.el };
            }
          }
        }
      } else {
        const routerId = getRouterId();
        routerData = {
          el,
          routerId,
          pages,
          instance: t4View,
          setPages(newPages) {
            tick().then(() => {
              pages = newPages;
            });
          },
        };
        app.t4routers.views.push(routerData);
        routerData.instance = app.t4.views.create(el, {
          routerId,
          ...noUndefinedProps($$props),
          browserHistoryInitialMatch,
          on: {
            init: onViewInit,
          },
        });
        t4View = routerData.instance;
      }

      if (!init) return;

      t4View.on('resize', onResize);
      t4View.on('swipebackMove', onSwipeBackMove);
      t4View.on('swipebackBeforeChange', onSwipeBackBeforeChange);
      t4View.on('swipebackAfterChange', onSwipeBackAfterChange);
      t4View.on('swipebackBeforeReset', onSwipeBackBeforeReset);
      t4View.on('swipebackAfterReset', onSwipeBackAfterReset);
    });
  });

  afterUpdate(() => {
    if (!routerData) return;
    app.t4events.emit('viewRouterDidUpdate', routerData);
  });

  onDestroy(() => {
    if (t4View) {
      t4View.off('resize', onResize);
      t4View.off('swipebackMove', onSwipeBackMove);
      t4View.off('swipebackBeforeChange', onSwipeBackBeforeChange);
      t4View.off('swipebackAfterChange', onSwipeBackAfterChange);
      t4View.off('swipebackBeforeReset', onSwipeBackBeforeReset);
      t4View.off('swipebackAfterReset', onSwipeBackAfterReset);
      if (t4View.destroy) t4View.destroy();
      t4View = null;
    }

    app.t4routers.views.splice(app.t4routers.views.indexOf(routerData), 1);
    routerData = null;
  });
</script>

<div class={classes} {style} {id} bind:this={el}>
  <slot view={t4View} />
  {#each pages as page (page.id)}
    <RouterContextProvider route={page.props.t4route} router={page.props.t4router}>
      <svelte:component this={page.component} {...page.props} />
    </RouterContextProvider>
  {/each}
</div>
