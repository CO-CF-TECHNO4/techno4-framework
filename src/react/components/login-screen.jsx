import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs, emit } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';
import { watchProp } from '../shared/watch-prop.js';
import { modalStateClasses } from '../shared/modal-state-classes.js';

/* dts-imports
import { LoginScreen } from 'techno4/types';
*/
/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  opened?: boolean;
  animate?: boolean;
  containerEl? : string | object
  onLoginScreenOpen? : (instance: LoginScreen.LoginScreen) => void
  onLoginScreenOpened? : (instance: LoginScreen.LoginScreen) => void
  onLoginScreenClose? : (instance: LoginScreen.LoginScreen) => void
  onLoginScreenClosed? : (instance: LoginScreen.LoginScreen) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null; t4LoginScreen: () => LoginScreen.LoginScreen}>;
  children?: React.ReactNode;
  COLOR_PROPS
*/

const LoginScreen = forwardRef((props, ref) => {
  const t4LoginScreen = useRef(null);
  const { className, id, style, children, opened, animate, containerEl } = props;
  const extraAttrs = getExtraAttrs(props);

  const isOpened = useRef(opened);
  const isClosing = useRef(false);
  const elRef = useRef(null);

  const onOpen = (instance) => {
    isOpened.current = true;
    isClosing.current = false;
    emit(props, 'loginScreenOpen', instance);
  };
  const onOpened = (instance) => {
    emit(props, 'loginScreenOpened', instance);
  };
  const onClose = (instance) => {
    isOpened.current = false;
    isClosing.current = true;
    emit(props, 'loginScreenClose', instance);
  };
  const onClosed = (instance) => {
    isClosing.current = false;
    emit(props, 'loginScreenClosed', instance);
  };

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    t4LoginScreen: () => t4LoginScreen.current,
  }));

  // watch opened changes
  watchProp(opened, (value) => {
    if (!t4LoginScreen.current) return;
    if (value) {
      t4LoginScreen.current.open();
    } else {
      t4LoginScreen.current.close();
    }
  });

  const modalEvents = (method) => {
    if (!t4LoginScreen.current) return;
    t4LoginScreen.current[method]('open', onOpen);
    t4LoginScreen.current[method]('opened', onOpened);
    t4LoginScreen.current[method]('close', onClose);
    t4LoginScreen.current[method]('closed', onClosed);
  };

  const onMount = () => {
    if (!elRef.current) return;
    t4ready(() => {
      const loginScreenParams = {
        el: elRef.current,
      };
      if ('animate' in props) loginScreenParams.animate = animate;
      if ('containerEl' in props) loginScreenParams.containerEl = containerEl;

      t4LoginScreen.current = t4.loginScreen.create(loginScreenParams);
      modalEvents('on');
      if (opened) {
        t4LoginScreen.current.open(false);
      }
    });
  };

  const onDestroy = () => {
    if (t4LoginScreen.current) {
      t4LoginScreen.current.destroy();
    }
    t4LoginScreen.current = null;
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

  const classes = classNames(
    className,
    'login-screen',
    modalStateClasses({ isOpened, isClosing }),
    colorClasses(props),
  );

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...extraAttrs}>
      {children}
    </div>
  );
});

LoginScreen.displayName = 't4-login-screen';

export default LoginScreen;
