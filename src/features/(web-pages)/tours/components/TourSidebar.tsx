"use client"
import React, { useState } from 'react';
import { DetailedTour, TourTicketTier } from '@/types/tour';
import { Minus, Plus, Calendar as CalendarIcon, Info } from 'lucide-react';

interface TourSidebarProps {
  tour: DetailedTour;
}

const TourSidebar = ({ tour }: TourSidebarProps) => {
  const [selectedTier, setSelectedTier] = useState<string>(tour.ticket_tiers[0]?.id || '');
  const [passengers, setPassengers] = useState({
    adult: 1,
    child: 0,
    infant: 0,
    family: 0,
    senior: 0,
    student: 0,
  });

  const activeTierObj = tour.ticket_tiers.find(t => t.id === selectedTier) as TourTicketTier;

  const updatePassenger = (type: keyof typeof passengers, increment: boolean) => {
    setPassengers(prev => ({
      ...prev,
      [type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1)
    }));
  };

  const calculateTotal = () => {
    if (!activeTierObj) return 0;

    let total = 0;
    const { pricing } = activeTierObj;

    if (pricing.adult) total += passengers.adult * pricing.adult.price;
    if (pricing.child) total += passengers.child * pricing.child.price;
    if (pricing.infant) total += passengers.infant * pricing.infant.price;

    // Add logic for family, senior, student if they exist in pricing
    // Not explicitly in initial data but structure supports it

    return total;
  };

  const totalPrice = calculateTotal();

  return (
    <div className="bg-white border text-foreground border-border rounded-lg shadow-sm sticky top-6">
      <div className="p-4 border-b border-border bg-blue-50/50 rounded-t-lg">
        <p className="text-sm font-medium text-center text-primary">Most convenient way to get to Stonehenge</p>
      </div>

      <div className="p-6 pb-0">
        <h2 className="text-2xl font-bold mb-6">Buy Tickets</h2>

        {/* Categories/Tiers */}
        <div className="space-y-3 mb-8">
          <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">Options</p>
          {tour.ticket_tiers.map((tier) => (
            <div
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${selectedTier === tier.id
                ? 'border-primary bg-primary/5 shadow-sm'
                : 'border-border hover:border-primary/50'
                }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-foreground">{tier.name}</h3>
                  <p className="text-sm text-foreground/70 mt-1 leading-relaxed">{tier.description}</p>
                </div>
                {tier.badge && (
                  <span className="text-xs font-bold px-2 py-1 rounded bg-[#FDF0E6] text-[#FF8A00] whitespace-nowrap ml-2">
                    {tier.badge.label}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Passenger Selection */}
        <div className="space-y-6 mb-8">
          {(Object.keys(passengers) as Array<keyof typeof passengers>).map((type) => {
            // Only show ones that exist in the pricing logic for the tour, or show all based on design
            if (!activeTierObj?.pricing[type as keyof typeof activeTierObj.pricing] && type !== 'adult' && type !== 'child' && type !== 'infant') {
              // To match reference image, show them even if not in JSON pricing yet, with placeholder pricing
            }

            const priceInfo = activeTierObj?.pricing[type as keyof typeof activeTierObj.pricing] as any;
            const price = priceInfo?.price || 0;
            const originalPrice = price ? price * 1.2 : 0; // Mock original price for UI

            return (
              <div key={type} className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold capitalize">{type}</span>
                    <Info className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {priceInfo?.label || (type === 'adult' ? '16+' : type === 'child' ? '3-15' : '0-2')}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    {originalPrice > 0 && <span className="text-xs text-muted-foreground line-through">£{originalPrice?.toFixed(2)}</span>}
                    <span className="text-sm font-semibold">£{price.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => updatePassenger(type, false)}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary hover:bg-muted transition-colors disabled:opacity-50"
                    disabled={passengers[type] === 0}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-4 text-center font-bold">{passengers[type]}</span>
                  <button
                    onClick={() => updatePassenger(type, true)}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary hover:bg-muted transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Date & Time Mockup */}
      <div className="p-6 bg-muted/30 border-t border-border">
        <div className="mb-6 relative">
          <div className="absolute -top-3 right-4 bg-[#1E3A8A] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">16% OFF</div>
          <div className="bg-[#2B548E] text-white p-3 rounded-lg text-sm font-medium cursor-pointer hover:bg-[#1E3A8A] transition-colors">
            Coach Tours - 16%
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-2">Select Date</p>
          <div className="grid grid-cols-3 gap-2">
            <div className="border border-border rounded p-2 text-center text-muted-foreground bg-muted/50 cursor-not-allowed">
              <div className="text-xl font-bold">21</div>
              <div className="text-xs">Today</div>
              <div className="text-[10px] uppercase mt-1">Sold Out</div>
            </div>
            <div className="border-2 border-primary bg-primary/5 rounded p-2 text-center cursor-pointer">
              <div className="text-xl font-bold text-primary">22</div>
              <div className="text-xs text-primary">Tomorrow</div>
              <div className="text-[10px] font-medium mt-1">£{(totalPrice || 77.28).toFixed(2)}</div>
            </div>
            <div className="border border-border rounded p-2 text-center flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-colors">
              <CalendarIcon className="w-5 h-5 text-muted-foreground mb-1" />
              <div className="text-xs mt-1 text-muted-foreground">Other Dates</div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-2">Select time</p>
          <div className="border-2 border-primary rounded p-3 flex justify-between items-center cursor-pointer">
            <span className="font-bold">1:00 PM</span>
            <span className="text-sm text-muted-foreground">£{(totalPrice || 77.28).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Booking Bar within Sidebar */}
      <div className="bg-[#2B548E] text-white p-4 rounded-b-lg flex justify-between items-center cursor-pointer hover:bg-[#1E3A8A] transition-colors group">
        <div className="font-bold text-lg">£{(totalPrice || 77.28).toFixed(2)}</div>
        <div className="font-bold flex items-center gap-2">
          Continue
          <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default TourSidebar;
