'use client';
import React from 'react';
import styles from './featured-art-slider.module.css';
import { SquareWorks } from '@/data/data';

import { Autoplay, Navigation, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ArrowLeftButton } from './ArrowLeftButton';
import { ArrowRightButton } from './ArrowRightButton';

export const FeaturedArtSlider = () => {
  return (
    <section className="pt-12 pb-[2rem]">
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade, Navigation]}
          navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
          effect={'fade'}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: 'fraction',
          }}
          spaceBetween={30}
        >
          {SquareWorks.map((p) => {
            return (
              <SwiperSlide
                className={`${styles.swiperSlide} grid md:grid-cols-2 gap-y-10 md:gap-x-10 x-md:pt-10`}
                key={p.id}
              >
                <div className="flex justify-center items-center">
                  <img
                    src={p.img}
                    className={`${styles.fadeIn} rounded object-cover w-full h-full max-w-[500px] max-h-[500px]`}
                    alt=""
                  />
                </div>
                <div className="pt-4">
                  <div>
                    <div className="pt-3 pb-3 mb-[2rem] text-center">
                      <p className={styles.title}>{p.header}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex flex-row items-center justify-center gap-6 mt-6">
          <ArrowLeftButton />
          <ArrowRightButton />
        </div>
      </div>
    </section>
  );
};
