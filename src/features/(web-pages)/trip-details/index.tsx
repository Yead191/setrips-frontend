"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { TripHeader } from "./sections/TripHeader";
import { RouteDetails } from "./sections/RouteDetails";
import { FareBreakdown } from "./sections/FareBreakdown";
import { DriverDetails } from "./sections/DriverDetails";
import { PaymentStatus } from "./sections/PaymentStatus";
import { TripActions } from "./sections/TripActions";

const TripDetails = () => {
  return (
    <section className="bg-[#F9FAFB] min-h-screen py-10">
      <div className="container max-w-[1240px] mx-auto px-4 md:px-6">

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-6 text-sm font-medium">
          <Link href="/booking-history" className="text-gray-400 hover:text-primary transition-colors">
            Bookings
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-300" />
          <span className="text-gray-900">Trip Details</span>
        </nav>

        {/* Header Section */}
        <div className="mb-4">
          <TripHeader />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-5 items-start">

          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-5">
            <RouteDetails />
            <FareBreakdown />
          </div>

          {/* Sidebar (Right) */}
          <aside className="space-y-5">
            <DriverDetails />
            <PaymentStatus />
            <TripActions />
          </aside>

        </div>
      </div>
    </section>
  );
};

export default TripDetails;
