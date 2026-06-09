import React from "react";

export type Alignment = "left" | "center" | "right";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: Alignment;
    className?: string;
}

const alignClass: Record<Alignment, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};


const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    subtitle,
    align = "center",
    className = "",
}) => {
    return (
        <div className={`${alignClass[align]} ${className}`}>
            <div className="inline-block text-left">
                <h2 className="text-[26px] lg:text-[43px] 2xl:text-5xl  sm:text-[2.5rem] text-[#1a1a1a] md:mb-4 mb-1 leading-18 font-fragments tracking-[-1.2px] font-medium ">
                    {title}
                </h2>

                <span
                    className="block h-[4px] w-[45px] lg:w-[60px] bg-[#C5A02E]"
                    aria-hidden="true"
                />

                {subtitle && (
                    <p className="mt-4 text-base text-gray-500 leading-relaxed max-w-xl">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default SectionTitle;