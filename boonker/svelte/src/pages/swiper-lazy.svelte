<script>
  import { Navbar, Page, Swiper, SwiperSlide } from 'techno4-svelte';
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<Page>
  <Navbar title="Slider Lazy Loading" backLink="Back"></Navbar>
  <Swiper class="demo-swiper-lazy" pagination navigation lazy>
    <SwiperSlide>
      <img
        data-src="https://cdn.techno4.io/placeholder/nature-1024x1024-1.jpg"
        class="swiper-lazy"
      />
      <div class="swiper-lazy-preloader" />
    </SwiperSlide>
    <SwiperSlide>
      <img
        data-src="https://cdn.techno4.io/placeholder/nature-1024x1024-2.jpg"
        class="swiper-lazy"
      />
      <div class="swiper-lazy-preloader" />
    </SwiperSlide>
    <SwiperSlide>
      <img
        data-src="https://cdn.techno4.io/placeholder/nature-1024x1024-3.jpg"
        class="swiper-lazy"
      />
      <div class="swiper-lazy-preloader" />
    </SwiperSlide>
    <SwiperSlide>
      <img
        data-src="https://cdn.techno4.io/placeholder/nature-1024x1024-4.jpg"
        class="swiper-lazy"
      />
      <div class="swiper-lazy-preloader" />
    </SwiperSlide>
    <SwiperSlide>
      <img
        data-src="https://cdn.techno4.io/placeholder/nature-1024x1024-5.jpg"
        class="swiper-lazy"
      />
      <div class="swiper-lazy-preloader" />
    </SwiperSlide>
    <SwiperSlide>
      <img
        data-src="https://cdn.techno4.io/placeholder/nature-1024x1024-6.jpg"
        class="swiper-lazy"
      />
      <div class="swiper-lazy-preloader" />
    </SwiperSlide>
  </Swiper>
</Page>
