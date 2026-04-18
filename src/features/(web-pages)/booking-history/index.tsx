"use client";

import { useState } from "react";
import { BookingFilters } from "./section/BookingFilters";
import { BookingTabs } from "./section/BookingTabs";
import { BookingCard, BookingData } from "./section/BookingCard";

const MOCK_BOOKINGS: BookingData[] = [
  {
    id: "1",
    bookingRef: "RB-2024-15738",
    carName: "Premium Sedan",
    carImage: "/fleet-banner.png",
    status: "Confirmed",
    pickup: {
      label: "Downtown Hotel",
      address: "123 Main Street, New York, NY 10001",
    },
    dropoff: {
      label: "Birmingham",
      address: "Terminal 1, JFK Airport, Queens, NY 11430",
    },
    date: "Mar 15, 2026",
    time: "9:00 AM",
    duration: "2 days",
    totalPaid: "$1080.95",
  },
  {
    id: "2",
    bookingRef: "RB-2024-15821",
    carName: "Luxury SUV",
    carImage: "/landingpage.jpg",
    status: "Pending Driver",
    pickup: {
      label: "City Center Mall",
      address: "456 Shopping Blvd, New York, NY 10002",
    },
    dropoff: {
      label: "Broadway Theater District",
      address: "789 Theater Ave, New York, NY 10036",
    },
    date: "Mar 18, 2024",
    time: "7:30 PM",
    duration: "3 Days",
    totalPaid: "$6500.00",
  },
  {
    id: "3",
    bookingRef: "RB-2024-15903",
    carName: "Standard Sedan",
    carImage: "/car1.png",
    status: "Confirmed",
    pickup: {
      label: "Residential Area",
      address: "321 Oak Street, Brooklyn, NY 11201",
    },
    dropoff: {
      label: "Office Complex",
      address: "555 Business Park, Manhattan, NY 10005",
    },
    date: "Mar 20, 2024",
    time: "8:00 AM",
    duration: "10 Days",
    totalPaid: "$7000.50",
  },
];

const BookingHistory = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <section className="min-h-screen py-12 md:py-10">
      <div className="container  mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-6 space-y-1">
          <h1 className="text-3xl font-medium text-[#111827]">
            Booking History
          </h1>
          <p className="text-[#4B5563] ">
            View and manage all your ride bookings
          </p>
        </div>

        {/* Filters Box */}
        <div className="bg-white p-4 md:p-6 rounded-md border border-gray-100 shadow-sm mb-8">
          <BookingFilters />
        </div>

        {/* Tabs & List */}
        <div className="space-y-8">
          <BookingTabs activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="space-y-6">
            {MOCK_BOOKINGS.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>

          {/* Empty State Mockup (optional) */}
          {MOCK_BOOKINGS.length === 0 && (
            <div className="py-20 text-center bg-white rounded-[24px] border border-dashed border-gray-200">
              <p className="text-gray-400 font-medium">No bookings found for this category.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default BookingHistory;
