"use client";

import React from "react";
import Link from "next/link";
import SectionTitle from "@/shared/SectionTItle";

interface Route {
    id: string;
    from: string;
    to: string;
    duration: string;
    href: string;
}

const ROUTES_DATA: Route[] = [
    { id: "london-oxford", from: "London", to: "Oxford", duration: "1h 30m 59 mi", href: "/routes/london-oxford" },
    { id: "newyork-chicago", from: "New York", to: "Chicago", duration: "3h 30m 50 mi", href: "/routes/newyork-chicago" },
    { id: "paris-remis", from: "Paris", to: "Remis", duration: "1h 30m 59 mi", href: "/routes/paris-remis" },
    { id: "dubai-abudhabi", from: "Dubai", to: "Abu Dhabi", duration: "1h 30m 59 mi", href: "/routes/dubai-abudhabi" },
    { id: "newyork-chicago-2", from: "New York", to: "Chicago", duration: "3h 30m 50 mi", href: "/routes/newyork-chicago" },
    { id: "paris-remis-2", from: "Paris", to: "Remis", duration: "1h 30m 59 mi", href: "/routes/paris-remis" },
    { id: "london-oxford-2", from: "London", to: "Oxford", duration: "1h 30m 59 mi", href: "/routes/london-oxford" },
    { id: "dubai-abudhabi-2", from: "Dubai", to: "Abu Dhabi", duration: "1h 30m 59 mi", href: "/routes/dubai-abudhabi" },
];

const TopRoutes: React.FC = () => {
    return (
        <section className="bg-[#f8f8f8] py-12 lg:py-16 mt-12" aria-labelledby="top-routes-heading">
            <div className="container px-4 lg:px-20 2xl:px-16">
                <SectionTitle title="Setrips Top Routes" align="left" className="mb-10" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                    {ROUTES_DATA.map((route) => (
                        <Link
                            key={route.id}
                            // href={route.href}
                            href="#"
                            className="flex flex-col items-center justify-center gap-1 py-5 px-6 bg-white border-[1.5px] border-[#e0e0e0] rounded-xl no-underline transition-all duration-250 ease-in-out cursor-pointer hover:border-[#0057A7] hover:shadow-[0_2px_12px_rgba(0,87,167,0.10)]"
                        >
                            <span className="flex items-center gap-2.5 text-[15px] font-medium text-[#1a1a1a] tracking-[0.2px]">
                                <span>{route.from}</span>
                                <span className="text-base text-[#888]" aria-hidden="true">→</span>
                                <span>{route.to}</span>
                            </span>
                            <span className="text-[13px] text-[#999] font-normal tracking-[0.1px]">{route.duration}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopRoutes;
