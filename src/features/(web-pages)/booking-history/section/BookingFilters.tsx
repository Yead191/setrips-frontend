"use client";

import { Search, Calendar, ChevronDown } from "lucide-react";
import { Input } from "@/../ui/input";
import { Button } from "@/../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";
import { cn } from "@/lib/utils";

export const BookingFilters = () => {
  const [range, setRange] = useState("All Time");

  const options = [
    "Today",
    "This Week",
    "This Month",
    "Last 6 Months",
    "All Time",
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">
      {/* Search */}
      <div className="relative w-full md:flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          placeholder="Search bookings..."
          className="pl-10 h-12 bg-white border-gray-200 rounded-xl shadow-sm text-sm"
        />
      </div>

      {/* Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-full md:w-[300px] h-12 px-4 bg-white border-gray-200 rounded-xl flex items-center justify-between gap-2 text-sm text-gray-600 hover:bg-gray-50 shadow-sm transition-all"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C5A02E]" />
              <span className="font-medium">{range}</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) md:w-56 bg-white border border-gray-200">
          {options.map((item) => (
            <DropdownMenuItem
              key={item}
              onClick={() => setRange(item)}
              className={cn(
                "cursor-pointer text-sm px-4 py-2.5",
                range === item ? "bg-primary/5 text-primary font-medium" : ""
              )}
            >
              {item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

  );
};