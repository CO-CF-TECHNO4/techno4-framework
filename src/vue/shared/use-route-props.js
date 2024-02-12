import { onMounted, onUpdated } from 'vue';

export const useRouteProps = (elRef, { routeProps } = {}) => {
  onMounted(() => {
    if (elRef.value && routeProps) {
      elRef.value.t4RouteProps = routeProps;
    }
  });
  onUpdated(() => {
    if (elRef.value && routeProps) {
      elRef.value.t4RouteProps = routeProps;
    } else if (elRef.value && elRef.value.t4RouteProps) {
      delete elRef.value.t4RouteProps;
    }
  });
};
