"use client";

import { cn } from "@/lib/utils";

const tabs = [
  { id: "upcoming", label: "Upcoming", count: 3 },
  { id: "completed", label: "Completed", count: 12 },
  { id: "cancelled", label: "Cancelled", count: 2 },
];

interface BookingTabsProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

export const BookingTabs = ({ activeTab, onTabChange }: BookingTabsProps) => {
  return (
    <div className="flex items-center gap-8 border-b border-gray-100 px-2 lg:px-4 mt-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "relative pb-3 flex items-center gap-2 text-sm font-medium transition-all group",
            activeTab === tab.id 
                ? "text-primary" 
                : "text-gray-400 hover:text-gray-600"
          )}
        >
          {tab.label}
          <span className={cn(
            "px-2 py-0.5 rounded-full text-[10px]",
            activeTab === tab.id 
                ? "bg-primary/10 text-primary" 
                : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
          )}>
            {tab.count}
          </span>
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
          )}
        </button>
      ))}
    </div>
  );
};
