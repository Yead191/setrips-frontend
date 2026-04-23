import Link from "next/link";

export default function FleetCta() {
    return (
        <section
            className="relative w-full py-20 lg:py-28 bg-cover bg-center bg-no-repeat mt-10 lg:mt-12 mb-20 lg:mb-24"
            style={{ backgroundImage: "url('/assets/images/fleet/cta-bg.png')" }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 container flex items-center justify-center px-4">
                {/* Glassmorphism card */}
                <div className="flex flex-col items-center justify-center text-center w-full max-w-[620px] py-16 lg:py-20 px-8 lg:px-12 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-light italic text-white leading-snug mb-5 tracking-[-0.5px]">
                        Wanna join the<br />
                        Setrips Services?
                    </h2>

                    <p className="text-sm sm:text-[15px] text-white/70 leading-relaxed max-w-[400px] mb-8">
                        Experience comfort, elegance, and reliability
                        with our luxury chauffeur-driven vehicles.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0057A7] text-white text-sm font-medium rounded-lg hover:bg-[#004a90] transition-colors duration-200"
                    >
                        Contact With Us
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
