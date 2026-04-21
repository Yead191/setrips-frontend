import { Service } from "@/types";

interface ServicesGridProps {
    services: Service[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
    if (!services?.length) return null;

    return (
        <section className="bg-[#FAFAFA] md:mt-16 mt-10 md:mb-12 mb8">
            <div className="container py-16 lg:py-24 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 lg:gap-y-16">
                    {services?.map((item) => (
                        <div key={item.title} className="flex flex-col md:gap-4 gap-2">
                            {/* Divider + Title */}
                            <div className="">
                                <h3 className="text-xl lg:text-[2rem] font-semibold text-[#171717] md:leading-[34px] leading-[28px]">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-gray-500 text-sm lg:text-[18px] md:leading-[30px] leading-[24px]">
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
