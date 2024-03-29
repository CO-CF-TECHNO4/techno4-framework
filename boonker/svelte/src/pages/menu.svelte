<script>
  import {
    Page,
    Navbar,
    BlockTitle,
    Block,
    Menu,
    MenuItem,
    MenuDropdown,
    MenuDropdownItem,
    Card,
    CardContent,
    Icon,
  } from 'techno4-svelte';

  let mapStyleLoaded = false;
  let mapScriptLoaded = false;
  let mapInitialized = false;

  let mapEl;

  function initMap() {
    const mymap = window.L.map(mapEl, { zoomControl: false }).setView([51.505, -0.09], 10);
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
    mapInitialized = true;
  }

  function loadMapAssets() {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.css';
    style.integrity =
      'sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==';
    style.setAttribute('crossorigin', '');
    style.onload = () => {
      mapStyleLoaded = true;
      if (mapScriptLoaded) initMap();
    };
    document.head.appendChild(style);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.js';
    script.integrity =
      'sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg==';
    script.setAttribute('crossorigin', '');
    script.onload = () => {
      mapScriptLoaded = true;
      if (mapStyleLoaded) initMap();
    };
    document.head.appendChild(script);
  }

  function onPageAfterIn() {
    if (mapInitialized) return;
    if (!window.L) {
      loadMapAssets();
      return;
    }
    initMap();
  }
</script>

<Page {onPageAfterIn}>
  <Navbar title="Menu" backLink="Back" />
  <Block strong>
    <p>
      Menu component is designed to be used as overlay control. It can be very helpful when you need
      controls on top of the map, images, some text/code editor, etc.
    </p>
  </Block>
  <BlockTitle>Links</BlockTitle>
  <Block strong class="no-padding-horizontal">
    <Menu>
      <MenuItem href="#" text="Item 1" />
      <MenuItem href="#" text="Item 2" />
      <MenuItem href="#" icont4="pencil" />
      <MenuItem href="#" icont4="square_arrow_up" />
    </Menu>
  </Block>

  <BlockTitle>Dropdowns</BlockTitle>
  <Block strong class="no-padding-horizontal" style="z-index: 2000">
    <p class="padding-horizontal">
      Dropdown can be position on left, center or right of the menu item. It also can be scrollable.
    </p>
    <Menu>
      <MenuItem text="Left" dropdown>
        <MenuDropdown left>
          <MenuDropdownItem href="#" text="Menu Item 1" />
          <MenuDropdownItem href="#" text="Menu Item 2" />
          <MenuDropdownItem href="#" text="Menu Item 3" />
          <MenuDropdownItem href="#" text="Menu Item 4" />
          <MenuDropdownItem divider />
          <MenuDropdownItem href="#" text="Menu Item 5" />
          <MenuDropdownItem href="#" text="Menu Item 6" />
        </MenuDropdown>
      </MenuItem>

      <MenuItem text="Center" dropdown>
        <MenuDropdown center contentHeight="200px">
          <MenuDropdownItem href="#" text="Menu Item 1" />
          <MenuDropdownItem href="#" text="Menu Item 2" />
          <MenuDropdownItem href="#" text="Menu Item 3" />
          <MenuDropdownItem href="#" text="Menu Item 4" />
          <MenuDropdownItem divider />
          <MenuDropdownItem href="#" text="Menu Item 5" />
          <MenuDropdownItem href="#" text="Menu Item 6" />
          <MenuDropdownItem href="#" text="Menu Item 7" />
          <MenuDropdownItem divider />
          <MenuDropdownItem href="#" text="Menu Item 8" />
          <MenuDropdownItem href="#" text="Menu Item 9" />
          <MenuDropdownItem href="#" text="Menu Item 10" />
        </MenuDropdown>
      </MenuItem>

      <MenuItem text="Right" dropdown>
        <MenuDropdown right>
          <MenuDropdownItem href="#" text="Menu Item 1" />
          <MenuDropdownItem href="#" text="Menu Item 2" />
          <MenuDropdownItem href="#" text="Menu Item 3" />
          <MenuDropdownItem href="#" text="Menu Item 4" />
          <MenuDropdownItem divider />
          <MenuDropdownItem href="#" text="Menu Item 5" />
          <MenuDropdownItem href="#" text="Menu Item 6" />
        </MenuDropdown>
      </MenuItem>

      <MenuItem style="margin-left: auto" icont4="square_arrow_up" dropdown>
        <MenuDropdown right>
          <MenuDropdownItem href="#">
            <span>Share on Facebook</span>
            <Icon class="margin-left" t4="logo_facebook" />
          </MenuDropdownItem>
          <MenuDropdownItem href="#">
            <span>Share on Twitter</span>
            <Icon class="margin-left" t4="logo_twitter" />
          </MenuDropdownItem>
        </MenuDropdown>
      </MenuItem>

      <MenuItem href="#" icont4="pencil" />
    </Menu>
  </Block>

  <BlockTitle>On Top Of Map</BlockTitle>
  <Card>
    <CardContent padding={false}>
      <div bind:this={mapEl} style="height: 240px" />
      <Menu style="position: absolute; left: 0px; top: 6px">
        <MenuItem href="#" icont4="zoom_in" />
        <MenuItem href="#" icont4="zoom_out" />
        <MenuItem icont4="layers_fill" dropdown>
          <MenuDropdown left>
            <MenuDropdownItem href="#" text="Terrain" />
            <MenuDropdownItem href="#" text="Satellite" />
          </MenuDropdown>
        </MenuItem>
      </Menu>
    </CardContent>
  </Card>
</Page>
