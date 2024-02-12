<template>
  <t4-page class="page-about">
    <t4-navbar
      large
      transparent
      title="About"
      title-large="About"
      back-link="techno4"
    ></t4-navbar>
    <t4-block-title medium>Welcome to techno4</t4-block-title>
    <t4-block strong>
      <p>
        techno4 - is a free and open source HTML mobile framework to develop hybrid mobile apps
        or web apps with iOS or Android (Material) native look and feel. It is also an indispensable
        prototyping apps tool to show working app prototype as soon as possible in case you need to.
        techno4 is created by Vladimir Kharlampidi.
      </p>
      <p>
        The main approach of the techno4 is to give you an opportunity to create iOS and Android
        (Material) apps with HTML, CSS and JavaScript easily and clear. techno4 is full of
        freedom. It doesn't limit your imagination or offer ways of any solutions somehow.
        techno4 gives you freedom!
      </p>
      <p>
        techno4 is not compatible with all platforms. It is focused only on iOS and Android
        (Material) to bring the best experience and simplicity.
      </p>
      <p>
        techno4 is definitely for you if you decide to build iOS and Android hybrid app (Cordova
        or Capacitor) or web app that looks like and feels as great native iOS or Android (Material)
        apps.
      </p>
    </t4-block>
  </t4-page>
</template>
<script>
import { t4Page, t4Navbar, t4BlockTitle, t4Block } from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4BlockTitle,
    t4Block,
  },
};
</script>
