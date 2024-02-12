/* eslint-disable no-nested-ternary */
import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs, noUndefinedProps, emit, getRouterId } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { t4ready, t4routers, t4, t4events } from '../shared/t4.js';
import { useTab } from '../shared/use-tab.js';
import { useAsyncComponent } from '../shared/use-async-component.js';
import { getRouterInitialComponent } from '../shared/get-router-initial-component.js';
import { RouterContext } from '../shared/router-context.js';
/* dts-imports
  import { View, Router } from 'techno4/types';
*/
/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  initRouterOnTabShow?: boolean
  tab? : boolean
  tabActive? : boolean
  name? : string
  router? : boolean
  linksView? : Object | string
  url? : string
  main? : boolean
  stackPages? : boolean
  xhrCache? : boolean
  xhrCacheIgnore? : Array<any>
  xhrCacheIgnoreGetParameters? : boolean
  xhrCacheDuration? : number
  preloadPreviousPage? : boolean
  allowDuplicateUrls? : boolean
  reloadPages? : boolean
  reloadDetail? : boolean
  masterDetailResizable? : boolean
  masterDetailBreakpoint? : number
  removeElements? : boolean
  removeElementsWithTimeout? : boolean
  removeElementsTimeout? : number
  restoreScrollTopOnBack? : boolean
  loadInitialPage? : boolean
  iosSwipeBack? : boolean
  iosSwipeBackAnimateShadow? : boolean
  iosSwipeBackAnimateOpacity? : boolean
  iosSwipeBackActiveArea? : number
  iosSwipeBackThreshold? : number
  mdSwipeBack? : boolean
  mdSwipeBackAnimateShadow? : boolean
  mdSwipeBackAnimateOpacity? : boolean
  mdSwipeBackActiveArea? : number
  mdSwipeBackThreshold? : number
  auroraSwipeBack? : boolean
  auroraSwipeBackAnimateShadow? : boolean
  auroraSwipeBackAnimateOpacity? : boolean
  auroraSwipeBackActiveArea? : number
  auroraSwipeBackThreshold? : number
  browserHistory? : boolean
  browserHistoryRoot? : string
  browserHistoryAnimate? : boolean
  browserHistoryAnimateOnLoad? : boolean
  browserHistorySeparator? : string
  browserHistoryOnLoad? : boolean
  browserHistoryInitialMatch?: boolean;
  browserHistoryStoreHistory?: boolean;
  animate? : boolean
  transition? : string
  iosDynamicNavbar? : boolean
  iosAnimateNavbarBackIcon? : boolean
  materialPageLoadDelay? : number
  passRouteQueryToRequest? : boolean
  passRouteParamsToRequest? : boolean
  routes? : Array<any>
  routesAdd? : Array<any>
  routesBeforeEnter? : Function | Array<any>
  routesBeforeLeave? : Function | Array<any>
  init? : boolean
  COLOR_PROPS
  onViewInit? : (view?: View.View) => void
  onViewResize? : (width?: number) => void
  onSwipeBackMove? : (swipeBackData?: Router.SwipeBackData) => void
  onSwipeBackBeforeChange? : (swipeBackData?: Router.SwipeBackData) => void
  onSwipeBackAfterChange? : (swipeBackData?: Router.SwipeBackData) => void
  onSwipeBackBeforeReset? : (swipeBackData?: Router.SwipeBackData) => void
  onSwipeBackAfterReset? : (swipeBackData?: Router.SwipeBackData) => void
  onTabShow? : (el?: HTMLElement) => void
  onTabHide? : (el?: HTMLElement) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null; t4View: () => View.View}>;
  children?: React.ReactNode;
*/

