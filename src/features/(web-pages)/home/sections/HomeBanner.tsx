"use client";
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { format } from "date-fns";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from '@/components/ui/button';

const MOCK_LOCATIONS = [
    "London Heathrow Airport (LHR)",
    "London Gatwick Airport (LGW)",
    "King's Cross Station, London",
    "Paddington Station, London",
    "Manchester Airport (MAN)",
    "Edinburgh Airport (EDI)",
    "Birmingham Airport (BHX)",
];

const TIME_OPTIONS = [
    "09:00 AM", "09:15 AM", "09:30 AM", "09:45 AM",
    "10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM",
    "11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM",
    "12:00 PM", "12:15 PM", "12:30 PM"
];

const DURATION_OPTIONS = [
    "2 hours (80 km included)",
    "3 hours (120 km included)",
    "4 hours (160 km included)",
    "5 hours (200 km included)",
    "6 hours (240 km included)",
    "7 hours (280 km included)",
];

type ActiveField = 'pickup' | 'dropoff' | 'date' | 'flight' | 'time' | 'duration' | null;

export default function HomeBanner() {
    const [activeTab, setActiveTab] = useState<'one-way' | 'by-the-hour'>('one-way');
    const [activeDropdown, setActiveDropdown] = useState<ActiveField>(null);
    const [isFocused, setIsFocused] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            // If the clicked element is no longer in the document (e.g., a suggestion that was just removed), ignore it.
            if (!document.contains(target)) {
                return;
            }

            if (formRef.current && !formRef.current.contains(target)) {
                setActiveDropdown(null);
                setIsFocused(false);
            } else if (formRef.current && formRef.current.contains(target)) {
                // If clicking inside the form but not on an input that triggers a dropdown, close the dropdown.
                const isInput = (target as HTMLElement).tagName === 'INPUT' || (target as HTMLElement).closest('.cursor-pointer') || (target as HTMLElement).closest('.rdp');
                if (!isInput) {
                    setActiveDropdown(null);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");
    const [date, setDate] = useState<Date | undefined>();
    const [flightNumber, setFlightNumber] = useState("");
    const [time, setTime] = useState("");
    const [duration, setDuration] = useState(DURATION_OPTIONS[0]);

    const handleFocus = (field: ActiveField) => {
        setIsFocused(true);
        setActiveDropdown(field);
    };

    // Get dynamic text for the currently active field or the last interacted one
    const getDynamicContent = () => {
        switch (activeDropdown) {
            case 'dropoff':
                return { title: "Choose your drop-off.", subtitle: "Arrive calm and assured." };
            case 'date':
                return { title: "Select a date.", subtitle: "Plan your journey ahead." };
            case 'flight':
                return { title: "Add flight number.", subtitle: "We'll track your flight." };
            case 'time':
                return { title: "Select pickup time.", subtitle: "Punctuality is our promise." };
            case 'duration':
                return { title: "Select duration.", subtitle: "Keep your chauffeur as long as you need." };
            case 'pickup':
            default:
                return { title: "Set your pickup in over 64 countries.", subtitle: "We'll be there on time." };
        }
    };

    const dynamicContent = getDynamicContent();

    return (
        <div id="banner" className='relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden'
            style={{
                backgroundImage: "url('/assets/bg/home/home-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dimming overlay when focused */}
            <div
                className={cn(
                    "absolute inset-0 bg-black transition-opacity duration-700 ease-in-out pointer-events-none z-10",
                    isFocused ? "opacity-60" : "opacity-0"
                )}
            />

            {/* Large text that fades out when focused */}
            <h1
                className={cn(
                    "relative z-10 text-[#aecff3] font-fragments text-5xl md:text-6xl text-center transition-all duration-700 ease-in-out -mb-70",
                    isFocused ? "opacity-0 -translate-y-10 scale-95 pointer-events-none absolute" : "opacity-100 translate-y-0 scale-100"
                )}
            // data-aos="fade-up"
            >
                Your chauffeur awaits.
            </h1>

            {/* Form Container */}
            <div
                ref={formRef}
                className={cn(
                    "absolute z-20 w-full max-w-275 px-4 transition-all duration-700 ease-in-out",
                    isFocused ? "top-[60%] -translate-y-[50%] scale-[1.02]" : "top-auto bottom-[05%] scale-100"
                )}
            >
                {/* Tabs */}
                <div className={cn(
                    "flex justify-center mb-4 transition-all duration-500",
                    isFocused ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
                )}>
                    <div className="flex bg-black/40 backdrop-blur-md rounded-full p-1 border border-white/20">
                        <button
                            onClick={() => setActiveTab('one-way')}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-colors",
                                activeTab === 'one-way' ? "bg-primary text-white" : "text-white hover:text-white/80"
                            )}
                        >
                            One way
                        </button>
                        <button
                            onClick={() => setActiveTab('by-the-hour')}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-colors",
                                activeTab === 'by-the-hour' ? "bg-primary text-white" : "text-white hover:text-white/80"
                            )}
                        >
                            By the hour
                        </button>
                    </div>
                </div>

                {/* Form Body - The Glassy Container */}
                <div className={cn(
                    "bg-[#14151a]/40 backdrop-blur-2xl border border-white/20 rounded-2xl transition-all duration-700 ease-in-out overflow-visible flex flex-col",
                    isFocused ? "shadow-2xl bg-[#14151a]/70 min-h-100 p-6 md:p-8" : "shadow-lg hover:bg-[#14151a]/50 p-4 md:p-6 min-h-auto"
                )}>
                    {/* The Inputs Row */}
                    <div className="flex flex-col xl:flex-row gap-4 xl:gap-3 items-end w-full relative z-30">

                        {/* Pickup Location */}
                        <div className="relative flex-1 min-w-50 w-full">
                            <label className="block text-white/90 text-[12px] font-semibold mb-1 px-1">Pickup location</label>
                            <input
                                type="text"
                                placeholder="Address, airport, hotel, ..."
                                value={pickup}
                                onChange={(e) => setPickup(e.target.value)}
                                onFocus={() => handleFocus('pickup')}
                                className="w-full bg-transparent text-white border-b border-white/30 focus:border-primary pb-2 px-1 outline-none text-[15px] placeholder:text-white/50 transition-colors"
                            />
                            {activeDropdown === 'pickup' && (
                                <div className="absolute top-full left-0 w-full xl:w-87.5 mt-2 bg-[#1a1c23]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                                    <ul className="max-h-75 overflow-y-auto custom-scrollbar p-2">
                                        {MOCK_LOCATIONS.filter(l => l.toLowerCase().includes(pickup.toLowerCase())).map((loc, i) => (
                                            <li key={i}
                                                className="px-4 py-3 text-white text-sm hover:bg-white/10 rounded-lg cursor-pointer transition-colors"
                                                onMouseDown={() => { setPickup(loc); setActiveDropdown(null); }}
                                            >
                                                {loc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Drop-off OR Duration */}
                        {activeTab === 'one-way' ? (
                            <div className="relative flex-1 min-w-50 w-full">
                                <label className="block text-white/90 text-[12px] font-semibold mb-1 px-1">Drop-off location</label>
                                <input
                                    type="text"
                                    placeholder="Address, airport, hotel, ..."
                                    value={dropoff}
                                    onChange={(e) => setDropoff(e.target.value)}
                                    onFocus={() => handleFocus('dropoff')}
                                    className="w-full bg-transparent text-white border-b border-white/30 focus:border-primary pb-2 px-1 outline-none text-[15px] placeholder:text-white/50 transition-colors"
                                />
                                {activeDropdown === 'dropoff' && (
                                    <div className="absolute top-full left-0 w-full xl:w-87.5 mt-2 bg-[#1a1c23]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                                        <ul className="max-h-75 overflow-y-auto custom-scrollbar p-2">
                                            {MOCK_LOCATIONS.filter(l => l.toLowerCase().includes(dropoff.toLowerCase())).map((loc, i) => (
                                                <li key={i}
                                                    className="px-4 py-3 text-white text-sm hover:bg-white/10 rounded-lg cursor-pointer transition-colors"
                                                    onMouseDown={() => { setDropoff(loc); setActiveDropdown(null); }}
                                                >
                                                    {loc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="relative flex-1 min-w-50 w-full">
                                <label className="block text-white/90 text-[12px] font-semibold mb-1 px-1">Duration</label>
                                <div
                                    className="w-full flex items-center justify-between border-b border-white/30 hover:border-white pb-2 px-1 cursor-pointer transition-colors"
                                    onClick={() => handleFocus('duration')}
                                >
                                    <span className="text-white text-[15px]">{duration || "Select duration"}</span>
                                    {activeDropdown === 'duration' ? <ChevronUp className="text-white w-4 h-4" /> : <ChevronDown className="text-white w-4 h-4" />}
                                </div>
                                {activeDropdown === 'duration' && (
                                    <div className="absolute top-full left-0 w-full xl:w-75 mt-2 bg-[#1a1c23]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                                        <ul className="max-h-62.5 overflow-y-auto custom-scrollbar p-2">
                                            {DURATION_OPTIONS.map((dur, i) => (
                                                <li key={i}
                                                    className="px-4 py-3 text-white text-sm hover:bg-white/10 rounded-lg cursor-pointer transition-colors"
                                                    onMouseDown={() => { setDuration(dur); setActiveDropdown(null); }}
                                                >
                                                    {dur}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Date */}
                        <div className="relative w-full xl:w-52.5 border-l-0 xl:border-l border-white/20 xl:pl-4">
                            <label className="block text-white/90 text-[12px] font-semibold mb-1 px-1">Date</label>
                            <div
                                className="w-full flex items-center justify-between border-b border-white/30 hover:border-white pb-2 px-1 cursor-pointer transition-colors"
                                onClick={() => handleFocus('date')}
                            >
                                <span className={cn("text-[15px]", date ? "text-white" : "text-white/50")}>
                                    {date ? format(date, "MMM dd, yyyy") : "Select a date"}
                                </span>
                                <ChevronDown className="text-white w-4 h-4" />
                            </div>
                            {activeDropdown === 'date' && (
                                <div className="absolute top-full left-0 mt-2 bg-[#1a1c23]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50 p-3">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={(d) => { setDate(d); setActiveDropdown(null); }}
                                        className="bg-transparent! text-white border-0"
                                        classNames={{
                                            today: "!bg-transparent !border !border-primary !text-white",
                                            day: "text-white hover:bg-white/20 rounded-md p-2 w-9 h-9 flex items-center justify-center cursor-pointer transition-colors",
                                            day_selected: "!bg-primary text-white font-bold",
                                            day_outside: "text-white/30",
                                            head_cell: "text-white/60 font-medium pb-2",
                                            caption_label: "text-white font-semibold text-[15px]",
                                            nav_button: "text-white hover:bg-white/20 rounded-md",
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Flight Number */}
                        {/* <div className="relative w-full xl:w-32.5 border-l-0 xl:border-l border-white/20 xl:pl-4">
                            <label className="block text-white/90 text-[12px] font-semibold mb-1 px-1">Flight number</label>
                            <input
                                type="text"
                                placeholder="e.g. LH202"
                                value={flightNumber}
                                onChange={(e) => setFlightNumber(e.target.value)}
                                onFocus={() => handleFocus('flight')}
                                className="w-full bg-transparent text-white border-b border-white/30 focus:border-primary pb-2 px-1 outline-none text-[15px] placeholder:text-white/50 transition-colors"
                            />
                        </div> */}

                        {/* Time & Submit Container */}
                        <div className="flex flex-col xl:flex-row gap-4 xl:gap-4 items-end w-full xl:w-auto border-l-0 xl:border-l border-white/20 xl:pl-4">
                            <div className="relative w-full xl:w-27.5">
                                <label className="block text-white/90 text-[12px] font-semibold mb-1 px-1">Pickup time</label>
                                <div
                                    className="w-full flex items-center justify-between border-b border-white/30 hover:border-white pb-2 px-1 cursor-pointer transition-colors"
                                    onClick={() => handleFocus('time')}
                                >
                                    <span className="text-white text-[15px] whitespace-nowrap">{time || "12:30 PM"}</span>
                                    {activeDropdown === 'time' ? <ChevronUp className="text-white w-4 h-4 ml-1" /> : <ChevronDown className="text-white w-4 h-4 ml-1" />}
                                </div>
                                {activeDropdown === 'time' && (
                                    <div className="absolute top-full right-0 xl:left-0 w-full xl:w-37.5 mt-2 bg-[#1a1c23]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                                        <ul className="max-h-62.5 overflow-y-auto custom-scrollbar p-2">
                                            {TIME_OPTIONS.map((t, i) => (
                                                <li key={i}
                                                    className="px-4 py-3 text-white text-sm hover:bg-white/10 rounded-lg cursor-pointer transition-colors"
                                                    onMouseDown={() => { setTime(t); setActiveDropdown(null); }}
                                                >
                                                    {t}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <Button className="w-full xl:w-auto rounded-full px-6 py-6 font-semibold text-[15px] shadow-lg hover:scale-105 transition-transform text-white!" >
                                View options
                            </Button>
                        </div>

                    </div>

                    {/* Dynamic Inner Content (Visible only when focused) */}
                    <div className={cn(
                        "flex flex-col items-center justify-center transition-all duration-700 ease-in-out w-full z-10",
                        isFocused ? "opacity-100 grow mt-12" : "opacity-0 h-0 overflow-hidden mt-0"
                    )}>
                        <div className="flex justify-center mb-6">
                            {/* Custom Map Icon shape similar to screenshot */}
                            <div className="relative flex items-center justify-center">
                                <div className="w-6 h-6 bg-white rounded-full absolute z-10 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                </div>
                                <div className="w-0 h-0 border-t-14 border-t-transparent border-b-20 border-b-primary border-l-14 border-l-transparent border-r-14 border-r-transparent absolute top-3"></div>
                                <div className="w-48px h-30px bg-primary rounded-t-24px rounded-b-md mt-6 shadow-lg"></div>
                            </div>
                        </div>
                        <h2 className="text-white text-3xl md:text-4xl font-serif text-center leading-tight">
                            {dynamicContent.title}<br />
                            {dynamicContent.subtitle}
                        </h2>
                    </div>

                </div>

            </div>

            {/* Styles for custom scrollbar */}
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.4);
                }
            `}</style>
        </div>
    )
}
