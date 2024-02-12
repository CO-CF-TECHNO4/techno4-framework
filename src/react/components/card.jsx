import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';

import CardHeader from './card-header.js';
import CardContent from './card-content.js';
import CardFooter from './card-footer.js';

import { classNames, getExtraAttrs, getSlots, emit } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { t4, t4ready } from '../shared/t4.js';
import { watchProp } from '../shared/watch-prop.js';

/* dts-props
  id: string | number;
  className: string;
  style: React.CSSProperties;
  title? : string | number
  content? : string | number
  footer? : string | number
  outline? : boolean
  expandable? : boolean
  expandableAnimateWidth? : boolean
  expandableOpened? : boolean
  animate? : boolean
  hideNavbarOnOpen? : boolean
  hideToolbarOnOpen? : boolean
  hideStatusbarOnOpen? : boolean
  scrollableEl? : string
  swipeToClose? : boolean
  closeByBackdropClick? : boolean
  backdrop? : boolean
  backdropEl? : string
  noShadow? : boolean
  noBorder? : boolean
  padding? : boolean
  onCardBeforeOpen? : (el?: HTMLElement, prevent?: any) => void
  onCardOpen? : (el?: HTMLElement) => void
  onCardOpened? : (el?: HTMLElement, pageEl?: HTMLElement) => void
  onCardClose? : (el?: HTMLElement) => void
  onCardClosed? : (el?: HTMLElement, pageEl?: HTMLElement) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null; open: () => void; close: () => void}>;
  children?: React.ReactNode;
  COLOR_PROPS
*/

const Card = forwardRef((props, ref) => {
  const {
    className,
    id,
    style,
    title,
    content,
    footer,
    padding,
    outline,
    expandable,
    expandableAnimateWidth,
    expandableOpened,
    animate,
    hideNavbarOnOpen,
    hideToolbarOnOpen,
    hideStatusbarOnOpen,
    scrollableEl,
    swipeToClose,
    closeByBackdropClick,
    backdrop,
    backdropEl,
    noShadow,
    noBorder,
  } = props;
  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);

  const open = () => {
    if (!elRef.current) return;
    t4.card.open(elRef.current);
  };
  const close = () => {
    if (!elRef.current) return;
    t4.card.close(elRef.current);
  };
  const onBeforeOpen = (el, prevent) => {
    if (elRef.current !== el) return;
    emit(props, 'cardBeforeOpen', el, prevent);
  };
  const onOpen = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'cardOpen', el);
  };
  const onOpened = (el, pageEl) => {
    if (elRef.current !== el) return;
    emit(props, 'cardOpened', el, pageEl);
  };
  const onClose = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'cardClose', el);
  };
  const onClosed = (el, pageEl) => {
    if (elRef.current !== el) return;
    emit(props, 'cardClosed', el, pageEl);
  };

  const attachEvents = () => {
    if (!expandable || !elRef.current) return;
    t4ready(() => {
      t4.on('cardBeforeOpen', onBeforeOpen);
      t4.on('cardOpen', onOpen);
      t4.on('cardOpened', onOpened);
      t4.on('cardClose', onClose);
      t4.on('cardClosed', onClosed);
    });
  };

  const detachEvents = () => {
    t4.off('cardBeforeOpen', onBeforeOpen);
    t4.off('cardOpen', onOpen);
    t4.off('cardOpened', onOpened);
    t4.off('cardClose', onClose);
    t4.off('cardClosed', onClosed);
  };

  const onMount = () => {
    if (!expandable || !elRef.current) return;
    t4ready(() => {
      if (expandable && expandableOpened) {
        t4.card.open(elRef.current, false);
      }
    });
  };

  useIsomorphicLayoutEffect(() => {
    onMount();
  }, []);

  useIsomorphicLayoutEffect(() => {
    attachEvents();
    return detachEvents;
  });

  watchProp(expandableOpened, (value) => {
    if (value) {
      open();
    } else {
      close();
    }
  });

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    open,
    close,
  }));

  let headerEl;
  let contentEl;
  let footerEl;

  const classes = classNames(
    className,
    'card',
    {
      'card-outline': outline,
      'card-expandable': expandable,
      'card-expandable-animate-width': expandableAnimateWidth,
      'no-shadow': noShadow,
      'no-border': noBorder,
    },
    colorClasses(props),
  );

  const slots = getSlots(props);

  if (title || slots.header) {
    headerEl = (
      <CardHeader>
        {title}
        {slots.header}
      </CardHeader>
    );
  }
  if (content || slots.content) {
    contentEl = (
      <CardContent padding={padding}>
        {content}
        {slots.content}
      </CardContent>
    );
  }
  if (footer || slots.footer) {
    footerEl = (
      <CardFooter>
        {footer}
        {slots.footer}
      </CardFooter>
    );
  }

  return (
    <div
      id={id}
      style={style}
      className={classes}
      data-animate={typeof animate === 'undefined' ? animate : animate.toString()}
      data-hide-navbar-on-open={
        typeof hideNavbarOnOpen === 'undefined' ? hideNavbarOnOpen : hideNavbarOnOpen.toString()
      }
      data-hide-toolbar-on-open={
        typeof hideToolbarOnOpen === 'undefined' ? hideToolbarOnOpen : hideToolbarOnOpen.toString()
      }
      data-hide-statusbar-on-open={
        typeof hideStatusbarOnOpen === 'undefined'
          ? hideStatusbarOnOpen
          : hideStatusbarOnOpen.toString()
      }
      data-scrollable-el={scrollableEl}
      data-swipe-to-close={
        typeof swipeToClose === 'undefined' ? swipeToClose : swipeToClose.toString()
      }
      data-close-by-backdrop-click={
        typeof closeByBackdropClick === 'undefined'
          ? closeByBackdropClick
          : closeByBackdropClick.toString()
      }
      data-backdrop={typeof backdrop === 'undefined' ? backdrop : backdrop.toString()}
      data-backdrop-el={backdropEl}
      ref={elRef}
      {...extraAttrs}
    >
      {headerEl}
      {contentEl}
      {footerEl}
      {slots.default}
    </div>
  );
});

Card.displayName = 't4-card';

export default Card;
