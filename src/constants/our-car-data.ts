export interface FleetCar {
    id: string;
    name: string;
    type: string;
    passengers: number;
    luggage: number;
    price: number;
    discount?: string;
    image: string;
    tag?: "Most Popular" | "Best Value";
    freeCancellation: boolean;
}

export const FLEET_CARS: FleetCar[] = [
    {
        id: "1",
        name: "Business Class",
        type: "Business Class",
        passengers: 4,
        luggage: 3,
        price: 1448,
        discount: "10% off",
        image: "/fleet-banner.png",
        tag: "Most Popular",
        freeCancellation: true,
    },
    {
        id: "2",
        name: "Standard Sedan",
        type: "Standard Sedan",
        passengers: 4,
        luggage: 2,
        price: 1200,
        image: "/fleet-banner.png",
        freeCancellation: true,
    },
    {
        id: "3",
        name: "Premium Rolls Royce",
        type: "VIP Class",
        passengers: 7,
        luggage: 5,
        price: 125,
        image: "/fleet-banner.png",
        freeCancellation: true,
    },
    {
        id: "4",
        name: "Premium Sedan",
        type: "Premium",
        passengers: 4,
        luggage: 2,
        price: 455,
        image: "/fleet-banner.png",
        tag: "Best Value",
        freeCancellation: true,
    },
    {
        id: "5",
        name: "Standard Sedan",
        type: "Sedan",
        passengers: 4,
        luggage: 2,
        price: 655,
        image: "/fleet-banner.png",
        freeCancellation: true,
    },
];
