import React, { forwardRef, useRef, useImperativeHandle, useContext } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';

import { classNames, getExtraAttrs, getSlots, emit, isStringProp } from '../shared/utils.js';
import {
  colorClasses,
  actionsAttrs,
  actionsClasses,
  routerAttrs,
  routerClasses,
} from '../shared/mixins.js';
import { useRouteProps } from '../shared/use-route-props.js';
import { useSmartSelect } from '../shared/use-smart-select.js';
import { useTooltip } from '../shared/use-tooltip.js';
import { watchProp } from '../shared/watch-prop.js';
import { t4ready, t4 } from '../shared/t4.js';

import ListItemContent from './list-item-content.js';
import { ListContext } from '../shared/list-context.js';

/* dts-imports
import { SmartSelect } from 'techno4/types';
*/

/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  title? : string | number
  text? : string | number
  media? : string
  subtitle? : string | number
  header? : string | number
  footer? : string | number
  tooltip? : string
  tooltipTrigger? : string
  link? : boolean | string
  target? : string
  tabLink? : boolean | string
  tabLinkActive? : boolean
  selected?: boolean
  after? : string | number
  badge? : string | number
  badgeColor? : string
  mediaItem? : boolean
  mediaList? : boolean
  divider? : boolean
  groupTitle? : boolean
  swipeout? : boolean
  swipeoutOpened? : boolean
  sortable? : boolean
  sortableOpposite? : boolean
  accordionItem? : boolean
  accordionItemOpened? : boolean
  smartSelect? : boolean
  smartSelectParams? : SmartSelect.Parameters
  noChevron? : boolean
  chevronCenter? : boolean
  checkbox? : boolean
  radio? : boolean
  radioIcon? : string
  checked? : boolean
  defaultChecked? : boolean
  indeterminate? : boolean
  name? : string
  value? : string | number | Array<any>
  readonly? : boolean
  required? : boolean
  disabled? : boolean
  virtualListIndex? : number
  COLOR_PROPS
  ROUTER_PROPS
  ACTIONS_PROPS
  onClick? : (event?: any) => void
  onSwipeoutOverswipeEnter? : (...args: any[]) => void
  onSwipeoutOverswipeExit? : (...args: any[]) => void
  onSwipeoutDeleted? : (...args: any[]) => void
  onSwipeoutDelete? : (...args: any[]) => void
  onSwipeoutClose? : (...args: any[]) => void
  onSwipeoutClosed? : (...args: any[]) => void
  onSwipeoutOpen? : (...args: any[]) => void
  onSwipeoutOpened? : (...args: any[]) => void
  onSwipeout? : (progress?: any) => void
  onAccordionBeforeClose? : (prevent?: any) => void
  onAccordionClose? : (...args: any[]) => void
  onAccordionClosed? : (...args: any[]) => void
  onAccordionBeforeOpen? : (prevent?: any) => void
  onAccordionOpen? : (...args: any[]) => void
  onAccordionOpened? : (...args: any[]) => void
  onChange? : (event?: any) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null; t4SmartSelect: () => SmartSelect.SmartSelect}>;
  children?: React.ReactNode;
*/

