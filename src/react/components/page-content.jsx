import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs, emit } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';

import Preloader from './preloader.js';
import { useTab } from '../shared/use-tab.js';
import { t4ready, t4 } from '../shared/t4.js';

/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  tab? : boolean
  tabActive? : boolean
  ptr? : boolean
  ptrDistance? : number
  ptrPreloader? : boolean
  ptrBottom? : boolean
  ptrMousewheel? : boolean
  infinite? : boolean
  infiniteTop? : boolean
  infiniteDistance? : number
  infinitePreloader? : boolean
  hideBarsOnScroll? : boolean
  hideNavbarOnScroll? : boolean
  hideToolbarOnScroll? : boolean
  messagesContent? : boolean
  loginScreen? : boolean
  COLOR_PROPS
  onPtrPullStart? : (...args: any[]) => void
  onPtrPullMove? : (...args: any[]) => void
  onPtrPullEnd? : (...args: any[]) => void
  onPtrRefresh? : (done?: any) => void
  onPtrDone? : (...args: any[]) => void
  onInfinite? : (...args: any[]) => void
  onTabShow? : (el?: HTMLElement) => void
  onTabHide? : (el?: HTMLElement) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null}>;
  children?: React.ReactNode;
*/

const PageContent = forwardRef((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    tab,
    tabActive,
    ptr,
    ptrDistance,
    ptrPreloader = true,
    ptrBottom,
    ptrMousewheel,
    infinite,
    infiniteTop,
    infiniteDistance,
    infinitePreloader = true,
    hideBarsOnScroll,
    hideNavbarOnScroll,
    hideToolbarOnScroll,
    messagesContent,
    loginScreen,
  } = props;

  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);

  const onPtrPullStart = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'ptrPullStart');
  };
  const onPtrPullMove = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'ptrPullMove');
  };
  const onPtrPullEnd = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'ptrPullEnd');
  };
  const onPtrRefresh = (el, done) => {
    if (elRef.current !== el) return;
    emit(props, 'ptrRefresh', done);
  };
  const onPtrDone = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'ptrDone');
  };
  const onInfinite = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'infinite');
  };

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  useTab(elRef, props);

  const attachEvents = () => {
    t4ready(() => {
      if (ptr) {
        t4.on('ptrPullStart', onPtrPullStart);
        t4.on('ptrPullMove', onPtrPullMove);
        t4.on('ptrPullEnd', onPtrPullEnd);
        t4.on('ptrRefresh', onPtrRefresh);
        t4.on('ptrDone', onPtrDone);
      }
      if (infinite) {
        t4.on('infinite', onInfinite);
      }
    });
  };

  const detachEvents = () => {
    if (!t4) return;
    t4.off('ptrPullStart', onPtrPullStart);
    t4.off('ptrPullMove', onPtrPullMove);
    t4.off('ptrPullEnd', onPtrPullEnd);
    t4.off('ptrRefresh', onPtrRefresh);
    t4.off('ptrDone', onPtrDone);
    t4.off('infinite', onInfinite);
  };

  useIsomorphicLayoutEffect(() => {
    attachEvents();
    return detachEvents;
  });

  let ptrEl;
  let infiniteEl;

  if (ptr && ptrPreloader) {
    ptrEl = (
      <div className="ptr-preloader">
        <Preloader />
        <div className="ptr-arrow" />
      </div>
    );
  }
  if (infinite && infinitePreloader) {
    infiniteEl = <Preloader className="infinite-scroll-preloader" />;
  }

  const classes = classNames(
    className,
    'page-content',
    {
      tab,
      'tab-active': tabActive,
      'ptr-content': ptr,
      'ptr-bottom': ptrBottom,
      'infinite-scroll-content': infinite,
      'infinite-scroll-top': infiniteTop,
      'hide-bars-on-scroll': hideBarsOnScroll,
      'hide-navbar-on-scroll': hideNavbarOnScroll,
      'hide-toolbar-on-scroll': hideToolbarOnScroll,
      'messages-content': messagesContent,
      'login-screen-content': loginScreen,
    },
    colorClasses(props),
  );

  return (
    <div
      id={id}
      style={style}
      className={classes}
      data-ptr-distance={ptrDistance || undefined}
      data-ptr-mousewheel={ptrMousewheel || undefined}
      data-infinite-distance={infiniteDistance || undefined}
      ref={elRef}
      {...extraAttrs}
    >
      {ptrBottom ? null : ptrEl}
      {infiniteTop ? infiniteEl : null}
      {children}
      {infiniteTop ? null : infiniteEl}
      {ptrBottom ? ptrEl : null}
    </div>
  );
});

PageContent.displayName = 't4-page-content';

export default PageContent;
