import $ from '../../shared/dom64.js';
import ConstructorMethods from '../../shared/constructor-methods.js';
import Picker from './picker-class.js';

export default {
  name: 'picker',
  static: {
    Picker,
  },
  create() {
    const app = this;
    app.picker = ConstructorMethods({
      defaultSelector: '.picker',
      constructor: Picker,
      app,
      domProp: 't4Picker',
    });
    app.picker.close = function close(el = '.picker') {
      const $el = $(el);
      if ($el.length === 0) return;
      const picker = $el[0].t4Picker;
      if (!picker || (picker && !picker.opened)) return;
      picker.close();
    };
  },
  params: {
    picker: {
      // Picker settings
      rotateEffect: false,
      freeMode: false,
      cols: [],
      // Common opener settings
      containerEl: null,
      openIn: 'auto', // or 'popover' or 'sheet'
      sheetPush: false,
      sheetSwipeToClose: undefined,
      backdrop: undefined, // uses Popover or Sheet defaults
      formatValue: null,
      inputEl: null,
      inputReadOnly: true,
      closeByOutsideClick: true,
      scrollToInput: true,
      scrollToEl: undefined,
      toolbar: true,
      toolbarCloseText: 'Done',
      cssClass: null,
      routableModals: false,
      view: null,
      url: 'select/',
      // Render functions
      renderToolbar: null,
      render: null,
    },
  },
};
