import { Car, Building2, HeartHandshake, ShieldCheck, LucideIcon, Icon } from "lucide-react";



export default function ServicesSection({ services }: any) {
    return (
        <section className="bg-[#F6F1E7] py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-14 max-w-xl">
                    <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#B8912F] uppercase ">
                        Bespoke Solutions
                    </p>
                    <h2 className="text-3xl leading-tight text-[#1A1A1A] md:text-[2.5rem] font-fragments">
                        Chauffeur Services Built Around You
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service: any) => {
                        const Icon = service.icon;

                        return <div
                            key={service.title}
                            className="group relative flex flex-col rounded-sm border border-[#E4DBC7] bg-white px-6 pb-8 pt-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(20,20,20,0.08)]"
                        >
                            {/* signature accent: gold top rule that grows on hover */}
                            <span className="absolute left-0 top-0 h-0.75 w-10 bg-[#C9A227] transition-all duration-300 group-hover:w-full" />

                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A227]/40 bg-[#FBF6E9] text-[#B8912F] transition-colors duration-300 group-hover:bg-[#C9A227] group-hover:text-white">
                                <Icon strokeWidth={1.75} size={22} />
                            </div>

                            <h3 className="mb-3 font-serif text-lg text-[#1A1A1A]">
                                {service.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-[#5C5A52]">
                                {service.description}
                            </p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
}