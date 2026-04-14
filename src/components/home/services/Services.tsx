"use client"

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { SwiperRef } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "@/shared/SectionTItle";
import { SERVICE_SWIPER_SETTINGS } from "./SERVICE_SWIPER_SETTINGS";
import { SERVICES_DATA } from "@/constants/home/services";
import ServiceCard from "./ServiceCard";

const ChevronLeft: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <polyline points="15 18 9 12 15 6" />
    </svg>
);

const ChevronRight: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

const navBtnBase =
    "absolute top-1/2 -translate-y-1/2 z-50 flex items-center justify-center " +
    "w-11 h-11 rounded-full bg-white border border-[#d4d4d4] text-[#444] " +
    "transition-all duration-200 cursor-pointer p-0 leading-none " +
    "hover:bg-[#0057A7] hover:border-[#0057A7] hover:text-white hover:shadow-[0_4px_16px_rgba(0,87,167,0.4)] " +
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0057A7] focus-visible:outline-offset-2 " +
    "disabled:opacity-30 disabled:pointer-events-none";

const OurServices: React.FC = () => {
    const swiperRef = useRef<SwiperRef>(null);

    return (
        <section className="bg-white py-12 overflow-hidden" aria-labelledby="services-heading">
            <div className="container lg:px-20! 2xl:px-16! relative">

                <SectionTitle title="Our Services" align="center" className="mb-10" />

                <div className="relative flex items-center">

                    <button
                        type="button"
                        aria-label="Previous service"
                        className={`services-prev-btn ${navBtnBase} -left-14 hidden lg:flex`}
                    >
                        <ChevronLeft />
                    </button>

                    <Swiper
                        ref={swiperRef}
                        {...SERVICE_SWIPER_SETTINGS}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.services-prev-btn',
                            nextEl: '.services-next-btn',
                        }}
                        className="w-full py-8! -my-8!"
                    >
                        {SERVICES_DATA.map((service) => (
                            <SwiperSlide key={service.id} className="h-auto!">
                                <ServiceCard
                                    title={service.title}
                                    image={service.image}
                                    link={service.link}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Next */}
                    <button
                        type="button"
                        aria-label="Next service"
                        className={`services-next-btn ${navBtnBase} -right-14 hidden lg:flex`}
                    >
                        <ChevronRight />
                    </button>

                </div>
            </div>
        </section>
    );
};

export default OurServices;