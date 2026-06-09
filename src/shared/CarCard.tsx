"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Users, Briefcase, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Car } from "@/constants/car-data";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import { BannerForm } from "./BannerForm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const router = useRouter();
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Carousel */}
      <div className="relative h-64 overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: `.prev-${car.id}`,
            nextEl: `.next-${car.id}`,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="h-full w-full inner-swiper"
        >
          {car.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={car.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation for Inner Carousel */}
        <button
          className={cn(
            `prev-${car.id}`,
            "absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
          )}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          className={cn(
            `next-${car.id}`,
            "absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
          )}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow bg-white min-h-105">
        <div className="mb-2">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{car.name}</h3>
          <p className="text-sm text-gray-500">{car.description}</p>
        </div>

        {/* Specs */}
        <div className="space-y-3 mb-3">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Users className="w-4 h-4 text-primary" />
            <span>{car.passengers} Passengers</span>
          </div>
          <div className="flex items-start gap-3 text-sm text-gray-600">
            <Briefcase className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span>{car.luggage}</span>
          </div>
        </div>

        {/* Features */}
        <div className="border-t border-gray-100 pt-3 mb-6">
          <ul className="grid grid-cols-1 gap-y-2">
            {car.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-[13px] text-gray-500">
                <Check className="w-3.5 h-3.5 text-secondary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Button onClick={() => router.push(`/booking-details/${car.id}`)} variant="outline" className="w-full rounded-lg h-11 border-primary text-primary hover:bg-primary/5">
            VIEW DETAILS
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full rounded-lg h-11 bg-primary text-white shadow-md">
                Enquiry
              </Button>
            </DialogTrigger>
            <DialogContent className="p-6 md:p-8 sm:rounded-3xl border border-gray-100 bg-white shadow-2xl w-full min-w-xl max-h-[90vh] overflow-y-auto">
              <div className="mb-2 text-center">
                <h2 className="text-3xl font-serif text-[#08323D]">Make an Enquiry</h2>
                <p className="text-slate-500 mt-1">Fill in your details below and we'll get back to you shortly.</p>
              </div>
              <BannerForm isModal={true} />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <style jsx global>{`
        .inner-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.8);
          opacity: 0.5;
        }
        .inner-swiper .swiper-pagination-bullet-active {
          background: white;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
