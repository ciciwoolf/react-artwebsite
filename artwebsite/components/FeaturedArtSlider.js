'use client';
import React from 'react';
import Image from 'next/image';
import styles from './featured-art-slider.module.css';

import { Autoplay, Navigation, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const FeaturedArtSlider = ({ data }) => {
  return (
    <section className="pt-[7rem] pb-[2rem]">
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect={'fade'}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: 'fraction',
          }}
          spaceBetween={30}
          className="fade"
        >
          {data.map((p) => {
            return (
              <SwiperSlide
                className=" grid md:grid-cols-2 gap-y-10 md:gap-x-10 x-md:pt-10"
                key={p.id}
              >
                <div className="p-3 flex justify-center items-center">
                  <img
                    src={p.img}
                    className="object-cover h-full w-full max-w-[640px] max-h-[640px]"
                    alt=""
                  />
                </div>
                <div className="pt-7">
                  <div className="title ">
                    {/* <div className="px-y pt-7 mb-[2rem] text-center">
                      <h1 className="font-bold">{p.header}</h1>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

// export const FeaturedArtSlider = ({ data }) => {
//   return (
//     <div className={styles.sliderContainer}>
//       <div className={styles.slideWrapper}>
//         <Swiper
//           effect={'fade'}
//           // loop={true}
//           pagination={{
//             clickable: true,
//             type: 'fraction',
//           }}
//           spaceBetween={30}
//           navigation
//           className="fade"
//         >
//           {data.map(({ id, image, name }) => (
//             <SwiperSlide key={id} className={styles.swiperSlide}>
//               <Image
//                 className={styles.swiperImage}
//                 src={image}
//                 alt={name}
//                 width={250}
//                 height={250}
//               />
//               Picture
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };
