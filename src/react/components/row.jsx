import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react';
import { classNames, getExtraAttrs, emit } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';

/* dts-props
  id: string | number;
  className: string;
  style: React.CSSProperties;
  noGap? : boolean
  tag? : string
  resizable? : boolean
  resizableFixed? : boolean
  resizableAbsolute? : boolean
  resizableHandler? : boolean
  onClick? : (event?: any) => void
  onGridResize? : (...args: any[]) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null}>;
  children?: React.ReactNode;
  COLOR_PROPS
*/

const Row = forwardRef((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    tag = 'div',
    noGap,
    resizable,
    resizableFixed,
    resizableAbsolute,
    resizableHandler = true,
  } = props;
  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);

  const onClick = (event) => {
    emit(props, 'click', event);
  };

  const onResize = (el) => {
    if (el === elRef.current) {
      emit(props, 'gridResize');
    }
  };

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  useEffect(() => {
    t4ready(() => {
      t4.on('gridResize', onResize);
    });
    return () => {
      t4.off('gridResize', onResize);
    };
  });

  const RowTag = tag;

  const classes = classNames(
    className,
    'row',
    {
      'no-gap': noGap,
      resizable,
      'resizable-fixed': resizableFixed,
      'resizable-absolute': resizableAbsolute,
    },
    colorClasses(props),
  );

  return (
    <RowTag id={id} style={style} className={classes} ref={elRef} {...extraAttrs} onClick={onClick}>
      {children}
      {resizable && resizableHandler && <span className="resize-handler" />}
    </RowTag>
  );
});

Row.displayName = 't4-row';

export default Row;
