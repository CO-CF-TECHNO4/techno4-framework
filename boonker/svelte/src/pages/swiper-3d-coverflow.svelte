<script>
  import { Navbar, Page, Swiper, SwiperSlide } from 'techno4-svelte';
</script>

<Page>
  <Navbar title="3D Coverflow Effect" backLink="Back" />
  <Swiper
    class="demo-swiper demo-swiper-coverflow"
    pagination
    effect={'coverflow'}
    centeredSlides={true}
    slidesPerView={'auto'}>
    <SwiperSlide
      style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-1.jpg)" />
    <SwiperSlide
      style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-2.jpg)" />
    <SwiperSlide
      style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-3.jpg)" />
    <SwiperSlide
      style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-4.jpg)" />
    <SwiperSlide
      style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-5.jpg)" />
    <SwiperSlide
      style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-6.jpg)" />
    <SwiperSlide
      style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-7.jpg)" />
    <SwiperSlide
      style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-8.jpg)" />
    <SwiperSlide
      style="background-image: url(https://cdn.techno4.io/placeholder/nature-800x800-9.jpg)" />
  </Swiper>
</Page>
