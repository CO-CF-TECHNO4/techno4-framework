import $ from '../../shared/dom64.js';
import { bindMethods } from '../../shared/utils.js';
const Menu = {
  open(el) {
    if (el === void 0) {
      el = '.menu-item-dropdown';
    }
    const app = this;
    if (!el) return;
    const $el = $(el).closest('.menu-item-dropdown');
    if (!$el.length) return;
    const $menuEl = $el.closest('.menu').eq(0);
    if ($menuEl.length) {
      const zIndex = $menuEl.css('z-index');
      const originalZIndex = $menuEl[0].style.zIndex;
      $menuEl.css('z-index', parseInt(zIndex || 0, 10) + 1);
      $menuEl[0].t4MenuZIndex = originalZIndex;
    }
    $el.eq(0).addClass('menu-item-dropdown-opened').trigger('menu:opened');
    app.emit('menuOpened', $el.eq(0)[0]);
  },
  close(el) {
    if (el === void 0) {
      el = '.menu-item-dropdown-opened';
    }
    const app = this;
    if (!el) return;
    const $el = $(el).closest('.menu-item-dropdown-opened');
    if (!$el.length) return;
    const $menuEl = $el.closest('.menu').eq(0);
    if ($menuEl.length) {
      const zIndex = $menuEl[0].t4MenuZIndex;
      $menuEl.css('z-index', zIndex);
      delete $menuEl[0].t4MenuZIndex;
    }
    $el.eq(0).removeClass('menu-item-dropdown-opened').trigger('menu:closed');
    app.emit('menuClosed', $el.eq(0)[0]);
  }
};
export default {
  name: 'menu',
  create() {
    const app = this;
    bindMethods(app, {
      menu: Menu
    });
  },
  on: {
    click(e) {
      const app = this;
      const openedMenus = $('.menu-item-dropdown-opened');
      if (!openedMenus.length) return;
      openedMenus.each(el => {
        if (!$(e.target).closest('.menu-item-dropdown-opened').length) {
          app.menu.close(el);
        }
      });
    }
  },
  clicks: {
    '.menu-item-dropdown': function onClick($clickedEl, dataset, e) {
      const app = this;
      if ($clickedEl.hasClass('menu-item-dropdown-opened')) {
        if ($(e.target).closest('.menu-dropdown').length) return;
        app.menu.close($clickedEl);
      } else {
        app.menu.open($clickedEl);
      }
    },
    '.menu-close': function onClick() {
      const app = this;
      app.menu.close();
    }
  }
};