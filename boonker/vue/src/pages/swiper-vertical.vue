<template>
  <t4-page>
    <t4-navbar title="Vertical Swiper" back-link="Back"></t4-navbar>
    <t4-swiper direction="vertical" :pagination="{ hideOnClick: true }" class="demo-swiper">
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
import { t4Navbar, t4Page, t4Swiper, t4SwiperSlide } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Swiper,
    t4SwiperSlide,
  },
};
</script>
