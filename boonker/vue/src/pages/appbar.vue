<template>
  <t4-page>
    <t4-navbar title="Appbar" back-link="Back"></t4-navbar>
    <t4-block strong>
      <p>
        Appbar is the main app bar with actions on top of the whole app. It is designed to be used
        in desktop apps with Aurora theme.
      </p>
    </t4-block>
    <t4-block strong>
      <t4-button fill @click="toggleAppbar">Toggle Appbar</t4-button>
    </t4-block>
  </t4-page>
</template>
<script>
import { t4Page, t4Navbar, t4Block, t4Button, t4 } from 'techno4-vue';
import $ from 'dom64';

let appbarEnabled = false;

export default {
  components: {
    t4Page,
    t4Navbar,
    t4Block,
    t4Button,
  },
  data() {
    return {
      appbarEnabled,
    };
  },
  methods: {
    enableAppbar() {
      const self = this;
      self.appbarEnabled = true;
      appbarEnabled = true;
      t4.$el.prepend(`
        <div class="appbar">
          <div class="appbar-inner">
            <div class="left">
              <a href="#" class="button button-small panel-toggle display-flex" data-panel="left">
                <i class="t4-icons">bars</i>
              </a>
              <a href="#" class="button button-small display-flex margin-left-half">
                <i class="t4-icons">square_list</i>
              </a>
              <a href="#" class="button button-small display-flex margin-left-half">
                <i class="t4-icons">arrowshape_turn_up_left_fill</i>
              </a>
              <a href="#" class="button button-small display-flex margin-left-half">
                <i class="t4-icons">arrowshape_turn_up_right_fill</i>
              </a>
            </div>
            <div class="right">
              <div class="searchbar searchbar-inline">
                <div class="searchbar-input-wrap">
                  <input type="text" placeholder="Search app">
                  <i class="searchbar-icon"></i>
                  <div class="input-clear-button"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
        `);
    },
    disableAppbar() {
      const self = this;
      self.appbarEnabled = false;
      appbarEnabled = false;
      $('.appbar').remove();
    },
    toggleAppbar() {
      const self = this;
      if (self.appbarEnabled) {
        self.disableAppbar();
      } else {
        self.enableAppbar();
      }
    },
  },
};
</script>
