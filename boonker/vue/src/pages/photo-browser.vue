<template>
  <t4-page>
    <t4-navbar title="Photo Browser" back-link="Back"></t4-navbar>
    <t4-block strong>
      <p>
        Photo Browser is a standalone and highly configurable component that allows to open window
        with photo viewer and navigation elements with the following features:
      </p>
      <ul>
        <li>Swiper between photos</li>
        <li>Multi-gestures support for zooming</li>
        <li>Toggle zoom by double tap on photo</li>
        <li>Single click on photo to toggle Exposition mode</li>
      </ul>
    </t4-block>
    <t4-block strong>
      <p>
        Photo Browser could be opened in a three ways - as a Standalone component (Popup
        modification), in Popup, and as separate Page:
      </p>
      <t4-row>
        <t4-col>
          <t4-photo-browser ref="standalone" :photos="photos" />
          <t4-button fill @click="$refs.standalone.open()">Standalone</t4-button>
        </t4-col>
        <t4-col>
          <t4-photo-browser ref="popup" :photos="photos" type="popup" />
          <t4-button fill @click="$refs.popup.open()">Popup</t4-button>
        </t4-col>
        <t4-col>
          <t4-photo-browser ref="page" :photos="photos" type="page" page-back-link-text="Back" />
          <t4-button fill @click="$refs.page.open()">Page</t4-button>
        </t4-col>
      </t4-row>
    </t4-block>
    <t4-block strong>
      <p>
        Photo Browser supports 2 default themes - default Light (like in previous examples) and Dark
        theme. Here is a Dark theme examples:
      </p>
      <t4-row>
        <t4-col>
          <t4-photo-browser ref="standaloneDark" :photos="photos" theme="dark" />
          <t4-button fill @click="$refs.standaloneDark.open()">Standalone</t4-button>
        </t4-col>
        <t4-col>
          <t4-photo-browser ref="popupDark" :photos="photos" theme="dark" type="popup" />
          <t4-button fill @click="$refs.popupDark.open()">Popup</t4-button>
        </t4-col>
        <t4-col>
          <t4-photo-browser
            ref="pageDark"
            :photos="photos"
            theme="dark"
            type="page"
            page-back-link-text="Back"
          />
          <t4-button fill @click="$refs.pageDark.open()">Page</t4-button>
        </t4-col>
      </t4-row>
    </t4-block>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4PhotoBrowser, t4Block, t4Row, t4Col, t4Button } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4PhotoBrowser,
    t4Block,
    t4Row,
    t4Col,
    t4Button,
  },
  data() {
    return {
      photos: [
        {
          url: 'img/beach.jpg',
          caption: 'Amazing beach in Goa, India',
        },
        'http://placekitten.com/1024/1024',
        'img/lock.jpg',
        {
          url: 'img/monkey.jpg',
          caption: 'I met this monkey in Chinese mountains',
        },
        {
          url: 'img/mountains.jpg',
          caption: 'Beautiful mountains in Zhangjiajie, China',
        },
      ],
    };
  },
};
</script>
