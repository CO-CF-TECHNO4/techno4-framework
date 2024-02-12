import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { t4, t4ready } from '../shared/t4.js';
import { colorClasses } from '../shared/mixins.js';
import { modalStateClasses } from '../shared/modal-state-classes.js';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, emit, getExtraAttrs } from '../shared/utils.js';
import { watchProp } from '../shared/watch-prop.js';

/* dts-imports
import { Popup } from 'techno4/types';
*/

/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  tabletFullscreen? : boolean
  opened? : boolean
  animate? : boolean
  backdrop? : boolean
  backdropEl? : string | object
  closeByBackdropClick? : boolean
  closeOnEscape? : boolean
  swipeToClose? : boolean | string
  swipeHandler? : string | object
  push? : boolean
  containerEl?: string | object
  COLOR_PROPS
  onPopupSwipeStart? : (instance?: Popup.Popup) => void
  onPopupSwipeMove? : (instance?: Popup.Popup) => void
  onPopupSwipeEnd? : (instance?: Popup.Popup) => void
  onPopupSwipeClose? : (instance?: Popup.Popup) => void
  onPopupOpen? : (instance?: Popup.Popup) => void
  onPopupOpened? : (instance?: Popup.Popup) => void
  onPopupClose? : (instance?: Popup.Popup) => void
  onPopupClosed? : (instance?: Popup.Popup) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null; t4Popup: () => Popup.Popup}>;
  children?: React.ReactNode;
*/

const Popup = forwardRef((props, ref) => {
  const t4Popup = useRef(null);
  const {
    className,
    id,
    style,
    children,
    tabletFullscreen,
    push,
    opened,
    closeByBackdropClick,
    backdrop,
    backdropEl,
    animate,
    closeOnEscape,
    swipeToClose = false,
    swipeHandler,
    containerEl,
  } = props;

  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);
  const isOpened = useRef(opened);
  const isClosing = useRef(false);

  const onSwipeStart = (instance) => {
    emit(props, 'popupSwipeStart', instance);
  };
  const onSwipeMove = (instance) => {
    emit(props, 'popupSwipeMove', instance);
  };
  const onSwipeEnd = (instance) => {
    emit(props, 'popupSwipeEnd', instance);
  };
  const onSwipeClose = (instance) => {
    emit(props, 'popupSwipeClose', instance);
  };
  const onOpen = (instance) => {
    isOpened.current = true;
    isClosing.current = false;
    emit(props, 'popupOpen', instance);
  };
  const onOpened = (instance) => {
    emit(props, 'popupOpened', instance);
  };
  const onClose = (instance) => {
    isOpened.current = false;
    isClosing.current = true;
    emit(props, 'popupClose', instance);
  };
  const onClosed = (instance) => {
    isClosing.current = false;
    emit(props, 'popupClosed', instance);
  };

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    t4Popup: () => t4Popup.current,
  }));

  watchProp(opened, (value) => {
    if (!t4Popup.current) return;
    if (value) {
      t4Popup.current.open();
    } else {
      t4Popup.current.close();
    }
  });

  const modalEvents = (method) => {
    if (!t4Popup.current) return;
    t4Popup.current[method]('swipeStart', onSwipeStart);
    t4Popup.current[method]('swipeMove', onSwipeMove);
    t4Popup.current[method]('swipeEnd', onSwipeEnd);
    t4Popup.current[method]('swipeClose', onSwipeClose);
    t4Popup.current[method]('open', onOpen);
    t4Popup.current[method]('opened', onOpened);
    t4Popup.current[method]('close', onClose);
    t4Popup.current[method]('closed', onClosed);
  };

  const onMount = () => {
    if (!elRef.current) return;
    const popupParams = {
      el: elRef.current,
    };

    if ('closeByBackdropClick' in props) popupParams.closeByBackdropClick = closeByBackdropClick;
    if ('closeOnEscape' in props) popupParams.closeOnEscape = closeOnEscape;
    if ('animate' in props) popupParams.animate = animate;
    if ('backdrop' in props) popupParams.backdrop = backdrop;
    if ('backdropEl' in props) popupParams.backdropEl = backdropEl;
    if ('swipeToClose' in props) popupParams.swipeToClose = swipeToClose;
    if ('swipeHandler' in props) popupParams.swipeHandler = swipeHandler;
    if ('containerEl' in props) popupParams.containerEl = containerEl;

    t4ready(() => {
      t4Popup.current = t4.popup.create(popupParams);
      modalEvents('on');
      if (opened) {
        t4Popup.current.open(false);
      }
    });
  };

  const onDestroy = () => {
    if (t4Popup.current) {
      t4Popup.current.destroy();
    }
    t4Popup.current = null;
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

  const classes = classNames(
    className,
    'popup',
    {
      'popup-tablet-fullscreen': tabletFullscreen,
      'popup-push': push,
    },
    modalStateClasses({ isOpened, isClosing }),
    colorClasses(props),
  );

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...extraAttrs}>
      {children}
    </div>
  );
});

Popup.displayName = 't4-popup';

export default Popup;
