<script>
  import { Navbar, Page, Swiper, SwiperSlide } from 'techno4-svelte';
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<Page>
  <Navbar title="Zoom" backLink="Back"></Navbar>
  <Swiper
    class="demo-swiper"
    pagination navigation zoom
  >
    <SwiperSlide zoom>
      <img src="https://cdn.techno4.io/placeholder/nature-800x800-1.jpg" />
    </SwiperSlide>
    <SwiperSlide zoom>
      <img src="https://cdn.techno4.io/placeholder/nature-800x800-2.jpg" />
    </SwiperSlide>
    <SwiperSlide zoom>
      <img src="https://cdn.techno4.io/placeholder/nature-800x800-3.jpg" />
    </SwiperSlide>
    <SwiperSlide zoom>
      <img src="https://cdn.techno4.io/placeholder/nature-800x800-4.jpg" />
    </SwiperSlide>
    <SwiperSlide zoom>
      <img src="https://cdn.techno4.io/placeholder/nature-800x800-5.jpg" />
    </SwiperSlide>
    <SwiperSlide zoom>
      <img src="https://cdn.techno4.io/placeholder/nature-800x800-6.jpg" />
    </SwiperSlide>
  </Swiper>
</Page>
