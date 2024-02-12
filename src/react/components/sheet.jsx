import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs, emit, getSlots } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';
import { watchProp } from '../shared/watch-prop.js';
import { modalStateClasses } from '../shared/modal-state-classes.js';

/* dts-imports
import { Sheet } from 'techno4/types';
*/

/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  opened? : boolean
  animate? : boolean
  top? : boolean
  bottom? : boolean
  position? : string
  backdrop? : boolean
  backdropEl? : string | object
  closeByBackdropClick? : boolean
  closeByOutsideClick? : boolean
  closeOnEscape? : boolean
  push? : boolean
  swipeToClose? : boolean
  swipeToStep? : boolean
  swipeHandler? : string | object
  containerEl? : string | object
  COLOR_PROPS
  onSheetStepProgress? : (instance?: Sheet.Sheet, progress?: any) => void
  onSheetStepOpen? : (instance?: Sheet.Sheet) => void
  onSheetStepClose? : (instance?: Sheet.Sheet) => void
  onSheetOpen? : (instance?: Sheet.Sheet) => void
  onSheetOpened? : (instance?: Sheet.Sheet) => void
  onSheetClose? : (instance?: Sheet.Sheet) => void
  onSheetClosed? : (instance?: Sheet.Sheet) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null; t4Sheet: () => Sheet.Sheet;}>;
  children?: React.ReactNode;
*/

const Sheet = forwardRef((props, ref) => {
  const t4Sheet = useRef(null);
  const {
    className,
    id,
    style,
    top,
    bottom,
    position,
    push,
    opened,
    animate,
    backdrop,
    backdropEl,
    closeByBackdropClick,
    closeByOutsideClick,
    closeOnEscape,
    swipeToClose,
    swipeToStep,
    swipeHandler,
    containerEl,
  } = props;
  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);
  const isOpened = useRef(opened);
  const isClosing = useRef(false);

  const onStepProgress = (instance, progress) => {
    emit(props, 'sheetStepProgress', instance, progress);
  };
  const onStepOpen = (instance) => {
    emit(props, 'sheetStepOpen', instance);
  };
  const onStepClose = (instance) => {
    emit(props, 'sheetStepClose', instance);
  };
  const onOpen = (instance) => {
    isOpened.current = true;
    isClosing.current = false;
    emit(props, 'sheetOpen', instance);
  };
  const onOpened = (instance) => {
    emit(props, 'sheetOpened', instance);
  };
  const onClose = (instance) => {
    isOpened.current = false;
    isClosing.current = true;
    emit(props, 'sheetClose', instance);
  };
  const onClosed = (instance) => {
    isClosing.current = false;
    emit(props, 'sheetClosed', instance);
  };

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    t4Sheet: () => t4Sheet.current,
  }));

  const modalEvents = (method) => {
    if (!t4Sheet.current) return;
    t4Sheet.current[method]('open', onOpen);
    t4Sheet.current[method]('opened', onOpened);
    t4Sheet.current[method]('close', onClose);
    t4Sheet.current[method]('closed', onClosed);
    t4Sheet.current[method]('stepOpen', onStepOpen);
    t4Sheet.current[method]('stepClose', onStepClose);
    t4Sheet.current[method]('stepProgress', onStepProgress);
  };

  const onMount = () => {
    if (!elRef.current) return;
    const sheetParams = {
      el: elRef.current,
    };

    if ('animate' in props && typeof animate !== 'undefined') sheetParams.animate = animate;
    if ('backdrop' in props && typeof backdrop !== 'undefined') sheetParams.backdrop = backdrop;
    if ('backdropEl' in props) sheetParams.backdropEl = backdropEl;
    if ('closeByBackdropClick' in props) sheetParams.closeByBackdropClick = closeByBackdropClick;
    if ('closeByOutsideClick' in props) sheetParams.closeByOutsideClick = closeByOutsideClick;
    if ('closeOnEscape' in props) sheetParams.closeOnEscape = closeOnEscape;
    if ('swipeToClose' in props) sheetParams.swipeToClose = swipeToClose;
    if ('swipeToStep' in props) sheetParams.swipeToStep = swipeToStep;
    if ('swipeHandler' in props) sheetParams.swipeHandler = swipeHandler;
    if ('containerEl' in props) sheetParams.containerEl = containerEl;

    t4ready(() => {
      t4Sheet.current = t4.sheet.create(sheetParams);
      modalEvents('on');
      if (opened) {
        t4Sheet.current.open(false);
      }
    });
  };

  const onDestroy = () => {
    if (t4Sheet.current) {
      t4Sheet.current.destroy();
    }
    t4Sheet.current = null;
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

  watchProp(opened, (value) => {
    if (!t4Sheet.current) return;
    if (value) {
      t4Sheet.current.open();
    } else {
      t4Sheet.current.close();
    }
  });

  const slots = getSlots(props);
  const fixedList = [];
  const staticList = [];
  const fixedTags = 'navbar toolbar tabbar subnavbar searchbar messagebar fab list-index panel'
    .split(' ')
    .map((tagName) => `t4-${tagName}`);

  const slotsDefault = slots.default;

  if (slotsDefault && slotsDefault.length) {
    slotsDefault.forEach((child) => {
      if (typeof child === 'undefined') return;
      let isFixedTag = false;
      const tag = child.type && (child.type.displayName || child.type.name);
      if (!tag) {
        staticList.push(child);
        return;
      }
      if (fixedTags.indexOf(tag) >= 0) {
        isFixedTag = true;
      }

      if (isFixedTag) fixedList.push(child);
      else staticList.push(child);
    });
  }
  const innerEl = (
    <div className="sheet-modal-inner">
      {staticList}
      {slots.static}
    </div>
  );

  let positionComputed = 'bottom';
  if (position) positionComputed = position;
  else if (top) positionComputed = 'top';
  else if (bottom) positionComputed = 'bottom';

  const classes = classNames(
    className,
    'sheet-modal',
    `sheet-modal-${positionComputed}`,
    {
      'sheet-modal-push': push,
    },
    modalStateClasses({ isOpened, isClosing }),
    colorClasses(props),
  );

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...extraAttrs}>
      {fixedList}
      {slots.fixed}
      {innerEl}
    </div>
  );
});

Sheet.displayName = 't4-sheet';

export default Sheet;
