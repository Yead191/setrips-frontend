"use client";

import Image from "next/image";
import { Checkbox } from "../../../../../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../../../../../ui/radio-group";
import { Label } from "../../../../../ui/label";

export function OurCarSidebar() {
  return (
    <div className="w-full h-full flex flex-col gap-6 overflow-y-auto pb-10">
      {/* Map Thumbnail */}
      <div className="relative w-full min-h-[200px] bg-red-300 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Paris,France&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="object-cover"
        ></iframe>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <button className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer shadow-xl border border-white/50 hover:bg-white transition-colors pointer-events-auto">
            Select your Location
          </button>
        </div>
      </div>

      {/* Sort By */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-2">
        <h3 className="text-base font-bold text-gray-900 border-b border-gray-50 pb-1">Sort By</h3>
        <RadioGroup defaultValue="popular" className="gap-4">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <RadioGroupItem value="popular" id="popular" className="border-gray-300 text-primary focus:ring-primary" />
            <Label htmlFor="popular" className="text-sm font-medium text-gray-600 group-hover:text-primary cursor-pointer transition-colors">
              Most Popular
            </Label>
          </div>
          <div className="flex items-center space-x-3 group cursor-pointer">
            <RadioGroupItem value="executive" id="executive" className="border-gray-300 text-primary focus:ring-primary" />
            <Label htmlFor="executive" className="text-sm font-medium text-gray-600 group-hover:text-primary cursor-pointer transition-colors">
              Executive Class
            </Label>
          </div>
          <div className="flex items-center space-x-3 group cursor-pointer">
            <RadioGroupItem value="capacity" id="capacity" className="border-gray-300 text-primary focus:ring-primary" />
            <Label htmlFor="capacity" className="text-sm font-medium text-gray-600 group-hover:text-primary cursor-pointer transition-colors">
              Capacity
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Vehicle Class */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-2">
        <h3 className="text-base font-bold text-gray-900 border-b border-gray-50 pb-1">Vehicle Class</h3>
        <div className="space-y-4">
          {["Business Class", "VIP Class", "Executive Class", "Luxury Class"].map((item) => (
            <div key={item} className="flex items-center space-x-3 group">
              <Checkbox id={item} className="border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
              <Label htmlFor={item} className="text-sm font-medium text-gray-600 group-hover:text-primary cursor-pointer transition-colors">
                {item}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle Type */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-2 ">
        <h3 className="text-base font-bold text-gray-900 border-b border-gray-50 pb-1">Vehicle Type</h3>
        <div className="space-y-4">
          {["Sedan", "SUV", "Premium", "Limousine"].map((item) => (
            <div key={item} className="flex items-center space-x-3 group">
              <Checkbox id={`type-${item}`} className="border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
              <Label htmlFor={`type-${item}`} className="text-sm font-medium text-gray-600 group-hover:text-primary cursor-pointer transition-colors">
                {item}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
