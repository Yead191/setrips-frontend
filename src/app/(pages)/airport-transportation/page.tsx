import { transportationData } from '@/constants/service/our-services';
import ServiceDetails from '@/features/(web-pages)/services';
import { TransportationCategory } from '@/types';


export default function page() {
    const id = "airport-transportation"
    const service = transportationData.find(item => item.id === id);
    return (
        <ServiceDetails service={service as TransportationCategory} id={id} />

    )
}
