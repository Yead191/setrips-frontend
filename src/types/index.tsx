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
    highlight: HighlightSection;
}