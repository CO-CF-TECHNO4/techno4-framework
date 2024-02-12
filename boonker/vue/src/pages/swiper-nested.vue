<template>
  <t4-page>
    <t4-navbar title="Nested Swipers" back-link="Back"></t4-navbar>
    <t4-swiper :pagination="{ el: '.swiper-pagination-h' }" class="demo-swiper">
      <div class="swiper-pagination swiper-pagination-h"></div>
      <t4-swiper-slide>Horizontal Slide 1</t4-swiper-slide>
      <t4-swiper-slide>
        <t4-swiper
          :pagination="{ el: '.swiper-pagination-v' }"
          direction="vertical"
          class="demo-swiper"
        >
          <div class="swiper-pagination swiper-pagination-v"></div>
          <t4-swiper-slide>Vertical Slide 1</t4-swiper-slide>
          <t4-swiper-slide>Vertical Slide 2</t4-swiper-slide>
          <t4-swiper-slide>Vertical Slide 3</t4-swiper-slide>
        </t4-swiper>
      </t4-swiper-slide>
      <t4-swiper-slide>Horizontal Slide 3</t4-swiper-slide>
      <t4-swiper-slide>Horizontal Slide 4</t4-swiper-slide>
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
