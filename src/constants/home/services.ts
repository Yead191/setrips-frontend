export const SERVICES_DATA = [
  {
    id: 1,
    title: "Chauffeur Service",
    image: "/assets/images/home/services/service1.png",
    link: "/services/service1.png"
  },
  {
    id: 2,
    title: "Airport Transportation",
    image: "/assets/images/home/services/service2.png",
    link: "/services/service2.png"
  },
  {
    id: 3,
    title: "Bus & Coaches",
    image: "/assets/images/home/services/service3.png",
    link: "/services/service3.png"
  },
  {
    id: 4,
    title: "Tour Packages",
    image: "/assets/images/home/services/service4.png",
    link: "/services/service4.png"
  }
];

export interface Service {
  id: number;
  title: string;
  image: string;
  link: string;
}

