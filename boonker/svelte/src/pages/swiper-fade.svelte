<script>
  import { Navbar, Page, Swiper, SwiperSlide } from 'techno4-svelte';
</script>

<Page>
  <Navbar title="Fade Effect" backLink="Back" />
  <Swiper class="demo-swiper demo-swiper-fade" pagination effect="fade">
    <SwiperSlide
      style="background-image: url(https://cdn.techno4.io/placeholder/people-1024x1024-1.jpg)" />
    <SwiperSlide
      style="background-image: url(https://cdn.techno4.io/placeholder/people-1024x1024-2.jpg)" />
    <SwiperSlide
      style="background-image: url(https://cdn.techno4.io/placeholder/people-1024x1024-3.jpg)" />
    <SwiperSlide
      style="background-image: url(https://cdn.techno4.io/placeholder/people-1024x1024-4.jpg)" />
  </Swiper>
</Page>
