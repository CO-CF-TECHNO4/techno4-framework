<script>
  import { colorClasses } from '../shared/mixins.js';
  import { classNames } from '../shared/utils.js';
  import { restProps } from '../shared/rest-props.js';
  import { useTooltip } from '../shared/use-tooltip.js';
  import { useTheme } from '../shared/use-theme.js';

  export let style = undefined;

  let className = undefined;
  export { className as class };

  export let material = undefined;
  export let t4 = undefined;
  export let icon = undefined;
  export let ios = undefined;
  export let aurora = undefined;
  export let md = undefined;
  export let tooltip = undefined;
  export let tooltipTrigger = undefined;
  export let size = undefined;

  let el;
  let theme = useTheme((t) => {
    theme = t;
  });

  let classes = {
    icon: true,
  };

  let themeIcon;

  $: if (theme) {
    if (theme.ios) themeIcon = ios;
    if (theme.md) themeIcon = md;
    if (theme.aurora) themeIcon = aurora;
  }

  $: if (themeIcon) {
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

  $: iconClasses = classNames(className, classes, colorClasses($$props));

  function iconTextComputed(t) {
    let textComputed = material || t4;
    if (md && t && t.md && (md.indexOf('material:') >= 0 || md.indexOf('t4:') >= 0)) {
      textComputed = md.split(':')[1];
    } else if (ios && t && t.ios && (ios.indexOf('material:') >= 0 || ios.indexOf('t4:') >= 0)) {
      textComputed = ios.split(':')[1];
    } else if (
      aurora &&
      t &&
      t.aurora &&
      (aurora.indexOf('material:') >= 0 || aurora.indexOf('t4:') >= 0)
    ) {
      textComputed = aurora.split(':')[1];
    }
    return textComputed;
  }
  $: iconText = iconTextComputed(theme);

  $: iconSize = typeof size === 'number' || parseFloat(size) === size * 1 ? `${size}px` : size;

  $: iconStyle =
    (style || '') +
    (iconSize
      ? `;font-size: ${iconSize}; width: ${iconSize}; height: ${iconSize}`.replace(';;', '')
      : '');
</script>

<i
  style={iconStyle}
  class={iconClasses}
  bind:this={el}
  {...restProps($$restProps)}
  use:useTooltip={{ tooltip, tooltipTrigger }}
>
  {iconText || ''}
  <slot />
</i>
