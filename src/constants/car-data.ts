export interface Car {
  id: string;
  name: string;
  description: string;
  pricePerDay: number;
  passengers: number;
  luggage: string;
  features: string[];
  images: string[];
}

export const CAR_DATA: Car[] = [
  {
    id: "1",
    name: "Mercedes-Benz E-Class",
    description: "The standard for business travel",
    pricePerDay: 320,
    passengers: 3,
    luggage: "2 large suitcase or 1 large and 2 small suitcases",
    features: [
      "Leather Interior",
      "Dual-zone Climate",
      "Free Wi-Fi",
      "Complimentary Water",
    ],
    images: [
      "/fleet-banner.png",
      "/fleet-banner.png",
      "/fleet-banner.png",
    ],
  },
  {
    id: "2",
    name: "Mercedes-Bus Coach",
    description: "Perfect for large group transportation",
    pricePerDay: 450,
    passengers: 45,
    luggage: "2 large suitcase or 1 large and 2 small suitcases",
    features: [
      "Leather Interior",
      "Dual-zone Climate",
      "Free Wi-Fi",
      "Complimentary Water",
    ],
    images: [
      "/fleet-banner.png",
      "/fleet-banner.png",
      "/fleet-banner.png",
    ],
  },
  {
    id: "3",
    name: "BMW-Benz E-Class",
    description: "The standard for business travel",
    pricePerDay: 320,
    passengers: 3,
    luggage: "2 large suitcase or 1 large and 2 small suitcases",
    features: [
      "Leather Interior",
      "Dual-zone Climate",
      "Free Wi-Fi",
      "Complimentary Water",
    ],
    images: [
      "/fleet-banner.png",
      "/fleet-banner.png",
      "/fleet-banner.png",
    ],
  },
  {
    id: "4",
    name: "Mercedes S-Class",
    description: "Ultimate luxury for VIP travel",
    pricePerDay: 500,
    passengers: 3,
    luggage: "2 large suitcases",
    features: [
      "Nappa Leather",
      "Panoramic Roof",
      "Rear Entertainment",
      "Chauffeur Service",
    ],
    images: [
      "/fleet-banner.png",
      "/fleet-banner.png",
      "/fleet-banner.png",
    ],
  },
  {
    id: "5",
    name: "Mercedes S-Class",
    description: "Ultimate luxury for VIP travel",
    pricePerDay: 500,
    passengers: 3,
    luggage: "2 large suitcases",
    features: [
      "Nappa Leather",
      "Panoramic Roof",
      "Rear Entertainment",
      "Chauffeur Service",
    ],
    images: [
      "/fleet-banner.png",
      "/fleet-banner.png",
      "/fleet-banner.png",
    ],
  },
];
