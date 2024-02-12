<template>
  <t4-app v-bind="t4Params">
    <t4-panel left cover resizable>
      <t4-view url="/panel-left/" links-view=".view-main"></t4-view>
    </t4-panel>
    <t4-panel right reveal resizable>
      <t4-view url="/panel-right/"></t4-view>
    </t4-panel>
    <t4-view url="/" :main="true" class="safe-areas" :master-detail-breakpoint="768"></t4-view>
  </t4-app>
</template>
<script>
import { t4App, t4Panel, t4View } from 'techno4-vue';
import routes from './routes';
import store from './store';

export default {
  components: {
    t4App,
    t4Panel,
    t4View,
  },
  data() {
    // Demo Theme
    let theme = 'auto';
    if (document.location.search.indexOf('theme=') >= 0) {
      theme = document.location.search.split('theme=')[1].split('&')[0];
    }

    return {
      t4Params: {
        id: 'io.techno4.testapp',
        theme,
        routes,
        store,
        popup: {
          closeOnEscape: true,
        },
        sheet: {
          closeOnEscape: true,
        },
        popover: {
          closeOnEscape: true,
        },
        actions: {
          closeOnEscape: true,
        },
      },
    };
  },
};
</script>
