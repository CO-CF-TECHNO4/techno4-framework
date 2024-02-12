<template>
  <t4-page>
    <t4-navbar large title="Color Themes" back-link="Back"></t4-navbar>
    <t4-block-title medium>Layout Themes</t4-block-title>
    <t4-block strong>
      <p>techno4 comes with 2 main layout themes: Light (default) and Dark:</p>
      <t4-row>
        <t4-col
          width="50"
          class="bg-color-white demo-theme-picker"
          @click="setLayoutTheme('light')"
        >
          <t4-checkbox v-if="theme === 'light'" checked disabled />
        </t4-col>
        <t4-col width="50" class="bg-color-black demo-theme-picker" @click="setLayoutTheme('dark')">
          <t4-checkbox v-if="theme === 'dark'" checked disabled />
        </t4-col>
      </t4-row>
    </t4-block>
    <t4-block-title medium>Navigation Bars Style</t4-block-title>
    <t4-block strong>
      <p>Switch navigation bars to filled style:</p>
      <t4-row>
        <t4-col
          width="50"
          class="demo-bars-picker demo-bars-picker-empty"
          @click="setBarsStyle('empty')"
        >
          <div class="demo-navbar"></div>
          <t4-checkbox v-if="barsStyle === 'empty'" checked disabled />
        </t4-col>
        <t4-col
          width="50"
          class="demo-bars-picker demo-bars-picker-fill"
          @click="setBarsStyle('fill')"
        >
          <div class="demo-navbar"></div>
          <t4-checkbox v-if="barsStyle === 'fill'" checked disabled />
        </t4-col>
      </t4-row>
    </t4-block>
    <t4-block-title medium>Default Color Themes</t4-block-title>
    <t4-block strong>
      <p>techno4 comes with {{ colors.length }} color themes set.</p>
      <t4-row>
        <t4-col v-for="(color, index) in colors" :key="index" width="33" medium="25" large="20">
          <t4-button
            fill
            round
            small
            class="demo-color-picker-button"
            :color="color"
            @click="setColorTheme(color)"
            >{{ color }}</t4-button
          >
        </t4-col>
        <t4-col width="33" medium="25" large="20" />
        <t4-col width="33" medium="25" large="20" />
        <t4-col width="33" medium="25" large="20" />
      </t4-row>
    </t4-block>
    <t4-block-title medium>Custom Color Theme</t4-block-title>
    <t4-list>
      <t4-list-input
        type="colorpicker"
        label="HEX Color"
        placeholder="e.g. #ff0000"
        readonly
        :value="{ hex: customColor || themeColor }"
        :color-picker-params="{
          targetEl: '#color-theme-picker-color',
        }"
        @colorpicker:change="(value) => setCustomColor(value.hex)"
      >
        <template #media>
          <div
            id="color-theme-picker-color"
            style="width: 28px; height: 28px; border-radius: 4px; background: var(--t4-theme-color)"
          ></div>
        </template>
      </t4-list-input>
    </t4-list>

    <t4-block-title medium>Generated CSS Variables</t4-block-title>
    <t4-block strong>
      <template v-if="customProperties">
        <p>Add this code block to your custom stylesheet:</p>
        <pre
          style="overflow: auto; -webkit-overflow-scrolling: touch; margin: 0; font-size: 12px"
          >{{ customProperties }}</pre
        >
      </template>
      <p v-else>
        Change navigation bars styles or specify custom color to see custom CSS variables here
      </p>
    </t4-block>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4BlockTitle,
  t4Button,
  t4Row,
  t4Col,
  t4Block,
  t4List,
  t4ListInput,
  t4Checkbox,
  t4,
} from 'techno4-vue';
import $ from 'dom64';

let stylesheet;
let globalTheme = 'light';
let globalBarsStyle = 'empty';
let globalCustomColor = '';
let globalCustomProperties = '';

