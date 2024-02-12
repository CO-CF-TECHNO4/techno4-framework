import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs, noUndefinedProps, emit } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';
import { watchProp } from '../shared/watch-prop.js';

/* dts-imports
import { Panel } from 'techno4/types';
*/

/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  side? : string
  effect? : string
  cover? : boolean
  reveal? : boolean
  push? : boolean
  left? : boolean
  right? : boolean
  opened? : boolean
  resizable? : boolean
  backdrop? : boolean
  backdropEl? : string
  visibleBreakpoint? : number
  collapsedBreakpoint? : number
  swipe? : boolean
  swipeNoFollow? : boolean
  swipeOnlyClose? : boolean
  swipeActiveArea? : number
  swipeThreshold? : number
  containerEl? : string | object
  closeByBackdropClick?: boolean;
  COLOR_PROPS
  onPanelOpen? : (event?: any) => void
  onPanelOpened? : (event?: any) => void
  onPanelClose? : (event?: any) => void
  onPanelClosed? : (event?: any) => void
  onPanelBackdropClick? : (event?: any) => void
  onPanelSwipe? : (event?: any) => void
  onPanelSwipeOpen? : (event?: any) => void
  onPanelBreakpoint? : (event?: any) => void
  onPanelCollapsedBreakpoint? : (event?: any) => void
  onPanelResize? : (...args: any[]) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null; t4Panel: () => Panel.Panel}>;
  children?: React.ReactNode;
*/

const Panel = forwardRef((props, ref) => {
  const t4Panel = useRef(null);
  const {
    className,
    id,
    style,
    children,
    side,
    effect,
    // eslint-disable-next-line
    cover,
    reveal,
    push,
    left,
    // right,
    opened,
    resizable,
    backdrop = true,
    backdropEl,
    containerEl,
    closeByBackdropClick,
    visibleBreakpoint,
    collapsedBreakpoint,
    swipe,
    swipeNoFollow,
    swipeOnlyClose,
    swipeActiveArea = 0,
    swipeThreshold = 0,
  } = props;

  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);

  const isOpened = useRef(false);
  const isClosing = useRef(false);
  const isCollapsed = useRef(false);
  const isBreakpoint = useRef(false);

  const onOpen = (event) => {
    isOpened.current = true;
    isClosing.current = false;
    emit(props, 'panelOpen', event);
  };
  const onOpened = (event) => {
    emit(props, 'panelOpened', event);
  };
  const onClose = (event) => {
    isOpened.current = false;
    isClosing.current = true;
    emit(props, 'panelClose', event);
  };
  const onClosed = (event) => {
    isClosing.current = false;
    emit(props, 'panelClosed', event);
  };
  const onBackdropClick = (event) => {
    emit(props, 'click panelBackdropClick', event);
  };
  const onSwipe = (event) => {
    emit(props, 'panelSwipe', event);
  };
  const onSwipeOpen = (event) => {
    emit(props, 'panelSwipeOpen', event);
  };
  const onBreakpoint = (event) => {
    isBreakpoint.current = true;
    isCollapsed.current = false;
    emit(props, 'panelBreakpoint', event);
  };
  const onCollapsedBreakpoint = (event) => {
    isBreakpoint.current = false;
    isCollapsed.current = true;
    emit(props, 'panelCollapsedBreakpoint', event);
  };
  const onResize = (...args) => {
    emit(props, 'panelResize', ...args);
  };

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    t4Panel: () => t4Panel.current,
  }));

  watchProp(resizable, (newValue) => {
    if (!t4Panel.current) return;
    if (newValue) t4Panel.current.enableResizable();
    else t4Panel.current.disableResizable();
  });
  watchProp(opened, (newValue) => {
    if (!t4Panel.current) return;
    if (newValue) {
      t4Panel.current.open();
    } else {
      t4Panel.current.close();
    }
  });

  const modalEvents = (method) => {
    if (!t4Panel.current) return;
    t4Panel.current[method]('open', onOpen);
    t4Panel.current[method]('opened', onOpened);
    t4Panel.current[method]('close', onClose);
    t4Panel.current[method]('closed', onClosed);
    t4Panel.current[method]('backdropClick', onBackdropClick);
    t4Panel.current[method]('swipe', onSwipe);
    t4Panel.current[method]('swipeOpen', onSwipeOpen);
    t4Panel.current[method]('collapsedBreakpoint', onCollapsedBreakpoint);
    t4Panel.current[method]('breakpoint', onBreakpoint);
    t4Panel.current[method]('resize', onResize);
  };

  const onMount = () => {
    t4ready(() => {
      const $ = t4.$;
      if (!$) return;
      if ($('.panel-backdrop').length === 0) {
        $('<div class="panel-backdrop"></div>').insertBefore(elRef.current);
      }
      const params = noUndefinedProps({
        el: elRef.current,
        resizable,
        backdrop,
        backdropEl,
        containerEl,
        visibleBreakpoint,
        collapsedBreakpoint,
        swipe,
        swipeNoFollow,
        swipeOnlyClose,
        swipeActiveArea,
        swipeThreshold,
        closeByBackdropClick,
      });
      t4Panel.current = t4.panel.create(params);
      modalEvents('on');
      if (opened) {
        t4Panel.current.open(false);
      }
    });
  };

  const onDestroy = () => {
    if (t4Panel.current && t4Panel.current.destroy) {
      t4Panel.current.destroy();
    }
    t4Panel.current = null;
  };

  useIsomorphicLayoutEffect(() => {
    modalEvents('on');
    return () => {
      modalEvents('off');
    };
  });

  useIsomorphicLayoutEffect(() => {
    onMount();
    return onDestroy;
  }, []);

  const sideComputed = side || (left ? 'left' : 'right');
  // eslint-disable-next-line
  const effectComputed = effect || (reveal ? 'reveal' : push ? 'push' : 'cover');
  const classes = classNames(
    className,
    'panel',
    {
      'panel-in': isOpened.current && !isClosing.current && !isBreakpoint.current,
      'panel-in-breakpoint': isBreakpoint.current,
      'panel-in-collapsed': isCollapsed.current,
      'panel-resizable': resizable,
      [`panel-${sideComputed}`]: sideComputed,
      [`panel-${effectComputed}`]: effectComputed,
    },
    colorClasses(props),
  );

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...extraAttrs}>
      {children}
      {resizable && <div className="panel-resize-handler"></div>}
    </div>
  );
});

Panel.displayName = 't4-panel';

export default Panel;
