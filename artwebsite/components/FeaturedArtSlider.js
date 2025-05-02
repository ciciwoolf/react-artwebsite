'use client';
import React from 'react';
import styles from './featured-art-slider.module.css';
import Image from 'next/image';

import { Autoplay, Navigation, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ArrowLeftButton } from './ArrowLeftButton';
import { ArrowRightButton } from './ArrowRightButton';

export const FeaturedArtSlider = ({ featuredWork }) => {

  return (
    <section className="mt-[1rem] mb-[1rem]">
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
            el: '.swiper-pagination',
          }}
          spaceBetween={30}
        >
          {featuredWork.map((art) => {
            return (
              <SwiperSlide
                className={`${styles.swiperSlide} grid md:grid-cols-2 gap-y-10 md:gap-x-10 x-md:pt-10`}
                key={art.id}
              >
                <div className="flex justify-center items-center">
                  <Image
                    width="354"
                    height="630"
                    src={art.mediaUrl}
                    className={`${styles.fadeIn} rounded object-cover w-full h-full min-w-[195px] min-h-[347px] max-w-[354px] max-h-[630px]`}
                    alt={art.paintingTitle}
                  />
                </div>
                <div className="pt-2">
                  <div>
                    <div className="mb-[2rem] text-center">
                      <p className={styles.title}>{art.paintingTitle}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex flex-row items-center justify-center gap-6 mt-1 mb-2 md:mt-2 md:mb-4">
          <ArrowLeftButton />
          <ArrowRightButton />
        </div>
      </div>
    </section>
  );
};
