export const useRouteProps = (el, routeProps) => {
  if (el && routeProps) {
    el.t4RouteProps = routeProps;
  }

  return {
    update(newValue) {
      if (el && el.t4RouteProps && !newValue) delete el.t4RouteProps;
      else if (el && newValue) el.t4RouteProps = newValue;
    },
    destroy() {
      if (el && routeProps) {
        delete el.t4RouteProps;
      }
    },
  };
};
