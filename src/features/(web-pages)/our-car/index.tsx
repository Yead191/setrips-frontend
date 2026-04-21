"use client";
import { useState } from "react";
import { OurCarSidebar } from "./section/OurCarSidebar";
import { FleetCarCard } from "./section/FleetCarCard";
import { FilterModal } from "./section/FilterModal";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "../../../../ui/button";
import { FLEET_CARS } from "@/constants/our-car-data";
const OurCarFeature = () => {
    const [activeCar, setActiveCar] = useState<string | null>(null);
    return (
        <div className="flex flex-col lg:flex-row h-screen pt-2 pb-10 bg-[#FBFBFB]">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:block w-[360px] h-full overflow-y-auto border-r border-gray-100 px-8 py-8 bg-white shrink-0 scrollbar-hide">
                <OurCarSidebar />
            </aside>
            {/* Main Content Area */}
            <main className="grow flex flex-col h-full overflow-hidden">
                {/* Top Header / Search Area */}
                <header className="bg-white border-b border-gray-100 shrink-0">
                    <div className="px-4 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-1">
                            <h1 className="text-2xl md:text-3xl font-medium text-gray-900">
                                Available Rides
                            </h1>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Extra Filter Button (Modal Trigger) */}
                            <FilterModal
                                trigger={
                                    <Button variant="outline" className="flex items-center gap-3 h-12 px-6 rounded-xl border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all">
                                        <SlidersHorizontal className="w-4 h-4" />
                                        <span className="md:inline hidden">Filters</span>
                                        <span className="md:hidden">Filters</span>
                                    </Button>
                                }
                            />
                        </div>
                    </div>
                </header>
                {/* Car List - Scrollable */}
                <section className="grow overflow-y-auto px-4 py-4 ">
                    <div className=" mx-auto space-y-6">
                        {FLEET_CARS.map((car) => (
                            <div
                                key={car.id}
                                onClick={() => setActiveCar(car.id)}
                                className="cursor-pointer"
                            >
                                <FleetCarCard
                                    car={car}
                                    isActive={activeCar === car.id}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Bottom Padding for mobile */}
                    <div className="h-20 lg:hidden" />
                </section>
            </main>

        </div>
    );
};
export default OurCarFeature;