import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { classNames, getExtraAttrs, getSlots, emit } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { t4 } from '../shared/t4.js';

/* dts-props
  id: string | number;
  className: string;
  style: React.CSSProperties;
  bold: boolean;
  close: boolean;
  onClick? : (event?: any) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null}>;
  children?: React.ReactNode;
  COLOR_PROPS
*/

const ComponentName = forwardRef((props, ref) => {
  const { className, id, style, bold, close = true } = props;
  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const classes = classNames(
    className,
    {
      'actions-button': true,
      'actions-button-bold': bold,
    },
    colorClasses(props),
  );

  let mediaEl;

  const slots = getSlots(props);

  if (slots.media && slots.media.length) {
    mediaEl = <div className="actions-button-media">{slots.media}</div>;
  }

  const onClick = (e) => {
    if (elRef.current && close && t4) {
      t4.actions.close(t4.$(elRef.current).parents('.actions-modal'));
    }
    emit(props, 'click', e);
  };

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...extraAttrs} onClick={onClick}>
      {mediaEl}
      <div className="actions-button-text">{slots.default}</div>
    </div>
  );
});

ComponentName.displayName = 't4-actions-button';

export default ComponentName;
