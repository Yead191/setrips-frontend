"use client";

import Image from "next/image";
import { Users, Briefcase } from "lucide-react";
import { Button } from "../../../../../ui/button";
import { cn } from "@/lib/utils";
import { FleetCar } from "@/constants/our-car-data";
import Link from "next/link";

interface FleetCarCardProps {
  car: FleetCar;
  isActive?: boolean;
}

export function FleetCarCard({ car, isActive = false }: FleetCarCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border transition-all duration-300 flex flex-col md:flex-row overflow-hidden p-5 md:p-6  gap-6",
        isActive
          ? "border-primary ring-1 ring-primary shadow-lg shadow-primary/5"
          : "border-gray-100 hover:border-gray-200 hover:shadow-md"
      )}
    >
      {/* Car Image - Left */}
      <div className="relative w-full md:w-[320px] h-39.5  overflow-hidden bg-gray-50 shrink-0">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Content Area - Middle/Right */}
      <div className="grow  flex flex-col md:flex-row gap-6">
        {/* Info - Middle */}
        <div className="grow space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">{car.name}</h3>
              <div className="flex items-center gap-6 text-xs md:text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <Users className="md:w-4 md:h-4 w-3 h-3 text-[#4B5563]" />
                  <span>{car.passengers} Passengers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="md:w-4 md:h-4 w-3 h-3 text-[#4B5563]" />
                  <span>{car.luggage} Luggage</span>
                </div>
              </div>
            </div>

            {car.tag && (
              <span className="md:hidden bg-[#F97316] text-white text-[10px] uppercase font-bold px-3 py-2 rounded-full tracking-wider shadow-sm whitespace-nowrap">
                {car.tag}
              </span>
            )}
          </div>


          <div className="space-y-1">
            <div className="flex items-baseline gap-3">
              <span className="md:text-3xl text-[22px] font-semibold text-gray-900">${car.price}</span>
              {car.discount && (
                <span className="text-sm font-semibold text-gray-600 line-through ">
                  $789
                </span>
              )}
              {car.discount && (
                <span className="text-sm font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-md">
                  {car.discount}
                </span>
              )}
            </div>
            <p className="md:text-xs text-[10px] text-[#6B7280] font-medium tracking-wide uppercase">
              Estimated total fare
            </p>
          </div>
        </div>

        {/* Actions - Right */}
        <div className="flex flex-col items-center md:items-end justify-between min-w-40 gap-4">
          {car.tag && (
            <span className="hidden md:block bg-[#F97316] text-white text-[10px] uppercase font-bold px-3 py-2 rounded-full tracking-wider shadow-sm">
              {car.tag}
            </span>
          )}

          {!car.tag && <div className="h-6" />} {/* Spacer */}

          <div className="w-full space-y-3">
            <Link href={`/booking-details/${car.id}`} className=" cursor-pointer">
              <Button className="w-full bg-primary text-white h-12  rounded-xl font-normal shadow-md shadow-blue-200/50 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                View Details
              </Button>
            </Link >
            {car.freeCancellation && (
              <p className="text-xs text-gray-400 text-center md:text-right font-medium">
                Free cancellation
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
