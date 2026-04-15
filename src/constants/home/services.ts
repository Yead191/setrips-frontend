export const SERVICES_DATA: any[] = [
  {
    id: 1,
    title: "Chauffeur Service",
    image: "/assets/images/home/services/service4.png",
    link: "/services/chauffeur-service",
    linkLabel: "Learn More"

  },
  {
    id: 2,
    title: "Airport Transportation",
    image: "/assets/images/home/services/service1.png",
    link: "/services/airport-transportation",
    linkLabel: "Learn More"

  },
  {
    id: 3,
    title: "Bus & Coaches",
    image: "/assets/images/home/services/service2.png",
    link: "/services/bus-coaches",
    linkLabel: "Learn More"

  },
  {
    id: 4,
    title: "Tour Packages",
    image: "/assets/images/home/services/service3.png",
    link: "/services/tour-packages",
    linkLabel: "Learn More"

  }
];

export interface Service {
  id: number;
  title: string;
  image: string;
  link: string;
  linkLabel?: string
}

