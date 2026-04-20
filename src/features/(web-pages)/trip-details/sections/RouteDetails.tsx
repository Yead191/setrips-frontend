import { Calendar, Clock, MapPin, Navigation } from "lucide-react";

export const RouteDetails = () => {
  return (
    <div className="bg-white rounded-[24px] p-4 md:p-5 border border-gray-100 shadow-sm space-y-6 md:space-y-8">
      <h3 className="text-lg font-medium text-gray-900 leading-none">Route Details</h3>

      <div className="relative pl-8 md:pl-10 space-y-8 md:space-y-12">
        {/* Itinerary Line */}
        <div className="absolute left-[11px] top-6 bottom-6 w-0.5 border-l-2 border-dashed border-gray-100" />

        {/* Pickup */}
        <div className="relative">
          <div className="absolute -left-8 md:-left-10 top-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center border-2 border-white z-10 shadow-sm">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#10B981]" />
          </div>
          <div className="space-y-2 md:space-y-3">
            <div>
              <h4 className="text-xs md:text-base text-[#111827] font-medium">Pickup Location</h4>
              <p className="text-sm font-semibold text-[#4B5563]">Downtown Hotel</p>
              <p className="text-[11px] md:text-sm text-[#6B7280] max-w-[400px]">123 Main Street, New York, NY 10001</p>
            </div>
            <div className="flex items-center gap-4 md:gap-6 text-[11px] md:text-sm text-[#6B7280]">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Calendar className="w-3 h-3" />
                <span>Mar 15, 2024</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Clock className="w-3 h-3" />
                <span>9:00 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Drop-off */}
        <div className="relative">
          <div className="absolute -left-8 md:-left-10 top-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center border-2 border-white z-10 shadow-sm">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#EF4444]" />
          </div>
          <div className="space-y-2 md:space-y-3">
            <div>
              <h4 className="text-xs md:text-base text-[#111827] font-medium">Drop-off Location</h4>
              <p className="text-sm font-semibold text-[#4B5563]">Birmingham</p>
              <p className="text-[11px] md:text-sm text-[#6B7280] max-w-[400px]">Terminal 1, JFK Airport, Queens, NY 11430</p>
            </div>
            <div className="flex items-center gap-4 md:gap-6 text-[11px] md:text-sm text-[#6B7280]">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Clock className="w-3 h-3 text-[#C5A02E]" />
                <span>45 mins</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Navigation className="w-3 h-3 text-[#0057A7]" />
                <span>28.5 miles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
