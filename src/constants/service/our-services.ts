import { TransportationCategory } from "@/types";

export const transportationData: TransportationCategory[] = [
    {
        id: "chauffeur-service",
        hero: {
            tagline: "EXCELLENCE IN MOTION",
            title: "Discover Our Premium Chauffeur Service",
            description:
                "Experience the pinnacle of luxury travel with our professional chauffeur-driven vehicles. Every ride is meticulously planned to deliver unmatched comfort, privacy, and elegance.",
            image: "/assets/images/services/hero/hero1.png",
        },
        intro: {
            title: "Professional Chauffeur London",
            description:
                "Our chauffeur service redefines personal transportation in London. Whether you need a discreet executive transfer or a stylish arrival at a prestigious event, our uniformed chauffeurs are trained to the highest standards. Every vehicle in our fleet — from sleek saloons to luxury SUVs — is immaculately presented and equipped with premium amenities. We pride ourselves on punctuality, professionalism, and an unrivalled attention to detail, ensuring your journey is as impressive as your destination.",
            image: "/assets/images/services/service/service1.png",
        },
        services: [
            {
                title: "Executive Transfers",
                description:
                    "Seamless door-to-door executive transportation for business professionals. Our chauffeurs monitor your schedule, handle your luggage, and ensure you arrive refreshed and on time — every time.",
            },
            {
                title: "Corporate Account Services",
                description:
                    "Tailored chauffeur solutions for businesses of all sizes. We manage recurring bookings, multi-passenger logistics, and company travel accounts with dedicated account managers and priority dispatch.",
            },
            {
                title: "Wedding & Special Occasions",
                description:
                    "Make your special day truly unforgettable with our luxury wedding chauffeur service. Choose from our fleet of classic Rolls-Royces and elegant limousines, decorated to your preference.",
            },
            {
                title: "Private Security Transfers",
                description:
                    "Discreet, secure transportation for high-profile clients and VIPs. Our trained drivers prioritize your safety and privacy with vetted routes, armoured vehicle options, and 24/7 coordination.",
            },
        ],
        highlight: {
            title: "Chauffeur Ground Services",
            description:
                "Our ground chauffeur services span every corner of Greater London and beyond. From boardroom to airport, hotel to theatre, our drivers are available around the clock to accommodate your needs. Each chauffeur undergoes rigorous background checks, advanced driver training, and hospitality coaching to guarantee a world-class experience. Real-time GPS tracking, flight monitoring, and instant booking confirmations ensure you are never left waiting. With us, every mile is a statement of excellence.",
            image: "/assets/images/services/service/service2.png",
        },
    },

    {
        id: "airport-transportation",
        hero: {
            tagline: "EXCELLENCE IN MOTION",
            title: "Discover Our Airport Transportation Service",
            description:
                "Explore our world-class selection of chauffeur-driven vehicles. Each model is meticulously maintained to provide the ultimate in luxury, safety, and comfort for every journey.",
            image: "/assets/images/services/hero/hero2.png",
        },
        intro: {
            title: "Ground Transportation London",
            description:
                "Navigating London's major airports has never been easier. Our airport transportation service offers stress-free transfers to and from Heathrow, Gatwick, Stansted, Luton, and London City Airport. We monitor your flight in real time, adjusting pickup times automatically for early arrivals or delays. Our professional drivers greet you at arrivals with a name board, assist with your luggage, and escort you to your waiting vehicle. Whether travelling for business or leisure, we guarantee a smooth and punctual transfer every single time.",
            image: "/assets/images/services/service/service2.png",
        },
        services: [
            {
                title: "Airport Transfers",
                description:
                    "Reliable and punctual pick-up and drop-off services across all major London airports. Our drivers track your flight live and adjust arrival times accordingly, so you are never left waiting at the kerbside.",
            },
            {
                title: "Corporate Transportation",
                description:
                    "Dedicated airport transfer solutions for business travellers and corporate teams. We coordinate multi-passenger pickups, manage tight schedules, and provide consistent service quality across all bookings.",
            },
            {
                title: "City to City Transfers",
                description:
                    "Long-distance transfers between major UK cities in premium comfort. Whether connecting London to Manchester, Birmingham, or Edinburgh, our drivers ensure a relaxed and efficient journey door to door.",
            },
            {
                title: "Event & VIP Transportation",
                description:
                    "Exclusive meet-and-greet airport services for VIP guests and delegations. Our event transportation team coordinates multi-vehicle fleets, red-carpet arrivals, and security-conscious routing for high-profile clients.",
            },
        ],
        highlight: {
            title: "Chauffeur Ground Services",
            description:
                "Our airport ground services are built around your schedule. From the moment your flight lands, our team is on standby — tracking luggage carousel wait times, coordinating meet-and-greet in the arrivals hall, and ensuring your vehicle is positioned for immediate departure. We serve individuals, families, and corporate delegations with equal care. Our 24/7 dispatch team handles last-minute bookings, rebookings due to flight changes, and special assistance requests. Travel from any London terminal with the confidence that a trusted professional is waiting for you.",
            image: "/assets/images/services/service/service1.png",
        },
    },

    {
        id: "bus-coaches",
        hero: {
            tagline: "TRAVEL TOGETHER IN STYLE",
            title: "Discover Our Bus & Coach Hire Services",
            description:
                "From intimate group outings to large-scale corporate events, our modern coach fleet provides comfortable, safe, and reliable transportation for groups of every size across the UK.",
            image: "/assets/images/services/hero/hero3.png",
        },
        intro: {
            title: "Group Transportation London",
            description:
                "Our bus and coach hire service is the smart choice for group travel in and around London. Whether you are organising a school trip, a corporate away day, a wedding shuttle, or a sporting event transfer, we have the right vehicle for your group. Our fleet includes executive minibuses, luxury coaches, and double-deckers — all fully air-conditioned, with reclining seats, onboard Wi-Fi, and ample luggage storage. Every journey is managed by an experienced, licensed driver who prioritises passenger safety and comfort above all else.",
            image: "/assets/images/services/service/service3.png",
        },
        services: [
            {
                title: "Corporate Coach Hire",
                description:
                    "Efficient group transportation for business events, conferences, and staff shuttles. We coordinate multiple pick-up points, manage large passenger lists, and provide on-time arrivals for your most important occasions.",
            },
            {
                title: "School & University Trips",
                description:
                    "Safe, vetted coach hire for educational institutions. All our drivers hold enhanced DBS checks and our vehicles meet strict child passenger safety standards, giving parents and teachers complete peace of mind.",
            },
            {
                title: "Wedding Coach Hire",
                description:
                    "Keep your wedding guests together and on schedule with our elegant wedding shuttle service. From venue transfers to hotel drop-offs, we ensure everyone travels comfortably and arrives together to celebrate.",
            },
            {
                title: "Sports & Events Transfer",
                description:
                    "Group coach hire for sports teams, stadium transfers, and large public events. We handle parking logistics, crowd timing, and multi-stop routing so your group arrives together without the hassle.",
            },
        ],
        highlight: {
            title: "Fleet & Ground Operations",
            description:
                "Our coach fleet is one of the most modern in London, regularly serviced and inspected to meet DVSA standards. Vehicles range from 8-seat executive minibuses to 72-seat luxury double-deck coaches, giving you the flexibility to match capacity to your exact group size. Our operations team handles all aspects of your journey — route planning, traffic monitoring, driver briefings, and on-the-day coordination. With GPS-tracked vehicles and a 24/7 support line, you always know where your coach is and can reach us instantly if plans change.",
            image: "/images/coach-ground.jpg",
        },
    },

    {
        id: "tour-packages",
        hero: {
            tagline: "EXPLORE WITHOUT LIMITS",
            title: "Discover Our Exclusive Tour Packages",
            description:
                "Immerse yourself in unforgettable travel experiences curated by our expert team. From scenic countryside escapes to iconic city tours, every package is designed to inspire and delight.",
            image: "/assets/images/services/hero/hero4.png",
        },
        intro: {
            title: "Guided Tours Across the UK",
            description:
                "Our tour packages offer the perfect blend of luxury transport and expertly curated experiences across the United Kingdom and Europe. Travel in a private chauffeur-driven vehicle or join a small-group guided coach tour — whichever you choose, you are guaranteed seamless logistics, knowledgeable guides, and handpicked destinations. From the rolling landscapes of the Cotswolds and the dramatic Scottish Highlands to the cultural treasures of London and Bath, our tours are crafted for travellers who demand quality, authenticity, and exceptional service at every stop.",
            image: "/assets/images/services/service/service2.png",
        },
        services: [
            {
                title: "City Sightseeing Tours",
                description:
                    "Discover London's most iconic landmarks with a private guide and luxury vehicle. From Buckingham Palace and the Tower of London to hidden gems in Notting Hill, our city tours bring the capital to life.",
            },
            {
                title: "Countryside & Heritage Tours",
                description:
                    "Escape the city and explore England's most beautiful landscapes. Our countryside tours take you through the Cotswolds, the Lake District, and beyond, with stops at historic estates, charming villages, and scenic viewpoints.",
            },
            {
                title: "Multi-Day UK Packages",
                description:
                    "Comprehensive multi-day itineraries covering the best of Britain. Accommodation, transport, guided excursions, and dining recommendations are all arranged for you — simply arrive and enjoy the journey.",
            },
            {
                title: "Private Bespoke Tours",
                description:
                    "Design your perfect trip with our bespoke tour planning service. Tell us your interests, travel dates, and preferred style, and our team will craft a fully personalised itinerary with private transport and exclusive access.",
            },
        ],
        highlight: {
            title: "Our Tour Experience Promise",
            description:
                "Every tour package we offer is built around one simple promise — that you will travel with complete ease and return with lasting memories. Our travel specialists personally vet every route, accommodation partner, and activity provider to ensure standards match our reputation. Vehicles are equipped with panoramic windows, climate control, and onboard refreshments for maximum comfort en route. Licensed and insured guides bring deep local knowledge and genuine passion for every destination. Whether it is your first visit to Britain or your tenth, our tours reveal something new, surprising, and truly worth the journey.",
            image: "/assets/images/services/service/service4.png",
        },
    },
];