import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs, noUndefinedProps, emit } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';
import { watchProp } from '../shared/watch-prop.js';

/* dts-imports
import { Range } from 'techno4/types';
*/

/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  init? : boolean
  value? : number | Array<any> | string
  min? : number | string
  max? : number | string
  step? : number | string
  label? : boolean
  dual? : boolean
  vertical? : boolean
  verticalReversed? : boolean
  draggableBar? : boolean
  formatLabel? : Function
  scale? : boolean
  scaleSteps? : number
  scaleSubSteps? : number
  formatScaleLabel? : Function
  limitKnobPosition? : boolean
  name? : string
  input? : boolean
  inputId? : string
  disabled? : boolean
  COLOR_PROPS
  onRangeChange? : (val?: any) => void
  onRangeChanged? : (val?: any) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null; t4Range: () => Range.Range}>;
  children?: React.ReactNode;
*/

const Range = forwardRef((props, ref) => {
  const t4Range = useRef(null);
  const {
    className,
    id,
    style,
    children,
    init = true,
    value = 0,
    min = 0,
    max = 100,
    step = 1,
    label = false,
    dual = false,
    vertical = false,
    verticalReversed = false,
    draggableBar = true,
    formatLabel,
    scale = false,
    scaleSteps = 5,
    scaleSubSteps = 0,
    formatScaleLabel,
    limitKnobPosition = undefined,
    name,
    input,
    inputId,
    disabled,
  } = props;
  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    t4Range: () => t4Range.current,
  }));

  watchProp(value, (newValue) => {
    if (!t4Range.current) return;
    const rangeValue = t4Range.current.value;
    if (Array.isArray(newValue) && Array.isArray(rangeValue)) {
      if (rangeValue[0] !== newValue[0] || rangeValue[1] !== newValue[1]) {
        t4Range.current.setValue(newValue);
      }
    } else {
      t4Range.current.setValue(newValue);
    }
  });

  const onChange = (range, val) => {
    emit(props, 'rangeChange', val);
  };

  const onChanged = (range, val) => {
    emit(props, 'rangeChanged', val);
  };

  const rangeEvents = (method) => {
    if (!t4Range.current) return;
    t4Range.current[method]('change', onChange);
    t4Range.current[method]('changed', onChanged);
  };

  const onMount = () => {
    t4ready(() => {
      if (!init || !elRef.current) return;
      t4Range.current = t4.range.create(
        noUndefinedProps({
          el: elRef.current,
          value,
          min,
          max,
          step,
          label,
          dual,
          draggableBar,
          vertical,
          verticalReversed,
          formatLabel,
          scale,
          scaleSteps,
          scaleSubSteps,
          formatScaleLabel,
          limitKnobPosition,
        }),
      );
      rangeEvents('on');
    });
  };

  const onDestroy = () => {
    if (t4Range.current && t4Range.current.destroy) t4Range.current.destroy();
    t4Range.current = null;
  };

  useIsomorphicLayoutEffect(() => {
    rangeEvents('on');
    return () => {
      rangeEvents('off');
    };
  });

  useIsomorphicLayoutEffect(() => {
    onMount();
    return onDestroy;
  }, []);

  const classes = classNames(
    className,
    'range-slider',
    {
      'range-slider-horizontal': !vertical,
      'range-slider-vertical': vertical,
      'range-slider-vertical-reversed': vertical && verticalReversed,
      disabled,
    },
    colorClasses(props),
  );

  return (
    <div ref={elRef} id={id} style={style} className={classes} {...extraAttrs}>
      {input && <input type="range" name={name} id={inputId} />}
      {children}
    </div>
  );
});

Range.displayName = 't4-range';

export default Range;
