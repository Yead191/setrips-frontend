import { WhyChooseUsCard } from "@/types";
import {
    ShieldCheck,
    Sparkles,
    CircleDollarSign,
    Clock,
    Users,
    Wifi,
    MapPin,
    LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
    "shield-check": ShieldCheck,
    sparkles: Sparkles,
    "currency-dollar": CircleDollarSign,
    clock: Clock,
    users: Users,
    wifi: Wifi,
    "map-pin": MapPin,
};

interface WhyChooseUsSectionProps {
    tagline: string;
    title: string;
    cards: WhyChooseUsCard[];
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
    tagline,
    title,
    cards,
}) => {
    return (
        <section className="bg-[#0A0A0A] py-[50px] overflow-hidden my-10 lg:my-12 mt-10 lg:mt-24!">
            <div className="container px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-[#C5A02E] text-xs font-medium tracking-[0.25em] uppercase mb-4">
                        {tagline}
                    </p>
                    <h2 className="text-white text-[1.75rem] md:text-[2.2rem] lg:text-[2.75rem] font-normal leading-tight mb-5">
                        {title}
                    </h2>
                    <span
                        className="block h-[3px] w-[50px] bg-[#C5A02E] mx-auto"
                        aria-hidden="true"
                    />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {cards?.map((card) => {
                        const IconComponent = ICON_MAP[card.icon] || ShieldCheck;
                        return (
                            <div
                                key={card.title}
                                className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl p-6 lg:p-7 flex flex-col gap-5 transition-all duration-300 hover:border-[#C5A02E]/40 hover:shadow-[0_4px_24px_rgba(197,160,46,0.08)]"
                            >
                                {/* Icon */}
                                <div className="w-11 h-11 rounded-full border border-[#C5A02E]/50 flex items-center justify-center">
                                    <IconComponent className="w-5 h-5 text-[#C5A02E]" strokeWidth={1.5} />
                                </div>

                                {/* Title */}
                                <h3 className="text-white text-lg font-semibold leading-snug">
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#999] text-sm leading-[23px]">
                                    {card.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
