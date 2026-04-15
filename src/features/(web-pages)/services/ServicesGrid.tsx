import { Service } from "@/types";

interface ServicesGridProps {
    services: Service[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
    if (!services?.length) return null;

    return (
        <section className="bg-[#FAFAFA] mt-16 mb-12">
            <div className="container py-16 lg:py-24 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 lg:gap-y-16">
                    {services?.map((item) => (
                        <div key={item.title} className="flex flex-col gap-4">
                            {/* Divider + Title */}
                            <div className="">
                                <h3 className="text-[1.35rem] lg:text-[2rem] font-semibold text-[#171717] leading-[34px]">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-gray-500 text-base lg:text-[18px] leading-[30px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