/*
const ListItemContent = ({
  props,
  slots,
  inputElRef,
  onChange,
  onClick,
  isMediaComputed,
  isSortableComputed,
  isSortableOppositeComputed,
} = {}) => {
  const {
    radio,
    checkbox,
    value,
    name,
    readonly,
    disabled,
    checked,
    defaultChecked,
    required,
    media,
    header,
    footer,
    title,
    subtitle,
    text,
    after,
    badge,
    badgeColor,
    radioIcon,
    swipeout,
    sortable,
    accordionItem,
  } = props;

};
*/
const ListItem = forwardRef((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    title,
    link,
    target,
    tabLink,
    tabLinkActive,
    selected,
    mediaItem,
    mediaList,
    divider,
    groupTitle,
    swipeout,
    swipeoutOpened,
    sortable,
    sortableOpposite,
    accordionItem,
    accordionItemOpened,
    smartSelect,
    smartSelectParams,
    noChevron,
    chevronCenter,
    checkbox,
    radio,
    disabled,
    virtualListIndex,
    href,
  } = props;

  const listContext = useContext(ListContext);

  const {
    listIsMedia = false,
    listIsSortable = false,
    listIsSortableOpposite = false,
    listIsSimple = false,
  } = listContext || {};

  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);
  const linkElRef = useRef(null);
  const t4SmartSelect = useRef(null);

  const onClick = (event) => {
    if (event.target.tagName.toLowerCase() !== 'input') {
      emit(props, 'click', event);
    }
  };
  const onSwipeoutOverswipeEnter = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'swipeoutOverswipeEnter');
  };
  const onSwipeoutOverswipeExit = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'swipeoutOverswipeExit');
  };
  const onSwipeoutDeleted = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'swipeoutDeleted');
  };
  const onSwipeoutDelete = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'swipeoutDelete');
  };
  const onSwipeoutClose = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'swipeoutClose');
  };
  const onSwipeoutClosed = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'swipeoutClosed');
  };
  const onSwipeoutOpen = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'swipeoutOpen');
  };
  const onSwipeoutOpened = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'swipeoutOpened');
  };
  const onSwipeout = (el, progress) => {
    if (elRef.current !== el) return;
    emit(props, 'swipeout', progress);
  };
  const onAccBeforeClose = (el, prevent) => {
    if (elRef.current !== el) return;
    emit(props, 'accordionBeforeClose', prevent);
  };
  const onAccClose = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'accordionClose');
  };
  const onAccClosed = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'accordionClosed');
  };
  const onAccBeforeOpen = (el, prevent) => {
    if (elRef.current !== el) return;
    emit(props, 'accordionBeforeOpen', prevent);
  };
  const onAccOpen = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'accordionOpen');
  };
  const onAccOpened = (el) => {
    if (elRef.current !== el) return;
    emit(props, 'accordionOpened');
  };
  const onChange = (event) => {
    emit(props, 'change', event);
  };

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    t4SmartSelect: () => t4SmartSelect.current,
  }));

  useTooltip(elRef, props);

  useRouteProps(linkElRef, props);

  watchProp(swipeoutOpened, (newValue) => {
    if (!swipeout || !elRef.current || !t4) return;
    if (newValue) {
      t4.swipeout.open(elRef.current);
    } else {
      t4.swipeout.close(elRef.current);
    }
  });

  const attachEvents = () => {
    t4ready(() => {
      if (swipeout) {
        t4.on('swipeoutOpen', onSwipeoutOpen);
        t4.on('swipeoutOpened', onSwipeoutOpened);
        t4.on('swipeoutClose', onSwipeoutClose);
        t4.on('swipeoutClosed', onSwipeoutClosed);
        t4.on('swipeoutDelete', onSwipeoutDelete);
        t4.on('swipeoutDeleted', onSwipeoutDeleted);
        t4.on('swipeoutOverswipeEnter', onSwipeoutOverswipeEnter);
        t4.on('swipeoutOverswipeExit', onSwipeoutOverswipeExit);
        t4.on('swipeout', onSwipeout);
      }
      if (accordionItem) {
        t4.on('accordionBeforeOpen', onAccBeforeOpen);
        t4.on('accordionOpen', onAccOpen);
        t4.on('accordionOpened', onAccOpened);
        t4.on('accordionBeforeClose', onAccBeforeClose);
        t4.on('accordionClose', onAccClose);
        t4.on('accordionClosed', onAccClosed);
      }
    });
  };

  const detachEvents = () => {
    if (!t4) return;
    t4.off('swipeoutOpen', onSwipeoutOpen);
    t4.off('swipeoutOpened', onSwipeoutOpened);
    t4.off('swipeoutClose', onSwipeoutClose);
    t4.off('swipeoutClosed', onSwipeoutClosed);
    t4.off('swipeoutDelete', onSwipeoutDelete);
    t4.off('swipeoutDeleted', onSwipeoutDeleted);
    t4.off('swipeoutOverswipeEnter', onSwipeoutOverswipeEnter);
    t4.off('swipeoutOverswipeExit', onSwipeoutOverswipeExit);
    t4.off('swipeout', onSwipeout);
    t4.off('accordionBeforeOpen', onAccBeforeOpen);
    t4.off('accordionOpen', onAccOpen);
    t4.off('accordionOpened', onAccOpened);
    t4.off('accordionBeforeClose', onAccBeforeClose);
    t4.off('accordionClose', onAccClose);
    t4.off('accordionClosed', onAccClosed);
  };

  useSmartSelect(smartSelect, smartSelectParams, t4SmartSelect, () =>
    elRef.current.querySelector('a.smart-select'),
  );

  useIsomorphicLayoutEffect(() => {
    t4ready(() => {
      if (swipeout && swipeoutOpened) {
        t4.swipeout.open(elRef.current);
      }
    });
  }, []);

  useIsomorphicLayoutEffect(() => {
    attachEvents();
    return detachEvents;
  });

  const slots = getSlots(props);

  let linkEl;
  let itemContentEl;

  const isMediaComputed = mediaItem || mediaList || listIsMedia;
  const isSortableComputed = sortable === true || sortable === false ? sortable : listIsSortable;
  const isSortableOppositeComputed =
    isSortableComputed && (sortableOpposite || listIsSortableOpposite);

  if (!listIsSimple) {
    // Item Content
    itemContentEl = (
      <ListItemContent
        {...props}
        slots={slots}
        onChange={onChange}
        onClick={link || href || accordionItem || smartSelect ? undefined : onClick}
        isMediaComputed={isMediaComputed}
        isSortableComputed={isSortableComputed}
        isSortableOppositeComputed={isSortableOppositeComputed}
      />
    );

    // Link
    if (link || href || accordionItem || smartSelect) {
      const linkAttrs = {
        href: link === true ? '' : link || href,
        target,
        'data-tab': (isStringProp(tabLink) && tabLink) || undefined,
        ...routerAttrs(props),
        ...actionsAttrs(props),
      };
      const linkClasses = classNames(
        {
          'item-link': true,
          'smart-select': smartSelect,
          'tab-link': tabLink || tabLink === '',
          'tab-link-active': tabLinkActive,
          'item-selected': selected,
        },
        routerClasses(props),
        actionsClasses(props),
      );
      linkEl = (
        <a ref={linkElRef} className={linkClasses} {...linkAttrs} onClick={onClick}>
          {itemContentEl}
        </a>
      );
    }
  }

  const liClasses = classNames(
    className,
    {
      'item-divider': divider,
      'list-group-title': groupTitle,
      'media-item': isMediaComputed,
      swipeout,
      'accordion-item': accordionItem,
      'accordion-item-opened': accordionItemOpened,
      disabled: disabled && !(radio || checkbox),
      'no-chevron': noChevron,
      'chevron-center': chevronCenter,
      'disallow-sorting': sortable === false,
    },
    colorClasses(props),
  );

  if (divider || groupTitle) {
    return (
      <li
        ref={elRef}
        id={id}
        style={style}
        className={liClasses}
        data-virtual-list-index={virtualListIndex}
        onClick={onClick}
      >
        <span>
          {title}
          {children}
        </span>
      </li>
    );
  }
  if (listIsSimple) {
    return (
      <li
        ref={elRef}
        id={id}
        style={style}
        className={liClasses}
        data-virtual-list-index={virtualListIndex}
        onClick={onClick}
      >
        {title}
        {children}
      </li>
    );
  }

  const linkItemEl = link || href || smartSelect || accordionItem ? linkEl : itemContentEl;

  return (
    <li
      ref={elRef}
      id={id}
      style={style}
      className={liClasses}
      data-virtual-list-index={virtualListIndex}
      {...extraAttrs}
    >
      {slots['root-start']}
      {swipeout ? <div className="swipeout-content">{linkItemEl}</div> : linkItemEl}
      {isSortableComputed && sortable !== false && !isSortableOppositeComputed && (
        <div className="sortable-handler" />
      )}
      {(swipeout || accordionItem) && slots.default}
      {slots.root}
      {slots['root-end']}
    </li>
  );
});

ListItem.displayName = 't4-list-item';

export default ListItem;
