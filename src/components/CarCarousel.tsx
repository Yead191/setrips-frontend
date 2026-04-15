"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarCard } from "./CarCard";
import { CAR_DATA } from "@/constants/car-data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function CarCarousel() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 mb-12 items-center text-center">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">
            Excellence in Motion
          </span>
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 leading-tight">
            Explore Our Premium Fleet
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl">
            Choose from our world-class selection of chauffeur-driven vehicles for the ultimate in luxury and comfort.
          </p>
        </div>

        <div className="relative group px-4 md:px-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
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
              1440: { slidesPerView: 4 },
            }}
            className="pb-16"
          >
            {CAR_DATA.map((car) => (
              <SwiperSlide key={car.id} className="h-auto">
                <CarCard car={car} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Main Navigation Arrows */}
          <button
            className="main-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-400 hover:text-primary transition-all hover:scale-110 disabled:opacity-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="main-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-400 hover:text-primary transition-all hover:scale-110 disabled:opacity-0"
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
