import React from "react";
import { ADVANTAGES_DATA } from "@/constants/home/why-choose-us";
import SectionTitle, { Alignment } from "@/shared/SectionTItle";

const WhyChooseUs = ({ title, align }: { title?: string, align?: Alignment }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto ">
        <div className="text-center mb-16 space-y-2">
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
            ADVANTAGES
          </p>
          <SectionTitle title={title || "Our Services"} align={align || "center"} className="" />
          <p className="text-gray-500 text-[15px] max-w-2xl text-center mx-auto">
            We present many guarantees and advantages when you rent a car with us for your trip.
            Here are some of the advantages that you will get
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {ADVANTAGES_DATA.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <div key={advantage.id} className="flex items-start gap-6 group">
                <div className="shrink-0">
                  <div className="text-blue-700 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-[#3B3B3B] tracking-tight">
                    {advantage.title}
                  </h3>
                  <p className="text-[#505050] text-[15px] leading-relaxed font-normal">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
