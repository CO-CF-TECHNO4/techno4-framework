<template>
  <t4-page>
    <t4-navbar title="Custom Controls" back-link="Back"></t4-navbar>
    <div class="demo-swiper-custom">
      <t4-swiper :pagination="{ clickable: true }" navigation :space-between="0">
        <t4-swiper-slide
          style="
            background-image: url(https://cdn.techno4.io/placeholder/nightlife-1024x1024-1.jpg);
          "
        ></t4-swiper-slide>
        <t4-swiper-slide
          style="
            background-image: url(https://cdn.techno4.io/placeholder/nightlife-1024x1024-2.jpg);
          "
        ></t4-swiper-slide>
        <t4-swiper-slide
          style="
            background-image: url(https://cdn.techno4.io/placeholder/nightlife-1024x1024-3.jpg);
          "
        ></t4-swiper-slide>
        <t4-swiper-slide
          style="
            background-image: url(https://cdn.techno4.io/placeholder/nightlife-1024x1024-4.jpg);
          "
        ></t4-swiper-slide>
        <t4-swiper-slide
          style="
            background-image: url(https://cdn.techno4.io/placeholder/nightlife-1024x1024-5.jpg);
          "
        ></t4-swiper-slide>
        <t4-swiper-slide
          style="
            background-image: url(https://cdn.techno4.io/placeholder/nightlife-1024x1024-6.jpg);
          "
        ></t4-swiper-slide>
      </t4-swiper>
    </div>
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
