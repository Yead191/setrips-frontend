import React from "react";
import Link from "next/link";

const ReadyForExperience = () => {
    return (
        <section className="py-20 mb-20 bg-[#f8f7f7]">
            <div className="container mx-auto px-4 text-center">
                <div className="space-y-6 mb-12">
                    <h2 className="text-4xl md:text-5xl font-normal text-[#1A1A1A]">
                        Ready for a premium experience?
                    </h2>
                    <p className="text-[#737373] text-lg md:text-lg max-w-3xl mx-auto leading-relaxed">
                        Whether it&apos;s for business or pleasure, our fleet and professional chauffeurs are at your service 24/7 across London and the UK.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                    <Link
                        href="/booking"
                        className="bg-[#0057A8] hover:bg-[#004A8F] text-white px-8 py-4 rounded-md text-sm font-medium tracking-widest uppercase transition-all shadow-lg shadow-blue-100"
                    >
                        BOOK YOUR JOURNEY
                    </Link>

                    <a
                        href="tel:+447375356377"
                        className="text-[#000000] font-medium text-sm tracking-widest uppercase hover:text-primary transition-colors"
                    >
                        CALL US: +44 7375 356377
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ReadyForExperience;
