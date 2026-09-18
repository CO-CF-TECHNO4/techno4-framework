import $ from '../../shared/dom64.js';
import { extend } from '../../shared/utils.js';
import RoundRange from './round-range-class.js';
import ConstructorMethods from '../../shared/constructor-methods.js';

export default {
  name: 'round-range',
  create() {
    const app = this;
    app.roundRange = extend(
      ConstructorMethods({
        defaultSelector: '.round-range-slider, .round-range',
        constructor: RoundRange,
        app,
        domProp: 'f7RoundRange',
      }),
      {
        getValue(el = '.round-range-slider, .round-range') {
          const range = app.roundRange.get(el);
          if (range) return range.getValue();
          return undefined;
        },
        setValue(el = '.round-range-slider, .round-range', value) {
          const range = app.roundRange.get(el);
          if (range) return range.setValue(value);
          return undefined;
        },
        reset(el = '.round-range-slider, .round-range') {
          const range = app.roundRange.get(el);
          if (range) return range.reset();
          return undefined;
        },
      },
    );
    app.roundRangeSlider = app.roundRange;
  },
  static: {
    RoundRange,
  },
  on: {
    tabMounted(tabEl) {
      const app = this;
      $(tabEl)
        .find('.round-range-slider-init, .round-range-init')
        .each((rangeEl) => new RoundRange(app, { el: rangeEl }));
    },
    tabBeforeRemove(tabEl) {
      $(tabEl)
        .find('.round-range-slider-init, .round-range-init')
        .each((rangeEl) => {
          if (rangeEl.f7RoundRange) rangeEl.f7RoundRange.destroy();
        });
    },
    pageInit(page) {
      const app = this;
      page.$el.find('.round-range-slider-init, .round-range-init').each((rangeEl) => {
        new RoundRange(app, { el: rangeEl });
      });
    },
    pageBeforeRemove(page) {
      page.$el.find('.round-range-slider-init, .round-range-init').each((rangeEl) => {
        if (rangeEl.f7RoundRange) rangeEl.f7RoundRange.destroy();
      });
    },
  },
  vnode: {
    'round-range-slider-init': {
      insert(vnode) {
        const rangeEl = vnode.elm;
        const app = this;
        app.roundRange.create({ el: rangeEl });
      },
      destroy(vnode) {
        const rangeEl = vnode.elm;
        if (rangeEl.f7RoundRange) rangeEl.f7RoundRange.destroy();
      },
    },
    'round-range-init': {
      insert(vnode) {
        const rangeEl = vnode.elm;
        const app = this;
        app.roundRange.create({ el: rangeEl });
      },
      destroy(vnode) {
        const rangeEl = vnode.elm;
        if (rangeEl.f7RoundRange) rangeEl.f7RoundRange.destroy();
      },
    },
  },
};
