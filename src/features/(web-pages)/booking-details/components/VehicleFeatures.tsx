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
    <div className="space-y-10">
      <h2 className="text-xl font-bold text-gray-900 border-b border-gray-50 pb-4">
        Vehicle Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Capacity & Comfort */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">
            Capacity & Comfort
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureItem icon={<Users size={20} />} label="4 Passengers" />
            <FeatureItem icon={<Briefcase size={20} />} label="3 Large Suitcases" />
            <FeatureItem icon={<Wind size={20} />} label="Air Conditioning" />
            <FeatureItem icon={<Armchair size={20} />} label="Leather Seats" />
          </div>
        </div>

        {/* Technology & Safety */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">
            Technology & Safety
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
  <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
    <div className="text-blue-600 bg-blue-50 p-2 rounded-lg">
      {icon}
    </div>
    <span className="text-sm font-medium text-gray-700">{label}</span>
  </div>
);
