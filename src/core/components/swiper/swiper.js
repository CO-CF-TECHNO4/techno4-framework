// eslint-disable-next-line
import Swiper from 'swiper/bundle';
import $ from '../../shared/dom64.js';
import ConstructorMethods from '../../shared/constructor-methods.js';

// UMD_ONLY_START
/* eslint-disable */
if (!window.Swiper) {
  window.Swiper = Swiper;
}
/* eslint-enable */
// UMD_ONLY_END

function initSwiper(swiperEl) {
  const app = this;
  const $swiperEl = $(swiperEl);
  if ($swiperEl.length === 0) return;
  if ($swiperEl[0].swiper) return;
  let initialSlide;
  let params = {};
  let isTabs;
  let isRoutableTabs;
  if ($swiperEl.hasClass('tabs-swipeable-wrap')) {
    $swiperEl
      .addClass('swiper')
      .children('.tabs')
      .addClass('swiper-wrapper')
      .children('.tab')
      .addClass('swiper-slide');
    initialSlide = $swiperEl.children('.tabs').children('.tab-active').index();
    isTabs = true;
    isRoutableTabs = $swiperEl.find('.tabs-routable').length > 0;
  }
  if ($swiperEl.attr('data-swiper')) {
    params = JSON.parse($swiperEl.attr('data-swiper'));
  } else if ($swiperEl[0].t4SwiperParams) {
    params = $swiperEl[0].t4SwiperParams;
  } else {
    params = $swiperEl.dataset();
    Object.keys(params).forEach((key) => {
      const value = params[key];
      if (typeof value === 'string' && value.indexOf('{') === 0 && value.indexOf('}') > 0) {
        try {
          params[key] = JSON.parse(value);
        } catch (e) {
          // not JSON
        }
      }
    });
  }
  if (typeof params.initialSlide === 'undefined' && typeof initialSlide !== 'undefined') {
    params.initialSlide = initialSlide;
  }

  const swiper = app.swiper.create($swiperEl[0], params);
  function updateSwiper() {
    swiper.update();
  }
  const $tabEl = $swiperEl
    .parents('.tab')
    .filter((tabEl) => {
      return (
        $(tabEl).parent('.tabs').parent('.tabs-animated-wrap, .tabs-swipeable-wrap').length === 0
      );
    })
    .eq(0);
  $swiperEl.parents('.popup, .login-screen, .sheet-modal, .popover').on('modal:open', updateSwiper);
  $swiperEl.parents('.panel').on('panel:open', updateSwiper);
  if ($tabEl && $tabEl.length) {
    $tabEl.on('tab:show', updateSwiper);
  }

  swiper.on('beforeDestroy', () => {
    $swiperEl
      .parents('.popup, .login-screen, .sheet-modal, .popover')
      .off('modal:open', updateSwiper);
    $swiperEl.parents('.panel').off('panel:open', updateSwiper);
    if ($tabEl && $tabEl.length) {
      $tabEl.off('tab:show', updateSwiper);
    }
  });
  if (isTabs) {
    swiper.on('slideChange', () => {
      if (isRoutableTabs) {
        let view = app.views.get($swiperEl.parents('.view'));
        if (!view) view = app.views.main;
        const router = view.router;
        const tabRouteUrl = router.findTabRouteUrl(swiper.slides.eq(swiper.activeIndex)[0]);
        if (tabRouteUrl) {
          setTimeout(() => {
            router.navigate(tabRouteUrl);
          }, 0);
        }
      } else {
        app.tab.show({
          tabEl: swiper.slides.eq(swiper.activeIndex),
        });
      }
    });
  }
}

export default {
  name: 'swiper',
  static: {
    Swiper,
  },
  create() {
    const app = this;
    app.swiper = ConstructorMethods({
      defaultSelector: '.swiper',
      constructor: Swiper,
      domProp: 'swiper',
    });
  },
  on: {
    pageBeforeRemove(page) {
      const app = this;
      page.$el.find('.swiper-init, .tabs-swipeable-wrap').each((swiperEl) => {
        app.swiper.destroy(swiperEl);
      });
    },
    pageMounted(page) {
      const app = this;
      page.$el.find('.tabs-swipeable-wrap').each((swiperEl) => {
        initSwiper.call(app, swiperEl);
      });
    },
    pageInit(page) {
      const app = this;
      page.$el.find('.swiper-init, .tabs-swipeable-wrap').each((swiperEl) => {
        initSwiper.call(app, swiperEl);
      });
    },
    pageReinit(page) {
      const app = this;
      page.$el.find('.swiper-init, .tabs-swipeable-wrap').each((swiperEl) => {
        const swiper = app.swiper.get(swiperEl);
        if (swiper && swiper.update) swiper.update();
      });
    },
    tabMounted(tabEl) {
      const app = this;
      $(tabEl)
        .find('.swiper-init, .tabs-swipeable-wrap')
        .each((swiperEl) => {
          initSwiper.call(app, swiperEl);
        });
    },
    tabShow(tabEl) {
      const app = this;
      $(tabEl)
        .find('.swiper-init, .tabs-swipeable-wrap')
        .each((swiperEl) => {
          const swiper = app.swiper.get(swiperEl);
          if (swiper && swiper.update) swiper.update();
        });
    },
    tabBeforeRemove(tabEl) {
      const app = this;
      $(tabEl)
        .find('.swiper-init, .tabs-swipeable-wrap')
        .each((swiperEl) => {
          app.swiper.destroy(swiperEl);
        });
    },
  },
  vnode: {
    'swiper-init': {
      insert(vnode) {
        const app = this;
        const swiperEl = vnode.elm;
        initSwiper.call(app, swiperEl);
      },
      destroy(vnode) {
        const app = this;
        const swiperEl = vnode.elm;
        app.swiper.destroy(swiperEl);
      },
    },
    'tabs-swipeable-wrap': {
      insert(vnode) {
        const app = this;
        const swiperEl = vnode.elm;
        initSwiper.call(app, swiperEl);
      },
      destroy(vnode) {
        const app = this;
        const swiperEl = vnode.elm;
        app.swiper.destroy(swiperEl);
      },
    },
  },
};
