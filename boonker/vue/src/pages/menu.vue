<template>
  <t4-page @page:afterin="onPageAfterIn">
    <t4-navbar title="Menu" back-link="Back"></t4-navbar>
    <t4-block strong>
      <p>
        Menu component is designed to be used as overlay control. It can be very helpful when you
        need controls on top of the map, images, some text/code editor, etc.
      </p>
    </t4-block>
    <t4-block-title>Links</t4-block-title>
    <t4-block strong class="no-padding-horizontal">
      <t4-menu>
        <t4-menu-item href="#" text="Item 1" />
        <t4-menu-item href="#" text="Item 2" />
        <t4-menu-item href="#" icon-t4="pencil" />
        <t4-menu-item href="#" icon-t4="square_arrow_up" />
      </t4-menu>
    </t4-block>

    <t4-block-title>Dropdowns</t4-block-title>
    <t4-block strong class="no-padding-horizontal" style="z-index: 2000">
      <p class="padding-horizontal">
        Dropdown can be position on left, center or right of the menu item. It also can be
        scrollable.
      </p>
      <t4-menu>
        <t4-menu-item text="Left" dropdown>
          <t4-menu-dropdown left>
            <t4-menu-dropdown-item href="#" text="Menu Item 1" />
            <t4-menu-dropdown-item href="#" text="Menu Item 2" />
            <t4-menu-dropdown-item href="#" text="Menu Item 3" />
            <t4-menu-dropdown-item href="#" text="Menu Item 4" />
            <t4-menu-dropdown-item divider />
            <t4-menu-dropdown-item href="#" text="Menu Item 5" />
            <t4-menu-dropdown-item href="#" text="Menu Item 6" />
          </t4-menu-dropdown>
        </t4-menu-item>

        <t4-menu-item text="Center" dropdown>
          <t4-menu-dropdown center content-height="200px">
            <t4-menu-dropdown-item href="#" text="Menu Item 1" />
            <t4-menu-dropdown-item href="#" text="Menu Item 2" />
            <t4-menu-dropdown-item href="#" text="Menu Item 3" />
            <t4-menu-dropdown-item href="#" text="Menu Item 4" />
            <t4-menu-dropdown-item divider />
            <t4-menu-dropdown-item href="#" text="Menu Item 5" />
            <t4-menu-dropdown-item href="#" text="Menu Item 6" />
            <t4-menu-dropdown-item href="#" text="Menu Item 7" />
            <t4-menu-dropdown-item divider />
            <t4-menu-dropdown-item href="#" text="Menu Item 8" />
            <t4-menu-dropdown-item href="#" text="Menu Item 9" />
            <t4-menu-dropdown-item href="#" text="Menu Item 10" />
          </t4-menu-dropdown>
        </t4-menu-item>

        <t4-menu-item text="Right" dropdown>
          <t4-menu-dropdown right>
            <t4-menu-dropdown-item href="#" text="Menu Item 1" />
            <t4-menu-dropdown-item href="#" text="Menu Item 2" />
            <t4-menu-dropdown-item href="#" text="Menu Item 3" />
            <t4-menu-dropdown-item href="#" text="Menu Item 4" />
            <t4-menu-dropdown-item divider />
            <t4-menu-dropdown-item href="#" text="Menu Item 5" />
            <t4-menu-dropdown-item href="#" text="Menu Item 6" />
          </t4-menu-dropdown>
        </t4-menu-item>

        <t4-menu-item style="margin-left: auto" icon-t4="square_arrow_up" dropdown>
          <t4-menu-dropdown right>
            <t4-menu-dropdown-item href="#">
              <span>Share on Facebook</span>
              <t4-icon class="margin-left" t4="logo_facebook" />
            </t4-menu-dropdown-item>
            <t4-menu-dropdown-item href="#">
              <span>Share on Twitter</span>
              <t4-icon class="margin-left" t4="logo_twitter" />
            </t4-menu-dropdown-item>
          </t4-menu-dropdown>
        </t4-menu-item>

        <t4-menu-item href="#" icon-t4="pencil" />
      </t4-menu>
    </t4-block>

    <t4-block-title>On Top Of Map</t4-block-title>
    <t4-card>
      <t4-card-content :padding="false">
        <div ref="map" style="height: 240px"></div>
        <t4-menu style="position: absolute; left: 0px; top: 6px">
          <t4-menu-item href="#" icon-t4="zoom_in" />
          <t4-menu-item href="#" icon-t4="zoom_out" />
          <t4-menu-item icon-t4="layers_fill" dropdown>
            <t4-menu-dropdown left>
              <t4-menu-dropdown-item href="#" text="Terrain" />
              <t4-menu-dropdown-item href="#" text="Satellite" />
            </t4-menu-dropdown>
          </t4-menu-item>
        </t4-menu>
      </t4-card-content>
    </t4-card>
  </t4-page>
</template>
<script>
import {
  t4Page,
  t4Navbar,
  t4BlockTitle,
  t4Block,
  t4Menu,
  t4MenuItem,
  t4MenuDropdown,
  t4MenuDropdownItem,
  t4Card,
  t4CardContent,
  t4Icon,
} from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4BlockTitle,
    t4Block,
    t4Menu,
    t4MenuItem,
    t4MenuDropdown,
    t4MenuDropdownItem,
    t4Card,
    t4CardContent,
    t4Icon,
  },
  data() {
    return {
      mapStyleLoaded: false,
      mapScriptLoaded: false,
      mapInitialized: false,
    };
  },
  methods: {
    onPageAfterIn() {
      const self = this;
      if (self.mapInitialized) return;
      if (!window.L) {
        self.loadMapAssets();
        return;
      }
      self.initMap();
    },
    loadMapAssets() {
      const self = this;
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.css';
      style.integrity =
        'sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==';
      style.setAttribute('crossorigin', '');
      style.onload = () => {
        self.mapStyleLoaded = true;
        if (self.mapScriptLoaded) self.initMap();
      };
      document.head.appendChild(style);

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.js';
      script.integrity =
        'sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg==';
      script.setAttribute('crossorigin', '');
      script.onload = () => {
        self.mapScriptLoaded = true;
        if (self.mapStyleLoaded) self.initMap();
      };
      document.head.appendChild(script);
    },
    initMap() {
      const self = this;
      const mymap = window.L.map(self.$refs.map, { zoomControl: false }).setView(
        [51.505, -0.09],
        10,
      );
      window.L.tileLayer(
        'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoibm9saW1pdHM0d2ViIiwiYSI6ImNqcXA4NTdmczBocm8zeG13Zm1zNTdyeDAifQ.HoJgmqQ_uH4zLyNJmiY98A',
        {
          maxZoom: 18,
          attribution: `Map data &copy; <a class="external" target="_blank" href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,
            <a class="external" target="_blank" href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
            Imagery © <a class="external" target="_blank" href="https://www.mapbox.com/">Mapbox</a>`,
          id: 'mapbox.streets',
        },
      ).addTo(mymap);
      self.mapInitialized = true;
    },
  },
};
</script>
