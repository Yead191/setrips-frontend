import Image from "next/image";

export const DriverDetails = () => {
  return (
    <div className="bg-white rounded-[24px] p-4 md:p-5 border border-gray-100 shadow-sm space-y-6">

      <h3 className="text-lg font-medium text-gray-900 leading-none">Driver Details</h3>

      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
          <Image
            src="/user.jpg"
            alt="Michael Johnson"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-base font-medium text-gray-900">Michael Johnson</h4>
          <p className="text-xs text-gray-500 font-medium">Driver since 2019</p>
        </div>
      </div>

      <div className="space-y-2 pt-0">
        <InfoRow label="Vehicle" value="Toyota Camry 2023" />
        <InfoRow label="License Plate" value="NYC-4567" />
        <InfoRow label="Phone" value="+1 (555) 123-4567" isLink />
      </div>
    </div>
  );
};

const InfoRow = ({ label, value, isLink = false }: { label: string; value: string; isLink?: boolean }) => (
  <div className="flex justify-between items-center text-sm">
    <span className="text-[#4B5563] font-normal">{label}</span>
    <span className={isLink ? "text-primary font-semibold hover:underline cursor-pointer" : "text-gray-900 font-semibold"}>
      {value}
    </span>
  </div>
);
