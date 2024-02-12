import React, { useEffect, useRef, useState } from 'react';
import {
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
  t4,
} from 'techno4-react';

let stylesheet;
let globalTheme = 'light';
let globalBarsStyle = 'empty';
let globalCustomColor = '';
let globalCustomProperties = '';

export default () => {
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

  const [theme, setTheme] = useState(globalTheme);
  const [barsStyle, setBarsStyle] = useState(globalBarsStyle);
  const [customColor, setCustomColor] = useState(globalCustomColor);
  const [customProperties, setCustomProperties] = useState(globalCustomProperties);
  const [themeColor, setThemeColor] = useState(t4.$('html').css('--t4-theme-color').trim());

  const timeout = useRef(null);

  const setWebThemeColor = (hexColor) => {
    const $meta = t4.$('meta[name="theme-color"]');
    if (!$meta.length) {
      t4.$('head').append(`<meta name="theme-color" content="${hexColor}">`);
      return;
    }
    $meta.attr('content', hexColor);
  };

  const generateStylesheet = () => {
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
      if (barsStyle === 'fill') {
        setWebThemeColor(themeColor);
      } else if (theme === 'light') {
        setWebThemeColor('#fff');
      } else if (theme === 'dark') {
        setWebThemeColor('#000');
      }
    });

    return styles.trim();
  };

  useEffect(() => {
    if (!stylesheet) {
      stylesheet = document.createElement('style');
      document.head.appendChild(stylesheet);
    }
  }, []);

  const setLayoutTheme = (newTheme) => {
    const $html = t4.$('html');
    globalTheme = newTheme;
    $html.removeClass('dark light').addClass(`${globalTheme}`);
    setTheme(globalTheme);
  };

  const removeCustomColor = () => {
    globalCustomColor = '';
    setCustomColor('');
  };

  const setColorTheme = (color) => {
    const $html = t4.$('html');
    const currentColorClass = $html[0].className.match(/color-theme-([a-z]*)/);
    if (currentColorClass) $html.removeClass(currentColorClass[0]);
    $html.addClass(`color-theme-${color}`);
    removeCustomColor();
    setThemeColor($html.css(`--t4-color-${color}`).trim());
  };

  const updateBarsStyle = (newBarsStyle) => {
    globalBarsStyle = newBarsStyle;
    setBarsStyle(globalBarsStyle);
  };

  const updateCustomColor = (color) => {
    if (themeColor === color) return;
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      globalCustomColor = color;
      setCustomColor(globalCustomColor);
    }, 300);
  };

  useEffect(() => {
    globalCustomProperties = generateStylesheet();
    stylesheet.innerHTML = globalCustomProperties;
    setCustomProperties(globalCustomProperties);
  }, [barsStyle, customColor]);
  return (
    <Page>
      <Navbar large title="Color Themes" backLink="Back"></Navbar>
      <BlockTitle medium>Layout Themes</BlockTitle>
      <Block strong>
        <p>techno4 comes with 2 main layout themes: Light (default) and Dark:</p>
        <Row>
          <Col
            width="50"
            className="bg-color-white demo-theme-picker"
            onClick={() => setLayoutTheme('light')}
          >
            {theme === 'light' && <Checkbox checked disabled />}
          </Col>
          <Col
            width="50"
            className="bg-color-black demo-theme-picker"
            onClick={() => setLayoutTheme('dark')}
          >
            {theme === 'dark' && <Checkbox checked disabled />}
          </Col>
        </Row>
      </Block>
      <BlockTitle medium>Navigation Bars Style</BlockTitle>
      <Block strong>
        <p>Switch navigation bars to filled style:</p>
        <Row>
          <Col
            width="50"
            className="demo-bars-picker demo-bars-picker-empty"
            onClick={() => updateBarsStyle('empty')}
          >
            <div className="demo-navbar"></div>
            {barsStyle === 'empty' && <Checkbox checked disabled />}
          </Col>
          <Col
            width="50"
            className="demo-bars-picker demo-bars-picker-fill"
            onClick={() => updateBarsStyle('fill')}
          >
            <div className="demo-navbar"></div>
            {barsStyle === 'fill' && <Checkbox checked disabled />}
          </Col>
        </Row>
      </Block>
      <BlockTitle medium>Default Color Themes</BlockTitle>
      <Block strong>
        <p>techno4 comes with {colors.length} color themes set.</p>
        <Row>
          {colors.map((color, index) => (
            <Col width="33" medium="25" large="20" key={index}>
              <Button
                fill
                round
                small
                className="demo-color-picker-button"
                color={color}
                onClick={() => setColorTheme(color)}
              >
                {color}
              </Button>
            </Col>
          ))}

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
          onColorPickerChange={(value) => updateCustomColor(value.hex)}
          colorPickerParams={{
            targetEl: '#color-theme-picker-color',
          }}
        >
          <div
            slot="media"
            id="color-theme-picker-color"
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '4px',
              background: 'var(--t4-theme-color)',
            }}
          ></div>
        </ListInput>
      </List>

      <BlockTitle medium>Generated CSS Variables</BlockTitle>
      <Block strong>
        {customProperties && <p>Add this code block to your custom stylesheet:</p>}
        {customProperties && (
          <pre
            style={{
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              margin: 0,
              fontSize: '12px',
            }}
          >
            {customProperties}
          </pre>
        )}
        {!customProperties && (
          <p>
            Change navigation bars styles or specify custom color to see custom CSS variables here
          </p>
        )}
      </Block>
    </Page>
  );
};
