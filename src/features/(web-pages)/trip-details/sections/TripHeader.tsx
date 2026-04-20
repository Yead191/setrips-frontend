import Image from "next/image";
import { cn } from "@/lib/utils";

export const TripHeader = () => {
  return (
    <div className="bg-white rounded-[24px] p-4 border border-gray-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
      <div className="flex items-center gap-4 md:gap-6">
        <div className="relative w-16 h-12 md:w-20 md:h-16 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0">
          <Image
            src="/fleet-banner.png"
            alt="Car"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg md:text-2xl font-medium text-[#111827]">Premium Sedan</h2>
          <div className="flex flex-col items-start gap-y-1 mt-1 text-xs md:text-sm text-gray-500 ">
            <span>Booking ID: RB-2024-15738</span>
            <span>Booked on Mar 12, 2026</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-end w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-gray-50 gap-2">
        <span className="px-3 py-1 bg-[#EAFDF5] text-[#10B981] rounded-full text-[10px] font-semibold">
          Confirmed
        </span>
        <div className="flex flex-col items-end md:items-end space-y-0.5">
          <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">$1080.95</p>
          <p className="text-[10px] font-medium text-gray-400 ">Total Amount</p>
        </div>
      </div>
    </div>

  );
};
