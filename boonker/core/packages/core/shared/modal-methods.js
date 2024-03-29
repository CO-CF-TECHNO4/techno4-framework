import $ from './dom64.js';
import { extend } from './utils.js';
import ConstructorMethods from './constructor-methods.js';
export default function ModalMethods(parameters) {
  if (parameters === void 0) {
    parameters = {};
  }
  const {
    defaultSelector,
    constructor: Constructor,
    app
  } = parameters;
  const methods = extend(ConstructorMethods({
    defaultSelector,
    constructor: Constructor,
    app,
    domProp: 't4Modal'
  }), {
    open(el, animate, targetEl) {
      let $el = $(el);
      if ($el.length > 1 && targetEl) {
        // check if same modal in other page
        const $targetPage = $(targetEl).parents('.page');
        if ($targetPage.length) {
          $el.each(modalEl => {
            const $modalEl = $(modalEl);
            if ($modalEl.parents($targetPage)[0] === $targetPage[0]) {
              $el = $modalEl;
            }
          });
        }
      }
      if ($el.length > 1) {
        $el = $el.eq($el.length - 1);
      }
      if (!$el.length) return undefined;
      let instance = $el[0].t4Modal;
      if (!instance) {
        const params = $el.dataset();
        instance = new Constructor(app, {
          el: $el,
          ...params
        });
      }
      return instance.open(animate);
    },
    close(el, animate, targetEl) {
      if (el === void 0) {
        el = defaultSelector;
      }
      let $el = $(el);
      if (!$el.length) return undefined;
      if ($el.length > 1) {
        // check if close link (targetEl) in this modal
        let $parentEl;
        if (targetEl) {
          const $targetEl = $(targetEl);
          if ($targetEl.length) {
            $parentEl = $targetEl.parents($el);
          }
        }
        if ($parentEl && $parentEl.length > 0) {
          $el = $parentEl;
        } else {
          $el = $el.eq($el.length - 1);
        }
      }
      let instance = $el[0].t4Modal;
      if (!instance) {
        const params = $el.dataset();
        instance = new Constructor(app, {
          el: $el,
          ...params
        });
      }
      return instance.close(animate);
    }
  });
  return methods;
}