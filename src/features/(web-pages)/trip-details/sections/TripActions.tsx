import { X, Edit3 } from "lucide-react";
import { Button } from "@/../ui/button";

export const TripActions = () => {
  return (
    <div className="bg-white rounded-[24px] p-4 md:p-5 border border-gray-100 shadow-sm space-y-4">

      <h3 className="text-lg font-medium text-gray-900 leading-none mb-4">Actions</h3>

      <Button variant="destructive" className="w-full h-12 rounded-xl bg-[#EF4444] hover:bg-[#DC2626] text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-red-100 transition-all">
        <X className="w-4 h-4" />
        Cancel Trip
      </Button>

      <Button variant="outline" className="w-full h-12 rounded-xl border-gray-200 bg-[#F9FAFB] hover:bg-gray-100 text-[#374151] font-semibold flex items-center justify-center gap-2 transition-all">
        <Edit3 className="w-4 h-4" />
        Modify Booking
      </Button>
    </div>
  );
};
