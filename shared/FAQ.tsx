"use client";

import { useState } from "react";
import Image from "next/image";
import { FAQ_DATA } from "@/constants/faq-data";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/3 relative h-[400px] md:h-[700px] overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/faq.png"
              alt="Professional Chauffeur greeting client"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl md:text-5xl font-normal text-foreground leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to know about our Setrips fleet and chauffeur services.
              </p>
            </div>

            <div className="w-full space-y-3">
              {FAQ_DATA.map((item, index) => {
                const isOpen = activeIndex === index;
                
                return (
                  <div
                    key={`faq-${index}`}
                    className="border rounded-xl bg-[#fcfcfc] border-gray-100 hover:border-gray-200 transition-all overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left font-normal py-4 px-6 flex items-center justify-between hover:text-primary transition-colors focus:outline-none"
                    >
                      <span className="text-lg">{item.question}</span>
                      <ChevronDown 
                        className={cn(
                          "w-5 h-5 transition-transform duration-300 text-muted-foreground",
                          isOpen && "rotate-180 text-primary"
                        )} 
                      />
                    </button>
                    
                    <div 
                      className={cn(
                        "grid transition-all duration-300 ease-in-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 text-muted-foreground text-base leading-relaxed">
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
