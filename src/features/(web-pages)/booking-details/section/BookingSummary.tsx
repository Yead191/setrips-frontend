"use client";
import { Button } from "../../../../../ui/button";
import { Calendar, Users, ShieldCheck, Lock, CreditCard } from "lucide-react";

export const BookingSummary = () => {
  return (
    <div className="space-y-4">
      {/* Trip Summary Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Trip Summary</h2>

        {/* Map Thumbnail */}
        <div className="relative w-full h-[180px] rounded-2xl overflow-hidden border border-gray-100 group cursor-pointer">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Paris,France&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          ></iframe>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-xl border border-white hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap">
              Select your Location
            </button>
          </div>
        </div>

        {/* Itinerary */}
        <div className="space-y-4 relative">
          <div className="absolute left-[11px] top-6 bottom-6 w-0.5 bg-gray-100" />

          <div className="flex gap-4 relative">
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center border-2 border-white z-10">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div>
              <p className="text-xs  text-[#171717] font-medium uppercase tracking-wider">Pickup</p>
              <p className="text-sm font-medium text-[#4B5563] ">Downtown Hotel</p>
              <p className="text-xs text-gray-500">123 Main Street, City Center</p>
            </div>
          </div>

          <div className="flex gap-4 relative">
            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center border-2 border-white z-10">
              <div className="w-2 h-2 rounded-full bg-red-500" />
            </div>
            <div>
              <p className="text-xs  text-[#171717] font-medium uppercase tracking-wider">Drop-off</p>
              <p className="text-sm  text-[#4B5563] font-medium">International Airport</p>
              <p className="text-xs text-gray-500">Terminal 1, Departure Hall</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-50">
          <div className="flex items-center gap-3">
            <Calendar className="text-primary" size={18} />
            <div>
              <p className="text-[10px] font-medium text-[#171717] uppercase">Date & Time</p>
              <p className="text-xs font-medium text-[#4B5563]">March 15, 2024 • 9:00 AM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="text-primary" size={18} />
            <div>
              <p className="text-[10px] font-medium text-[#171717] uppercase">Passengers</p>
              <p className="text-xs font-medium text-[#4B5563]">2 Passengers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fare Breakdown Card */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 space-y-3">
        <h2 className="text-xl font-medium text-gray-900">Fare Breakdown</h2>

        <div className="space-y-3">
          <FareItem label="Base fare" value="$1000.00" />
          <FareItem label="Distance fare (15.2 mi)" value="$205.80" />
          <FareItem label="Time fare (35 min)" value="$8.75" />
          <FareItem label="Service charge" value="$5.50" />
          <FareItem label="Taxes & fees" value="$6.95" />
        </div>

        <div className="pt-4 border-t border-[#E5E7EB] space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm  text-emerald-600">First ride discount</p>
            <p className="text-sm font-medium  text-emerald-600 tracking-tight">-$10.00</p>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-lg font-bold text-gray-900">Total Payable</p>
              <p className="text-xs text-gray-400">Original price <span className="line-through">$1089.00</span></p>
            </div>
            <p className="text-2xl font-semibold text-gray-900 tracking-tight">$1080.95</p>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <div className="space-y-2">
            <SecurityBadge icon={<ShieldCheck size={14} />} text="Secure payment processing" />
            <SecurityBadge icon={<Lock size={14} />} text="Your payment information is encrypted" />
            <SecurityBadge icon={<CreditCard size={14} />} text="Powered by Stripe" />
          </div>

          <Button className="w-full h-14 rounded-2xl bg-blue-700 hover:bg-blue-800 text-base font-bold transition-all shadow-lg shadow-blue-100">
            Continue to Payment
          </Button>

          <div className="flex justify-center gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Visa_Inc._logo_%282005%E2%80%932014%29.svg/960px-Visa_Inc._logo_%282005%E2%80%932014%29.svg.png?_=20170118154621" alt="Visa" className="h-4 mt-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-6" />
          </div>

          <p className="text-[10px] text-center text-gray-400 font-medium">Free cancellation up to 24 hours before pickup</p>
        </div>
      </div>
    </div>
  );
};

const FareItem = ({ label, value, isDiscount = false }: { label: string; value: string; isDiscount?: boolean }) => (
  <div className="flex justify-between items-center">
    <span className={`text-sm ${isDiscount ? "text-emerald-600 font-medium" : "text-[#374151] "}`}>{label}</span>
    <span className={`text-sm font-medium ${isDiscount ? "text-emerald-600" : "text-gray-900"}`}>{value}</span>
  </div>
);

const SecurityBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
    <span className="text-emerald-500">{icon}</span>
    {text}
  </div>
);
