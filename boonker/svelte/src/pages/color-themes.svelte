<script context="module">
  let stylesheet;
  let globalTheme = 'light';
  let globalBarsStyle = 'empty';
  let globalCustomColor = '';
  let globalCustomProperties = '';
</script>

<script>
  import { onMount } from 'svelte';
  import {
    t4,
    Navbar,
    Page,
    BlockTitle,
    Button,
    Row,
    Col,
    Block,
    List,
    ListInput,
    Checkbox,
  } from 'techno4-svelte';

  let theme = globalTheme;
  let barsStyle = globalBarsStyle;
  let customColor = globalCustomColor;
  let customProperties = globalCustomProperties;
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
  let themeColor = t4.$('html').css('--t4-theme-color').trim();
  let timeout;

  const setWebThemeColor = (hexColor) => {
    const metaEl = t4.$('meta[name="theme-color"]');
    if (!metaEl.length) {
      t4.$('head').append(`<meta name="theme-color" content="${hexColor}">`);
      return;
    }
    metaEl.attr('content', hexColor);
  };

  function generateStylesheet() {
    let styles = '';
    if (customColor) {
      const colorThemeProperties = t4.utils.colorThemeCSSProperties(customColor);
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
    if (barsStyle === 'fill') {
      const colorThemeRgb = t4
        .$('html')
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
  }

  onMount(() => {
    if (!stylesheet) {
      stylesheet = document.createElement('style');
      document.head.appendChild(stylesheet);
    }
  });

  function setLayoutTheme(newTheme) {
    const htmlEl = t4.$('html');
    globalTheme = newTheme;
    htmlEl.removeClass('dark light').addClass(`${globalTheme}`);
    theme = globalTheme;
  }

  function setColorTheme(color) {
    const htmlEl = t4.$('html');
    const currentColorClass = htmlEl[0].className.match(/color-theme-([a-z]*)/);
    if (currentColorClass) htmlEl.removeClass(currentColorClass[0]);
    htmlEl.addClass(`color-theme-${color}`);
    // eslint-disable-next-line
    unsetCustomColor();
    themeColor = htmlEl.css(`--t4-color-${color}`).trim();
  }

  function setBarsStyle(newBarsStyle) {
    globalBarsStyle = newBarsStyle;
    barsStyle = globalBarsStyle;
    globalCustomProperties = generateStylesheet();
    stylesheet.innerHTML = globalCustomProperties;
    customProperties = globalCustomProperties;
  }

  function unsetCustomColor() {
    globalCustomColor = '';
    customColor = '';
    globalCustomProperties = generateStylesheet();
    stylesheet.innerHTML = globalCustomProperties;
    customProperties = globalCustomProperties;
  }

  function setCustomColor(color) {
    if (themeColor === color) return;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      globalCustomColor = color;
      customColor = globalCustomColor;
      globalCustomProperties = generateStylesheet();
      stylesheet.innerHTML = globalCustomProperties;
      customProperties = globalCustomProperties;
    }, 300);
  }
</script>

<Page>
  <Navbar large title="Color Themes" backLink="Back" />
  <BlockTitle medium>Layout Themes</BlockTitle>
  <Block strong>
    <p>techno4 comes with 2 main layout themes: Light (default) and Dark:</p>
    <Row>
      <Col
        width="50"
        class="bg-color-white demo-theme-picker"
        onClick={() => setLayoutTheme('light')}
      >
        {#if theme === 'light'}
          <Checkbox checked disabled />
        {/if}
      </Col>
      <Col
        width="50"
        class="bg-color-black demo-theme-picker"
        onClick={() => setLayoutTheme('dark')}
      >
        {#if theme === 'dark'}
          <Checkbox checked disabled />
        {/if}
      </Col>
    </Row>
  </Block>
  <BlockTitle medium>Navigation Bars Style</BlockTitle>
  <Block strong>
    <p>Switch navigation bars to filled style:</p>
    <Row>
      <Col
        width="50"
        class="demo-bars-picker demo-bars-picker-empty"
        onClick={() => setBarsStyle('empty')}
      >
        <div class="demo-navbar" />
        {#if barsStyle === 'empty'}
          <Checkbox checked disabled />
        {/if}
      </Col>
      <Col
        width="50"
        class="demo-bars-picker demo-bars-picker-fill"
        onClick={() => setBarsStyle('fill')}
      >
        <div class="demo-navbar" />
        {#if barsStyle === 'fill'}
          <Checkbox checked disabled />
        {/if}
      </Col>
    </Row>
  </Block>
  <BlockTitle medium>Default Color Themes</BlockTitle>
  <Block strong>
    <p>techno4 comes with {colors.length} color themes set.</p>
    <Row>
      {#each colors as color, index}
        <Col width="33" medium="25" large="20" key={index}>
          <Button
            fill
            round
            small
            class="demo-color-picker-button"
            {color}
            onClick={() => setColorTheme(color)}
          >
            {color}
          </Button>
        </Col>
      {/each}

      <Col width="33" medium="25" large="20" />
      <Col width="33" medium="25" large="20" />
      <Col width="33" medium="25" large="20" />
    </Row>
  </Block>
  <BlockTitle medium>Custom Color Theme</BlockTitle>
  <List>
    <ListInput
      type="colorpicker"
      label="HEX Color"
      placeholder="e.g. #ff0000"
      readonly
      value={{ hex: customColor || themeColor }}
      onColorPickerChange={(value) => setCustomColor(value.hex)}
      colorPickerParams={{ targetEl: '#color-theme-picker-color' }}
    >
      <div
        slot="media"
        id="color-theme-picker-color"
        style="width: 28px; height: 28px; borderRadius: 4px; background: var(--t4-theme-color)"
      />
    </ListInput>
  </List>

  <BlockTitle medium>Generated CSS Variables</BlockTitle>
  <Block strong>
    {#if customProperties}
      <p>Add this code block to your custom stylesheet:</p>
      <pre
        style="overflow: auto; -webkit-overflow-scrolling: touch; margin: 0; font-size: 12px">{customProperties}</pre>
    {:else}
      <p>Change navigation bars styles or specify custom color to see custom CSS variables here</p>
    {/if}
  </Block>
</Page>
