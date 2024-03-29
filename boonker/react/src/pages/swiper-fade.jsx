import React from 'react';
import { Navbar, Page, Swiper, SwiperSlide } from 'techno4-react';

export default () => (
  <Page>
    <Navbar title="Fade Effect" backLink="Back"></Navbar>
    <Swiper className="demo-swiper demo-swiper-fade" pagination effect="fade">
      <SwiperSlide
        style={{
          backgroundImage: 'url(https://cdn.techno4.io/placeholder/people-1024x1024-1.jpg)',
        }}
      />
      <SwiperSlide
        style={{
          backgroundImage: 'url(https://cdn.techno4.io/placeholder/people-1024x1024-2.jpg)',
        }}
      />
      <SwiperSlide
        style={{
          backgroundImage: 'url(https://cdn.techno4.io/placeholder/people-1024x1024-3.jpg)',
        }}
      />
      <SwiperSlide
        style={{
          backgroundImage: 'url(https://cdn.techno4.io/placeholder/people-1024x1024-4.jpg)',
        }}
      />
    </Swiper>
  </Page>
);
