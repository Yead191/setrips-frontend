"use client"
import SectionTitle from "./SectionTItle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarCard } from "@/components/CarCard";
import { Car } from "@/constants/car-data";
export default function DiscoverSection({ title, data }: { title: string, data: Car[] }) {
    return (
        <div className="container py-10 lg:py-12 ">
            <SectionTitle title={title} align="left" />
            <div className="relative group  mt-12">
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
                    {data.map((car) => (
                        <SwiperSlide key={car.id} className="h-auto">
                            <CarCard car={car} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Main Navigation Arrows */}
                <button
                    className="main-prev absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl lg:flex items-center justify-center text-gray-400 hover:text-primary transition-all hover:scale-110 disabled:opacity-0 cursor-pointer hidden"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    className="main-next absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl lg:flex items-center justify-center text-gray-400 hover:text-primary transition-all hover:scale-110 disabled:opacity-0 cursor-pointer hidden"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Pagination Container */}
                <div className="main-pagination flex justify-center gap-2 mt-8"></div>
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
        </div>
    )
}
