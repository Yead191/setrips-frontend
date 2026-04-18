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
      <h2 className="text-xl font-medium text-gray-900 ">
        Vehicle Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
        {/* Capacity & Comfort */}
        <div className="space-y-4 px-6" >
          <h3 className="text-sm font-medium text-[#171717] uppercase tracking-wider">
            Capacity & Comfort
          </h3>
          <div className="flex flex-col gap-3 ms-3">
            <FeatureItem icon={<Users size={20} />} label="4 Passengers" />
            <FeatureItem icon={<Briefcase size={20} />} label="3 Large Suitcases" />
            <FeatureItem icon={<Wind size={20} />} label="Air Conditioning" />
            <FeatureItem icon={<Armchair size={20} />} label="Leather Seats" />
          </div>
        </div>

        {/* Technology & Safety */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-[#171717] uppercase tracking-wider">
            Technology & Safety
          </h3>
          <div className="flex flex-col gap-3 ms-3">
            <FeatureItem icon={<Wifi size={20} />} label="Free Wi-Fi" />
            <FeatureItem icon={<Smartphone size={20} />} label="Phone Charger" />
            <FeatureItem icon={<ShieldCheck size={20} />} label="Safety Features" />
            <FeatureItem icon={<Volume2 size={20} />} label="Premium Sound" />
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
