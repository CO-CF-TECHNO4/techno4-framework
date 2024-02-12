<script>
import { watch, onMounted, onBeforeUnmount } from 'vue';
import { extend } from '../shared/utils.js';
import { t4ready, t4 } from '../shared/t4.js';

export default {
  name: 't4-photo-browser',

  props: {
    init: {
      type: Boolean,
      default: true,
    },
    params: Object,
    photos: Array,
    exposition: {
      type: Boolean,
      default: true,
    },
    expositionHideCaptions: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
    },
    navbar: {
      type: Boolean,
      default: true,
    },
    toolbar: {
      type: Boolean,
      default: true,
    },
    theme: {
      type: String,
    },
    captionsTheme: {
      type: String,
    },
    iconsColor: {
      type: String,
    },
    swipeToClose: {
      type: Boolean,
      default: true,
    },
    pageBackLinkText: {
      type: String,
      default: undefined,
    },
    popupCloseLinkText: {
      type: String,
      default: undefined,
    },
    navbarOfText: {
      type: String,
      default: undefined,
    },
    navbarShowCount: {
      type: Boolean,
      default: undefined,
    },
    swiper: {
      type: Object,
    },
    url: {
      type: String,
    },
    routableModals: {
      type: Boolean,
      default: false,
    },
    virtualSlides: {
      type: Boolean,
      default: true,
    },
    view: [String, Object],
    renderNavbar: Function,
    renderToolbar: Function,
    renderCaption: Function,
    renderObject: Function,
    renderLazyPhoto: Function,
    renderPhoto: Function,
    renderPage: Function,
    renderPopup: Function,
    renderStandalone: Function,
  },
  emits: [
    'photobrowser:open',
    'photobrowser:close',
    'photobrowser:opened',
    'photobrowser:closed',
    'photobrowser:swipetoclose',
  ],
  setup(props, { emit }) {
    let t4PhotoBrowser = null;

    const open = (index) => {
      return t4PhotoBrowser.open(index);
    };
    const close = () => {
      return t4PhotoBrowser.close();
    };
    const expositionToggle = () => {
      return t4PhotoBrowser.expositionToggle();
    };
    const expositionEnable = () => {
      return t4PhotoBrowser.expositionEnable();
    };
    const expositionDisable = () => {
      return t4PhotoBrowser.expositionDisable();
    };
    watch(
      () => props.photos,
      (value) => {
        const pb = t4PhotoBrowser;
        if (!pb) return;
        pb.params.photos = value;
        if (pb.opened && pb.swiper) {
          pb.swiper.update();
        }
      },
    );
    onMounted(() => {
      if (!props.init) return;
      t4ready(() => {
        let paramsComputed;

        if (typeof props.params !== 'undefined') {
          paramsComputed = props.params;
        } else {
          paramsComputed = { ...props };
          delete paramsComputed.params;
        }

        Object.keys(paramsComputed).forEach((param) => {
          if (typeof paramsComputed[param] === 'undefined' || paramsComputed[param] === '')
            delete paramsComputed[param];
        });

        paramsComputed = extend({}, paramsComputed, {
          on: {
            open() {
              emit('photobrowser:open');
            },
            close() {
              emit('photobrowser:close');
            },
            opened() {
              emit('photobrowser:opened');
            },
            closed() {
              emit('photobrowser:closed');
            },
            swipeToClose() {
              emit('photobrowser:swipetoclose');
            },
          },
        });

        t4PhotoBrowser = t4.photoBrowser.create(paramsComputed);
      });
    });

    onBeforeUnmount(() => {
      if (t4PhotoBrowser && t4PhotoBrowser.destroy) t4PhotoBrowser.destroy();
      t4PhotoBrowser = null;
    });

    return {
      open,
      close,
      expositionToggle,
      expositionEnable,
      expositionDisable,
    };
  },
  render() {
    return null;
  },
};
</script>
