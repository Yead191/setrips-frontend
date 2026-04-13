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
    "absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center " +
    "w-11 h-11 rounded-full bg-white border border-[#d4d4d4] text-[#444] " +
    "transition-all duration-200 cursor-pointer p-0 leading-none " +
    "hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-white hover:shadow-[0_4px_16px_rgba(201,168,76,0.4)] " +
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a84c] focus-visible:outline-offset-2 " +
    "disabled:opacity-30 disabled:pointer-events-none";

const OurServices: React.FC = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const swiperRef = useRef<SwiperRef>(null);

    return (
        <section className="bg-white py-20 overflow-hidden" aria-labelledby="services-heading">
            <div className="max-w-[1280px] mx-auto px-16 sm:px-20 relative">

                <SectionTitle title="Our Services" align="center" />

                <div className="relative flex items-center">

                    <button
                        ref={prevRef}
                        type="button"
                        aria-label="Previous service"
                        className={`${navBtnBase} -left-14`}
                    >
                        <ChevronLeft />
                    </button>

                    <Swiper
                        ref={swiperRef}
                        {...SERVICE_SWIPER_SETTINGS}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            if (
                                swiper.params.navigation &&
                                typeof swiper.params.navigation !== "boolean"
                            ) {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }
                        }}
                        className="overflow-visible! w-full [&_.swiper-wrapper]:pb-2"
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
                        ref={nextRef}
                        type="button"
                        aria-label="Next service"
                        className={`${navBtnBase} -right-14`}
                    >
                        <ChevronRight />
                    </button>

                </div>
            </div>
        </section>
    );
};

export default OurServices;