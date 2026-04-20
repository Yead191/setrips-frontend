import {
  Users,
  Briefcase,
  Wind,
  Smartphone,
  Wifi,
  ShieldCheck,
  Volume2,
  Armchair
} from "lucide-react";

export const VehicleFeatures = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-lg md:text-xl font-medium text-gray-900 ">
        Vehicle Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-10">
        {/* Capacity & Comfort */}
        <div className="space-y-4 px-0 md:px-6" >
          <h3 className="text-xs md:text-sm font-medium text-[#171717] uppercase tracking-wider">
            Capacity & Comfort
          </h3>
          <div className="flex flex-col gap-3 ms-0 md:ms-3">
            <FeatureItem icon={<Users className="w-[18px] h-[18px] md:w-5 md:h-5" />} label="4 Passengers" />
            <FeatureItem icon={<Briefcase className="w-[18px] h-[18px] md:w-5 md:h-5" />} label="3 Large Suitcases" />
            <FeatureItem icon={<Wind className="w-[18px] h-[18px] md:w-5 md:h-5" />} label="Air Conditioning" />
            <FeatureItem icon={<Armchair className="w-[18px] h-[18px] md:w-5 md:h-5" />} label="Leather Seats" />
          </div>
        </div>

        {/* Technology & Safety */}
        <div className="space-y-4">
          <h3 className="text-xs md:text-sm font-medium text-[#171717] uppercase tracking-wider">
            Technology & Safety
          </h3>
          <div className="flex flex-col gap-3 ms-0 md:ms-3">
            <FeatureItem icon={<Wifi className="w-[18px] h-[18px] md:w-5 md:h-5" />} label="Free Wi-Fi" />
            <FeatureItem icon={<Smartphone className="w-[18px] h-[18px] md:w-5 md:h-5" />} label="Phone Charger" />
            <FeatureItem icon={<ShieldCheck className="w-[18px] h-[18px] md:w-5 md:h-5" />} label="Safety Features" />
            <FeatureItem icon={<Volume2 className="w-[18px] h-[18px] md:w-5 md:h-5" />} label="Premium Sound" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2">
    <div className="text-primary ">
      {icon}
    </div>
    <span className="text-sm  text-gray-700">{label}</span>
  </div>
);

