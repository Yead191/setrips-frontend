
import SectionTitle from "./SectionTItle";
import { CarCarousel } from "@/components/CarCarousel";
export default function DiscoverSection({ title }: { title: string }) {
    return (
        <div className="container py-10 lg:py-12 ">
            <SectionTitle title={title} align="left" className="mb-10 px-4" />
            <CarCarousel />
        </div>
    )
}
