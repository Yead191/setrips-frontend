
import { VehicleGallery } from "./section/VehicleGallery";
import { ExtrasSelection } from "./section/ExtrasSelection";
import { VehicleFeatures } from "./section/VehicleFeatures";
import { AdditionalServices } from "./section/AdditionalServices";
import { BookingSummary } from "./section/BookingSummary";


const BookingDetailsFeature = () => {
  return (
    <div className="bg-[#FBFBFB] min-h-screen py-6 md:py-10 px-4 md:px-10 lg:px-20 pt-24!">
      <div className="max-w-350 mx-auto">
        <div className="flex flex-col lg:flex-row md:gap-10 gap-5">
          {/* Main Content Area */}
          <div className="flex-1 space-y-5 md:space-y-8">
            <section className="bg-white rounded-3xl p-4 md:p-5 shadow-sm border border-gray-100">
              <h1 className="text-xl md:text-2xl font-medium text-gray-900 mb-4 md:mb-6">
                Premium Sedan
              </h1>
              <VehicleGallery />
            </section>

            <section className="bg-white rounded-3xl p-4 md:p-5 shadow-sm border border-gray-100">
              <VehicleFeatures />
              <div className="mt-5 border-t border-gray-200 pt-5">
                <AdditionalServices />
              </div>
            </section>

            <section className="bg-white rounded-3xl p-4 md:p-5 shadow-sm border border-gray-100">
              <ExtrasSelection />
            </section>
          </div>


          {/* Sidebar Area */}
          <aside className="w-full lg:w-112.5 shrink-0">
            <div className="sticky top-24 space-y-4">
              <BookingSummary />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsFeature;
