"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarCard } from "../shared/CarCard";
import { CAR_DATA } from "@/constants/car-data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function CarCarousel() {
  return (
    <section className="">
      <div className="container mx-auto px-4 ">


        <div className="relative group px-2 ">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: ".main-prev",
              nextEl: ".main-next",
            }}
            pagination={{
              clickable: true,
              el: ".main-pagination",
              bulletClass: "swiper-pagination-bullet !bg-primary",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 3.3 },
            }}
            className=""
          >
            {CAR_DATA.map((car) => (
              <SwiperSlide key={car.id} className="h-auto pb-5">
                <CarCard car={car} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Main Navigation Arrows */}
          <button
            className="main-prev absolute 2xl:-left-12 -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl hidden lg:flex items-center justify-center text-gray-400 hover:text-primary transition-all hover:scale-110 disabled:opacity-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="main-next absolute 2xl:-right-12 -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl hidden lg:flex items-center justify-center text-gray-400 hover:text-primary transition-all hover:scale-110 disabled:opacity-0"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Container */}
          <div className="main-pagination flex justify-center gap-2 mt-8"></div>
        </div>
      </div>

      <style jsx global>{`
        .main-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .main-pagination .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
