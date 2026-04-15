import Link from "next/link";

interface PremiumCTAProps {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
    phoneNumber?: string;
}

const PremiumCTA: React.FC<PremiumCTAProps> = ({
    title = "Ready for a premium experience?",
    description = "Whether it's for business or pleasure, our fleet and professional chauffeurs are at your service 24/7 across London and the UK.",
    buttonText = "BOOK YOUR JOURNEY",
    buttonHref = "/contact",
    phoneNumber = "+44 7375 356377",
}) => {
    return (
        <section className="bg-[#F5F5F5] py-16 lg:py-20 mt-12">
            <div className="container px-4 lg:px-8 flex flex-col items-center text-center">
                {/* Title */}
                <h2 className="text-[1.75rem] md:text-[2.2rem] lg:text-[2.75rem] font-normal text-[#1a1a1a] leading-tight mb-5">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
                    {description}
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
                    <Link
                        href={buttonHref}
                        className="px-8 py-3.5 bg-[#0057A7] text-white text-xs font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-[#004a90] transition-colors duration-200"
                    >
                        {buttonText}
                    </Link>

                    <a
                        href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                        className="text-[#1a1a1a] text-sm font-semibold tracking-[0.1em] uppercase hover:text-[#0057A7] transition-colors duration-200"
                    >
                        CALL US: {phoneNumber}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PremiumCTA;
