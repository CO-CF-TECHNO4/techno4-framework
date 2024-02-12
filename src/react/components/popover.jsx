import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs, emit } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';
import { watchProp } from '../shared/watch-prop.js';
import { modalStateClasses } from '../shared/modal-state-classes.js';

/* dts-imports
import { Popover } from 'techno4/types';
*/

/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  opened? : boolean
  animate? : boolean
  targetEl? : string | object
  backdrop? : boolean
  backdropEl? : string | object
  closeByBackdropClick? : boolean
  closeByOutsideClick? : boolean
  closeOnEscape? : boolean
  containerEl? : string | object
  verticalPosition?: string
  COLOR_PROPS
  onPopoverOpen? : (instance?: Popover.Popover) => void
  onPopoverOpened? : (instance?: Popover.Popover) => void
  onPopoverClose? : (instance?: Popover.Popover) => void
  onPopoverClosed? : (instance?: Popover.Popover) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null; t4Popover: () => Popover.Popover}>;
  children?: React.ReactNode;
*/

const Popover = forwardRef((props, ref) => {
  const t4Popover = useRef(null);
  const {
    className,
    id,
    style,
    children,
    opened,
    animate,
    targetEl,
    backdrop,
    backdropEl,
    closeByBackdropClick,
    closeByOutsideClick,
    closeOnEscape,
    containerEl,
    verticalPosition,
  } = props;

  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);
  const isOpened = useRef(opened);
  const isClosing = useRef(false);

  const onOpen = (instance) => {
    isOpened.current = true;
    isClosing.current = false;
    emit(props, 'popoverOpen', instance);
  };
  const onOpened = (instance) => {
    emit(props, 'popoverOpened', instance);
  };
  const onClose = (instance) => {
    isOpened.current = false;
    isClosing.current = true;
    emit(props, 'popoverClose', instance);
  };
  const onClosed = (instance) => {
    isClosing.current = false;
    emit(props, 'popoverClosed', instance);
  };

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    t4Popover: () => t4Popover.current,
  }));

  watchProp(opened, (value) => {
    if (!t4Popover.current) return;
    if (value) {
      t4Popover.current.open();
    } else {
      t4Popover.current.close();
    }
  });

  const modalEvents = (method) => {
    if (!t4Popover.current) return;
    t4Popover.current[method]('open', onOpen);
    t4Popover.current[method]('opened', onOpened);
    t4Popover.current[method]('close', onClose);
    t4Popover.current[method]('closed', onClosed);
  };

  const onMount = () => {
    if (!elRef.current) return;
    const popoverParams = {
      el: elRef.current,
    };
    if (targetEl) popoverParams.targetEl = targetEl;

    if ('closeByBackdropClick' in props) popoverParams.closeByBackdropClick = closeByBackdropClick;
    if ('closeByOutsideClick' in props) popoverParams.closeByOutsideClick = closeByOutsideClick;
    if ('closeOnEscape' in props) popoverParams.closeOnEscape = closeOnEscape;
    if ('backdrop' in props) popoverParams.backdrop = backdrop;
    if ('backdropEl' in props) popoverParams.backdropEl = backdropEl;
    if ('animate' in props) popoverParams.animate = animate;
    if ('containerEl' in props) popoverParams.containerEl = containerEl;
    if ('verticalPosition' in props) popoverParams.verticalPosition = verticalPosition;

    t4ready(() => {
      t4Popover.current = t4.popover.create(popoverParams);
      modalEvents('on');

      if (opened && targetEl) {
        t4Popover.current.open(targetEl, false);
      }
    });
  };

  const onDestroy = () => {
    if (t4Popover.current) {
      t4Popover.current.destroy();
    }
    t4Popover.current = null;
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
    'popover',
    modalStateClasses({ isOpened, isClosing }),
    colorClasses(props),
  );

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...extraAttrs}>
      <div className="popover-angle" />
      <div className="popover-inner">{children}</div>
    </div>
  );
});

Popover.displayName = 't4-popover';

export default Popover;
