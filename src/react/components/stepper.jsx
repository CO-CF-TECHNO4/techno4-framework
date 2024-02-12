import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs, emit, noUndefinedProps } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';
import { watchProp } from '../shared/watch-prop.js';

/* dts-imports
import { Stepper } from 'techno4/types';
*/
/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  init? : boolean
  value? : number
  min? : number
  max? : number
  step? : number
  formatValue? : Function
  name? : string
  inputId? : string
  input? : boolean
  inputType? : string
  inputReadonly? : boolean
  autorepeat? : boolean
  autorepeatDynamic? : boolean
  wraps? : boolean
  manualInputMode? : boolean
  decimalPoint? : number
  buttonsEndInputMode? : boolean
  disabled? : boolean
  buttonsOnly? : boolean
  round? : boolean
  roundMd? : boolean
  roundIos? : boolean
  roundAurora? : boolean
  fill? : boolean
  fillMd? : boolean
  fillIos? : boolean
  fillAurora? : boolean
  large? : boolean
  largeMd? : boolean
  largeIos? : boolean
  largeAurora? : boolean
  small? : boolean
  smallMd? : boolean
  smallIos? : boolean
  smallAurora? : boolean
  raised? : boolean
  raisedMd? : boolean
  raisedIos? : boolean
  raisedAurora? : boolean
  COLOR_PROPS
  onStepperChange? : (newValue?: any) => void
  onInput? : (event?: any, stepper?: Stepper.Stepper) => void
  onChange? : (event?: any, stepper?: Stepper.Stepper) => void
  onStepperMinusClick? : (event?: any, stepper?: Stepper.Stepper) => void
  onStepperPlusClick? : (event?: any, stepper?: Stepper.Stepper) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null; t4Stepper: () => Stepper.Stepper;}>;
  children?: React.ReactNode;
*/

const Stepper = forwardRef((props, ref) => {
  const t4Stepper = useRef(null);
  const {
    className,
    id,
    style,
    init = true,
    value = 0,
    min = 0,
    max = 100,
    step = 1,
    formatValue,
    name,
    inputId,
    input = true,
    inputType = 'text',
    inputReadonly = false,
    autorepeat = false,
    autorepeatDynamic = false,
    wraps = false,
    manualInputMode = false,
    decimalPoint = 4,
    buttonsEndInputMode = true,
    disabled,
    buttonsOnly,
    round,
    roundMd,
    roundIos,
    roundAurora,
    fill,
    fillMd,
    fillIos,
    fillAurora,
    large,
    largeMd,
    largeIos,
    largeAurora,
    small,
    smallMd,
    smallIos,
    smallAurora,
    raised,
    raisedMd,
    raisedIos,
    raisedAurora,
  } = props;
  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);

  const increment = () => {
    if (!t4Stepper.current) return;
    t4Stepper.current.increment();
  };
  const decrement = () => {
    if (!t4Stepper.current) return;
    t4Stepper.current.decrement();
  };
  const setValue = (newValue) => {
    if (t4Stepper.current && t4Stepper.current.setValue) t4Stepper.current.setValue(newValue);
  };
  const getValue = () => {
    if (t4Stepper.current && t4Stepper.current.getValue) {
      return t4Stepper.current.getValue();
    }
    return undefined;
  };
  const onInput = (event) => {
    emit(props, 'input', event, t4Stepper.current);
  };
  const onChange = (event) => {
    emit(props, 'change', event, t4Stepper.current);
  };
  const onMinusClick = (event) => {
    emit(props, 'stepperMinusClick', event, t4Stepper.current);
  };
  const onPlusClick = (event) => {
    emit(props, 'stepperPlusClick', event, t4Stepper.current);
  };

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    t4Stepper: () => t4Stepper.current,
    increment,
    decrement,
    setValue,
    getValue,
  }));

  watchProp(value, (newValue) => {
    if (!t4Stepper.current) return;
    t4Stepper.current.setValue(newValue);
  });

  const onStepperChange = (stepper, newValue) => {
    emit(props, 'stepperChange', newValue);
  };

  const stepperEvents = (method) => {
    if (!t4Stepper.current) return;
    t4Stepper.current[method]('change', onStepperChange);
  };

  const onMount = () => {
    t4ready(() => {
      if (!init || !elRef.current) return;
      t4Stepper.current = t4.stepper.create(
        noUndefinedProps({
          el: elRef.current,
          min,
          max,
          value,
          step,
          formatValue,
          autorepeat,
          autorepeatDynamic,
          wraps,
          manualInputMode,
          decimalPoint,
          buttonsEndInputMode,
        }),
      );
      stepperEvents('on');
    });
  };

  const onDestroy = () => {
    if (t4Stepper.current && t4Stepper.current.destroy) {
      t4Stepper.current.destroy();
    }
    t4Stepper.current = null;
  };

  useIsomorphicLayoutEffect(() => {
    stepperEvents('on');
    return () => {
      stepperEvents('off');
    };
  });

  useIsomorphicLayoutEffect(() => {
    onMount();
    return onDestroy;
  }, []);

  let inputWrapEl;
  let valueEl;
  if (input && !buttonsOnly) {
    const inputEl = (
      <input
        name={name}
        id={inputId}
        type={inputType}
        min={inputType === 'number' ? min : undefined}
        max={inputType === 'number' ? max : undefined}
        step={inputType === 'number' ? step : undefined}
        onInput={onInput}
        onChange={onChange}
        value={value}
        readOnly={inputReadonly}
      />
    );

    inputWrapEl = <div className="stepper-input-wrap">{inputEl}</div>;
  }
  if (!input && !buttonsOnly) {
    valueEl = <div className="stepper-value">{value}</div>;
  }

  const classes = classNames(
    className,
    'stepper',
    {
      disabled,
      'stepper-round': round,
      'stepper-round-ios': roundIos,
      'stepper-round-md': roundMd,
      'stepper-round-aurora': roundAurora,
      'stepper-fill': fill,
      'stepper-fill-ios': fillIos,
      'stepper-fill-md': fillMd,
      'stepper-fill-aurora': fillAurora,
      'stepper-large': large,
      'stepper-large-ios': largeIos,
      'stepper-large-md': largeMd,
      'stepper-large-aurora': largeAurora,
      'stepper-small': small,
      'stepper-small-ios': smallIos,
      'stepper-small-md': smallMd,
      'stepper-small-aurora': smallAurora,
      'stepper-raised': raised,
      'stepper-raised-ios': raisedIos,
      'stepper-raised-md': raisedMd,
      'stepper-raised-aurora': raisedAurora,
    },
    colorClasses(props),
  );
  return (
    <div ref={elRef} id={id} style={style} className={classes} {...extraAttrs}>
      <div className="stepper-button-minus" onClick={onMinusClick} />
      {inputWrapEl}
      {valueEl}
      <div className="stepper-button-plus" onClick={onPlusClick} />
    </div>
  );
});

Stepper.displayName = 't4-stepper';

export default Stepper;
