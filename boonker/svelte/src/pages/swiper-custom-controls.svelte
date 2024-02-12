<script>
  import { Navbar, Page, Swiper, SwiperSlide } from 'techno4-svelte';
</script>

<Page>
  <Navbar title="Custom Controls" backLink="Back" />
  <div class="demo-swiper-custom">
    <Swiper pagination={{ clickable: true }} navigation>
      <SwiperSlide
        style="background-image: url(https://cdn.techno4.io/placeholder/nightlife-1024x1024-1.jpg)" />
      <SwiperSlide
        style="background-image: url(https://cdn.techno4.io/placeholder/nightlife-1024x1024-2.jpg)" />
      <SwiperSlide
        style="background-image: url(https://cdn.techno4.io/placeholder/nightlife-1024x1024-3.jpg)" />
      <SwiperSlide
        style="background-image: url(https://cdn.techno4.io/placeholder/nightlife-1024x1024-4.jpg)" />
      <SwiperSlide
        style="background-image: url(https://cdn.techno4.io/placeholder/nightlife-1024x1024-5.jpg)" />
      <SwiperSlide
        style="background-image: url(https://cdn.techno4.io/placeholder/nightlife-1024x1024-6.jpg)" />
    </Swiper>
  </div>
</Page>
