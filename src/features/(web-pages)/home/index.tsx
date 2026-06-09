import { FAQ } from "@/shared/FAQ";
import ReadyForExperience from "@/shared/ReadyForExperience";
import { Banner } from "@/shared/Banner";
import { CarCarousel } from "@/components/CarCarousel";
import OurServices from "@/features/(web-pages)/home/sections/services/Services";
import ChauffeurCommitment from "@/features/(web-pages)/home/sections/ChauffeurCommitment";
import FleetInfo from "@/features/(web-pages)/home/sections/FleetInfo";
import { SERVICES_DATA } from "@/constants/home/services";
import SectionTitle from "@/shared/SectionTItle";
import HomeBanner from "./sections/HomeBanner";
const Home = () => {
  return (
    <main>
      {/* <Banner
        title="Our Setrips Fleet"
        description="Explore our world-class selection of chauffeur-driven vehicles. Each model is
         meticulously maintained to provide the ultimate in luxury, safety, and comfort for
         every journey."
        backgroundImage="/fleet-banner.png"
        showButton={false}
      /> */}
      <HomeBanner />
      <div className="py-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Discover Our Fleet"
            align="left"
            className="mb-10"
          />
        </div>
        <CarCarousel />
      </div>
      <ChauffeurCommitment />
      <FleetInfo />
      <OurServices
        data={SERVICES_DATA || []}
        title="Our Services"
        align="center"
      />
      <FAQ />
      <ReadyForExperience />
    </main>
  );
};
export default Home;
