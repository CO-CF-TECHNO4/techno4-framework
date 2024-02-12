<script>
import { computed, ref, onMounted, onBeforeUnmount, onUpdated, toRaw, h } from 'vue';
import { classNames, noUndefinedProps, getRouterId } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { t4ready, t4routers, t4, t4events } from '../shared/t4.js';
import { useTab } from '../shared/use-tab.js';
import { getRouterInitialComponent } from '../shared/get-router-initial-component.js';

export default {
  name: 't4-view',
  props: {
    tab: Boolean,
    tabActive: Boolean,

    name: String,
    initRouterOnTabShow: {
      type: Boolean,
      default: undefined,
    },
    router: {
      type: Boolean,
      default: true,
    },
    linksView: [Object, String],
    url: String,
    main: {
      type: Boolean,
      default: undefined,
    },
    stackPages: {
      type: Boolean,
      default: undefined,
    },
    xhrCache: {
      type: Boolean,
      default: undefined,
    },
    xhrCacheIgnore: Array,
    xhrCacheIgnoreGetParameters: {
      type: Boolean,
      default: undefined,
    },
    xhrCacheDuration: Number,
    preloadPreviousPage: {
      type: Boolean,
      default: undefined,
    },
    allowDuplicateUrls: {
      type: Boolean,
      default: undefined,
    },
    reloadPages: {
      type: Boolean,
      default: undefined,
    },
    reloadDetail: {
      type: Boolean,
      default: undefined,
    },
    masterDetailResizable: {
      type: Boolean,
      default: undefined,
    },
    masterDetailBreakpoint: Number,
    removeElements: {
      type: Boolean,
      default: undefined,
    },
    removeElementsWithTimeout: {
      type: Boolean,
      default: undefined,
    },
    removeElementsTimeout: Number,
    restoreScrollTopOnBack: {
      type: Boolean,
      default: undefined,
    },
    loadInitialPage: {
      type: Boolean,
      default: undefined,
    },
    // Swipe Back
    iosSwipeBack: {
      type: Boolean,
      default: undefined,
    },
    iosSwipeBackAnimateShadow: {
      type: Boolean,
      default: undefined,
    },
    iosSwipeBackAnimateOpacity: {
      type: Boolean,
      default: undefined,
    },
    iosSwipeBackActiveArea: Number,
    iosSwipeBackThreshold: Number,
    mdSwipeBack: {
      type: Boolean,
      default: undefined,
    },
    mdSwipeBackAnimateShadow: {
      type: Boolean,
      default: undefined,
    },
    mdSwipeBackAnimateOpacity: {
      type: Boolean,
      default: undefined,
    },
    mdSwipeBackActiveArea: Number,
    mdSwipeBackThreshold: Number,
    auroraSwipeBack: {
      type: Boolean,
      default: undefined,
    },
    auroraSwipeBackAnimateShadow: {
      type: Boolean,
      default: undefined,
    },
    auroraSwipeBackAnimateOpacity: {
      type: Boolean,
      default: undefined,
    },
    auroraSwipeBackActiveArea: Number,
    auroraSwipeBackThreshold: Number,
    // Push State
    browserHistory: {
      type: Boolean,
      default: undefined,
    },
    browserHistoryRoot: String,
    browserHistoryAnimate: {
      type: Boolean,
      default: undefined,
    },
    browserHistoryAnimateOnLoad: {
      type: Boolean,
      default: undefined,
    },
    browserHistorySeparator: String,
    browserHistoryOnLoad: {
      type: Boolean,
      default: undefined,
    },
    browserHistoryInitialMatch: {
      type: Boolean,
      default: true,
    },
    browserHistoryStoreHistory: {
      type: Boolean,
      default: undefined,
    },
    // Animate Pages
    animate: {
      type: Boolean,
      default: undefined,
    },
    transition: String,
    // iOS Dynamic Navbar
    iosDynamicNavbar: {
      type: Boolean,
      default: undefined,
    },
    // Animate iOS Navbar Back Icon
    iosAnimateNavbarBackIcon: {
      type: Boolean,
      default: undefined,
    },
    // MD Theme delay
    materialPageLoadDelay: Number,

    passRouteQueryToRequest: {
      type: Boolean,
      default: undefined,
    },
    passRouteParamsToRequest: {
      type: Boolean,
      default: undefined,
    },
    routes: Array,
    routesAdd: Array,

    // Routes hooks
    routesBeforeEnter: [Function, Array],
    routesBeforeLeave: [Function, Array],

    init: {
      type: Boolean,
      default: true,
    },
    ...colorProps,
  },
  emits: [
    'view:init',
    'view:resize',
    'swipeback:move',
    'swipeback:beforechange',
    'swipeback:afterchange',
    'swipeback:beforereset',
    'swipeback:afterreset',
    'tab:hide',
    'tab:show',
  ],
  setup(props, { emit, slots }) {
    // const childrenArray = React.Children.toArray(children);
    // const initialPageComponent = childrenArray.filter((c) => c.props && c.props.initialPage)[0];
    // const restChildren = childrenArray.filter((c) => !c.props || !c.props.initialPage);
    const initialPageComponent = null;
    const shouldInitRouter = !(props.initRouterOnTabShow && props.tab && !props.tabActive);

    let t4View = null;
    const elRef = ref(null);
    let routerData = null;

    let initialPage;
    let initialRoute;

    const onViewInit = (view) => {
      emit('view:init', view);
      if (!props.init) {
        routerData.instance = view;
        t4View = routerData.instance;
      }
    };

    const getViewParams = () => {
      const routes = toRaw(props.routes || []);
      const routesAdd = toRaw(props.routesAdd || []);
      return noUndefinedProps({ ...props, routes, routesAdd });
    };

    if (t4 && !t4View && props.init) {
      const routerId = getRouterId();
      t4View = t4.views.create(elRef.value, {
        ...getViewParams(),
        routerId,
        init: false,
        on: {
          init: onViewInit,
        },
      });
      routerData = {
        routerId,
        instance: t4View,
      };
      t4routers.views.push(routerData);
      if (shouldInitRouter && t4View && t4View.router && (props.url || props.main)) {
        const initialData = getRouterInitialComponent(t4View.router, initialPageComponent);
        initialPage = initialData.initialPage;
        initialRoute = initialData.initialRoute;
        if (initialRoute && initialRoute.route && initialRoute.route.masterRoute) {
          initialPage = undefined;
          initialRoute = undefined;
        }
      }
    }

    const pages = ref(initialPage ? [initialPage] : []);
    const setPages = (newPages) => {
      newPages.forEach((page) => {
        // eslint-disable-next-line
        page.component = toRaw(page.component);
      });
      pages.value = newPages;
    };

    const onResize = (view, width) => {
      emit('view:resize', width);
    };
    const onSwipeBackMove = (data) => {
      const swipeBackData = data;
      emit('swipeback:move', swipeBackData);
    };
    const onSwipeBackBeforeChange = (data) => {
      const swipeBackData = data;
      emit('swipeback:beforechange', swipeBackData);
    };
    const onSwipeBackAfterChange = (data) => {
      const swipeBackData = data;
      emit('swipeback:afterchange', swipeBackData);
    };
    const onSwipeBackBeforeReset = (data) => {
      const swipeBackData = data;
      emit('swipeback:beforereset', swipeBackData);
    };
    const onSwipeBackAfterReset = (data) => {
      const swipeBackData = data;
      emit('swipeback:afterreset', swipeBackData);
    };

    onMounted(() => {
      t4ready(() => {
        if (t4View) {
          routerData.el = elRef.value;
          routerData.pages = pages.value;
          routerData.setPages = (newPages) => {
            setPages([...newPages]);
          };
          if (initialPage && initialPage.isAsync && !initialPage.initialComponent) {
            initialPage.component().then(() => {
              setTimeout(() => {
                t4View.init(elRef.value);
                if (initialPage) {
                  initialPage.el = t4View.router.currentPageEl;
                  if (initialRoute && initialRoute.route && initialRoute.route.keepAlive) {
                    initialRoute.route.keepAliveData = { pageEl: initialPage.el };
                  }
                }
              }, 100);
            });
          } else {
            t4View.init(elRef.value);
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
            el: elRef.value,
            routerId,
            pages: pages.value,
            instance: t4View,
            setPages(newPages) {
              setPages([...newPages]);
            },
          };
          t4routers.views.push(routerData);
          routerData.instance = t4.views.create(elRef.value, {
            routerId,
            ...getViewParams(),
            on: {
              init: onViewInit,
            },
          });
          t4View = routerData.instance;
        }

        if (!props.init) return;

        t4View.on('resize', onResize);
        t4View.on('swipebackMove', onSwipeBackMove);
        t4View.on('swipebackBeforeChange', onSwipeBackBeforeChange);
        t4View.on('swipebackAfterChange', onSwipeBackAfterChange);
        t4View.on('swipebackBeforeReset', onSwipeBackBeforeReset);
        t4View.on('swipebackAfterReset', onSwipeBackAfterReset);
      });
    });

    onBeforeUnmount(() => {
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

      t4routers.views.splice(t4routers.views.indexOf(routerData), 1);
      routerData = null;
    });

    onUpdated(() => {
      if (!routerData || !t4) return;
      t4events.emit('viewRouterDidUpdate', routerData);
    });

    useTab(elRef, emit);

    const classes = computed(() =>
      classNames(
        'view',
        {
          'view-main': props.main,
          'tab-active': props.tabActive,
          tab: props.tab,
        },
        colorClasses(props),
      ),
    );

    const getComponent = (page) => toRaw(page.component);
    const getProps = (page) => {
      const { component: pageComponent, props: pageProps } = page;
      let keys = [];
      const passProps = {};
      if (pageComponent && pageComponent.props) keys = Object.keys(pageComponent.props);
      keys.forEach((key) => {
        if (key in pageProps) passProps[key] = pageProps[key];
      });
      return passProps;
    };

    return () => {
      return h('div', { ref: elRef, class: classes.value }, [
        slots.default && slots.default(),
        ...pages.value.map((page) =>
          h(getComponent(page), {
            key: page.id,
            ...getProps(page),
          }),
        ),
      ]);
    };
  },
};
</script>
