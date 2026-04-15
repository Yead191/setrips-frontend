export interface HeroSection {
    tagline: string;
    title: string;
    description: string;
    image: string;
}

export interface IntroSection {
    title: string;
    description: string;
    image: string;
}

export interface Service {
    title: string;
    description: string;
}

export interface HighlightSection {
    title: string;
    description: string;
    image: string;
}

export interface WhyChooseUsCard {
    icon: string;
    title: string;
    description: string;
}

export interface WhyChooseUsSection {
    tagline: string;
    title: string;
    cards: WhyChooseUsCard[];
}
export type CategoryId =
    | "chauffeur-service"
    | "airport-transportation"
    | "bus-coaches"
    | "tour-packages";

export interface TransportationCategory {
    id: CategoryId;
    hero: HeroSection;
    intro: IntroSection;
    services: Service[];
    highlight?: HighlightSection;
    whyChooseUs?: WhyChooseUsSection;
}

export interface TourService {
    id: number;
    title: string;
    image: string;
    link: string;
    linkLabel?: string;
}