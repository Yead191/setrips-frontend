"use client";

import { useState } from "react";
import { Leaf, Baby, Armchair, Plus, Minus } from "lucide-react";

const initialExtras = [
  {
    id: "co2",
    icon: <Leaf className="w-6 h-6" />,
    name: "CO2 offsetting",
    price: "€2.74",
    count: 0,
  },
  {
    id: "baby",
    icon: <Baby className="w-6 h-6" />,
    name: "Baby car seat",
    description: "€62.97-(0-12 Months)",
    price: "€62.97",
    count: 0,
  },
  {
    id: "booster",
    icon: <Armchair className="w-6 h-6" />,
    name: "Booster seat",
    description: "€62.97-(4+ Years)",
    price: "€62.97",
    count: 0,
  },
];

export const ExtrasSelection = () => {
  const [extras, setExtras] = useState(initialExtras);

  const updateCount = (id: string, delta: number) => {
    setExtras((prev) =>
      prev.map((extra) =>
        extra.id === id
          ? { ...extra, count: Math.max(0, extra.count + delta) }
          : extra
      )
    );
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg md:text-xl font-medium text-gray-900 ">
        Select extra and accessories
      </h2>

      <div className="space-y-4">
        {extras.map((extra) => (
          <div
            key={extra.id}
            className="flex items-center justify-between p-3 rounded-2xl border border-[#C2BCBC] bg-white hover:border-blue-100 hover:shadow-sm transition-all group"
          >
            <div className="flex items-center gap-3 md:gap-6">
              <div className="text-gray-600 bg-gray-50 p-3 md:p-4 rounded-xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                {extra.icon}
              </div>
              <div>
                <h3 className="text-sm md:text-base text-[#171717]">{extra.name}</h3>
                {extra.description ? (
                  <p className="text-xs md:text-sm font-semibold text-[#171717]">{extra.description}</p>
                ) : (
                  <p className="text-xs md:text-sm font-semibold text-[#171717]">{extra.price}</p>
                )}
              </div>
            </div>


            <div className="flex items-center gap-4 bg-gray-50 p-1.5 rounded-xl border border-gray-100">
              <button
                onClick={() => updateCount(extra.id, -1)}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 disabled:opacity-50 transition-colors"
                disabled={extra.count === 0}
              >
                <Minus size={14} />
              </button>
              <span className="w-8 text-center font-semibold text-gray-900">
                {extra.count}
              </span>
              <button
                onClick={() => updateCount(extra.id, 1)}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
