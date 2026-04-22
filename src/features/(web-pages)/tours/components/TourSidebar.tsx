"use client"
import { useState } from 'react';
import { DetailedTour, TourTicketTier } from '@/types/tour';
import { Minus, Plus, Calendar as CalendarIcon, Info, ChevronLeft, ChevronRight, } from 'lucide-react';
import { format, addMonths, subMonths, isSameDay, isBefore, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, addDays } from 'date-fns';

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

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = addDays(today, 1);

  const [selectedDate, setSelectedDate] = useState<Date | null>(today);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(today));

  // Mock availability check
  const [availability] = useState<Record<string, { available: boolean }>>({
    [format(today, 'yyyy-MM-dd')]: { available: false }
  });

  const checkAvailability = (date: Date) => {
    const key = format(date, 'yyyy-MM-dd');
    if (availability[key]) return availability[key];
    return { available: true };
  };

  const isTodaySoldOut = !checkAvailability(today).available;
  const isTomorrowSoldOut = !checkAvailability(tomorrow).available;

  const handleDateSelect = (date: Date) => {
    if (checkAvailability(date).available) {
      setSelectedDate(date);
    }
  };

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
            {/* Today */}
            <div
              onClick={() => !isTodaySoldOut && handleDateSelect(today)}
              className={`rounded p-2 text-center transition-all ${isTodaySoldOut
                ? 'border border-border text-muted-foreground bg-muted/50 cursor-not-allowed'
                : isSameDay(selectedDate || new Date(0), today)
                  ? 'border-2 border-primary bg-primary/5 cursor-pointer'
                  : 'border border-border cursor-pointer hover:border-primary/50 text-foreground'
                }`}
            >
              <div className={`text-xl font-bold ${!isTodaySoldOut && isSameDay(selectedDate || new Date(0), today) ? 'text-primary' : ''}`}>
                {format(today, 'd')}
              </div>
              <div className={`text-xs ${!isTodaySoldOut && isSameDay(selectedDate || new Date(0), today) ? 'text-primary' : ''}`}>Today</div>
              {isTodaySoldOut ? (
                <div className="text-[10px] uppercase mt-1">Sold Out</div>
              ) : (
                <div className="text-[10px] font-medium mt-1">£{(totalPrice || 0).toFixed(2)}</div>
              )}
            </div>

            {/* Tomorrow */}
            <div
              onClick={() => !isTomorrowSoldOut && handleDateSelect(tomorrow)}
              className={`rounded p-2 text-center transition-all ${isTomorrowSoldOut
                ? 'border border-border text-muted-foreground bg-muted/50 cursor-not-allowed'
                : isSameDay(selectedDate || new Date(0), tomorrow)
                  ? 'border-2 border-primary bg-primary/5 cursor-pointer'
                  : 'border border-border cursor-pointer hover:border-primary/50 text-foreground'
                }`}
            >
              <div className={`text-xl font-bold ${!isTomorrowSoldOut && isSameDay(selectedDate || new Date(0), tomorrow) ? 'text-primary' : ''}`}>
                {format(tomorrow, 'd')}
              </div>
              <div className={`text-xs ${!isTomorrowSoldOut && isSameDay(selectedDate || new Date(0), tomorrow) ? 'text-primary' : ''}`}>Tomorrow</div>
              {isTomorrowSoldOut ? (
                <div className="text-[10px] uppercase mt-1">Sold Out</div>
              ) : (
                <div className="text-[10px] font-medium mt-1">£{(totalPrice || 77.28).toFixed(2)}</div>
              )}
            </div>

            {/* Other Dates View Toggle */}
            <div
              onClick={() => setCalendarOpen(!calendarOpen)}
              className={`border rounded p-2 text-center flex flex-col items-center justify-center cursor-pointer transition-colors ${calendarOpen ? 'border-primary' : 'border-border hover:border-primary/50'
                }`}
            >
              <CalendarIcon className={`w-5 h-5 mb-1 ${calendarOpen ? 'text-primary' : 'text-muted-foreground'}`} />
              <div className={`text-xs mt-1 ${calendarOpen ? 'text-primary' : 'text-muted-foreground'}`}>Other Dates</div>
            </div>
          </div>

          {/* Calendar View */}
          {calendarOpen && (
            <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex justify-between items-center mb-4 px-2">
                <button
                  onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                  disabled={isBefore(currentMonth, startOfMonth(today))}
                  className="p-1 rounded hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed text-foreground"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="font-bold text-foreground">{format(currentMonth, 'MMMM yyyy')}</div>
                <button
                  onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                  className="p-1 rounded hover:bg-muted text-foreground"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map(day => (
                  <div key={day} className="text-[10px] font-medium text-muted-foreground/70 uppercase tracking-wider">{day}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {eachDayOfInterval({
                  start: startOfWeek(startOfMonth(currentMonth)),
                  end: endOfWeek(endOfMonth(currentMonth))
                }).map((day, i) => {
                  const isPast = isBefore(day, today);
                  const isCurMonth = day.getMonth() === currentMonth.getMonth();
                  const isSelected = selectedDate && isSameDay(day, selectedDate);
                  const isSoldOut = !checkAvailability(day).available;
                  const isUnavailable = isPast || isSoldOut;

                  if (!isCurMonth) {
                    return <div key={i} className="p-2"></div>;
                  }

                  return (
                    <div
                      key={i}
                      onClick={() => !isUnavailable && handleDateSelect(day)}
                      className={`relative flex flex-col items-center justify-center p-1 rounded-lg transition-all ${isUnavailable
                        ? 'text-muted-foreground/30 cursor-not-allowed'
                        : isSelected
                          ? 'border-2 border-primary cursor-pointer'
                          : 'cursor-pointer hover:bg-muted'
                        }`}
                    >
                      <span className={`text-sm font-bold ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                        {format(day, 'd')}
                      </span>
                      {!isPast && (
                        <span className={`text-[9px] ${isSelected ? 'text-muted-foreground' : 'text-muted-foreground/70'} mt-0.5 uppercase`}>
                          {isSoldOut ? 'Sold Out' : `£${(totalPrice || 0).toFixed(2)}`}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-2">Select time</p>
          <div className="border-2 border-primary rounded p-3 flex justify-between items-center cursor-pointer">
            <span className="font-bold">1:00 PM</span>
            <span className="text-sm text-muted-foreground">£{(totalPrice || 0).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Booking Bar within Sidebar */}
      <div className="bg-[#2B548E] text-white p-4 rounded-b-lg flex justify-between items-center cursor-pointer hover:bg-[#1E3A8A] transition-colors group">
        <div className="font-bold text-lg">£{(totalPrice || 0).toFixed(2)}</div>
        <div className="font-bold flex items-center gap-2">
          Continue
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};


export default TourSidebar;
