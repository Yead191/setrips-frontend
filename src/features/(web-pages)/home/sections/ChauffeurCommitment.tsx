import React from "react";
import { CHAUFFEUR_COMMITMENT_DATA } from "@/constants/home/chauffeur-commitment";

const ChauffeurCommitment = () => {
  return (
    <section className="py-20 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-11 space-y-4">
          <p className="text-[#A68940] font-medium tracking-[0.3em] uppercase text-xs">
            THE LUXE DRIVE COMMITMENT
          </p>
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-4xl  text-white font-fragments">
              Why Choose Our Chauffeur Service?
            </h2>
            <div className="w-20 h-1 bg-[#A68940] mx-auto mt-6 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CHAUFFEUR_COMMITMENT_DATA.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#141414] border border-[#FFFFFF1A] p-6 rounded-4xl  transition-all duration-500 group"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-[#C5A02E1A]  rounded-xl flex items-center justify-center text-[#C5A02E] group-hover:scale-110 transition-transform duration-500">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl  text-white group-hover:text-[#C5A02E] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#A1A1A1] leading-relaxed text-sm">
                    {item.description}
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

export default ChauffeurCommitment;
