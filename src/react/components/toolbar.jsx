import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs, getSlots, emit } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { useTheme } from '../shared/use-theme.js';
import { t4ready, t4 } from '../shared/t4.js';
import { TabbarContext } from '../shared/tabbar-context.js';

/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  tabbar? : boolean
  labels? : boolean
  scrollable? : boolean
  hidden? : boolean
  noShadow? : boolean
  noHairline? : boolean
  noBorder? : boolean
  position? : string
  topMd? : boolean
  topIos? : boolean
  topAurora? : boolean
  top? : boolean
  bottomMd? : boolean
  bottomIos? : boolean
  bottomAurora? : boolean
  bottom? : boolean
  inner? : boolean
  COLOR_PROPS
  onToolbarHide? : (...args: any[]) => void
  onToolbarShow? : (...args: any[]) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null; hide: () => void; show: () => void;}>;
  children?: React.ReactNode;
*/

const Toolbar = forwardRef((props, ref) => {
  const {
    className,
    id,
    style,
    tabbar,
    labels,
    scrollable,
    hidden,
    noShadow,
    noHairline,
    noBorder,
    position,
    topMd,
    topIos,
    topAurora,
    top,
    bottomMd,
    bottomIos,
    bottomAurora,
    bottom,
    inner = true,
  } = props;
  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);

  const onHide = (toolbarEl) => {
    if (elRef.current !== toolbarEl) return;
    emit(props, 'toolbarHide');
  };
  const onShow = (toolbarEl) => {
    if (elRef.current !== toolbarEl) return;
    emit(props, 'toolbarShow');
  };
  const hide = (animate) => {
    if (!t4) return;
    t4.toolbar.hide(elRef.current, animate);
  };
  const show = (animate) => {
    if (!t4) return;
    t4.toolbar.show(elRef.current, animate);
  };

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    hide,
    show,
  }));

  useIsomorphicLayoutEffect(() => {
    t4ready(() => {
      if (tabbar && t4 && elRef.current) {
        t4.toolbar.setHighlight(elRef.current);
      }
      t4.on('toolbarShow', onShow);
      t4.on('toolbarHide', onHide);
    });
    return () => {
      if (!t4) return;
      t4.off('toolbarShow', onShow);
      t4.off('toolbarHide', onHide);
    };
  });

  const theme = useTheme();

  const classes = classNames(
    className,
    'toolbar',
    {
      tabbar,
      'toolbar-bottom':
        (theme && theme.md && bottomMd) ||
        (theme && theme.ios && bottomIos) ||
        (theme && theme.aurora && bottomAurora) ||
        bottom ||
        position === 'bottom',
      'toolbar-top':
        (theme && theme.md && topMd) ||
        (theme && theme.ios && topIos) ||
        (theme && theme.aurora && topAurora) ||
        top ||
        position === 'top',
      'tabbar-labels': labels,
      'tabbar-scrollable': scrollable,
      'toolbar-hidden': hidden,
      'no-shadow': noShadow,
      'no-hairline': noHairline || noBorder,
    },
    colorClasses(props),
  );

  const slots = getSlots(props);

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...extraAttrs}>
      <TabbarContext.Provider
        value={{
          tabbarHasLabels: labels,
        }}
      >
        {slots['before-inner']}
        {inner ? <div className="toolbar-inner">{slots.default}</div> : slots.default}
        {slots['after-inner']}
      </TabbarContext.Provider>
    </div>
  );
});

Toolbar.displayName = 't4-toolbar';

export default Toolbar;