const setWebThemeColor = (hexColor) => {
  const $meta = $('meta[name="theme-color"]');
  if (!$meta.length) {
    $('head').append(`<meta name="theme-color" content="${hexColor}">`);
    return;
  }
  $meta.attr('content', hexColor);
};

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4Button,
    t4Row,
    t4Col,
    t4Block,
    t4List,
    t4ListInput,
    t4Checkbox,
  },
  data() {
    const colors = [
      'red',
      'green',
      'blue',
      'pink',
      'yellow',
      'orange',
      'purple',
      'deeppurple',
      'lightblue',
      'teal',
      'lime',
      'deeporange',
      'gray',
      'black',
    ];
    return {
      theme: globalTheme,
      barsStyle: globalBarsStyle,
      customColor: globalCustomColor,
      customProperties: globalCustomProperties,
      colors,
      themeColor: $('html').css('--t4-theme-color').trim(),
    };
  },
  mounted() {
    if (!stylesheet) {
      stylesheet = document.createElement('style');
      document.head.appendChild(stylesheet);
    }
  },
  methods: {
    generateStylesheet() {
      const self = this;
      let styles = '';
      if (self.customColor) {
        const colorThemeProperties = t4.utils.colorThemeCSSProperties(self.customColor);
        if (Object.keys(colorThemeProperties).length) {
          styles += `
/* Custom color theme */
:root {
  ${Object.keys(colorThemeProperties)
    .map((key) => `${key}: ${colorThemeProperties[key]};`)
    .join('\n  ')}
}`;
        }
      }
      if (self.barsStyle === 'fill') {
        const colorThemeRgb = $('html')
          .css('--t4-theme-color-rgb')
          .trim()
          .split(',')
          .map((c) => c.trim());
        styles += `
/* Invert navigation bars to fill style */
:root,
:root.dark,
:root .dark {
  --t4-bars-bg-color: var(--t4-theme-color);
  --t4-bars-bg-color-rgb: var(--t4-theme-color-rgb);
  --t4-bars-translucent-opacity: 0.9;
  --t4-bars-text-color: #fff;
  --t4-bars-link-color: #fff;
  --t4-navbar-subtitle-text-color: rgba(255,255,255,0.85);
  --t4-bars-border-color: transparent;
  --t4-tabbar-link-active-color: #fff;
  --t4-tabbar-link-inactive-color: rgba(255,255,255,0.54);
  --t4-sheet-border-color: transparent;
  --t4-tabbar-link-active-border-color: #fff;
}
.appbar,
.navbar,
.toolbar,
.subnavbar,
.calendar-header,
.calendar-footer {
  --t4-touch-ripple-color: var(--t4-touch-ripple-white);
  --t4-link-highlight-color: var(--t4-link-highlight-white);
  --t4-link-touch-ripple-color: var(--t4-touch-ripple-white);
  --t4-button-text-color: #fff;
  --t4-button-pressed-bg-color: rgba(255,255,255,0.1);
}
.navbar-large-transparent {
  --t4-navbar-large-title-text-color: #000;

  --r: ${colorThemeRgb[0]};
  --g: ${colorThemeRgb[1]};
  --b: ${colorThemeRgb[2]};
  --progress: var(--t4-navbar-large-collapse-progress);
  --t4-bars-link-color: rgb(
    calc(var(--r) + (255 - var(--r)) * var(--progress)),
    calc(var(--g) + (255 - var(--g)) * var(--progress)),
    calc(var(--b) + (255 - var(--b)) * var(--progress))
  );
}
.dark .navbar-large-transparent {
  --t4-navbar-large-title-text-color: #fff;
}
          `;
      }

      setTimeout(() => {
        if (self.barsStyle === 'fill') {
          setWebThemeColor(self.themeColor);
        } else if (self.theme === 'light') {
          setWebThemeColor('#fff');
        } else if (self.theme === 'dark') {
          setWebThemeColor('#000');
        }
      });
      return styles.trim();
    },
    setLayoutTheme(theme) {
      const self = this;
      const $html = $('html');
      globalTheme = theme;
      $html.removeClass('dark light').addClass(`${globalTheme}`);
      self.theme = globalTheme;
    },
    setColorTheme(color) {
      const self = this;
      const $html = $('html');
      const currentColorClass = $html[0].className.match(/color-theme-([a-z]*)/);
      if (currentColorClass) $html.removeClass(currentColorClass[0]);
      $html.addClass(`color-theme-${color}`);
      self.unsetCustomColor();
      self.themeColor = $html.css(`--t4-color-${color}`).trim();
    },
    setBarsStyle(barsStyle) {
      const self = this;
      globalBarsStyle = barsStyle;
      self.barsStyle = globalBarsStyle;
      globalCustomProperties = self.generateStylesheet();
      stylesheet.innerHTML = globalCustomProperties;
      self.customProperties = globalCustomProperties;
    },
    unsetCustomColor() {
      const self = this;
      globalCustomColor = '';
      self.customColor = '';
      globalCustomProperties = self.generateStylesheet();
      stylesheet.innerHTML = globalCustomProperties;
      self.customProperties = globalCustomProperties;
    },
    setCustomColor(color) {
      const self = this;
      if (self.themeColor === color) return;
      clearTimeout(self.timeout);
      self.timeout = setTimeout(() => {
        globalCustomColor = color;
        self.customColor = globalCustomColor;
        globalCustomProperties = self.generateStylesheet();
        stylesheet.innerHTML = globalCustomProperties;
        self.customProperties = globalCustomProperties;
      }, 300);
    },
  },
};
</script>
