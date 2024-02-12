import { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { extend, emit } from '../shared/utils.js';
import { watchProp } from '../shared/watch-prop.js';
import { t4ready, t4 } from '../shared/t4.js';

/* dts-imports
import { PhotoBrowser } from 'techno4/types';
*/

/* dts-props
  init? : boolean
  params? : Object
  photos? : Array<any>
  exposition? : boolean
  expositionHideCaptions? : boolean
  type? : string
  navbar? : boolean
  toolbar? : boolean
  theme? : string
  captionsTheme? : string
  iconsColor? : string
  swipeToClose? : boolean
  pageBackLinkText? : string
  popupCloseLinkText? : string
  navbarOfText? : string
  navbarShowCount? : boolean
  swiper? : Object
  url? : string
  routableModals? : boolean
  virtualSlides? : boolean
  view? : string | object
  renderNavbar? : Function
  renderToolbar? : Function
  renderCaption? : Function
  renderObject? : Function
  renderLazyPhoto? : Function
  renderPhoto? : Function
  renderPage? : Function
  renderPopup? : Function
  renderStandalone? : Function
  onPhotoBrowserOpen? : (...args: any[]) => void
  onPhotoBrowserClose? : (...args: any[]) => void
  onPhotoBrowserOpened? : (...args: any[]) => void
  onPhotoBrowserClosed? : (...args: any[]) => void
  onPhotoBrowserSwipeToClose? : (...args: any[]) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null; t4PhotoBrowser: () => PhotoBrowser.PhotoBrowser; open: () => void; close: () => void;}>;
  children?: React.ReactNode;
*/

const PhotoBrowser = forwardRef((props, ref) => {
  const t4PhotoBrowser = useRef(null);
  const {
    init = true,
    params,
    photos,
    exposition = true,
    expositionHideCaptions = false,
    type,
    navbar = true,
    toolbar = true,
    theme,
    captionsTheme,
    iconsColor,
    swipeToClose = true,
    pageBackLinkText,
    popupCloseLinkText,
    navbarOfText,
    navbarShowCount,
    swiper,
    url,
    routableModals = false,
    virtualSlides = true,
    view,
    renderNavbar,
    renderToolbar,
    renderCaption,
    renderObject,
    renderLazyPhoto,
    renderPhoto,
    renderPage,
    renderPopup,
    renderStandalone,
  } = props;

  const open = (index) => {
    return t4PhotoBrowser.current.open(index);
  };
  const close = () => {
    return t4PhotoBrowser.current.close();
  };
  const expositionToggle = () => {
    return t4PhotoBrowser.current.expositionToggle();
  };
  const expositionEnable = () => {
    return t4PhotoBrowser.current.expositionEnable();
  };
  const expositionDisable = () => {
    return t4PhotoBrowser.current.expositionDisable();
  };

  useImperativeHandle(ref, () => ({
    t4PhotoBrowser: () => t4PhotoBrowser.current,
    open,
    close,
    expositionToggle,
    expositionEnable,
    expositionDisable,
  }));

  watchProp(photos, (newValue) => {
    const pb = t4PhotoBrowser.current;
    if (!pb) return;
    pb.params.photos = newValue;
    if (pb.opened && pb.swiper) {
      pb.swiper.update();
    }
  });

  const onMount = () => {
    if (!init) return;
    t4ready(() => {
      let paramsComputed;

      if (typeof params !== 'undefined') {
        paramsComputed = params;
      } else {
        paramsComputed = {
          photos,
          exposition,
          expositionHideCaptions,
          type,
          navbar,
          toolbar,
          theme,
          captionsTheme,
          iconsColor,
          swipeToClose,
          pageBackLinkText,
          popupCloseLinkText,
          navbarOfText,
          navbarShowCount,
          swiper,
          url,
          routableModals,
          virtualSlides,
          view,
          renderNavbar,
          renderToolbar,
          renderCaption,
          renderObject,
          renderLazyPhoto,
          renderPhoto,
          renderPage,
          renderPopup,
          renderStandalone,
        };
      }

      Object.keys(paramsComputed).forEach((param) => {
        if (typeof paramsComputed[param] === 'undefined' || paramsComputed[param] === '')
          delete paramsComputed[param];
      });

      paramsComputed = extend({}, paramsComputed, {
        on: {
          open() {
            emit(props, 'photoBrowserOpen');
          },
          close() {
            emit(props, 'photoBrowserClose');
          },
          opened() {
            emit(props, 'photoBrowserOpened');
          },
          closed() {
            emit(props, 'photoBrowserClosed');
          },
          swipeToClose() {
            emit(props, 'photoBrowserSwipeToClose');
          },
        },
      });

      t4PhotoBrowser.current = t4.photoBrowser.create(paramsComputed);
    });
  };

  const onDestroy = () => {
    if (t4PhotoBrowser.current && t4PhotoBrowser.current.destroy) t4PhotoBrowser.current.destroy();
    t4PhotoBrowser.current = null;
  };

  useIsomorphicLayoutEffect(() => {
    onMount();
    return onDestroy;
  }, []);

  return null;
});

PhotoBrowser.displayName = 't4-photo-browser';

export default PhotoBrowser;
