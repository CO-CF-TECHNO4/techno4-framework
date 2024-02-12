import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs, noUndefinedProps } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';
import { watchProp } from '../shared/watch-prop.js';

/* dts-imports
import { Messages } from 'techno4/types';
*/

/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  autoLayout? : boolean
  messages? : Array<any>
  newMessagesFirst? : boolean
  scrollMessages? : boolean
  scrollMessagesOnEdge? : boolean
  typing?: boolean
  firstMessageRule? : Function
  lastMessageRule? : Function
  tailMessageRule? : Function
  sameNameMessageRule? : Function
  sameHeaderMessageRule? : Function
  sameFooterMessageRule? : Function
  sameAvatarMessageRule? : Function
  customClassMessageRule? : Function
  renderMessage? : Function
  init? : boolean
  ref?: React.MutableRefObject<{el: HTMLElement | null; t4Messages: () => Messages.Messages}>;
  children?: React.ReactNode;
  COLOR_PROPS
*/

const Messages = forwardRef((props, ref) => {
  const t4Messages = useRef(null);
  const mounted = useRef(false);
  const {
    className,
    id,
    style,
    children,
    autoLayout = false,
    messages = [],
    newMessagesFirst = false,
    scrollMessages = true,
    scrollMessagesOnEdge = true,
    firstMessageRule,
    lastMessageRule,
    tailMessageRule,
    sameNameMessageRule,
    sameHeaderMessageRule,
    sameFooterMessageRule,
    sameAvatarMessageRule,
    customClassMessageRule,
    renderMessage,
    typing = false,
    init = true,
  } = props;
  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);
  const childrenBeforeUpdated = useRef(null);
  const reactChildrenBefore = useRef(children ? React.Children.count(children) : 0);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    t4Messages: () => t4Messages.current,
  }));

  const onMount = () => {
    if (!init) return;

    t4ready(() => {
      t4Messages.current = t4.messages.create(
        noUndefinedProps({
          el: elRef.current,
          autoLayout,
          messages,
          newMessagesFirst,
          scrollMessages,
          scrollMessagesOnEdge,
          firstMessageRule,
          lastMessageRule,
          tailMessageRule,
          sameNameMessageRule,
          sameHeaderMessageRule,
          sameFooterMessageRule,
          sameAvatarMessageRule,
          customClassMessageRule,
          renderMessage,
        }),
      );
      if (typing) {
        t4Messages.current.showTyping();
      }
    });
  };

  const onDestroy = () => {
    if (t4Messages.current && t4Messages.current.destroy) t4Messages.current.destroy();
    t4Messages.current = null;
  };

  useIsomorphicLayoutEffect(() => {
    onMount();
    return onDestroy;
  }, []);

  const currentChildrenLength = children ? React.Children.count(children) : 0;
  if (t4Messages.current && scrollMessages) {
    const beforeChildrenLength = reactChildrenBefore.current || 0;
    if (currentChildrenLength !== beforeChildrenLength) {
      t4Messages.current.setScrollData();
    }
  }
  reactChildrenBefore.current = currentChildrenLength;

  useIsomorphicLayoutEffect(() => {
    const wasMounted = mounted.current;
    mounted.current = true;
    if (!init || !elRef.current) return;

    const childElements = elRef.current.children;
    if (!childElements) return;
    const childrenAfterUpdated = childElements.length;

    if (!wasMounted) {
      for (let i = 0; i < childElements.length; i += 1) {
        childElements[i].classList.add('message-appeared');
      }
      return;
    }

    for (let i = 0; i < childElements.length; i += 1) {
      if (!childElements[i].classList.contains('message-appeared')) {
        childElements[i].classList.add('message-appear-from-bottom');
      }
    }
    if (t4Messages.current) {
      if (t4Messages.current.layout && autoLayout) {
        t4Messages.current.layout();
      }
      if (
        childrenBeforeUpdated.current !== childrenAfterUpdated &&
        t4Messages.current.scroll &&
        t4Messages.current.scrollData &&
        scrollMessages
      ) {
        t4Messages.current.scrollWithEdgeCheck(true);
      }
    }

    childrenBeforeUpdated.current = childrenAfterUpdated;
  });

  watchProp(typing, (newValue) => {
    if (!t4Messages.current) return;
    if (newValue) t4Messages.current.showTyping();
    else t4Messages.current.hideTyping();
  });

  const classes = classNames(className, 'messages', colorClasses(props));

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...extraAttrs}>
      {children}
    </div>
  );
});

Messages.displayName = 't4-messages';

export default Messages;
