// import { Banner } from "@/shared/Banner";
// import { CarCarousel } from "@/components/CarCarousel";
// import OurServices from "@/features/(web-pages)/home/sections/services/Services";
// import BrandMarquee from "@/features/(web-pages)/home/sections/BrandMarquee";
// import WhyChooseUs from "@/features/(web-pages)/home/sections/WhyChooseUs";
// import LetsTalk from "@/features/(web-pages)/home/sections/LetsTalk";
// import { SERVICES_DATA } from "@/constants/home/services";
import Home from "@/features/(web-pages)/home";
const LandingPage = () => {

  return (
    // <main>
    //   <Banner
    //     title="Discover Our Premium Fleet Service"
    //     description="Explore our world-class selection of chauffeur-driven vehicles. Each model is meticulously maintained to provide the ultimate in luxury, safety, and comfort for every journey."
    //     backgroundImage="/landingpage.jpg"
    //     showButton={true}
    //     isLanding={true}
    //   />
    //   <div className="py-20 bg-[#F9F9F9]">
    //     <div className="flex flex-col gap-2 mb-12 items-center text-center">
    //       <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
    //         POPULAR CAR
    //       </span>
    //       <h2 className="text-[26px] md:text-[43px] font-normal text-[#3B3B3B] leading-tight">
    //         Choose Your Suitable Car
    //       </h2>
    //       <p className="text-gray-500 text-[13px] md:text-[15px] max-w-xs md:max-w-2xl">
    //         We present popular cars that are rented by customers to maximize your comfort on long trips.
    //       </p>
    //     </div>
    //     <CarCarousel />
    //   </div>
    //   <OurServices data={SERVICES_DATA || []} title="Our Services" align="center" />
    //   <BrandMarquee />
    //   <WhyChooseUs title="Why Choose Us ?" align="center" />
    //   <LetsTalk />
    // </main>
    <Home />
  )
}

export default LandingPage;
