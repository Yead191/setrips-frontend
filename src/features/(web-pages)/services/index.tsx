import { Banner } from "@/shared/Banner";
import { TransportationCategory } from "@/types";
import SectionBlock from "./SectionBlock";
import ServicesGrid from "./ServicesGrid";
import DiscoverSection from "@/shared/DiscoverSection";
import { CAR_DATA } from "@/constants/car-data";

const ServiceDetails = ({ service }: { service: TransportationCategory }) => {
    const section1 = [
        {
            title: service.intro.title,
            description: service.intro.description,
            image: service.intro.image,
        },

    ];
    const section2 = [

        {
            title: service.highlight.title,
            description: service.highlight.description,
            image: service.highlight.image,
        },
    ];

    return (
        <div>
            {/* Hero Banner */}
            <Banner
                title={service.hero.title}
                description={service.hero.description}
                backgroundImage={service.hero.image}
                showButton={false}
            />

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
            {/* discover fleet */}
            <DiscoverSection title="Discover Our Fleet" data={CAR_DATA} />
        </div>
    );
};

export default ServiceDetails;


