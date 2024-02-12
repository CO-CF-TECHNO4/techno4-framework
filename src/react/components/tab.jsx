import React, { forwardRef, useRef, useImperativeHandle, useState, useContext } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs, getComponentId } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { t4ready, t4routers, t4, t4events } from '../shared/t4.js';
import { useTab } from '../shared/use-tab.js';
import { RouterContext } from '../shared/router-context.js';
import { useAsyncComponent } from '../shared/use-async-component.js';

/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  COLOR_PROPS
  tabActive? : boolean
  onTabShow? : (el?: HTMLElement) => void
  onTabHide? : (el?: HTMLElement) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null}>;
  children?: React.ReactNode;
*/

const Tab = forwardRef((props, ref) => {
  const { className, id, style, children, tabActive } = props;

  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);
  const routerData = useRef(null);

  const routerContext = useContext(RouterContext);

  let initialTabContent = null;

  if (
    !routerData.current &&
    routerContext &&
    routerContext.route &&
    routerContext.route.route &&
    routerContext.route.route.tab &&
    routerContext.route.route.tab.id === id
  ) {
    const { component, asyncComponent, options: tabRouteOptions } = routerContext.route.route.tab;
    if (component || asyncComponent) {
      const parentProps =
        routerContext.route.route.options && routerContext.route.route.options.props;
      initialTabContent = {
        id: getComponentId(),
        component: component || asyncComponent,
        isAsync: !!asyncComponent,
        props: {
          ...(parentProps || {}),
          ...((tabRouteOptions && tabRouteOptions.props) || {}),
          t4router: routerContext.router,
          t4route: routerContext.route,
          ...routerContext.route.params,
        },
      };
    }
  }

  const [tabContent, setTabContent] = useState(initialTabContent || null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  if (t4 && !routerData.current) {
    routerData.current = {
      setTabContent,
    };
    t4routers.tabs.push(routerData.current);
  }

  const onMount = () => {
    if (elRef.current && initialTabContent) {
      elRef.current.t4RouterTabLoaded = true;
    }
    t4ready(() => {
      if (!routerData.current) {
        routerData.current = {
          el: elRef.current,
          setTabContent,
        };
        t4routers.tabs.push(routerData.current);
      } else {
        routerData.current.el = elRef.current;
      }
    });
  };

  const onDestroy = () => {
    if (!routerData.current) return;
    t4routers.tabs.splice(t4routers.tabs.indexOf(routerData.current), 1);
    routerData.current = null;
  };

  useIsomorphicLayoutEffect(() => {
    onMount();
    return onDestroy;
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!routerData.current || !t4) return;
    t4events.emit('tabRouterDidUpdate', routerData.current);
  });

  useTab(elRef, props);

  const classes = classNames(
    className,
    'tab',
    {
      'tab-active': tabActive,
    },
    colorClasses(props),
  );

  const renderChildren = () => {
    if (!tabContent) return children;
    if (tabContent.isAsync) {
      return useAsyncComponent(tabContent.component, tabContent.props, tabContent.id);
    }
    const TabContent = tabContent.component;
    return <TabContent key={tabContent.id} {...tabContent.props} />;
  };

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...extraAttrs}>
      {renderChildren()}
    </div>
  );
});

Tab.displayName = 't4-tab';

export default Tab;
