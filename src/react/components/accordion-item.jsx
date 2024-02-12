import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs, emit } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { t4, t4ready } from '../shared/t4.js';

/* dts-props
  id: string | number;
  className: string;
  style: React.CSSProperties;
  opened: boolean;
  onAccordionBeforeOpen? : (prevent?: any) => void
  onAccordionOpen? : (...args: any[]) => void
  onAccordionOpened? : (...args: any[]) => void
  onAccordionBeforeClose? : (prevent?: any) => void
  onAccordionClose? : (...args: any[]) => void
  onAccordionClosed? : (...args: any[]) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null}>;
  children?: React.ReactNode;
  COLOR_PROPS
*/

const AccordionItem = forwardRef((props, ref) => {
  const { className, id, style, children, opened } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const onBeforeOpen = (el, prevent) => {
    if (elRef.current !== el) return;
    emit(props, 'accordionBeforeOpen', prevent);
  };
  const onOpen = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'accordionOpen');
  };
  const onOpened = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'accordionOpened');
  };
  const onBeforeClose = (el, prevent) => {
    if (elRef.current !== el) return;
    emit(props, 'accordionBeforeClose', prevent);
  };
  const onClose = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'accordionClose');
  };
  const onClosed = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'accordionClosed');
  };

  const attachEvents = () => {
    t4ready(() => {
      t4.on('accordionBeforeOpen', onBeforeOpen);
      t4.on('accordionOpen', onOpen);
      t4.on('accordionOpened', onOpened);
      t4.on('accordionBeforeClose', onBeforeClose);
      t4.on('accordionClose', onClose);
      t4.on('accordionClosed', onClosed);
    });
  };

  const detachEvents = () => {
    t4.off('accordionBeforeOpen', onBeforeOpen);
    t4.off('accordionOpen', onOpen);
    t4.off('accordionOpened', onOpened);
    t4.off('accordionBeforeClose', onBeforeClose);
    t4.off('accordionClose', onClose);
    t4.off('accordionClosed', onClosed);
  };

  useIsomorphicLayoutEffect(() => {
    attachEvents();
    return detachEvents;
  });

  const extraAttrs = getExtraAttrs(props);
  const classes = classNames(
    className,
    'accordion-item',
    {
      'accordion-item-opened': opened,
    },
    colorClasses(props),
  );

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...extraAttrs}>
      {children}
    </div>
  );
});

AccordionItem.displayName = 't4-accordion-item';

export default AccordionItem;
