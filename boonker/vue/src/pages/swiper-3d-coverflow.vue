<template>
  <t4-page>
    <t4-navbar title="3D Coverflow Effect" back-link="Back"></t4-navbar>
    <t4-swiper
      pagination
      effect="coverflow"
      :slides-per-view="'auto'"
      centered-slides
      class="demo-swiper demo-swiper-coverflow"
    >
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-1.jpg)"
      >
        Slide 1
      </t4-swiper-slide>
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-2.jpg)"
      >
        Slide 2
      </t4-swiper-slide>
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-3.jpg)"
      >
        Slide 3
      </t4-swiper-slide>
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-4.jpg)"
      >
        Slide 4
      </t4-swiper-slide>
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-5.jpg)"
      >
        Slide 5
      </t4-swiper-slide>
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-6.jpg)"
      >
        Slide 6
      </t4-swiper-slide>
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-7.jpg)"
      >
        Slide 7
      </t4-swiper-slide>
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-8.jpg)"
      >
        Slide 8
      </t4-swiper-slide>
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-9.jpg)"
      >
        Slide 9
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
