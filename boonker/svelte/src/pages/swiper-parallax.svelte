<script>
  import { Navbar, Page, Swiper, SwiperSlide } from 'techno4-svelte';
</script>

<Page>
  <Navbar title="Parallax" backLink="Back" />
  <Swiper class="demo-swiper-parallax color-theme-white" pagination navigation parallax speed={600}>
    <div
      slot="container-start"
      data-swiper-parallax="-23%"
      style="background-image: url(https://cdn.techno4.io/placeholder/nightlife-1024x1024-2.jpg)"
      class="swiper-parallax-bg" />
    <SwiperSlide>
      <div data-swiper-parallax="-300" class="swiper-slide-title">Slide 1</div>
      <div data-swiper-parallax="-200" class="swiper-slide-subtitle">Subtitle</div>
      <div data-swiper-parallax="-100" class="swiper-slide-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit
          amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
          Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
          euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla
          ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis
          feugiat.
        </p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div data-swiper-parallax="-300" class="swiper-slide-title">Slide 2</div>
      <div data-swiper-parallax="-200" class="swiper-slide-subtitle">Subtitle</div>
      <div data-swiper-parallax="-100" class="swiper-slide-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit
          amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
          Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
          euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla
          ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis
          feugiat.
        </p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div data-swiper-parallax="-300" class="swiper-slide-title">Slide 3</div>
      <div data-swiper-parallax="-200" class="swiper-slide-subtitle">Subtitle</div>
      <div data-swiper-parallax="-100" class="swiper-slide-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit
          amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
          Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
          euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla
          ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis
          feugiat.
        </p>
      </div>
    </SwiperSlide>
  </Swiper>
</Page>
