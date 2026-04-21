import { DEMO_TOUR_DATA } from '@/constants/service/tour-data';
import TourGallery from './components/TourGallery';
import TourContent from './components/TourContent';
import TourSidebar from './components/TourSidebar';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const TourDetails = ({ service }: { service: string }) => {
    const tour = DEMO_TOUR_DATA;

    if (!tour) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h1 className="text-3xl font-bold">Tour not found</h1>
                <p className="mt-4 text-muted-foreground">The tour you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Breadcrumbs */}
            <div className="bg-muted/30 py-4 mb-6">
                <div className="container mx-auto flex items-center text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <Link href="/tours" className="hover:text-primary transition-colors">Tours</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">
                        {tour.meta.short_title || tour.meta.title}
                    </span>
                </div>
            </div>

            <main className="container mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#055E6E] font-bold uppercase tracking-tight mb-3">
                        {tour.meta.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                            Activity code: {tour.id.split('-').pop()}
                        </span>
                        {tour.reviews?.summary && (
                            <div className="flex items-center gap-1 text-[#FF8A00]">
                                {'★'.repeat(Math.round(tour.reviews.summary.average_rating))}
                                <span className="text-muted-foreground ml-1">
                                    {tour.reviews.summary.average_rating} ({tour.reviews.summary.total_count} reviews)
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content Area */}
                    <div className="w-full lg:w-[65%] xl:w-[70%]">
                        <TourGallery media={tour.media} />
                        <TourContent tour={tour} />
                    </div>

                    {/* Sidebar / Booking Area */}
                    <div className="w-full lg:w-[35%] xl:w-[30%]">
                        <TourSidebar tour={tour} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TourDetails;
