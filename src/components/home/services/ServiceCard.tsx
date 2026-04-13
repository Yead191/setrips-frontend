import React from "react";

interface ServiceCardProps {
    title: string;
    image: string;
    link?: string;
    linkLabel?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    image,
    link = "#",
    linkLabel = "Learn More.",
}) => {
    return (
        <div className="group bg-white border border-gray-200 rounded-md overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] cursor-pointer">

            {/* Image */}
            <div className="w-full aspect-[4/3] overflow-hidden flex-shrink-0">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover block transition-transform duration-[450ms] ease-in-out group-hover:scale-105"
                />
            </div>

            {/* Body */}
            <div className="flex flex-col gap-2 flex-1 px-5 pt-[18px] pb-[22px]">
                <h3
                    className="text-xl font-medium text-[#1a1a1a] leading-snug m-0"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                    {title}
                </h3>

                <a
                    href={link}
                    className="self-start text-[0.82rem] text-gray-700 underline underline-offset-[3px] tracking-[0.01em] transition-colors duration-200 hover:text-[#c9a84c]"
                >
                    {linkLabel}
                </a>
            </div>

        </div>
    );
};

export default ServiceCard;