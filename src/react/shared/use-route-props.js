import { useEffect } from 'react';

export const useRouteProps = (elRef, { routeProps } = {}) => {
  useEffect(() => {
    if (elRef.current) {
      elRef.current.t4RouteProps = routeProps;
    }
    return () => {
      if (elRef.current && elRef.current.t4RouteProps) {
        delete elRef.current.t4RouteProps;
      }
    };
  }, [routeProps]);
};
