import Link from "next/link";
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
        <Link href={link} className="group bg-white border border-gray-200 p-[10px] flex flex-col h-full transition-all duration-300 hover:shadow-lg cursor-pointer">

            {/* Image */}
            <div className="w-full aspect-[1.15] overflow-hidden shrink-0">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover block transition-transform duration-450 ease-in-out group-hover:scale-105"
                />
            </div>

            {/* Body */}
            <div className="flex flex-col gap-1.5 flex-1 pt-4 pb-2 px-1">
                <h3 className="text-base text-gray-800 leading-snug m-0 font-fragments">
                    {title}
                </h3>

                <p
                    className="self-start text-[13px] text-gray-500 underline underline-offset-[3px] decoration-gray-300 tracking-wide transition-colors duration-200 hover:text-[#c9a84c] hover:decoration-[#c9a84c]"
                >
                    {linkLabel}
                </p>
            </div>

        </Link >);
};

export default ServiceCard;