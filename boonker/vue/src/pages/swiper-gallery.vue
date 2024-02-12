<template>
  <t4-page style="background: #000">
    <t4-navbar title="Thumbs Gallery" back-link="Back"></t4-navbar>
    <t4-swiper
      class="demo-swiper-gallery-top color-theme-white"
      :space-between="10"
      navigation
      :thumbs="{
        swiper: swiperThumbs,
      }"
    >
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-1.jpg)"
      />
      >
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-2.jpg)"
      />
      >
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-3.jpg)"
      />
      >
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-4.jpg)"
      />
      >
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-5.jpg)"
      />
      >
      <t4-swiper-slide
        style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-6.jpg)"
      />
      >
    </t4-swiper>
    <t4-swiper
      class="demo-swiper-gallery-thumbs"
      :slides-per-view="4"
      :space-between="10"
      :free-mode="true"
      :watch-slides-progress="true"
      :watch-slides-visibility="true"
      @swiper="swiperThumbs = $event"
    >
      <t4-swiper-slide>
        <div
          style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-1.jpg)"
          class="swiper-slide-pic"
        />
      </t4-swiper-slide>
      <t4-swiper-slide>
        <div
          style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-2.jpg)"
          class="swiper-slide-pic"
        />
      </t4-swiper-slide>
      <t4-swiper-slide>
        <div
          style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-3.jpg)"
          class="swiper-slide-pic"
        />
      </t4-swiper-slide>
      <t4-swiper-slide>
        <div
          style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-4.jpg)"
          class="swiper-slide-pic"
        />
      </t4-swiper-slide>
      <t4-swiper-slide>
        <div
          style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-5.jpg)"
          class="swiper-slide-pic"
        />
      </t4-swiper-slide>
      <t4-swiper-slide>
        <div
          style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-6.jpg)"
          class="swiper-slide-pic"
        />
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
  data() {
    return {
      swiperThumbs: null,
    };
  },
};
</script>
