import { Banner } from "@/shared/Banner"
import ChauffeurFleet from "./sections/ChauffeurFleet"

const Fleet = () => {
    return (
        <section>
            <Banner
                title="Discover Our Premium Fleet Service"
                description="Explore our world-class selection of chauffeur-driven vehicles. Each model is
meticulously maintained to provide the ultimate in luxury, safety, and comfort for every journey."
                backgroundImage="/assets/images/fleet/fleet-hero.png"
                showButton={false}
            />
            <ChauffeurFleet />
        </section>
    )
}

export default Fleet
