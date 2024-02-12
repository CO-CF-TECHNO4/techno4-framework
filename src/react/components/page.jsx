import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs, getSlots, emit } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';

import PageContent from './page-content.js';

/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  name? : string
  stacked? : boolean
  withSubnavbar? : boolean
  subnavbar? : boolean
  withNavbarLarge? : boolean
  navbarLarge? : boolean
  noNavbar? : boolean
  noToolbar? : boolean
  tabs? : boolean
  pageContent? : boolean
  noSwipeback? : boolean
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
  onPtrRefresh? : (...args: any[]) => void
  onPtrDone? : (...args: any[]) => void
  onInfinite? : (...args: any[]) => void
  onPageMounted? : (page?: any) => void
  onPageInit? : (page?: any) => void
  onPageReinit? : (page?: any) => void
  onPageBeforeIn? : (page?: any) => void
  onPageBeforeOut? : (page?: any) => void
  onPageAfterOut? : (page?: any) => void
  onPageAfterIn? : (page?: any) => void
  onPageBeforeRemove? : (page?: any) => void
  onPageBeforeUnmount? : (page?: any) => void
  onPageTabShow? : (...args: any[]) => void
  onPageTabHide? : (...args: any[]) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null}>;
  children?: React.ReactNode;
*/

const Page = forwardRef((props, ref) => {
  const {
    className,
    id,
    style,
    name,
    stacked,
    withSubnavbar,
    subnavbar,
    withNavbarLarge,
    navbarLarge,
    noNavbar,
    noToolbar,
    tabs,
    pageContent = true,
    noSwipeback,
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

    onPtrPullStart,
    onPtrPullMove,
    onPtrPullEnd,
    onPtrRefresh,
    onPtrDone,
    onInfinite,
  } = props;

  const hasSubnavbar = useRef(false);
  const hasNavbarLarge = useRef(false);
  const hasNavbarLargeCollapsed = useRef(false);
  const hasCardExpandableOpened = useRef(false);
  const routerPositionClass = useRef('');
  const routerForceUnstack = useRef(false);
  const routerPageRole = useRef(null);
  const routerPageRoleDetailRoot = useRef(false);
  const routerPageMasterStack = useRef(false);

  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);

  // Main Page Events
  const onPageMounted = (page) => {
    if (elRef.current !== page.el) return;
    emit(props, 'pageMounted', page);
  };
  const onPageInit = (page) => {
    if (elRef.current !== page.el) return;
    if (typeof withSubnavbar === 'undefined' && typeof subnavbar === 'undefined') {
      if (
        (page.$navbarEl && page.$navbarEl.length && page.$navbarEl.find('.subnavbar').length) ||
        page.$el.children('.navbar').find('.subnavbar').length
      ) {
        hasSubnavbar.current = true;
      }
    }

    if (typeof withNavbarLarge === 'undefined' && typeof navbarLarge === 'undefined') {
      if (page.$navbarEl && page.$navbarEl.hasClass('navbar-large')) {
        hasNavbarLarge.current = true;
      }
    }

    emit(props, 'pageInit', page);
  };
  const onPageReinit = (page) => {
    if (elRef.current !== page.el) return;
    emit(props, 'pageReinit', page);
  };
  const onPageBeforeIn = (page) => {
    if (elRef.current !== page.el) return;
    if (!page.swipeBack) {
      if (page.from === 'next') {
        routerPositionClass.current = 'page-next';
      }
      if (page.from === 'previous') {
        routerPositionClass.current = 'page-previous';
      }
    }
    emit(props, 'pageBeforeIn', page);
  };
  const onPageBeforeOut = (page) => {
    if (elRef.current !== page.el) return;
    emit(props, 'pageBeforeOut', page);
  };
  const onPageAfterOut = (page) => {
    if (elRef.current !== page.el) return;
    if (page.to === 'next') {
      routerPositionClass.current = 'page-next';
    }
    if (page.to === 'previous') {
      routerPositionClass.current = 'page-previous';
    }
    emit(props, 'pageAfterOut', page);
  };
  const onPageAfterIn = (page) => {
    if (elRef.current !== page.el) return;
    routerPositionClass.current = 'page-current';
    emit(props, 'pageAfterIn', page);
  };
  const onPageBeforeRemove = (page) => {
    if (elRef.current !== page.el) return;
    emit(props, 'pageBeforeRemove', page);
  };
  const onPageBeforeUnmount = (page) => {
    if (elRef.current !== page.el) return;
    emit(props, 'pageBeforeUnmount', page);
  };
  // Helper events
  const onPageStack = (pageEl) => {
    if (elRef.current !== pageEl) return;
    routerForceUnstack.current = false;
  };
  const onPageUnstack = (pageEl) => {
    if (elRef.current !== pageEl) return;
    routerForceUnstack.current = true;
  };
  const onPagePosition = (pageEl, position) => {
    if (elRef.current !== pageEl) return;
    routerPositionClass.current = `page-${position}`;
  };
  const onPageRole = (pageEl, rolesData) => {
    if (elRef.current !== pageEl) return;
    routerPageRole.current = rolesData.role;
    routerPageRoleDetailRoot.current = rolesData.detailRoot;
  };
  const onPageMasterStack = (pageEl) => {
    if (elRef.current !== pageEl) return;
    routerPageMasterStack.current = true;
  };
  const onPageMasterUnstack = (pageEl) => {
    if (elRef.current !== pageEl) return;
    routerPageMasterStack.current = false;
  };
  const onPageNavbarLargeCollapsed = (pageEl) => {
    if (elRef.current !== pageEl) return;
    hasNavbarLargeCollapsed.current = true;
  };
  const onPageNavbarLargeExpanded = (pageEl) => {
    if (elRef.current !== pageEl) return;
    hasNavbarLargeCollapsed.current = false;
  };
  const onCardOpened = (cardEl, pageEl) => {
    if (elRef.current !== pageEl) return;
    hasCardExpandableOpened.current = true;
  };
  const onCardClose = (cardEl, pageEl) => {
    if (elRef.current !== pageEl) return;
    hasCardExpandableOpened.current = false;
  };
  const onPageTabShow = (pageEl) => {
    if (elRef.current !== pageEl) return;
    emit(props, 'pageTabShow');
  };
  const onPageTabHide = (pageEl) => {
    if (elRef.current !== pageEl) return;
    emit(props, 'pageTabHide');
  };

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const attachEvents = () => {
    t4ready(() => {
      t4.on('pageMounted', onPageMounted);
      t4.on('pageInit', onPageInit);
      t4.on('pageReinit', onPageReinit);
      t4.on('pageBeforeIn', onPageBeforeIn);
      t4.on('pageBeforeOut', onPageBeforeOut);
      t4.on('pageAfterOut', onPageAfterOut);
      t4.on('pageAfterIn', onPageAfterIn);
      t4.on('pageBeforeRemove', onPageBeforeRemove);
      t4.on('pageBeforeUnmount', onPageBeforeUnmount);
      t4.on('pageStack', onPageStack);
      t4.on('pageUnstack', onPageUnstack);
      t4.on('pagePosition', onPagePosition);
      t4.on('pageRole', onPageRole);
      t4.on('pageMasterStack', onPageMasterStack);
      t4.on('pageMasterUnstack', onPageMasterUnstack);
      t4.on('pageNavbarLargeCollapsed', onPageNavbarLargeCollapsed);
      t4.on('pageNavbarLargeExpanded', onPageNavbarLargeExpanded);
      t4.on('cardOpened', onCardOpened);
      t4.on('cardClose', onCardClose);
      t4.on('pageTabShow', onPageTabShow);
      t4.on('pageTabHide', onPageTabHide);
    });
  };

  const detachEvents = () => {
    if (!t4) return;
    t4.off('pageMounted', onPageMounted);
    t4.off('pageInit', onPageInit);
    t4.off('pageReinit', onPageReinit);
    t4.off('pageBeforeIn', onPageBeforeIn);
    t4.off('pageBeforeOut', onPageBeforeOut);
    t4.off('pageAfterOut', onPageAfterOut);
    t4.off('pageAfterIn', onPageAfterIn);
    t4.off('pageBeforeRemove', onPageBeforeRemove);
    t4.off('pageBeforeUnmount', onPageBeforeUnmount);
    t4.off('pageStack', onPageStack);
    t4.off('pageUnstack', onPageUnstack);
    t4.off('pagePosition', onPagePosition);
    t4.off('pageRole', onPageRole);
    t4.off('pageMasterStack', onPageMasterStack);
    t4.off('pageMasterUnstack', onPageMasterUnstack);
    t4.off('pageNavbarLargeCollapsed', onPageNavbarLargeCollapsed);
    t4.off('pageNavbarLargeExpanded', onPageNavbarLargeExpanded);
    t4.off('cardOpened', onCardOpened);
    t4.off('cardClose', onCardClose);
    t4.off('pageTabShow', onPageTabShow);
    t4.off('pageTabHide', onPageTabHide);
  };

  useIsomorphicLayoutEffect(() => {
    attachEvents();
    return detachEvents;
  });

  const slots = getSlots(props);

  const fixedList = [];
  const staticList = [];

  const { static: slotsStatic, fixed: slotsFixed, default: slotsDefault } = slots;

  const fixedTags = 'navbar toolbar tabbar subnavbar searchbar messagebar fab list-index panel'
    .split(' ')
    .map((tagName) => `t4-${tagName}`);

  let hasSubnavbarComputed;
  let hasNavbarLargeComputed;
  let hasMessages = messagesContent;

  if (slotsDefault) {
    slotsDefault.forEach((child) => {
      if (typeof child === 'undefined') return;
      let isFixedTag = false;
      const tag = child.type && (child.type.displayName || child.type.name);
      if (!tag) {
        if (pageContent) staticList.push(child);
        return;
      }
      if (tag === 't4-subnavbar') hasSubnavbarComputed = true;
      if (tag === 't4-navbar') {
        if (child.props && child.props.large) hasNavbarLargeComputed = true;
      }
      if (typeof hasMessages === 'undefined' && tag === 't4-messages') hasMessages = true;
      if (fixedTags.indexOf(tag) >= 0) {
        isFixedTag = true;
      }

      if (pageContent) {
        if (isFixedTag) fixedList.push(child);
        else staticList.push(child);
      }
    });
  }

  const forceSubnavbar =
    typeof subnavbar === 'undefined' && typeof withSubnavbar === 'undefined'
      ? hasSubnavbarComputed || hasSubnavbar.current
      : false;

  const forceNavbarLarge =
    typeof navbarLarge === 'undefined' && typeof withNavbarLarge === 'undefined'
      ? hasNavbarLargeComputed || hasNavbarLarge.current
      : false;

  const classes = classNames(
    className,
    'page',
    routerPositionClass.current,
    {
      stacked: stacked && !routerForceUnstack.current,
      tabs,
      'page-with-subnavbar': subnavbar || withSubnavbar || forceSubnavbar,
      'page-with-navbar-large': navbarLarge || withNavbarLarge || forceNavbarLarge,
      'no-navbar': noNavbar,
      'no-toolbar': noToolbar,
      'no-swipeback': noSwipeback,
      'page-master': routerPageRole.current === 'master',
      'page-master-detail': routerPageRole.current === 'detail',
      'page-master-detail-root': routerPageRoleDetailRoot.current === true,
      'page-master-stacked': routerPageMasterStack.current === true,
      'page-with-navbar-large-collapsed': hasNavbarLargeCollapsed.current === true,
      'page-with-card-opened': hasCardExpandableOpened.current === true,
      'login-screen-page': loginScreen,
    },
    colorClasses(props),
  );

  if (!pageContent) {
    return (
      <div id={id} style={style} className={classes} data-name={name} ref={elRef} {...extraAttrs}>
        {slotsFixed}
        {slotsStatic}
        {slotsDefault}
      </div>
    );
  }

  const pageContentEl = (
    <PageContent
      ptr={ptr}
      ptrDistance={ptrDistance}
      ptrPreloader={ptrPreloader}
      ptrBottom={ptrBottom}
      ptrMousewheel={ptrMousewheel}
      infinite={infinite}
      infiniteTop={infiniteTop}
      infiniteDistance={infiniteDistance}
      infinitePreloader={infinitePreloader}
      hideBarsOnScroll={hideBarsOnScroll}
      hideNavbarOnScroll={hideNavbarOnScroll}
      hideToolbarOnScroll={hideToolbarOnScroll}
      messagesContent={messagesContent || hasMessages}
      loginScreen={loginScreen}
      onPtrPullStart={onPtrPullStart}
      onPtrPullMove={onPtrPullMove}
      onPtrPullEnd={onPtrPullEnd}
      onPtrRefresh={onPtrRefresh}
      onPtrDone={onPtrDone}
      onInfinite={onInfinite}
    >
      {slotsStatic}
      {staticList}
    </PageContent>
  );

  return (
    <div id={id} style={style} className={classes} data-name={name} ref={elRef} {...extraAttrs}>
      {fixedList}
      {slotsFixed}
      {pageContentEl}
    </div>
  );
});

Page.displayName = 't4-page';

export default Page;
