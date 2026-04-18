const services = [
  { label: "Free Cancellation", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  { label: "Meet & Greet", color: "bg-blue-50 text-blue-700 border-blue-100" },
  { label: "Flight Tracking", color: "bg-purple-50 text-purple-700 border-purple-100" },
  { label: "Professional Driver", color: "bg-orange-50 text-orange-700 border-orange-100" },
];

export const AdditionalServices = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-gray-900 ">
        Additional Services
      </h2>

      <div className="flex flex-wrap gap-3">
        {services.map((service, index) => (
          <span
            key={index}
            className={`px-4 py-2 rounded-full text-xs font-bold border transition-all hover:shadow-sm ${service.color}`}
          >
            {service.label}
          </span>
        ))}
      </div>
    </div>
  );
};
