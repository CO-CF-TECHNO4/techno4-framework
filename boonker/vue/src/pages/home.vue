<template>
  <t4-page class="page-home" @page:afterin="onPageAfterIn">
    <t4-navbar large transparent :sliding="false">
      <t4-nav-left>
        <t4-link
          panel-open="left"
          icon-ios="t4:menu"
          icon-aurora="t4:menu"
          icon-md="material:menu"
        ></t4-link>
      </t4-nav-left>
      <t4-nav-title sliding>techno4 Vue</t4-nav-title>
      <t4-nav-right>
        <t4-link
          class="searchbar-enable"
          data-searchbar=".searchbar-components"
          icon-ios="t4:search"
          icon-aurora="t4:search"
          icon-md="material:search"
        ></t4-link>
      </t4-nav-right>
      <t4-nav-title-large>techno4 Vue</t4-nav-title-large>
      <t4-searchbar
        class="searchbar-components"
        search-container=".components-list"
        search-in="a"
        expandable
        :disable-button="!theme.aurora"
      ></t4-searchbar>
    </t4-navbar>

    <t4-list class="searchbar-hide-on-search">
      <t4-list-item title="About techno4" reload-detail link="/about/">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
    </t4-list>

    <t4-block-title medium class="searchbar-found">Components</t4-block-title>
    <t4-list class="components-list searchbar-found">
      <t4-list-item reload-detail link="/accordion/" title="Accordion">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/action-sheet/" title="Action Sheet">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/appbar/" title="Appbar">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/area-chart/" title="Area Chart">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/autocomplete/" title="Autocomplete">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/badge/" title="Badge">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/breadcrumbs/" title="Breadcrumbs">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/buttons/" title="Buttons">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/calendar/" title="Calendar / Date Picker">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/cards/" title="Cards">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/cards-expandable/" title="Cards Expandable">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/checkbox/" title="Checkbox">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/chips/" title="Chips/Tags">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/color-picker/" title="Color Picker">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/contacts-list/" title="Contacts List">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/content-block/" title="Content Block">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/data-table/" title="Data Table">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/dialog/" title="Dialog">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/elevation/" title="Elevation">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/fab/" title="FAB">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/fab-morph/" title="FAB Morph">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/form-storage/" title="Form Storage">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/gauge/" title="Gauge">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/grid/" title="Grid / Layout Grid">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/icons/" title="Icons">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/infinite-scroll/" title="Infinite Scroll">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/inputs/" title="Inputs">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/lazy-load/" title="Lazy Load">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/list/" title="List View">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/list-index/" title="List Index">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/login-screen/" title="Login Screen">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/menu/" title="Menu">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/menu-list/" title="Menu List">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/messages/" title="Messages">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/navbar/" title="Navbar">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/notifications/" title="Notifications">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/panel/" title="Panel / Side Panels">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/photo-browser/" title="Photo Browser">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/picker/" title="Picker">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/pie-chart/" title="Pie Chart">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/popover/" title="Popover">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/popup/" title="Popup">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/preloader/" title="Preloader">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/progressbar/" title="Progress Bar">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/pull-to-refresh/" title="Pull To Refresh">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/radio/" title="Radio">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/range/" title="Range Slider">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/searchbar/" title="Searchbar">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/searchbar-expandable/" title="Searchbar Expandable">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/sheet-modal/" title="Sheet Modal">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/skeleton/" title="Skeleton (Ghost) Elements">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/smart-select/" title="Smart Select">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/sortable/" title="Sortable List">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/stepper/" title="Stepper">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/subnavbar/" title="Subnavbar">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/swipeout/" title="Swipeout (Swipe To Delete)">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/swiper/" title="Swiper Slider">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/tabs/" title="Tabs">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/text-editor/" title="Text Editor">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/timeline/" title="Timeline">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/toast/" title="Toast">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/toggle/" title="Toggle">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/toolbar-tabbar/" title="Toolbar & Tabbar">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/tooltip/" title="Tooltip">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/treeview/" title="Treeview">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item reload-detail link="/virtual-list/" title="Virtual List">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
    </t4-list>
    <t4-list class="searchbar-not-found">
      <t4-list-item title="Nothing found" />
    </t4-list>
    <t4-block-title medium class="searchbar-hide-on-search">Themes</t4-block-title>
    <t4-list class="searchbar-hide-on-search">
      <t4-list-item title="iOS Theme" external link="./index.html?theme=ios" />
      <t4-list-item title="Material (MD) Theme" external link="./index.html?theme=md" />
      <t4-list-item title="Aurora Desktop Theme" external link="./index.html?theme=aurora" />
      <t4-list-item title="Color Themes" reload-detail link="/color-themes/" />
    </t4-list>

    <t4-block-title medium class="searchbar-hide-on-search">Page Loaders & Router</t4-block-title>
    <t4-list class="searchbar-hide-on-search">
      <t4-list-item title="Page Transitions" reload-detail link="/page-transitions/" />
      <t4-list-item title="Routable Modals" reload-detail link="/routable-modals/" />
      <t4-list-item
        title="Default Route (404)"
        reload-detail
        link="/load-something-that-doesnt-exist/"
      />
      <t4-list-item
        v-if="!theme.aurora"
        title="Master-Detail (Split View)"
        link="/master-detail/"
      />
      <t4-list-item title="Store" reload-detail link="/store/" />
    </t4-list>
  </t4-page>
</template>
<script>
import {
  t4Page,
  t4Navbar,
  t4NavLeft,
  t4NavTitle,
  t4NavTitleLarge,
  t4NavRight,
  t4BlockTitle,
  t4List,
  t4ListItem,
  t4Link,
  t4Searchbar,
  t4Icon,
  theme,
  t4,
} from 'techno4-vue';
import { onMounted } from 'vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4NavLeft,
    t4NavTitle,
    t4NavTitleLarge,
    t4NavRight,
    t4BlockTitle,
    t4List,
    t4ListItem,
    t4Link,
    t4Searchbar,
    t4Icon,
  },
  props: {
    t4router: Object,
  },
  // eslint-disable-next-line
  setup({ t4router }) {
    const onResize = () => {
      const $el = t4.$('.page-home');
      if (t4.width >= 768) {
        $el.find('.list:not(.searchbar-not-found)').addClass('menu-list');
      } else {
        $el.find('.list:not(.searchbar-not-found)').removeClass('menu-list');
      }
    };

    const onPageAfterIn = () => {
      if (!theme.aurora) return;
      if (t4.width >= 768) {
        t4router.navigate('/about/', { reloadDetail: true });
      }
    };
    onMounted(() => {
      if (theme.aurora) {
        const $el = t4.$('.page-home');
        onResize();

        t4.on('resize', onResize);

        t4router.on('routeChange', (route) => {
          const url = route.url;
          if (!$el) return;
          const $linkEl = $el.find(`a[href="${url}"]`);
          if (!$linkEl.length) return;
          $el.find('.item-selected').removeClass('item-selected');
          $linkEl.addClass('item-selected');
        });
      }
    });
    return {
      theme,
      onPageAfterIn,
    };
  },
};
</script>
