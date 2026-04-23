import { transportationData } from '@/constants/service/our-services';
import ServiceDetails from '@/features/(web-pages)/services';
import ServiceNotFound from '@/features/(web-pages)/services/sections/ServiceNotFound';
import OurServices from "@/features/(web-pages)/home/sections/services/Services";
import { SERVICES_DATA } from '@/constants/home/services';

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const service = transportationData.find(item => item.id === id);
    console.log(id)

    if (!service) {
        return (
            <>
                <ServiceNotFound />
                <OurServices data={SERVICES_DATA || []} title="Our Services" align="center" />
            </>
        );
    }


    return (
        <ServiceDetails service={service} id={id} />
    );
}
