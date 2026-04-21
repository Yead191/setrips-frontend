"use client";

import { useState } from "react";
import Image from "next/image";
import { FAQ_DATA } from "@/constants/faq-data";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTItle";

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Left Side: Image Content */}
          <div className="w-full lg:w-1/3 relative group">
            <div className="relative h-[400px] md:h-[700px] w-full overflow-hidden rounded-2xl shadow-xl transition-transform duration-700">
              <Image
                src="/faq.png"
                alt="Professional Chauffeur Service Support"
                fill
                className="object-cover transition-transform duration-1000"
                priority
              />
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-[#C5A02E]/10 rounded-full blur-2xl" />
          </div>

          {/* Right Side: FAQ Accordion */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div className="flex flex-col gap-3 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-normal text-foreground leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-[#656565] text-base md:text-lg">
                Everything you need to know about our Setrips fleet and chauffeur services.
              </p>
            </div>

            <div className="w-full space-y-3">
              {FAQ_DATA.map((item, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={`faq-item-${index}`}
                    className={cn(
                      "group border rounded-xl transition-all duration-300 overflow-hidden",
                      isOpen
                        ? "border-gray-200 bg-[#f9f9f9]"
                        : "border-gray-100 bg-white hover:border-gray-200"
                    )}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left py-4 px-6 flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className={cn(
                        "text-base md:text-lg transition-colors duration-300",
                        isOpen ? "text-primary font-medium" : "text-[#1a1a1a]"
                      )}>
                        {item.question}
                      </span>
                      <ChevronDown className={cn(
                        "w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 shrink-0",
                        isOpen ? "rotate-180 text-primary" : "text-gray-400"
                      )} />
                    </button>

                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-in-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 text-[#656565] text-sm md:text-base leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


