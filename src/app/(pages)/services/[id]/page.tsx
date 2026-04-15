import { transportationData } from '@/constants/service/our-services';
import ServiceDetails from '@/features/(web-pages)/services';
import ServiceNotFound from '@/features/(web-pages)/services/sections/ServiceNotFound';
import OurServices from "@/components/home/services/Services";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const service = transportationData.find(item => item.id === id);

    if (!service) {
        return (
            <>
                <ServiceNotFound />
                <OurServices />
            </>
        );
    }

    return (
        <ServiceDetails service={service} id={id} />
    );
}
