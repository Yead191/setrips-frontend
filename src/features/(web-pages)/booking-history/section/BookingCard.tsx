"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "@/../ui/button";
import { cn } from "@/lib/utils";

export interface BookingData {
  id: string;
  bookingRef: string;
  carName: string;
  carImage: string;
  status: "Confirmed" | "Pending Driver" | "Completed" | "Cancelled";
  pickup: {
    label: string;
    address: string;
  };
  dropoff: {
    label: string;
    address: string;
  };
  date: string;
  time: string;
  duration: string;
  totalPaid: string;
}

interface BookingCardProps {
  booking: BookingData;
}

export const BookingCard = ({ booking }: BookingCardProps) => {
  const statusColors = {
    Confirmed: "bg-[#EAFDF5] text-[#10B981]",
    "Pending Driver": "bg-[#EEF2FF] text-[#6366F1]",
    Completed: "bg-gray-100 text-gray-600",
    Cancelled: "bg-red-50 text-red-600",
  };

  return (
    <div className="bg-white rounded-[20px] p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex flex-col gap-4 md:gap-6">

        {/* Header Section */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4 font-normal">
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0">
              <Image
                src={booking.carImage}
                alt={booking.carName}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors truncate">
                {booking.carName}
              </h3>
              <p className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-tight truncate">
                {booking.bookingRef}
              </p>
            </div>
          </div>
          <span className={cn(
            "px-2.5 py-1 rounded-full text-[10px] md:text-[11px] font-semibold whitespace-nowrap",
            statusColors[booking.status] || "bg-gray-100"
          )}>
            {booking.status}
          </span>
        </div>

        {/* Itinerary Section */}
        <div className="relative pl-7 md:pl-8 space-y-4 md:space-y-6 border-b border-[#E5E7EB] pb-4">
          {/* Connecting Line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[1.5px] border-l-2 border-dashed border-gray-100" />

          <div className="relative">
            {/* Dot */}
            <div className="absolute -left-7 md:-left-8 top-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center border-2 border-white z-10 shadow-sm">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#10B981]" />
            </div>
            <div className="space-y-0.5 mt-0.5">
              <h4 className="text-xs md:text-sm font-semibold text-gray-900 leading-none">
                {booking.pickup.label}
              </h4>
              <p className="text-[11px] md:text-xs text-gray-500 font-medium line-clamp-1">
                {booking.pickup.address}
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Dot */}
            <div className="absolute -left-7 md:-left-8 top-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center border-2 border-white z-10 shadow-sm">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#EF4444]" />
            </div>
            <div className="space-y-0.5 mt-0.5">
              <h4 className="text-xs md:text-sm font-semibold text-gray-900 leading-none">
                {booking.dropoff.label}
              </h4>
              <p className="text-[11px] md:text-xs text-gray-500 font-medium line-clamp-1">
                {booking.dropoff.address}
              </p>
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 flex-1">
            <MetricItem label="Date" value={booking.date} />
            <MetricItem label="Time" value={booking.time} />
            <MetricItem label="Duration" value={booking.duration} />
            <MetricItem label="Total Paid" value={booking.totalPaid} isPrice />
          </div>

          <Link href={`/booking-history/${booking.id}`} className="w-full md:w-auto">
            <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-medium px-8 h-11 md:h-12 rounded-xl transition-all shadow-lg shadow-primary/10 flex items-center justify-center gap-2 group/btn">
              View Details
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};


const MetricItem = ({ label, value, isPrice = false }: { label: string; value: string; isPrice?: boolean }) => (
  <div className="space-y-1">
    <p className="text-[9px] md:text-[10px] font-normal text-gray-600  tracking-widest leading-none uppercase">
      {label}
    </p>
    <p className={cn(
      "text-xs md:text-sm font-medium tracking-tight",
      isPrice ? "text-gray-900" : "text-gray-800"
    )}>
      {value}
    </p>
  </div>
);

