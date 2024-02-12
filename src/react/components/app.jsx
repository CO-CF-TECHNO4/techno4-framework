import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';

import RoutableModals from './routable-modals.js';
import { t4init, t4 } from '../shared/t4.js';

/* dts-imports
  import { techno4Parameters } from 'techno4/types';
*/

/* dts-extends
  techno4Parameters
*/

/* dts-props
  className?: string;
  style?: React.CSSProperties;
  ref?: React.MutableRefObject<{el: HTMLElement | null}>;
  children?: React.ReactNode;
  COLOR_PROPS
*/

const App = forwardRef((props, ref) => {
  const { className, style, children, ...rest } = props;
  const extraAttrs = getExtraAttrs(props);
  const params = rest;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const classes = classNames(className, 'techno4-root', colorClasses(props));

  // eslint-disable-next-line
  if (!t4 || typeof window === 'undefined') {
    t4init(elRef.current, params, false);
  }

  useIsomorphicLayoutEffect(() => {
    const parentEl = elRef.current && elRef.current.parentNode;
    /* eslint-disable no-restricted-globals */
    if (
      typeof document !== 'undefined' &&
      parentEl &&
      parentEl !== document.body &&
      parentEl.parentNode === document.body
    ) {
      parentEl.style.height = '100%';
    }
    /* eslint-enable no-restricted-globals */
    if (t4) {
      t4.init(elRef.current);
      return;
    }
    t4init(elRef.current, params, true);
  }, []);

  return (
    <div id="techno4-root" style={style} className={classes} ref={elRef} {...extraAttrs}>
      {children}
      <RoutableModals />
    </div>
  );
});

App.displayName = 't4-app';

export default App;
