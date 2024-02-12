<template>
  <t4-page>
    <t4-navbar title="Zoom" back-link="Back"></t4-navbar>
    <t4-swiper pagination zoom navigation class="demo-swiper">
      <t4-swiper-slide zoom>
        <img src="https://cdn.techno4.io/placeholder/nature-800x800-1.jpg" />
      </t4-swiper-slide>
      <t4-swiper-slide zoom>
        <img src="https://cdn.techno4.io/placeholder/nature-800x800-2.jpg" />
      </t4-swiper-slide>
      <t4-swiper-slide zoom>
        <img src="https://cdn.techno4.io/placeholder/nature-800x800-3.jpg" />
      </t4-swiper-slide>
      <t4-swiper-slide zoom>
        <img src="https://cdn.techno4.io/placeholder/nature-800x800-4.jpg" />
      </t4-swiper-slide>
      <t4-swiper-slide zoom>
        <img src="https://cdn.techno4.io/placeholder/nature-800x800-5.jpg" />
      </t4-swiper-slide>
      <t4-swiper-slide zoom>
        <img src="https://cdn.techno4.io/placeholder/nature-800x800-6.jpg" />
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
