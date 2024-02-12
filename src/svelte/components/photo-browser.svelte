<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';

  import { extend, createEmitter } from '../shared/utils.js';
  import { app, t4ready } from '../shared/t4.js';

  const emit = createEmitter(createEventDispatcher, $$props);

  export let init = true;
  export let params = undefined;
  export let photos = undefined;
  export let exposition = true;
  export let expositionHideCaptions = false;
  export let type = undefined;
  export let navbar = true;
  export let toolbar = true;
  export let theme = undefined;
  export let captionsTheme = undefined;
  export let iconsColor = undefined;
  export let swipeToClose = true;
  export let pageBackLinkText = undefined;
  export let popupCloseLinkText = undefined;
  export let navbarOfText = undefined;
  export let navbarShowCount = undefined;
  export let swiper = undefined;
  export let url = undefined;
  export let routableModals = false;
  export let virtualSlides = true;
  export let view = undefined;
  export let renderNavbar = undefined;
  export let renderToolbar = undefined;
  export let renderCaption = undefined;
  export let renderObject = undefined;
  export let renderLazyPhoto = undefined;
  export let renderPhoto = undefined;
  export let renderPage = undefined;
  export let renderPopup = undefined;
  export let renderStandalone = undefined;

  let t4PhotoBrowser;

  export function instance() {
    return t4PhotoBrowser;
  }

  export function open(index) {
    return t4PhotoBrowser.open(index);
  }
  export function close() {
    return t4PhotoBrowser.close();
  }
  export function expositionToggle() {
    return t4PhotoBrowser.expositionToggle();
  }
  export function expositionEnable() {
    return t4PhotoBrowser.expositionEnable();
  }
  export function expositionDisable() {
    return t4PhotoBrowser.expositionDisable();
  }

  let initialWatched = false;
  function watchPhotos(newValue) {
    if (!initialWatched) {
      initialWatched = true;
      return;
    }
    if (!t4PhotoBrowser) return;
    t4PhotoBrowser.params.photos = newValue;
    if (t4PhotoBrowser.opened && t4PhotoBrowser.swiper) {
      t4PhotoBrowser.swiper.update();
    }
  }

  $: watchPhotos(photos);

  onMount(() => {
    if (!init) return;
    t4ready(() => {
      let pbParams;

      if (typeof params !== 'undefined') pbParams = params;
      else {
        pbParams = {
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

      Object.keys(pbParams).forEach((param) => {
        if (typeof pbParams[param] === 'undefined' || pbParams[param] === '')
          delete pbParams[param];
      });

      pbParams = extend({}, pbParams, {
        on: {
          open() {
            emit('photoBrowserOpen');
          },
          close() {
            emit('photoBrowserClose');
          },
          opened() {
            emit('photoBrowserOpened');
          },
          closed() {
            emit('photoBrowserClosed');
          },
          swipeToClose() {
            emit('photoBrowserSwipeToClose');
          },
        },
      });

      t4PhotoBrowser = app.t4.photoBrowser.create(pbParams);
    });
  });

  onDestroy(() => {
    if (t4PhotoBrowser && t4PhotoBrowser.destroy) {
      t4PhotoBrowser.destroy();
      t4PhotoBrowser = null;
    }
  });
</script>
