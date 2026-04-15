import Link from "next/link";

const ServiceNotFound = () => {
    return (
        <section className=" py-12 px-4 flex flex-col items-center justify-center text-center min-h-[40vh]">
            {/* Icon */}
            <div className="mb-8 flex items-center justify-center w-20 h-20 rounded-full bg-[#f9f4e8] border border-[#C5A02E]/30">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C5A02E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="11" />
                    <line x1="11" y1="14" x2="11.01" y2="14" />
                </svg>
            </div>

            {/* Heading */}
            <h1 className="text-[2rem] md:text-[2.8rem] font-normal text-[#1a1a1a] leading-tight mb-3">
                Service Not Found
            </h1>

            {/* Gold underline */}
            <span className="block h-[3px] w-[50px] bg-[#c5a02e] mb-6" aria-hidden="true" />

            {/* Message */}
            <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed mb-10">
                We couldn&apos;t find the service you&apos;re looking for. It may have been moved or doesn&apos;t exist.
                Browse our available services below, or return home.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 justify-center">
                <Link
                    href="/"
                    className="px-7 py-3 rounded-sm bg-primary text-white text-sm font-medium tracking-wide hover:bg-primary/80 transition-colors duration-200"
                >
                    Back to Home
                </Link>
                <Link
                    href="/contact"
                    className="px-7 py-3 rounded-sm border border-gray-300 text-gray-700 text-sm font-medium tracking-wide hover:border-primary hover:text-primary transition-colors duration-200"
                >
                    Contact Us
                </Link>
            </div>
        </section>
    );
};

export default ServiceNotFound;
