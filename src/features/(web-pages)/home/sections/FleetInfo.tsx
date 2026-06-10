import Image from "next/image";
import { FLEET_INFO_DATA } from "@/constants/home/fleet-info";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

const FleetInfo = () => {
  return (
    < section className="pt-32 pb-24 bg-[#FBFBF9]" >
      <div className="container mx-auto px-4 lg:px-8">

        {/* Elegant Minimalist Header */}
        <div className="text-center mb-24 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] font-fragments tracking-tight">
            Our Prestigious Fleet
          </h1>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Experience unparalleled refinement and comfort with our curated selection of world-class chauffeur-driven vehicles.
          </p>
        </div>

        <ScrollStack
          useWindowScroll={true}
          itemDistance={60}
          itemStackDistance={30}
          blurAmount={2}
          rotationAmount={-0.5}
          baseScale={0.92}
          className="overflow-visible!"
        >
          {FLEET_INFO_DATA?.map((item, index) => (
            <ScrollStackItem
              key={item.id}
              // Pristine white cards, soft rounded corners, delicate wide shadow
              itemClassName="!h-auto !p-0 !my-16 overflow-hidden bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-black/[0.03]"
            >
              <div
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-stretch min-h-137.5 lg:min-h-150`}
              >
                {/* Content Pane */}
                <div className="flex-1 p-10 lg:p-20 flex flex-col justify-center z-20 bg-white">
                  {/* Subtle Champagne/Gold Accent Tag */}
                  <div className="mb-8">
                    <span className="text-[#BFA173] text-[11px] uppercase tracking-[0.2em] font-semibold">
                      Signature Class
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] leading-[1.1] font-fragments mb-6">
                    {item.title}
                  </h2>

                  <p className="text-[#666666] text-sm md:text-base leading-loose font-light mb-10">
                    {item.description}
                  </p>

                  {/* Elegant Text-based Button with Hover Effect */}
                  <div>
                    <button className="group relative inline-flex items-center text-[#1A1A1A] text-xs uppercase tracking-[0.15em] font-medium transition-colors hover:text-[#BFA173]">
                      <span className="pb-2 border-b border-[#1A1A1A]/20 transition-all duration-300 group-hover:border-[#BFA173]">
                        Reserve Vehicle
                      </span>
                      {/* Optional minimal arrow SVG could go here */}
                      <svg className="w-4 h-4 ml-3 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Image Pane */}
                <div className="flex-1 relative min-h-100 lg:min-h-full w-full bg-[#f4f4f4] overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  {/* Soft inner shadow overlay to give the image depth inside the light card */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-none" />
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section >
  );
};

export default FleetInfo;