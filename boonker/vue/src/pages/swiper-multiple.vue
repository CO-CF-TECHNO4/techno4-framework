<template>
  <t4-page>
    <t4-navbar title="Multiple Swipers" back-link="Back"></t4-navbar>
    <t4-block-title>1 Slide Per View, 50px Between</t4-block-title>
    <t4-swiper pagination :space-between="50" class="demo-swiper-multiple">
      <t4-swiper-slide>Slide 1</t4-swiper-slide>
      <t4-swiper-slide>Slide 2</t4-swiper-slide>
      <t4-swiper-slide>Slide 3</t4-swiper-slide>
      <t4-swiper-slide>Slide 4</t4-swiper-slide>
      <t4-swiper-slide>Slide 5</t4-swiper-slide>
      <t4-swiper-slide>Slide 6</t4-swiper-slide>
      <t4-swiper-slide>Slide 7</t4-swiper-slide>
      <t4-swiper-slide>Slide 8</t4-swiper-slide>
      <t4-swiper-slide>Slide 9</t4-swiper-slide>
      <t4-swiper-slide>Slide 10</t4-swiper-slide>
    </t4-swiper>
    <t4-block-title>2 Slides Per View, 20px Between</t4-block-title>
    <t4-swiper pagination :space-between="20" :slides-per-view="2" class="demo-swiper-multiple">
      <t4-swiper-slide>Slide 1</t4-swiper-slide>
      <t4-swiper-slide>Slide 2</t4-swiper-slide>
      <t4-swiper-slide>Slide 3</t4-swiper-slide>
      <t4-swiper-slide>Slide 4</t4-swiper-slide>
      <t4-swiper-slide>Slide 5</t4-swiper-slide>
      <t4-swiper-slide>Slide 6</t4-swiper-slide>
      <t4-swiper-slide>Slide 7</t4-swiper-slide>
      <t4-swiper-slide>Slide 8</t4-swiper-slide>
      <t4-swiper-slide>Slide 9</t4-swiper-slide>
      <t4-swiper-slide>Slide 10</t4-swiper-slide>
    </t4-swiper>
    <t4-block-title>3 Slides Per View, 10px Between</t4-block-title>
    <t4-swiper pagination :space-between="10" :slides-per-view="3" class="demo-swiper-multiple">
      <t4-swiper-slide>Slide 1</t4-swiper-slide>
      <t4-swiper-slide>Slide 2</t4-swiper-slide>
      <t4-swiper-slide>Slide 3</t4-swiper-slide>
      <t4-swiper-slide>Slide 4</t4-swiper-slide>
      <t4-swiper-slide>Slide 5</t4-swiper-slide>
      <t4-swiper-slide>Slide 6</t4-swiper-slide>
      <t4-swiper-slide>Slide 7</t4-swiper-slide>
      <t4-swiper-slide>Slide 8</t4-swiper-slide>
      <t4-swiper-slide>Slide 9</t4-swiper-slide>
      <t4-swiper-slide>Slide 10</t4-swiper-slide>
    </t4-swiper>
    <t4-block-title>Auto Slides Per View + Centered</t4-block-title>
    <t4-swiper
      pagination
      :space-between="10"
      :slides-per-view="'auto'"
      centered-slides
      class="demo-swiper-multiple demo-swiper-multiple-auto"
    >
      <t4-swiper-slide>Slide 1</t4-swiper-slide>
      <t4-swiper-slide>Slide 2</t4-swiper-slide>
      <t4-swiper-slide>Slide 3</t4-swiper-slide>
      <t4-swiper-slide>Slide 4</t4-swiper-slide>
      <t4-swiper-slide>Slide 5</t4-swiper-slide>
      <t4-swiper-slide>Slide 6</t4-swiper-slide>
      <t4-swiper-slide>Slide 7</t4-swiper-slide>
      <t4-swiper-slide>Slide 8</t4-swiper-slide>
      <t4-swiper-slide>Slide 9</t4-swiper-slide>
      <t4-swiper-slide>Slide 10</t4-swiper-slide>
    </t4-swiper>
    <t4-block-title>Vertical, 10px Between</t4-block-title>
    <t4-swiper pagination :space-between="10" direction="vertical" class="demo-swiper-multiple">
      <t4-swiper-slide>Slide 1</t4-swiper-slide>
      <t4-swiper-slide>Slide 2</t4-swiper-slide>
      <t4-swiper-slide>Slide 3</t4-swiper-slide>
      <t4-swiper-slide>Slide 4</t4-swiper-slide>
      <t4-swiper-slide>Slide 5</t4-swiper-slide>
    </t4-swiper>
    <t4-block-title>Slow speed</t4-block-title>
    <t4-swiper :speed="900" pagination :space-between="50" class="demo-swiper-multiple">
      <t4-swiper-slide>Slide 1</t4-swiper-slide>
      <t4-swiper-slide>Slide 2</t4-swiper-slide>
      <t4-swiper-slide>Slide 3</t4-swiper-slide>
      <t4-swiper-slide>Slide 4</t4-swiper-slide>
      <t4-swiper-slide>Slide 5</t4-swiper-slide>
      <t4-swiper-slide>Slide 6</t4-swiper-slide>
      <t4-swiper-slide>Slide 7</t4-swiper-slide>
      <t4-swiper-slide>Slide 8</t4-swiper-slide>
      <t4-swiper-slide>Slide 9</t4-swiper-slide>
      <t4-swiper-slide>Slide 10</t4-swiper-slide>
    </t4-swiper>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4BlockTitle, t4Swiper, t4SwiperSlide } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4Swiper,
    t4SwiperSlide,
  },
};
</script>
