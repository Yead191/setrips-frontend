import Image from "next/image";
import { FLEET_INFO_DATA } from "@/constants/home/fleet-info";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

const FleetInfo = () => {
  return (
    <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-[#FBFBF9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Responsive Elegant Header */}
        <div className="text-center mb-16 lg:mb-24 space-y-4 lg:space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-[#1A1A1A] font-fragments tracking-tight px-2">
            Our Prestigious Fleet
          </h1>
          <p className="text-[#666666] text-base lg:text-lg max-w-2xl mx-auto font-light leading-relaxed px-4">
            Experience unparalleled refinement and comfort with our curated selection of world-class chauffeur-driven vehicles.
          </p>
        </div>

        <ScrollStack
          useWindowScroll={true}
          itemDistance={80}
          itemStackDistance={32}
          blurAmount={2}
          rotationAmount={-0.4}
          baseScale={0.93}
          className="overflow-visible!"
        >
          {FLEET_INFO_DATA?.map((item, index) => (
            <ScrollStackItem
              key={item.id}
              // Fully fluid responsive layout card wrapper
              itemClassName="!h-auto !p-0 my-6 lg:!my-0 overflow-hidden bg-white rounded-3xl lg:rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.04)] lg:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-black/[0.03]"
            >
              {/* Flex layouts change from column (mobile) to row-reverse options (desktop) */}
              <div
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-stretch`}
              >
                {/* Content Pane: Adapts cleanly across screens */}
                <div className="flex-1 p-6 sm:p-12 lg:p-20 flex flex-col justify-center order-2 lg:order-0 bg-white">
                  <div className="mb-4 lg:mb-6">
                    <span className="text-[#BFA173] text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-semibold">
                      Signature Class
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#1A1A1A] leading-tight font-fragments mb-4 lg:mb-6">
                    {item.title}
                  </h2>

                  <p className="text-[#666666] text-sm lg:text-base leading-relaxed lg:leading-loose font-light mb-6 lg:mb-10">
                    {item.description}
                  </p>

                  <div>
                    <button className="group relative inline-flex items-center text-[#1A1A1A] text-xs uppercase tracking-[0.15em] font-medium transition-colors hover:text-[#BFA173]">
                      <span className="pb-1.5 border-b border-[#1A1A1A]/20 transition-all duration-300 group-hover:border-[#BFA173]">
                        Reserve Vehicle
                      </span>
                      <svg className="w-4 h-4 ml-2.5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Image Pane: Controls height ratios responsively */}
                <div className="flex-1 relative h-64 sm:h-96 lg:h-auto min-h-65 lg:min-h-145 w-full bg-[#f4f4f4] overflow-hidden group order-1 lg:order-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out lg:group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default FleetInfo;