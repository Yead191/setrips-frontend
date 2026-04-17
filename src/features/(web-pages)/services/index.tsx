import { Banner } from "@/shared/Banner";
import { TransportationCategory } from "@/types";
import SectionBlock from "./sections/SectionBlock";
import ServicesGrid from "./sections/ServicesGrid";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import DiscoverSection from "@/shared/DiscoverSection";
import OurServices from "@/features/(web-pages)/home/sections/services/Services";
import { TOUR_SERVICES_DATA } from "@/constants/service/tour-services";
import TopRoutes from "./sections/TopRoutes";
import ReadyForExperience from "@/shared/ReadyForExperience";

const ServiceDetails = ({ service, id }: { service: TransportationCategory, id: string }) => {

    const section1 = [
        {
            title: service.intro.title,
            description: service.intro.description,
            image: service.intro.image,
        },

    ];
    const section2 = service?.highlight
        ? [
            {
                title: service.highlight.title,
                description: service.highlight.description,
                image: service.highlight.image,
            },
        ]
        : []

    const isTour = id === "tour-packages";
    return (
        <div>
            {/* Hero Banner */}
            <Banner
                title={service.hero.title}
                description={service.hero.description}
                backgroundImage={service.hero.image}
                showButton={false}
            />
            {
                isTour && <OurServices title="Setrips Top City Transfer" align="left" data={TOUR_SERVICES_DATA} />
            }
            {
                isTour && <TopRoutes />
            }

            {/* Alternating intro / highlight sections */}
            <section className="py-12 lg:py-10 pt-20! lg:pt-24!">
                <div className="container px-4 lg:px-8 flex flex-col gap-16 lg:gap-28">
                    {section1.map((section, index) => (
                        <SectionBlock
                            key={section.title}
                            title={section.title}
                            description={section.description}
                            image={section.image}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            {/* Services grid: title + description cards */}
            {service.services?.length > 0 && (
                <ServicesGrid services={service.services} />
            )}
            {/* Alternating intro / highlight sections */}
            {section2?.length ? (
                <section className="py-12 lg:py-10">
                    <div className="container px-4 lg:px-8 flex flex-col gap-16 lg:gap-28">
                        {section2.map((section) => (
                            <SectionBlock
                                key={section.title}
                                title={section.title}
                                description={section.description}
                                image={section.image}
                                index={1}
                            />
                        ))}
                    </div>
                </section>
            ) : null}
            {/* Why Choose Us Section */}
            {service?.whyChooseUs && (
                <WhyChooseUsSection
                    tagline={service.whyChooseUs.tagline}
                    title={service.whyChooseUs.title}
                    cards={service.whyChooseUs.cards}
                />
            )}
            {/* discover fleet */}
            <DiscoverSection title="Discover Our Fleet" />

            {/* premium experience */}
            <ReadyForExperience />
        </div>
    );
};

export default ServiceDetails;


