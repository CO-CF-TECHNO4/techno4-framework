import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { t4events, t4routers, t4 } from '../shared/t4.js';

/* dts-props
 */

const RoutableModals = forwardRef((props, ref) => {
  const [modals, setModals] = useState([]);

  const elRef = useRef(null);
  const routerData = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const onMount = () => {
    routerData.current = {
      modals,
      el: elRef.current,
      setModals(newModals) {
        setModals([...newModals]);
      },
    };
    t4routers.modals = routerData.current;
  };

  const onDestroy = () => {
    if (!routerData.current) return;
    t4routers.modals = null;
    routerData.current = null;
  };

  useIsomorphicLayoutEffect(() => {
    onMount();
    return onDestroy;
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!routerData.current || !t4) return;
    t4events.emit('modalsRouterDidUpdate', routerData.current);
  });

  return (
    <div ref={elRef} className="techno4-modals">
      {modals.map(({ component: ModalComponent, id: modalId, props: modalProps }) => {
        return <ModalComponent key={modalId} {...modalProps} />;
      })}
    </div>
  );
});

RoutableModals.displayName = 't4-routable-modals';

export default RoutableModals;
