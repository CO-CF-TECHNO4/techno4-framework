import $ from '../../shared/dom64.js';
import { extend } from '../../shared/utils.js';
import Searchbar from './searchbar-class.js';
import ConstructorMethods from '../../shared/constructor-methods.js';

export default {
  name: 'searchbar',
  static: {
    Searchbar,
  },
  create() {
    const app = this;
    app.searchbar = ConstructorMethods({
      defaultSelector: '.searchbar',
      constructor: Searchbar,
      app,
      domProp: 't4Searchbar',
      addMethods: 'clear enable disable toggle search'.split(' '),
    });
  },
  on: {
    tabMounted(tabEl) {
      const app = this;
      $(tabEl)
        .find('.searchbar-init')
        .each((searchbarEl) => {
          const $searchbarEl = $(searchbarEl);
          app.searchbar.create(extend($searchbarEl.dataset(), { el: searchbarEl }));
        });
    },
    tabBeforeRemove(tabEl) {
      $(tabEl)
        .find('.searchbar-init')
        .each((searchbarEl) => {
          if (searchbarEl.t4Searchbar && searchbarEl.t4Searchbar.destroy) {
            searchbarEl.t4Searchbar.destroy();
          }
        });
    },
    pageInit(page) {
      const app = this;
      page.$el.find('.searchbar-init').each((searchbarEl) => {
        const $searchbarEl = $(searchbarEl);
        app.searchbar.create(extend($searchbarEl.dataset(), { el: searchbarEl }));
      });
      if (
        app.theme === 'ios' &&
        page.view &&
        page.view.router.dynamicNavbar &&
        page.$navbarEl &&
        page.$navbarEl.length > 0
      ) {
        page.$navbarEl.find('.searchbar-init').each((searchbarEl) => {
          const $searchbarEl = $(searchbarEl);
          app.searchbar.create(extend($searchbarEl.dataset(), { el: searchbarEl }));
        });
      }
    },
    pageBeforeRemove(page) {
      const app = this;
      page.$el.find('.searchbar-init').each((searchbarEl) => {
        if (searchbarEl.t4Searchbar && searchbarEl.t4Searchbar.destroy) {
          searchbarEl.t4Searchbar.destroy();
        }
      });
      if (
        app.theme === 'ios' &&
        page.view &&
        page.view.router.dynamicNavbar &&
        page.$navbarEl &&
        page.$navbarEl.length > 0
      ) {
        page.$navbarEl.find('.searchbar-init').each((searchbarEl) => {
          if (searchbarEl.t4Searchbar && searchbarEl.t4Searchbar.destroy) {
            searchbarEl.t4Searchbar.destroy();
          }
        });
      }
    },
  },
  clicks: {
    '.searchbar-clear': function clear($clickedEl, data = {}) {
      const app = this;
      const sb = app.searchbar.get(data.searchbar);
      if (sb) sb.clear();
    },
    '.searchbar-enable': function enable($clickedEl, data = {}) {
      const app = this;
      const sb = app.searchbar.get(data.searchbar);
      if (sb) sb.enable(true);
    },
    '.searchbar-disable': function disable($clickedEl, data = {}) {
      const app = this;
      const sb = app.searchbar.get(data.searchbar);
      if (sb) sb.disable();
    },
    '.searchbar-toggle': function toggle($clickedEl, data = {}) {
      const app = this;
      const sb = app.searchbar.get(data.searchbar);
      if (sb) sb.toggle();
    },
  },
  vnode: {
    'searchbar-init': {
      insert(vnode) {
        const app = this;
        const searchbarEl = vnode.elm;
        const $searchbarEl = $(searchbarEl);
        app.searchbar.create(extend($searchbarEl.dataset(), { el: searchbarEl }));
      },
      destroy(vnode) {
        const searchbarEl = vnode.elm;
        if (searchbarEl.t4Searchbar && searchbarEl.t4Searchbar.destroy) {
          searchbarEl.t4Searchbar.destroy();
        }
      },
    },
  },
};
