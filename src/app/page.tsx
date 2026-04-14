import { Banner } from "@/shared/Banner";
import { CarCarousel } from "@/components/CarCarousel";
import { FAQ } from "@/shared/FAQ";
import OurServices from "@/components/home/services/Services";
import BrandMarquee from "@/components/home/BrandMarquee";

const Home = () => {
  return (
    <main>
      <Banner
        title="Discover Our Premium Fleet Service"
        description="Explore our world-class selection of chauffeur-driven vehicles. Each model is meticulously maintained to provide the ultimate in luxury, safety, and comfort for every journey."
        backgroundImage="/fleet-banner.png"
        showButton={true}
        buttonText="Explore Fleet"
      />
      <CarCarousel />
      <FAQ />
      <OurServices />
      <BrandMarquee />
    </main>
  )
}

export default Home;
