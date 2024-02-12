import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { classNames, getExtraAttrs, extend } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { useTooltip } from '../shared/use-tooltip.js';
import { useTheme } from '../shared/use-theme.js';

/* dts-props
  id: string | number;
  className: string;
  style: React.CSSProperties;
  material? : string;
  t4? : string;
  icon? : string;
  ios? : string;
  aurora? : string;
  md? : string;
  tooltip? : string;
  tooltipTrigger? : string;
  size? : string | number;
  ref?: React.MutableRefObject<{el: HTMLElement | null}>;
  children?: React.ReactNode;
  COLOR_PROPS
*/

const Icon = forwardRef((props, ref) => {
  const theme = useTheme();
  const { className, id, style, children, material, t4, icon, md, ios, aurora, size } = props;
  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  useTooltip(elRef, props);

  const getClasses = () => {
    let classes = {
      icon: true,
    };

    let themeIcon;
    if (theme && theme.ios) themeIcon = ios;
    else if (theme && theme.md) themeIcon = md;
    else if (theme && theme.aurora) themeIcon = aurora;

    if (themeIcon) {
      const parts = themeIcon.split(':');
      const prop = parts[0];
      const value = parts[1];
      if (prop === 'material' || prop === 't4') {
        classes['material-icons'] = prop === 'material';
        classes['t4-icons'] = prop === 't4';
      }

      if (prop === 'icon') {
        classes[value] = true;
      }
    } else {
      classes = {
        icon: true,
        'material-icons': material,
        't4-icons': t4,
      };
      if (icon) classes[icon] = true;
    }
    return classNames(className, classes, colorClasses(props));
  };

  const getIconText = () => {
    let text = material || t4;
    if (md && theme && theme.md && (md.indexOf('material:') >= 0 || md.indexOf('t4:') >= 0)) {
      text = md.split(':')[1];
    } else if (
      ios &&
      theme &&
      theme.ios &&
      (ios.indexOf('material:') >= 0 || ios.indexOf('t4:') >= 0)
    ) {
      text = ios.split(':')[1];
    } else if (
      aurora &&
      theme &&
      theme.aurora &&
      (aurora.indexOf('material:') >= 0 || aurora.indexOf('t4:') >= 0)
    ) {
      text = aurora.split(':')[1];
    }
    return text;
  };

  let sizeComputed = size;
  if (typeof size === 'number' || parseFloat(size) === size * 1) {
    sizeComputed = `${size}px`;
  }
  return (
    <i
      id={id}
      style={extend({ fontSize: sizeComputed, width: sizeComputed, height: sizeComputed }, style)}
      className={getClasses()}
      ref={elRef}
      {...extraAttrs}
    >
      {getIconText()}
      {children}
    </i>
  );
});

Icon.displayName = 't4-icon';

export default Icon;
