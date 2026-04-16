import { Banner } from "@/shared/Banner"
import ChauffeurFleet from "./sections/ChauffeurFleet"
import FleetCta from "./sections/FleetCta"

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
            <FleetCta />
        </section>
    )
}

export default Fleet
