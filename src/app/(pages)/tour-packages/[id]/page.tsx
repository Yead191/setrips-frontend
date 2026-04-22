import TourDetails from "@/features/(web-pages)/tours";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    // console.log(id)
    return (
        <TourDetails service={id} />
    )
}
