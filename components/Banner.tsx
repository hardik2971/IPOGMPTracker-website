"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Banner() {
  const bannerImages = [
    "/ipoji_banner_1.webp",
    "/ipoji_banner_2.webp",
    "/ipoji_banner_3.webp",
  ];

  return (
    <section className="bg-[#CFEDFF] py-6 sm:py-8 md:py-10 px-4">
      <div className="container mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            enabled: true,
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            clickable: true,
          }}
          className="banner-swiper"
          breakpoints={{
            640: {
              navigation: true,
            },
          }}
        >
          {bannerImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-auto">
                <Image
                  src={image}
                  alt={`Banner ${index + 1}`}
                  width={1000}
                  height={290}
                  className="w-full h-[180px] sm:h-[220px] md:h-[290px] object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
