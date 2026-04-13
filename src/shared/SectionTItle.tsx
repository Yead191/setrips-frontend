import React from "react";

type Alignment = "left" | "center" | "right";

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
        <div className={`mb-12 ${alignClass[align]} ${className}`}>
            {/* inline-block so the gold bar anchors to the left edge of the heading text */}
            <div className="inline-block text-left">
                <h2
                    className="text-[2.6rem] sm:text-[2.75rem] font-normal tracking-[-0.01em] text-[#1a1a1a] mb-4 leading-[1.15]"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                    {title}
                </h2>

                {/* Gold underline */}
                <span
                    className="block h-[3px] w-[52px] rounded-sm bg-[#c9a84c]"
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