<script>
import { ref, onMounted, onBeforeUnmount, onUpdated, toRaw, h } from 'vue';
import { t4events, t4routers, t4 } from '../shared/t4.js';

export default {
  name: 't4-routable-modals',
  setup() {
    const elRef = ref(null);
    const modals = ref([]);
    const routerData = ref(null);

    onMounted(() => {
      routerData.value = {
        modals,
        el: elRef.value,
        setModals(newModals) {
          newModals.forEach((modal) => {
            // eslint-disable-next-line
            modal.component = toRaw(modal.component);
          });
          modals.value = [...newModals];
        },
      };
      t4routers.modals = routerData.value;
    });

    onUpdated(() => {
      if (!routerData.value || !t4) return;
      t4events.emit('modalsRouterDidUpdate', routerData.value);
    });

    onBeforeUnmount(() => {
      if (!routerData.value) return;
      t4routers.modals = null;
      routerData.value = null;
    });

    const getComponent = (modal) => toRaw(modal.component);
    const getProps = (modal) => {
      const { component: modalComponent, props: modalProps } = modal;
      let keys = [];
      const passProps = {};
      if (modalComponent && modalComponent.props) keys = Object.keys(modalComponent.props);
      keys.forEach((key) => {
        if (key in modalProps) passProps[key] = modalProps[key];
      });
      return passProps;
    };

    return () => {
      return h('div', { ref: elRef, class: 'techno4-modals' }, [
        ...modals.value.map((modal) => {
          return h(getComponent(modal), { key: modal.id, ...getProps(modal) });
        }),
      ]);
    };
  },
};
</script>
