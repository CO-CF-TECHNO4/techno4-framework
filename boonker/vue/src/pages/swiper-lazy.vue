<template>
  <t4-page>
    <t4-navbar title="Slider Lazy Loading" back-link="Back"></t4-navbar>
    <t4-swiper pagination navigation lazy class="demo-swiper-lazy">
      <t4-swiper-slide>
        <img
          data-src="https://cdn.techno4.io/placeholder/nature-1024x1024-1.jpg"
          class="swiper-lazy"
        />
        <div class="swiper-lazy-preloader"></div>
      </t4-swiper-slide>
      <t4-swiper-slide>
        <img
          data-src="https://cdn.techno4.io/placeholder/nature-1024x1024-2.jpg"
          class="swiper-lazy"
        />
        <div class="swiper-lazy-preloader"></div>
      </t4-swiper-slide>
      <t4-swiper-slide>
        <img
          data-src="https://cdn.techno4.io/placeholder/nature-1024x1024-3.jpg"
          class="swiper-lazy"
        />
        <div class="swiper-lazy-preloader"></div>
      </t4-swiper-slide>
      <t4-swiper-slide>
        <img
          data-src="https://cdn.techno4.io/placeholder/nature-1024x1024-4.jpg"
          class="swiper-lazy"
        />
        <div class="swiper-lazy-preloader"></div>
      </t4-swiper-slide>
      <t4-swiper-slide>
        <img
          data-src="https://cdn.techno4.io/placeholder/nature-1024x1024-5.jpg"
          class="swiper-lazy"
        />
        <div class="swiper-lazy-preloader"></div>
      </t4-swiper-slide>
      <t4-swiper-slide>
        <img
          data-src="https://cdn.techno4.io/placeholder/nature-1024x1024-6.jpg"
          class="swiper-lazy"
        />
        <div class="swiper-lazy-preloader"></div>
      </t4-swiper-slide>
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
