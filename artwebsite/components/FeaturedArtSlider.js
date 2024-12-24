'use client';
import React from 'react';
import Image from 'next/image';
import styles from './featured-art-slider.module.css';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const FeaturedArtSlider = ({ data }) => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slideWrapper}>
        <Swiper
          navigation
          pagination={{ type: 'fraction', clickable: true }}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {data.map(({ id, image, name }) => (
            <SwiperSlide className={styles.swiperSlide} key={id}>
              {/* <Image
                src={image}
                alt={name}
                width={300}
                height={300}
                className={styles.swiperImage}
              /> */}
              Picture
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
