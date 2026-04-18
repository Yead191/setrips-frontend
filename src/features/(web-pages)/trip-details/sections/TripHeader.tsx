import Image from "next/image";
import { cn } from "@/lib/utils";

export const TripHeader = () => {
  return (
    <div className="bg-white rounded-[24px] p-4 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-6">
        <div className="relative w-20 h-16 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
          <Image
            src="/fleet-banner.png"
            alt="Car"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-medium text-[#111827]">Premium Sedan</h2>
          <div className="flex flex-col items-start gap-x-4 gap-y-1 mt-1 text-sm text-gray-500 ">
            <span>Booking ID: RB-2024-15738</span>

            <span>Booked on Mar 12, 2026 at 3:45 PM</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1 text-right">
        <span className="px-3 py-1 bg-[#EAFDF5] text-[#10B981] rounded-full text-[11px] font-semibold">
          Confirmed
        </span>
        <div className="space-y-0.5">
          <p className="text-2xl font-semibold text-gray-900 leading-tight">$1080.95</p>
          <p className="text-[10px] font-medium text-gray-400 ">Total Amount</p>
        </div>
      </div>
    </div>
  );
};
