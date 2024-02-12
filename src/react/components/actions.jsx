import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs, emit } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { t4, t4ready } from '../shared/t4.js';
import { watchProp } from '../shared/watch-prop.js';
import { modalStateClasses } from '../shared/modal-state-classes.js';

/* dts-imports
import { Actions } from 'techno4/types';
*/

/* dts-props
  id: string | number;
  className: string;
  style: React.CSSProperties;
  opened? : boolean
  animate? : boolean
  grid? : boolean
  convertToPopover? : boolean
  forceToPopover? : boolean
  target? : string | object
  backdrop? : boolean
  backdropEl? : string | object
  closeByBackdropClick? : boolean
  closeByOutsideClick? : boolean
  closeOnEscape? : boolean
  onActionsOpen? : (instance?: Actions.Actions) => void
  onActionsOpened? : (instance?: Actions.Actions) => void
  onActionsClose? : (instance?: Actions.Actions) => void
  onActionsClosed? : (instance?: Actions.Actions) => void
  containerEl? : string | object
  ref?: React.MutableRefObject<{el: HTMLElement | null; t4Actions: () => Actions.Actions}>;
  children?: React.ReactNode;
  COLOR_PROPS
*/

const Actions = forwardRef((props, ref) => {
  const { className, id, style, children, grid, opened = false, animate } = props;
  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);
  const isOpened = useRef(opened);
  const isClosing = useRef(false);
  const t4Actions = useRef(null);

  const onOpen = (instance) => {
    isOpened.current = true;
    isClosing.current = false;
    emit(props, 'actionsOpen', instance);
  };
  const onOpened = (instance) => {
    emit(props, 'actionsOpened', instance);
  };
  const onClose = (instance) => {
    isOpened.current = false;
    isClosing.current = true;
    emit(props, 'actionsClose', instance);
  };
  const onClosed = (instance) => {
    isClosing.current = false;
    emit(props, 'actionsClosed', instance);
  };

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    t4Actions: () => t4Actions.current,
  }));

  // watch opened changes
  watchProp(opened, (value) => {
    if (!t4Actions.current) return;
    if (value) {
      t4Actions.current.open();
    } else {
      t4Actions.current.close();
    }
  });

  const modalEvents = (method) => {
    if (!t4Actions.current) return;
    t4Actions.current[method]('open', onOpen);
    t4Actions.current[method]('opened', onOpened);
    t4Actions.current[method]('close', onClose);
    t4Actions.current[method]('closed', onClosed);
  };

  const onMount = () => {
    if (!elRef.current) return;

    const {
      target,
      convertToPopover,
      forceToPopover,
      closeByBackdropClick,
      closeByOutsideClick,
      closeOnEscape,
      backdrop,
      backdropEl,
      containerEl,
    } = props;

    const params = {
      el: elRef.current,
      grid,
    };
    if (target) params.targetEl = target;
    if ('convertToPopover' in props) params.convertToPopover = convertToPopover;
    if ('forceToPopover' in props) params.forceToPopover = forceToPopover;
    if ('backdrop' in props) params.backdrop = backdrop;
    if ('backdropEl' in props) params.backdropEl = backdropEl;
    if ('closeByBackdropClick' in props) params.closeByBackdropClick = closeByBackdropClick;
    if ('closeByOutsideClick' in props) params.closeByOutsideClick = closeByOutsideClick;
    if ('closeOnEscape' in props) params.closeOnEscape = closeOnEscape;
    if ('animate' in props) params.animate = animate;
    if ('containerEl' in props) params.containerEl = containerEl;

    t4ready(() => {
      t4Actions.current = t4.actions.create(params);
      modalEvents('on');

      if (opened) {
        t4Actions.current.open(false);
      }
    });
  };

  const onDestroy = () => {
    if (t4Actions.current) t4Actions.current.destroy();
    t4Actions.current = null;
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
    'actions-modal',
    {
      'actions-grid': grid,
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

Actions.displayName = 't4-actions';

export default Actions;
