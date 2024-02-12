<template>
  <t4-page>
    <t4-navbar title="Fade Effect" back-link="Back"></t4-navbar>
    <t4-swiper pagination effect="fade" class="demo-swiper demo-swiper-fade">
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/people-1024x1024-1.jpg)"
      ></t4-swiper-slide>
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/people-1024x1024-2.jpg)"
      ></t4-swiper-slide>
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/people-1024x1024-3.jpg)"
      ></t4-swiper-slide>
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/people-1024x1024-4.jpg)"
      ></t4-swiper-slide>
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
