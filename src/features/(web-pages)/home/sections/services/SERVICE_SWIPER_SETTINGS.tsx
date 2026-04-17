import type { SwiperOptions } from "swiper/types";

/**
 * Shared Swiper carousel settings for the Services section.
 * Spread directly into any <Swiper> component.
 *
 * Usage:
 *   import { SERVICE_SWIPER_SETTINGS } from "@/constants/swiperSettings";
 *   <Swiper {...SERVICE_SWIPER_SETTINGS}>...</Swiper>
 */
export const SERVICE_SWIPER_SETTINGS: SwiperOptions = {
    slidesPerView: 1.15,
    spaceBetween: 20,
    centeredSlides: false,
    loop: false,
    grabCursor: true,
    breakpoints: {
        480: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2.2,
            spaceBetween: 24,
        },
        900: {
            slidesPerView: 3.15,
            spaceBetween: 28,
        },
        1200: {
            slidesPerView: 3.3,
            spaceBetween: 30,
        },
    },
};