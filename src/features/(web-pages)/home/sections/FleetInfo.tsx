
import Image from "next/image";
import { FLEET_INFO_DATA } from "@/constants/home/fleet-info";

const FleetInfo = () => {
  return (
    <section className="pt-20 pb-10 bg-white">
      <div className="container mx-auto px-4  space-y-20">
        {FLEET_INFO_DATA?.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
          >
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-5xl  text-[#171717] leading-tight font-fragments">
                {item.title}
              </h2>
              <p className="text-[#505050] text-sm md:text-base ">
                {item.description}
              </p>
            </div>

            <div className="flex-1 w-full">
              <div className="relative h-112.5 w-full  rounded-4xl overflow-hidden shadow-2xl shadow-black/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FleetInfo;
