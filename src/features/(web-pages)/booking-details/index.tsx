"use client";

import React from "react";
import { VehicleGallery } from "./components/VehicleGallery";

import { ExtrasSelection } from "./components/ExtrasSelection";
import { VehicleFeatures } from "./components/VehicleFeatures";
import { AdditionalServices } from "./components/AdditionalServices";
import { BookingSummary } from "./components/BookingSummary";


const BookingDetailsFeature = () => {
  return (
    <div className="bg-[#FBFBFB] min-h-screen py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content Area */}
          <div className="flex-1 space-y-8">
            <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Premium Sedan
              </h1>
              <VehicleGallery />
            </section>

            <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
              <VehicleFeatures />
            </section>

            <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
              <AdditionalServices />
            </section>

            <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
              <ExtrasSelection />
            </section>
          </div>

          {/* Sidebar Area */}
          <aside className="w-full lg:w-[450px] shrink-0">
            <div className="sticky top-24 space-y-6">
              <BookingSummary />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsFeature;
