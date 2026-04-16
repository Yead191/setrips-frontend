import { CarCard } from "@/components/CarCard";
import { cars } from "@/constants/fleet/car-data";
import SectionTitle from "@/shared/SectionTItle";

export default function ChauffeurFleet() {
    return (
        <section className="container pt-20 lg:pt-24 lg:pb-12 pb-10">
            <SectionTitle title="Our Luxury Chauffeur Fleet" align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
                {cars.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </section>
    )
}
