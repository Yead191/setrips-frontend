export interface Car {
    id: string;
    name: string;
    description: string;
    images: string[];
    pricePerDay: number;
    passengers: number;
    luggage: string;
    features: string[];
}

export const cars: Car[] = [
    {
        id: "mercedes-e-class",
        name: "Mercedes-Benz E-Class",
        description: "The standard for business travel",
        images: [
            "/assets/images/fleet/cars/car1.png",
            "/assets/images/fleet/cars/car1.png",
            "/assets/images/fleet/cars/car1.png",
        ],
        pricePerDay: 120,
        passengers: 3,
        luggage: "2 large suitcases or 1 large and 2 small suitcases",
        features: [
            "Leather Interior",
            "Dual-zone Climate",
            "Free Wi-Fi",
            "Complimentary Water",
        ],
    },
    {
        id: "mercedes-bus-coach",
        name: "Mercedes-Bus Coach",
        description: "Premium group & event transportation",
        images: [
            "/assets/images/fleet/cars/car2.png",
            "/assets/images/fleet/cars/car2.png",
            "/assets/images/fleet/cars/car2.png",
        ],
        pricePerDay: 350,
        passengers: 49,
        luggage: "10 large suitcases and 5 small suitcases",
        features: [
            "Air Conditioning",
            "Reclining Seats",
            "Free Wi-Fi",
            "Complimentary Water",
        ],
    },
    {
        id: "bmw-7-series",
        name: "BMW 7 Series",
        description: "Luxury redefined for executive travel",
        images: [
            "/assets/images/fleet/cars/car3.png",
            "/assets/images/fleet/cars/car3.png",
            "/assets/images/fleet/cars/car3.png",
        ],
        pricePerDay: 150,
        passengers: 3,
        luggage: "2 large suitcases or 1 large and 2 small suitcases",
        features: [
            "Panoramic Sunroof",
            "Massage Seats",
            "Harman Kardon Sound",
            "Complimentary Water",
        ],
    },
    {
        id: "scania-luxury-coach",
        name: "Scania Luxury Coach",
        description: "Superior comfort for long-distance groups",
        images: [
            "/assets/images/fleet/cars/car4.png",
            "/assets/images/fleet/cars/car4.png",
            "/assets/images/fleet/cars/car4.png",
        ],
        pricePerDay: 320,
        passengers: 49,
        luggage: "10 large suitcases and 5 small suitcases",
        features: [
            "Air Conditioning",
            "Reclining Seats",
            "Free Wi-Fi",
            "Complimentary Water",
        ],
    },
    {
        id: "mercedes-s-class",
        name: "Mercedes-Benz S-Class",
        description: "The pinnacle of chauffeur-driven luxury",
        images: [
            "/assets/images/fleet/cars/car5.jpg",
            "/assets/images/fleet/cars/car5.jpg",
            "/assets/images/fleet/cars/car5.jpg",
        ],
        pricePerDay: 180,
        passengers: 3,
        luggage: "2 large suitcases or 1 large and 2 small suitcases",
        features: [
            "Burmester Surround Sound",
            "Rear Executive Seats",
            "Ambient Lighting",
            "Complimentary Refreshments",
        ],
    },
    {
        id: "mercedes-g-wagon",
        name: "Mercedes-Benz G-Wagon",
        description: "Bold luxury meets off-road capability",
        images: [
            "/assets/images/fleet/cars/car6.jpg",
            "/assets/images/fleet/cars/car6.jpg",
            "/assets/images/fleet/cars/car6.jpg",
        ],
        pricePerDay: 200,
        passengers: 4,
        luggage: "3 large suitcases or 2 large and 2 small suitcases",
        features: [
            "Premium Nappa Leather",
            "4MATIC All-Wheel Drive",
            "Free Wi-Fi",
            "Complimentary Water",
        ],
    },
];