const View = forwardRef((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    init = true,
    main,
    tab,
    tabActive,
    url,
    initRouterOnTabShow,
    browserHistoryInitialMatch = true,
  } = props;
  const childrenArray = React.Children.toArray(children);
  const initialPageComponent = childrenArray.filter((c) => c.props && c.props.initialPage)[0];
  const restChildren = childrenArray.filter((c) => !c.props || !c.props.initialPage);

  const shouldInitRouter = !(initRouterOnTabShow && tab && !tabActive);

  const extraAttrs = getExtraAttrs(props);

  const t4View = useRef(null);
  const elRef = useRef(null);
  const routerData = useRef(null);

  let initialPage;
  let initialRoute;

  const onViewInit = (view) => {
    emit(props, 'viewInit', view);
    if (!init) {
      routerData.current.instance = view;
      t4View.current = routerData.current.instance;
    }
  };

  if (t4 && !t4View.current && init) {
    const routerId = getRouterId();
    t4View.current = t4.views.create(elRef.current, {
      routerId,
      init: false,
      ...noUndefinedProps(props),
      browserHistoryInitialMatch,
      on: {
        init: onViewInit,
      },
    });
    routerData.current = {
      routerId,
      instance: t4View.current,
    };
    t4routers.views.push(routerData.current);
    if (shouldInitRouter && t4View.current && t4View.current.router && (url || main)) {
      const initialData = getRouterInitialComponent(t4View.current.router, initialPageComponent);
      initialPage = initialData.initialPage;
      initialRoute = initialData.initialRoute;
      if (initialRoute && initialRoute.route && initialRoute.route.masterRoute) {
        initialPage = undefined;
        initialRoute = undefined;
      }
    }
  }

  const [pages, setPages] = useState(initialPage ? [initialPage] : []);

  const onResize = (view, width) => {
    emit(props, 'viewResize', width);
  };
  const onSwipeBackMove = (data) => {
    const swipeBackData = data;
    emit(props, 'swipeBackMove', swipeBackData);
  };
  const onSwipeBackBeforeChange = (data) => {
    const swipeBackData = data;
    emit(props, 'swipeBackBeforeChange', swipeBackData);
  };
  const onSwipeBackAfterChange = (data) => {
    const swipeBackData = data;
    emit(props, 'swipeBackAfterChange', swipeBackData);
  };
  const onSwipeBackBeforeReset = (data) => {
    const swipeBackData = data;
    emit(props, 'swipeBackBeforeReset', swipeBackData);
  };
  const onSwipeBackAfterReset = (data) => {
    const swipeBackData = data;
    emit(props, 'swipeBackAfterReset', swipeBackData);
  };

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    t4View: () => t4View.current,
  }));

  const onMount = () => {
    t4ready(() => {
      if (t4View.current) {
        routerData.current.el = elRef.current;
        routerData.current.pages = pages;
        routerData.current.setPages = (newPages) => {
          setPages([...newPages]);
        };
        if (initialPage && initialPage.isAsync && !initialPage.initialComponent) {
          initialPage.component().then(() => {
            setTimeout(() => {
              t4View.current.init(elRef.current);
              if (initialPage) {
                initialPage.el = t4View.current.router.currentPageEl;
                if (initialRoute && initialRoute.route && initialRoute.route.keepAlive) {
                  initialRoute.route.keepAliveData = { pageEl: initialPage.el };
                }
              }
            }, 100);
          });
        } else {
          t4View.current.init(elRef.current);
          if (initialPage) {
            initialPage.el = t4View.current.router.currentPageEl;
            if (initialRoute && initialRoute.route && initialRoute.route.keepAlive) {
              initialRoute.route.keepAliveData = { pageEl: initialPage.el };
            }
          }
        }
      } else {
        const routerId = getRouterId();
        routerData.current = {
          el: elRef.current,
          routerId,
          pages,
          instance: t4View.current,
          setPages(newPages) {
            setPages([...newPages]);
          },
        };
        t4routers.views.push(routerData.current);
        routerData.current.instance = t4.views.create(elRef.current, {
          routerId,
          ...noUndefinedProps(props),
          browserHistoryInitialMatch,
          on: {
            init: onViewInit,
          },
        });
        t4View.current = routerData.current.instance;
      }

      if (!init) return;

      t4View.current.on('resize', onResize);
      t4View.current.on('swipebackMove', onSwipeBackMove);
      t4View.current.on('swipebackBeforeChange', onSwipeBackBeforeChange);
      t4View.current.on('swipebackAfterChange', onSwipeBackAfterChange);
      t4View.current.on('swipebackBeforeReset', onSwipeBackBeforeReset);
      t4View.current.on('swipebackAfterReset', onSwipeBackAfterReset);
    });
  };

  const onDestroy = () => {
    if (t4View.current) {
      t4View.current.off('resize', onResize);
      t4View.current.off('swipebackMove', onSwipeBackMove);
      t4View.current.off('swipebackBeforeChange', onSwipeBackBeforeChange);
      t4View.current.off('swipebackAfterChange', onSwipeBackAfterChange);
      t4View.current.off('swipebackBeforeReset', onSwipeBackBeforeReset);
      t4View.current.off('swipebackAfterReset', onSwipeBackAfterReset);
      if (t4View.current.destroy) t4View.current.destroy();
      t4View.current = null;
    }

    t4routers.views.splice(t4routers.views.indexOf(routerData.current), 1);
    routerData.current = null;
  };

  useIsomorphicLayoutEffect(() => {
    onMount();
    return onDestroy;
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (routerData.current && t4) {
      t4events.emit('viewRouterDidUpdate', routerData.current);
    }
  });

  useTab(elRef, props);

  const classes = classNames(
    className,
    'view',
    {
      'view-main': main,
      'tab-active': tabActive,
      tab,
    },
    colorClasses(props),
  );

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...extraAttrs}>
      {restChildren}
      {pages.map(
        ({ component: PageComponent, id: pageId, props: pageProps, isAsync, initialComponent }) => (
          <RouterContext.Provider
            key={pageId}
            value={{
              router: pageProps.t4router,
              route: pageProps.t4route,
            }}
          >
            {initialComponent ? (
              React.cloneElement(initialComponent, { ...pageProps })
            ) : isAsync ? (
              useAsyncComponent(PageComponent, pageProps)
            ) : (
              <PageComponent {...pageProps} />
            )}
          </RouterContext.Provider>
        ),
      )}
    </div>
  );
});

View.displayName = 't4-view';

export default View;
